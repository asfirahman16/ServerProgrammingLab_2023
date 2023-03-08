const express = require('express')
const router = express.Router();
const bodyParser = require("body-parser");
const isLoggedIn = require('./../middlewares/auth.middlewares');
const { getRegister, postRegister, getLogin, getDashboard } = require('./../controllers/userController.controllers');
const { route } = require('../app');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/login", getLogin);

router.get("/dashboard", getDashboard);

// router.get("/register", getRegister);

// router.post("/register", isLoggedIn, postRegister);

router.route("/register").all(isLoggedIn).get(getRegister).post(postRegister);

module.exports = router;