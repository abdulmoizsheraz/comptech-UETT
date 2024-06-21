import { v4 as uuid } from "uuid";
import { getBase64 } from '../lib/helper.js';
import {v2 as cloudinary} from 'cloudinary';


const UploadFilesCloudinary = async (file, folder) => {
    return await cloudinary.uploader.upload(getBase64(file), {
        folder: folder,
        resource_type: "auto",
        public_id: uuid(),
    });
};

export { UploadFilesCloudinary };