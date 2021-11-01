const yargs = require('yargs');
const notes = require('./notes.js')

yargs.version('1.3.0')

// ------------------------ COMMAND ADD ------------------------
yargs.command({
  command: 'add',
  describe: 'Add a note to JSON',
  builder: {
    title: {
      describe: 'Title of your note',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body of your note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body)
  }
})

// ------------------------ COMMAND DELETE ----------------------
yargs.command({
  command: 'remove',
  describe: 'Delete a note of JSON file.',
  builder: {
    title: {
      describe: 'Title of registry to be deleted',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title)
  }
})


// ------------------------ COMMAND LIST -------------------------
yargs.command({
  command: 'list',
  describe: 'List all notes by title',
  handler: () => {
    notes.listNotes()
  }
})

// ------------------------ COMMAND -------------------------------
yargs.command({
  command: 'read',
  describe: 'Get a note by title',
  builder: {
    title: {
      describe: 'Get a note by title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.readNotes(argv.title)
  }
})


yargs.parse()