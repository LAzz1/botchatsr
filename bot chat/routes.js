const express = require('express')
const app = express();
const routes = require('express').Router();
const multer = require('multer')
const sr = require('./sr.js');

routes.get("/", (req, res) => {return res.json(sr)})

module.exports = routes;