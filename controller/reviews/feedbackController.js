const { feedback: feedbackModel,admin:adminModel } = require('../../models');


exports.getFeedback = async(req, res) => {

    let {admin}=req;
    let feedback;
    try {

        let isAuth = await adminModel.findOne({
            where: {
                id: admin.id,
            },
        });
        if (!isAuth) return res.status(422).json({ error: `log in first` });
        feedback = await feedbackModel.findAll({});
        console.log(feedback)
        if (!feedback)
            return res.json({ msg: `no feedbacks available` })
        return res.json(feedback)

    } catch (error) {
        console.log(error)
    }


}