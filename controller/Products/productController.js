const { product: productModel, admin: adminModel } = require("../../models");
// const upload = require('../../middlewares/uploadImage')
const multer = require('multer');
const upload = multer();
exports.addProduct = async(req, res) => {
    let { admin } = req;

    let isAuth = await adminModel.findOne({
        where: {
            id: admin.id,
        },
    });
    try {
        await productModel.destroy({
            where: {
                title: req.body.title,
            },
        });
        let product = await productModel.create({
            image_id: req.body.image_id,
            category_id: req.body.category_id,
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            status: req.body.status,
        }).then(() => {
            let multipleFields = upload.fields("basic_image")
            console.log(multipleFields)

        }).catch((err) => {
            console.log(err)
        })

        // productCount = await admin.countProduct()
        // console.log(productCount)
        console.log(product);
        return res.json(product);
    } catch (error) {
        console.log(error);
    }
};
exports.selectProduct = async(req, res) => {
    let product;

    try {
        product = await product.findOne({
            where: {},
        });
    } catch (error) {
        console.log(error);
    }
};

exports.updateProduct = async(req, res) => {
    let { admin } = req;

    let isAuth = await adminModel.findOne({
        where: {
            email: admin.email,
        },
    });
    try {
        if (!isAuth) return res.status(422).json({ error: `log in first` });
        let product = await productModel.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        // productCount = await admin.countProduct()
        // console.log(productCount)
        console.log(product);
        return res.json(product);
    } catch (error) {
        console.log(error);
    }
};