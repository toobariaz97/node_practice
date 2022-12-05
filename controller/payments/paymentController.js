const { payment } = require('../../models');


exports.getPaymentsRecord = (req, res) => {

    let pay;
    try {
        pay = await payment.findAll({});
        return res.json(pay)

    } catch (error) {
        console.log(error);
    }


}