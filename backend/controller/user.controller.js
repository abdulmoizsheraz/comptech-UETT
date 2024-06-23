import { TryCatch } from "../middleware/asyncErrors.js";
import { DeleteFileCloudinary, UploadFilesCloudinary } from "../utils/features.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { User } from "../models/user.model.js";
import { generateTokenFromid } from "../utils/generateToken.js";

async function createUser(data, next) {
    try {
        const user = await User.create(data);
        if (!user) return next(new ErrorHandler('User registration failed', 400));
        return user;
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
};

const registerUser = TryCatch(async (req, res, next) => {
    const { name, about, currentPosition } = req.body;
    let userData = { name, about, currentPosition };

    if (req.body?.socialmedia) {
        const socialMedia = JSON.parse(req.body.socialmedia);
        userData.socialMedia = socialMedia;
    }

    if (req.body?.password) {
        userData.password = req.body.password;
    }

    if (req?.file) {
        const folder = "user";
        const result = await UploadFilesCloudinary(req.file, folder);
        if (!result) return next(new ErrorHandler('Image upload failed', 400));

        userData.img = {
            public_id: result.public_id,
            url: result.secure_url
        };
    }

    const user = await createUser(userData, next);
    if (!user) return next(new ErrorHandler('User registration failed', 400));

    return res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: user
    });
});

const loginUser = TryCatch(async (req, res, next) => {
    const { name, password } = req.body;

    const user = await User.findOne({ name }).select('+password');
    if (!user) return next(new ErrorHandler('Invalid Username', 401));

    const isPasswordMatched = await user.isPasswordCorrect(password);
    if (!isPasswordMatched) return next(new ErrorHandler('Invalid Password', 401));

    const token = generateTokenFromid(user._id);
    if (!token) return next(new ErrorHandler('Token generation failed', 500));

    const options = {
        secure: true,
        samSite: 'None',
        httpOnly: true
    };
    return res.status(200).cookie('JWT-Token', token, options).json({
        success: true,
        message: 'User logged in successfully',
        data: user
    })
})

const logoutUser = TryCatch(async (req, res, next) => {
    const options = {
        httpOnly: true,
        secure: true,
        sameSite: 'None'
    }
    return res.status(200).clearCookie("JWT-Token", options).json
        ({ success: true, message: "Logged Out Successfully" })
});

const getAllUsers = TryCatch(async (req, res, next) => {
    const users = await User.find();
    if (!users) return next(new ErrorHandler('No users found', 404));

    return res.status(200).json({
        success: true,
        message: 'All users fetched successfully',
        data: users
    })
});

const deleteUser = TryCatch(async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return next(new ErrorHandler('No user found', 404));

    if (user._id.toString() === req.user._id.toString()) return next(new ErrorHandler('You cannot delete yourself', 400));

    await DeleteFileCloudinary(user.img.public_id);

    await User.findByIdAndDelete(id);
    return res.status(200).json({
        success: true,
        message: 'User deleted successfully',
    })
});

const getUser = TryCatch(async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return next(new ErrorHandler('No user found', 404));

    return res.status(200).json({
        success: true,
        message: 'User fetched successfully',
        data: user
    })
});

const updateUser = TryCatch(async (req, res, next) => {
    // Assuming the user's ID is passed as a URL parameter
    const { id } = req.params;
    const updates = req.body; // Contains the fields to update

    // Find the user by ID
    const user = await User.findById(id);
    if (!user) {
        return next(new ErrorHandler('User not found', 404));
    }

    // Dynamically apply updates from the request body
    Object.keys(updates).forEach((key) => {
        user[key] = updates[key];
    });

    // Save the updated user
    await user.save();

    res.status(200).json({
        success: true,
        message: 'User updated successfully',
        data: user,
    });
});

const updateUserImage = TryCatch(async (req, res, next) => {
    const { id } = req.params;
    const file = req.file;
    const folder = "user";
    const result = await UploadFilesCloudinary(file, folder);
    if (!result) return next(new ErrorHandler('Image upload failed', 400));

    const user = await User.findById(id);
    if (!user) return next(new ErrorHandler('No user found', 404));

    await DeleteFileCloudinary(user.img.public_id);

    user.img = {
        public_id: result.public_id,
        url: result.secure_url
    };

    await user.save();
    return res.status(200).json({
        success: true,
        message: 'User image updated successfully',
        data: user
    })
});

export {
    registerUser,
    loginUser,
    logoutUser,
    getAllUsers,
    deleteUser,
    getUser,
    updateUser,
    updateUserImage
}