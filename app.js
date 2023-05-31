const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./note.js");

//customize yargs version
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note.",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "List all the note",
  handler() {
    notes.listNotes();
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readnote(argv.title);
  },
});

yargs.parse();
// console.log(process.argv);
// console.log(yargs.argv);
