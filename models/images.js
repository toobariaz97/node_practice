'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class images extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    images.init({
        basic_image: DataTypes.STRING,
        secondary_image1: DataTypes.STRING,
        secondary_image2: DataTypes.STRING,
        secondary_image3: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'images',
    });
    return images;
};