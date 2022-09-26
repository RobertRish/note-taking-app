import NotesApi from "./NotesAPI"

NotesApi.saveNote({
    title: "New Note!",
    body: "New body."
})

console.log(NotesApi.getAllNotes());