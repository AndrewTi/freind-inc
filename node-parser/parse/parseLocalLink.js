const router = require('express').Router();
const parser  = require("../controllers/parse.js");

router.get("/parse", parser.parse);

module.exports = router;