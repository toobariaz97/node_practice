'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        // queryInterface.removeColumn('images', 'secondary_image1');
        // queryInterface.removeColumn('images', 'secondary_image2')
        // queryInterface.removeColumn('images', 'secondary_image1')
        // queryInterface.removeColumn('images', 'secondary_images', {
        //     type: Sequelize.STRING,
        // })

        queryInterface
    },

    async down(queryInterface, Sequelize) {

        return Promise.all(
            [
                queryInterface.removeColumn('images', 'secondary_image1'),
                queryInterface.removeColumn('images', 'secondary_image2'),
                queryInterface.removeColumn('images', 'secondary_image3')

            ]
        )

        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */

        // queryInterface.removeColumn('images', secondary_image2, {
        //     type: Sequelize.STRING
        // })
    }
};