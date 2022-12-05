'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

        let fk = queryInterface.addColumn('orders', 'rider_id', {
            type: Sequelize.INTEGER,

            after: 'order_status',
            references: {
                model: 'users',
                key: "id"
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        })
        console.log(fk)


        // queryInterface.addConstraint('order', {
        //     fields: ''
        // })




    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return Promise.all(
            [queryInterface.removeColumn('orders', 'rider_id')]
        )
    }
};