"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schoolController_1 = require("../controller/schoolController");
const router = (0, express_1.Router)();
router.route("/register-account").post(schoolController_1.createSchool);
router.route("/verify-account").patch(schoolController_1.verifySchool);
router.route("/login-account").post(schoolController_1.signInSchool);
router.route("/reset-password").patch(schoolController_1.resetUserPassword);
router.route("/change-password/:userID").patch(schoolController_1.changeUserPassword);
router.route("/get-user/:userID").get(schoolController_1.getUseInfo);
router.route("/get-user-cookie/").get(schoolController_1.getCookieUser);
router.route("/logout").delete(schoolController_1.logOutUser);
exports.default = router;
