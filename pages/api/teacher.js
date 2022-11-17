import teacher from '../../models/teacher';
import dbConnect from "../../lib/dbconnect";
dbConnect();

async function handler(req, res) {
   
    if (req.method === "POST") {
        try {
            const data = req.body;
            const { name, email, phone, address, lastSchool } = data;
            const teacher_instance = new teacher({
                name: name,
                email: email,
                phone: phone,
                address: address,
                lastSchool: lastSchool,
            });
            await teacher_instance.save();
            res.status(200).json({ message: "teacher Added", Status: "Success" });
        } catch (err) {
            const response = { Status: "Failure", Description: err.message };
            res.status(400).send(response);
        }
    }
    if (req.method === "GET") {
        try {
            const teachers = await teacher
            .find().sort({ name: 1 });
            res.status(200).json({teachers});
        } catch (err) {
            const response = { Status: "Failure", Description: err.message };
            res.send(response).status(400);
        }
    }

    if (req.method === "DELETE") {
        try {
            const { id } = req.body;
            const teacher_instance = await teacher.deleteOne({ _id: id });
            res.status(200).json({
                message: "All Todos of the particular user fetched",
                Status: "Success",
                teacher: teacher_instance,
            });
        } catch (err) {
            const response = { Status: "Failure", Description: err.message };
            res.send(response).status(400);
        }
    }

    if (req.method === "PUT") {
        try {
            const { _id, name, email, phone, address, lastSchool } = req.body;
            const teacher_instance = await teacher.findOne({_id})
            teacher_instance.name = name;
            teacher_instance.email = email;
            teacher_instance.phone = phone;
            teacher_instance.address = address;
            teacher_instance.lastSchool = lastSchool;
            await teacher_instance.save();
            res.status(200).json({ message: "content Added", Status: "Success", _id });
        } catch (err) {
            const response = { Status: "Failure", Description: err.message };
            res.status(400).send(response);
        }
    }
}

export default handler;
