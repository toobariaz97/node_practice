"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return Promise.all([
            queryInterface.renameColumn("reviews", "email", "user_id"),
        ]).then(() => {
            queryInterface.addConstraint("reviews", {
                fields: ["user_id"],

                type: "foreign key",
                name: "custom_fkey_constraint_user_id", // optional
                references: {
                    table: "users",
                    field: "id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            });
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        let dropkey = queryInterface.QueryGenerator.dropForeignKeyQuery(
            "reviews",
            "email"
        );
        return queryInterface.sequelize.query(dropkey);
    },
};