const express = require("express");
const fullstackController=require("../controllers/fulstackControler");
// const { check } = require("express-validator");

const router = express.Router();
router.get("/employedeatils",fullstackController.getFullStack);
router.post("/",fullstackController.postFullStack);
module.exports = router;
