import { TryCatch } from "../middleware/asyncErrors.js";
import { Event } from "../models/event.model.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { UploadFilesCloudinary } from "../utils/features.js";

async function createEvent(data, next) {
    try {
        const event = await Event.create(data);
        if (!event) return next(new ErrorHandler('Event creation failed', 400));

        return event;
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
}

const registerEvent = TryCatch(async (req, res, next) => {
    const { title, date, location, description, category, spokesPerson } = req.body;
    let eventData = { title, date, location, description, category, spokesPerson };

    if (req.body?.collaboration) {
        eventData.collaboration = req.body.collaboration;
    }

    if (req.body?.eventPoints) {
        eventData.eventPoints = JSON.parse(req.body.eventPoints);
    }

    if (req.body?.isFeatured) {
        eventData.isFeatured = req.body.isFeatured;
    }

    if (req?.file) {
        const folder = "event";
        const result = await UploadFilesCloudinary(req.file, folder);
        if (!result) return next(new ErrorHandler('Image upload failed', 400));

        eventData.img = {
            public_id: result.public_id,
            url: result.secure_url
        };
    }

    const event = await createEvent(eventData, next);
    if (!event) return next(new ErrorHandler('Event creation failed', 400));

    return res.status(201).json({
        success: true,
        message: 'Event created successfully',
        data: event
    });
});

const getAllEvents = TryCatch(async (req, res, next) => {
    const events = await Event.find().populate('spokesPerson', 'name img currentPosition socialMedia about');
    if (!events) return next(new ErrorHandler('No events found', 404));

    return res.status(200).json({
        success: true,
        message: 'All events fetched successfully',
        data: events
    });
})


export {
    registerEvent,
    getAllEvents
}