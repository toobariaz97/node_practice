const { reviews } = require("../../models");

exports.review = async(req, res) => {
    let review;

    let isAuth = await adminModel.findOne({
        where: {
            id: admin.id,
        },
    });
    if (!isAuth) return res.status(422).json({ error: `log in first` });
    try {
        review = await reviews.findAll({});
        // if (!review) return res.json({ msg: `no reviews available` });

    } catch (error) {
        console.log(error);
    }
    return res.json(review);
};
exports.deleteReview = async(req, res) => {
    let review;


    let isAuth = await adminModel.findOne({
        where: {
            id: admin.id,
        },
    });
    if (!isAuth) return res.status(422).json({ error: `log in first` });
    try {
        review = await reviews.destroy({
            where: {
                id: req.params.id,
            },
        });
        console.log(review);
        return res.json({ msg: `deleted successfully...` });
    } catch (error) {
        console.log(error)
    }
};