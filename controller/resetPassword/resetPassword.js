const mail = require('../../utils/mail')
const { admin: adminModel, password_reset } = require('../../models');
const { hash } = require('bcrypt');


let admin;
exports.verifyEmail = async(req, res) => {
    admin = await adminModel.findOne({
        where: {
            email: req.body.email
        }
    })
    console.log(admin)
    if (!admin)
        return res.status(401).json({ msg: `mail not exist` });
    let code = Math.floor(1000 + Math.random() * 9000)
    console.log(code)
    try {
        await password_reset.destroy({
            where: {
                email: req.body.email
            }
        })

    } catch (error) {
        console.log(error)

    }
    await password_reset.create({
        email: req.body.email,
        token: code
    })
    await mail.passwordResetMail(req.body.email, code)
    return res.status(200).json({ msg: `code has been send` })
}

exports.verifyCode = async(req, res) => {


    try {
        let code = await password_reset.findOne({
            where: {
                token: req.body.code
            }
        })
        if (!code) return res.status(401).json({ msg: `try to generate your code` })
        return res.status(200).json({ msg: 'code verified successfully' })
    } catch (error) {
        console.log(error)
    }
}
exports.resetPassword = async(req, res) => {


    try {
        let codeVerify = await password_reset.findOne({
                where: {
                    token: req.params.code,
                }
            })
            // if (!codeVerify) { return res.status(401).status({ error: `email is not exist` }) }
        if (codeVerify) {
            req.body.password = await hash(req.body.password, 12)
            let newPassowrd = await adminModel.update(req.body, {
                where: {
                    email: codeVerify.email
                }
            })
            return res.status(200).json({ msg: `password reset successfully`,newPassowrd })
        }
        return res.status(401).json({ msg: `email is not exist` })

    } catch (error) {

    }


}