'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return Promise.all([
            queryInterface.renameColumn("payments", "order_details_id", "order_id"),
        ]).then(() => {
            queryInterface.addConstraint("reviews", {
                fields: ["order_id"],

                type: "foreign key",
                name: "payment_fkey_constraint_order_id", // optional
                references: {
                    table: "order",
                    field: "id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            });
        });
    },

    async down(queryInterface, Sequelize) {
        let dropkey = queryInterface.QueryGenerator.dropForeignKeyQuery(
            "reviews",
            "email"
        );
        // return queryInterface.sequelize.query(dropkey);
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};