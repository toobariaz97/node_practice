const path = require('path');
const multer = require('multer');


var storage = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, "./images")
    },

    filename: (req, file, callback) => {
        callback(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }

});
var uploadfile = multer({ storage: storage })
module.exports = uploadfile;