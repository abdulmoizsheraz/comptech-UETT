import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    img:
    {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    about: {
        type: String,
        required: true
    },
    currentPosition: {
        type: String,
        required: true
    },
    socialMedia:[
    {
        name: {
            type: String,
        },
        link: {
            type: String,
        }
    }]

}, {
    timestamps: true
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

export const User = mongoose.model('User', userSchema);