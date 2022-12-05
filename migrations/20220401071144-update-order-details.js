'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        let addCol = queryInterface.addColumn('order_details', 'qty', {

            type: Sequelize.INTEGER,
            after: "total_amount"
        })
        return Promise.all([addCol]);

    },

    async down(queryInterface, Sequelize) {

        // let dropkey = queryInterface.QueryGenerator.dropForeignKeyQuery(
        //     "reviews",
        //     "email"
        // );
        // return queryInterface.sequelize.query(dropkey);
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return Promise.all([
            queryInterface.removeColumn(['order_details', 'qty'])
        ])
    }
};