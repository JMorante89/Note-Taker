const router = require('express').Router();
const notes = require('./notes.js');
router.use('/notes', notes);
module.exports = router;