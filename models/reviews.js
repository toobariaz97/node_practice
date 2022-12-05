'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class reviews extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    reviews.init({
        user_id: DataTypes.STRING,
        rating: DataTypes.INTEGER,
        comment: DataTypes.STRING,
        added_on: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'reviews',
    });
    return reviews;
};