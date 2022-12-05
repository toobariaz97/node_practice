const { hash } = require('bcrypt')
const {admin:adminModel} =require('../../models')



exports.getAccount = async(req, res) => {
    let { admin } = req;

    let auth;
    try {

        // auth = await user.getAdmin()
        // console.log(admin)

        const users = await adminModel.findByPk(admin.id)
console.log(users)
if(!users){
    return res.json("user is not exist")
}
        return res.json(users)

    } catch (error) {
        console.log(error)
    }

}

exports.editProfile = async(req, res) => {
    let { admin } = req;

    try {

        let profil = await admin.update(req.body,{
            where:{
                id:admin.id
            }
        });
        console.log(profil);
        return res.json(profil)
    } catch (error) {
        console.log(error)
    }
}
exports.changePassword = async(req, res) => {
    let { admin } = req;

    try {
        let hashPassword = await hash(req.body.password, 12)
        admin.password = hashPassword;
        admin.save()
        console.log(admin.password)
        return res.json({ msg: `password reset successfully` })
    } catch (error) {
        console.log(error)
    }
}