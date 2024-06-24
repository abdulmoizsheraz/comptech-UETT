
import { body, param, validationResult } from "express-validator";
import ErrorHandler from '../utils/ErrorHandler.js';

const validateHandler = (req, res, next) => {
    const errors = validationResult(req);
    const errorMessages = errors
        .array()
        .map((error) => error.msg)
        .join(", ");

    if (errors.isEmpty()) return next();
    else next(new ErrorHandler(errorMessages, 400));
};

// User Validators
const registerValidator = () => [
    body("name", "Please Enter Username").notEmpty(),
    body("about", "Please Enter About").notEmpty(),
    body("currentPosition", "Please Enter Current Position").notEmpty(),
];

const loginValidator = () => [
    body("name", "Please Enter Username").notEmpty(),
    body("password", "Please Enter Password").notEmpty(),
];

const deleteUserValidator = () => [
    param("id", "Please Enter User ID").notEmpty(),
];

const getUserValidator = () => [
    param("id", "Please Enter User ID").notEmpty(),
];

// Event Validators
const registerEventValidator = () => [
    body("title", "Please Enter Title").notEmpty(),
    body("date", "Please Enter Date").notEmpty(),
    body("location", "Please Enter Location").notEmpty(),
    body("description", "Please Enter Description").notEmpty(),
    body("category", "Please Enter Category").notEmpty(),
    body("spokesPerson", "Please Enter Spokes Person").notEmpty(),
];

const getEventValidator = () => [
    param("id", "Please Enter Event ID").notEmpty(),
];

// Team Validators
const newTeamValidator = () => [
    body("name", "Please Enter Team Name").notEmpty(),
    body("members")
        .notEmpty()
        .withMessage("Please Enter Members")
        .isArray({ min: 2})
        .withMessage("Members must atleast be 2"),
];

const addMemberValidator = () => [
    body("teamId", "Please Enter Team ID").notEmpty(),
    body("members")
        .notEmpty()
        .withMessage("Please Enter Members")
        .isArray({ min: 1})
        .withMessage("Members must atleast be 1"),
];

const removeMemberValidator = () => [
    body("teamId", "Please Enter Team ID").notEmpty(),
    body("userId", "Please Enter User ID").notEmpty(),
];

export {
    deleteUserValidator, 
    getUserValidator, 
    loginValidator,
    registerValidator,
    validateHandler,
    registerEventValidator,
    getEventValidator,
    newTeamValidator,
    addMemberValidator,
    removeMemberValidator
};

