import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
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
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    spokesPerson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        required: true
    },
    collaboration: {
        type: String,
    },
    eventPoints: [
        {
            keyPoints: {
                type: String,
            },
            explanation: {
                type: String,
            }
        }
    ]
}, {
    timestamps: true
});

export const Event = mongoose.model('Event', eventSchema);