const { getAuthID } = require(".././utils/helpers");
const { admin: adminModel } = require("../models");

module.exports = async(req, res, next) => {
    let adminId = getAuthID(req.headers.authorization);
console.log(adminId)
    if (!adminId) return res.status(401).json({ error: 'unothorized' });
    let admin = await adminModel.findByPk(adminId)
    if (!admin) return res.status(401).json({ error: 'unothorized' });

    req.admin = admin;
    next()
};