'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class payment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    payment.init({
        order_id: DataTypes.INTEGER,

        total_amount: DataTypes.INTEGER,
        payment_method: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'payment',
    });
    return payment;
};