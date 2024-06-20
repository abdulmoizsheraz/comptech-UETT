import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    img: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            }
        }
    ],
    about: {
        type: String,
        required: true
    },
    currentPosition: {
        type: String,
        required: true
    },
    socialMedia: [
        {
            name: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            }
        }
    ]
}, {
    timestamps: true
});

export const User = mongoose.model('User', userSchema);