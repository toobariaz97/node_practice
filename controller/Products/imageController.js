const { images, admin: adminModel } = require('../../models')

exports.addImage = async(req, res) => {
    let { admin } = req
    try {

        let isAuth = await adminModel.findOne({
            where: {
                email: admin.email
            }
        })
        if (!isAuth) return res.status(422).json({ error: `log in first` })
        let image = await images.create({
            basic_image: req.body.basic_image

        })
        console.log(image)
        return res.json({ success: 'image added successfully' })
    } catch (error) {
        console.log(error)
    }
}