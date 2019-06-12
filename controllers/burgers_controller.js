var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

// get route -> index
router.get("/", function(req, res) {
    res.redirect("/burgers");
  });