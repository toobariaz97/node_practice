const jwt = require('jsonwebtoken');
const moment = require('moment');




module.exports = {
    getAuthID(authorizationHeader = null) {


        if (!authorizationHeader)
            return null;
        let authArray = authorizationHeader.split(' ');
        if (authArray.length == 2) {
            let tokenVerified = jwt.verify(authArray[1], 'cafe_alice');
            console.log(tokenVerified)
            if (tokenVerified) {
                let decodeToken = jwt.decode(authArray[1]);
                if (moment(decodeToken.expiry).isAfter(moment.now())) {
                    return decodeToken.admin_id;
                }
                return null;
            }
            return null;
        }
        return null;
    }
}