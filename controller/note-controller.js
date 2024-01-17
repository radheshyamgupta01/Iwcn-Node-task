// controllers/noteController.js
const Note = require('../models/note');

exports.addNote = async (req, res) => {
  try {
   
    const { title, content} = req.body;
    const note = await Note.create({ title, content });
    res.status(201).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findByPk(id);

    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    await note.destroy();
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.getAllNotes = async (req, res) => {
  try {
    const allNotes = await Note.findAll();
    res.status(200).json(allNotes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

