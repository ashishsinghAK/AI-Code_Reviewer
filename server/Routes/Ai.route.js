const express = require('express')
const router = express.Router()
const {responseController} = require("../Controller/AI.controller")

router.get("/get-response",responseController);

module.exports = router;



