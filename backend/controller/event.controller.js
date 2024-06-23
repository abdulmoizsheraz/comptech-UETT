import { TryCatch } from "../middleware/asyncErrors";
import { Event } from "../models/event.model";
import ErrorHandler from "../utils/ErrorHandler";

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
    const { title, date, location, description, category } = req.body;
    let eventData = { title, date, location, description, category };

    
})