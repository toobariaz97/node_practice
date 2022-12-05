const path = require("path");
exports.index = async(req, res) => {
    filePath = path.resolve(__dirname, `../public/images/${req.params.path}`);
    return res.sendFile(filePath);
};