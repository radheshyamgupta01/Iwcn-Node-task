
const express = require('express');
const router = express.Router();
const noteController = require('../controller/note-controller');

router.post('/add', noteController.addNote);
router.delete('/deleteNote/:id', noteController.deleteNote);
router.get('/getAllNotes', noteController.getAllNotes);

module.exports = router;
