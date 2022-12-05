const { category: categories, admin: adminModel } = require("../../models");
const fs = require("fs");
const { path, join } = require("path");
const buffer = require("buffer")


exports.getCatagories = async(req, res) => {

    let { admin } = req;
    let category;
    try {
        let isAuth = await adminModel.findOne({
            where: {
                id: admin.id,
            },
        });
        category = await categories.findAll({})
    } catch (err) {
        console.log(err)
    }
    return res.json(category)

}

exports.addCategory = async(req, res) => {
    let { admin } = req;

    try {
        let isAuth = await adminModel.findOne({
            where: {
                id: admin.id,
            },
        });
        if (!isAuth) return res.status(422).json({ error: `log in first` });

        if (req.file == 'undefined') {
            return res.json("select image")
        }
        let category = await categories
            .create({
                category_name: req.body.category_name,
                image: req.file.originalname,
                in_stock: true,
            })

        //console.log(category)

        console.log(req.file)
            // .then((images) => {

        //     console.log(req.file)
        //         // let data = fs.readFile(__dirname + "/../../public/images/" + req.file.filename, (err) => {
        //         //     console.log(err)
        //         // });
        //     let data = fs.readFileSync(__dirname + "/../../public/productImages/" + req.file.originalname);

        //     let base64 = new Buffer.from(data).toString('base64');
        //     console.log(base64)

        //     let uploadImage = fs.writeFileSync(__dirname + "/../../public/images/" + images.image, data)
        //     console.log(uploadImage)
        //     return res.json({ msg: `image uploaded successfully` });
        // })
        // .catch((error) => {
        //     console.log(error)
        //     return res.json({ error: `something went wrong` });
        // });

        // console.log(category, "pro")

        return res.json({ success: 'category added successfully' })
    } catch (error) {
        console.log(error);
    }
};

exports.updateCategory = async(req, res) => {
    let { admin } = req;
    try {
        let isAuth = await adminModel.findOne({
            where: {
                id: admin.id,
            },
        });
        //   if (!isAuth) return res.status(422).json({ error: `log in first` });
        let category = await categories.findByPk(req.param.id);



        if (category) {
            const del = await category.destroy();
            console.log(del)
            console.log(baseDir)
            let fileDeleted = fs.unlink(`${baseDir}/${req.file.originalname}`, (err) => {
                console.log(err)
            })
            console.log(fileDeleted)
            return res.json("image deleted")
        }

        await categories.update({
            category_name: req.body.category_name,
            image: req.file.originalname,
            in_stock: true,
        }, {
            where: {
                id: req.params.id
            }
        }).then((images) => {
            let data = req.file.filename;
            console.log(images)


        })
        console.log(category);
        return res.json({ success: "category updated successfully" });
    } catch (error) {
        console.log(error);
    }
};