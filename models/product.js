"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    product.init({
        image_id: DataTypes.INTEGER,
        category_id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        price: DataTypes.INTEGER,
        description: DataTypes.STRING,
        addedOn: DataTypes.DATE,
        status: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "product",
    });
    return product;
};