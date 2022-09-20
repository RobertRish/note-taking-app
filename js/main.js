import NotesApi from "./NotesAPI"

NotesApi.saveNote({
    title: "New Note!",
    body: "I am a new note."
})

console.log(NotesApi.getAllNotes());