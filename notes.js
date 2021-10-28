// --------------------  IMPORT FS MODULE ---------------------
const fs = require('fs')

// -------------------- IMPORT CHALK MODULE -------------------
const chalk = require('chalk')

// -------------------- GET NOTES -----------------------------
const getNotes = () => {
  return 'your notes...'
}

// --------------------  ADD NOTE -----------------------------
const addNote = (title, body) => {
  const notes = loadNotes()

  const duplicatedNote = notes.filter((note) => {
    return note.title === title
  })

  if (duplicatedNote.length === 0) {
    notes.push({
      title: title,
      body: body
    })

    saveNotes(notes)
    console.log(chalk.black.bgGreen('New note added!'))
  } else {
    console.log("Note title taken!!!!! Choose another title name.")
  }
}

// --------------------  DELETE NOTE  -----------------------------
const removeNote = (title) => {
  const notes = loadNotes();
  const findTitle = notes.filter((note) => note.title === title)
  if (findTitle.length > 0) {
    const newArray = notes.filter((note) => note.title !== title)
    saveNotes(newArray)
    console.log(chalk.black.bgGreen('Note removed!'))
  } else {
    console.log(chalk.black.bgRed('No note found!'))
  }
}


// --------------------- SAVE NOTES ------------------------------
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

// --------------------  LOAD NOTES -----------------------------
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const jsonFormat = dataBuffer.toString()
    return JSON.parse(jsonFormat)
  } catch (e) {
    return []
  }
}

// -------------------- EXPORT FUNCTIONS -------------------------
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}