"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    category.init({
        category_name: DataTypes.STRING,
        image: DataTypes.STRING,
        in_stock: {
            type: DataTypes.BOOLEAN,
            set(value) {
                return this.setDataValue("in_stock", value);
            },
        },
        image_url: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${process.env.BASE_URL}/images/${this.image}`;
                // return ;
                return "hello";
            },
        },
    }, {
        sequelize,
        tableName: "categories",
        modelName: "category",
    });
    return category;
};