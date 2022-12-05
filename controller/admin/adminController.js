const { admin: adminModel } = require("../../models");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const { hash, compare } = require('bcrypt')



exports.login = async(req, res) => {
    try {
        let admin = await adminModel.findOne({
            where: {
                email: req.body.email,
            },
        });
        // if (!admin) {
        //     return res.status(404).json({ error: `credentilas doesn'texist,contact to administration` })
        // }
        if (!admin) {
            return res
                .status(422)
                .json({ admin, message: `invalid passowrd and email` });
        }
        let token = jwt.sign({ admin_id: admin.id, expiry: moment().utc().add(1, "year") }, "cafe_alice");
        let hashPassword = await compare(req.body.password, admin.password)
        if (!hashPassword) return res.status(400).json({ message: `password incorrect` });

        console.log(hashPassword)

        return res.status(200).json({ token, message: `login successfully ` });
    } catch (error) {
        console.log(error);
    }
};

exports.register = async(req, res) => {
    try {
        hashPassword = await hash("abcd", 12)
        let adminProfile = await adminModel.create({
                first_name: "ahmed",
                last_name: "raza",
                email: "ahmed@mailinator.com",
                password: hashPassword


            })
            //console.log(hashPassword)
        return res.status(200).json({ adminProfile, message: `registered successfully ` });

    } catch (error) {
        console.log(error)
    }
}