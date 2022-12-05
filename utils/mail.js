const nodeMailer = require("nodemailer");
let config = {
    service: "Gmail",
    port: '587',
    auth: {
        user: "richardsteve979@gmail.com",
        pass: "cjoxakbgaheprsvf",
    },
};

module.exports = {
    passwordResetMail: async(email, code) => {
        let tranporter = nodeMailer.createTransport(config);
        let data = {
            from: config.auth.user,
            to: email,
            subject: "cafe alice | admin password Reset",
            text: "",
            html: `<h3>${code}</h3>`,
        };
        await tranporter.sendMail(data);

        console.log(data);
        return true;
    },

};