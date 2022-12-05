const Validator = require("validatorjs");

module.exports = (req, res, next) => {
    console.log(req.files);
    let validation = new Validator(req.body, {
        image_id: "required",
        category_id: "required",
        title: "required",
        price: "required",
        description: "required",
        status: "required",
    });

    if (validation.fails()) {
        return res.status(422).json(validation.errors.all());
    }
    return next();
};