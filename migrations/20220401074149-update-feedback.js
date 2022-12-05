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
            // queryInterface.removeConstraint("feedbacks", "feedbacks_ibfk_1"),
            queryInterface.removeIndex("feedbacks", "email_2"),
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         *
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
};