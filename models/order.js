'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    order.init({
        customer_id: DataTypes.INTEGER,
        order_date: DataTypes.DATE,

        amount_paid: DataTypes.INTEGER,
        order_status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'order',
    });
    return order;
};