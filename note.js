const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (duplicateNote) console.log(chalk.red.inverse("Note Title taken!"));
  else {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.bgGreen("New note added!"));
  }
};

const removeNotes = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (!(notesToKeep.length < notes.length)) {
    console.log(chalk.red.inverse("Note not Found!"));
    return;
  }
  saveNotes(notesToKeep);
  console.log(chalk.bgGreen("Note removed!"));
};

const readnote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (!note) {
    console.log(chalk.red.inverse("Note not found!"));
    return;
  }
  console.log(chalk.green.inverse(note.title));
  console.log(note.body);
};

const listNotes = () => {
  const allNotes = loadNotes();
  allNotes.forEach((note) => {
    console.log(chalk.blue(note.title));
    console.log(note.body);
  });
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    3;
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = { getNotes, addNotes, removeNotes, listNotes, readnote };
