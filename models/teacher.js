import { Schema, model, models } from 'mongoose';

const teacherSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {    
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        lastSchool: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

export default models.teacher || model('teacher', teacherSchema);
