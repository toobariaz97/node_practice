const {
    order: orders,
    order_details,
    admin: adminModel,
    sequelize,
} = require("../../models");
const { QueryTypes } = require("sequelize");

exports.receiveOrder = async(req, res) => {
    let order;
    let { admin } = req;
    let isAuth = await adminModel.findOne({
        where: {
            id: admin.id,
        },
    });

    try {
        //if (!isAuth) return res.status(422).json({ error: `log in first` });

        order = await orders.findAll({
            where: {
                order_status: req.body.order_status,
            },
        });
        console.log(order);
        if (!order) return res.json("no order receive");
        return res.json(order);
    } catch (error) {
        console.log(error);
    }
};
exports.orderDetails = async(req, res) => {
    let { admin } = req;
    let isAuth = await adminModel.findOne({
        where: {
            id: admin.id,
        },
    });
    try {
        let order = await orders.findByPk(req.params.id, {
            attributes: {
                include: [
                    [
                        sequelize.literal(`(
                            SELECT SUM(order_details.total_amount)
                            FROM order_details
                            WHERE
                            order.id = order_details.order_id
                        )`),
                        "total_price",
                    ],
                ],
            },
        });

        // let order = await sequelize.query(
        //     `select o.id,o.order_status,o.order_date,p.id,p.title,(p.price*order_details.qty) as total_amount,sum(total_amount) from orders o inner join order_details on o.id=order_details.order_id join products p on p.id=order_details.product_id GROUP by order_details.id`,

        // )
        console.log(order);
        return res.json(order);
    } catch (error) {
        console.log(error);
    }
};