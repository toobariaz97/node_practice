const Validator = require('validatorjs');


module.exports = (req, res, next) => {


    let validation = new Validator(req.body, {
        category_name: 'required',
        image: 'required',
        in_stock: 'required',

    })

    if (validation.fails()) {
        return res.status(422).json(validation.errors.all())
    }
    return next()

}