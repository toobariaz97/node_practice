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
            // queryInterface.removeIndex('reviews', 'email')
            queryInterface.addConstraint("reviews", {
                fields: ["user_id"],

                type: "foreign key",
                name: "review_user_id_fk", // optional
                references: {
                    table: "users",
                    field: "id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            })
        ])

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */

        return Promise.all([


        ])

    }
};