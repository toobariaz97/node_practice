'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('payments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,

            },
            order_details_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'order_details',
                    key: 'id'
                },
            },
            total_amount: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            payment_method: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('payments');
    }
};