import { TryCatch } from "../middleware/asyncErrors.js";
import { UploadFilesCloudinary } from "../utils/features.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { User } from "../models/user.model.js";


const registerUser = TryCatch(async (req, res, next) => {
    const { name, password, about, currentPosition, socialMedia } = req.body;
    let socialmedia = JSON.parse(socialMedia);
    if (!password) {
        const file = req.file;
        const folder = "user";
        const result = await UploadFilesCloudinary(file, folder);
        if (!result) return next(new ErrorHandler('Image upload failed', 400));

        const user = await User.create({
            name,
            img: {
                public_id: result.public_id,
                url: result.secure_url
            },
            about,
            currentPosition,
            socialMedia: {
                name: socialmedia.name,
                link: socialmedia.link
            }
        });
        if (!user) return next(new ErrorHandler('User registration failed', 400));

        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user
        })
    } else {
        const file = req.file;
        const folder = "user";
        const result = await UploadFilesCloudinary(file, folder);
        if (!result) return next(new ErrorHandler('Image upload failed', 400));

        const user = await User.create({
            name,
            password,
            img: {
                public_id: result.public_id,
                url: result.secure_url
            },
            about,
            currentPosition,
            socialMedia: {
                name: socialmedia.name,
                link: socialmedia.link
            }
        });
        if (!user) return next(new ErrorHandler('User registration failed', 400));

        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user
        })
    }
});


export {
    registerUser,
}