const yargs = require('yargs');
const notes = require('./notes.js')

yargs.version('1.2.0')

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

yargs.parse()