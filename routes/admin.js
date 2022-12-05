const express = require("express");
const router = express.Router();
//controller
const adminController = require("../controller/admin/adminController");
const accountController = require("../controller/account/accountController");
const passwordResetController = require("../controller/resetPassword/resetPassword");
const productController = require("../controller/Products/productController");
const categoryController = require("../controller/Products/categoryController");
const imageController = require("../controller/Products/imageController");
const reviewController = require("../controller/reviews/reviewsController");
const orderController = require("../controller/order/order");
const feedbackController = require("../controller/reviews/feedbackController");

//validators
const loginValidator = require("../validators/auth/loginValidation");
const editProfileValidator = require("../validators/account/editProfileValidator");
const verifyEmailValidator = require("../validators/passwordReset/emailValidator");
const codeValidator = require("../validators/passwordReset/codeValidator");
const productValidator = require("../validators/product/addProductValidator");
const imageValidator = require("../validators/product/image");
//authontication
const isAuthorized = require("../middlewares/auth");
const passwordValidator = require("../validators/account/passwordValidator");

//image middleware
const imageUpload = require("../middlewares/uploadImage");
const multer = require('multer')
var getFields = multer();

//admin
router.post("/login", loginValidator, adminController.login);
router.post("/register", adminController.register);

//contoller password-reset
router.get("/get-account", isAuthorized, accountController.getAccount);
router.post(
    "/verify-email",
    verifyEmailValidator,
    passwordResetController.verifyEmail
);
router.post("/verify-code", codeValidator, passwordResetController.verifyCode);
router.post(
    "/reset/:code",
    passwordValidator,
    passwordResetController.resetPassword
);

//account
router.get("/account", accountController.getAccount);
router.post(
    "/account-edit",
    editProfileValidator,
    isAuthorized,
    accountController.editProfile
);
router.post(
    "/change-password", [passwordValidator, isAuthorized],
    accountController.changePassword
);

//imageCOntroller
router.post(
    "/image-add", [imageValidator, isAuthorized],
    imageController.addImage
);

//category conroller
router.get("/get-catagories", isAuthorized, categoryController.getCatagories);
router.post(
    "/category-add", [isAuthorized, imageUpload.single("image")],
    categoryController.addCategory
);
router.post(
    "/category-update/:id", [isAuthorized, imageUpload.single("image")],
    categoryController.updateCategory
);

//products
router.post(
    "/product-add", [getFields.any(), productValidator, isAuthorized],
    productController.addProduct
);
// router.post(
//     "/product-add", [productValidator, isAuthorized],
//     productController.addProduct
// );
router.get(
    "/product-select-for-edit",
    isAuthorized,
    productController.selectProduct
);
router.post(
    "/product-update/:id",
    isAuthorized,
    productController.updateProduct
);

//orders
router.get("/orders", isAuthorized, orderController.receiveOrder);
router.get("/order-details/:id", isAuthorized, orderController.orderDetails);
//reviews
router.get("/review", isAuthorized, reviewController.review);
router.delete(
    "/review-delete/:id",
    isAuthorized,
    reviewController.deleteReview
);

router.get("/feedback", isAuthorized, feedbackController.getFeedback);

module.exports = router;