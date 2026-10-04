const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");
const searchInput = document.querySelector("#search-input");
const clearAllBtn = document.querySelector("#clear-all-btn");

let notes = JSON.parse(localStorage.getItem("quicknotes")) || [];

function saveNotes(){
  localStorage.setItem("quicknotes", JSON.stringify(notes));
}

function render(filteredNotes = notes){
  notesList.innerHTML = "";

  if(filteredNotes.length === 0 && searchInput.value.trim() !== ""){
    const li = document.createElement("li");
    li.textContent = "No notes match your search.";
    notesList.appendChild(li);
  } else {
    filteredNotes.forEach(note => {
      const li = document.createElement("li");
      li.className = `note-card category-${note.category}`;

      const contentDiv = document.createElement("div");

      const textP = document.createElement("p");
      textP.textContent = note.text;

      const metaDiv = document.createElement("div");
      metaDiv.className = "note-meta";

      const catSpan = document.createElement("span");
      catSpan.className = "category-label";
      catSpan.textContent = note.category;

      const dateSpan = document.createElement("span");
      dateSpan.textContent = ` • ${note.createdAt}`;

      metaDiv.appendChild(catSpan);
      metaDiv.appendChild(dateSpan);

      contentDiv.appendChild(textP);
      contentDiv.appendChild(metaDiv);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        notes = notes.filter(n => n.id !== note.id);
        saveNotes();
        render();
        updateCount();
      });

      li.appendChild(contentDiv);
      li.appendChild(deleteBtn);
      notesList.appendChild(li);
    });
  }
  updateCount(filteredNotes);
}

function updateCount(displayedNotes = notes){
  if(searchInput.value.trim() !== ""){
    return;
  }
  if(notes.length === 0){
    noteCount.textContent = "You have no notes yet.";
  } else if(notes.length === 1){
    noteCount.textContent = "You have 1 note.";
  } else {
    noteCount.textContent = `You have ${notes.length} notes.`;
  }
}

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = noteInput.value.trim();

  if(text === ""){
    errorMessage.textContent = "Please type a note first.";
    return;
  }
  if(text.length > 200){
    errorMessage.textContent = "Notes must be 200 characters or fewer.";
    return;
  }

  errorMessage.textContent = "";

  const newNote = {
    id: Date.now(),
    text: text,
    category: noteCategory.value,
    createdAt: new Date().toLocaleString()
  };

  notes.push(newNote);
  saveNotes();
  render();
  noteInput.value = "";
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = notes.filter(n => n.text.toLowerCase().includes(query));
  render(filtered);
  if(query === ""){
    updateCount();
  } else {
    noteCount.textContent = `Found ${filtered.length} note(s).`;
  }
});

clearAllBtn.addEventListener("click", () => {
  if(confirm("Delete all notes?")){
    notes = [];
    saveNotes();
    render();
  }
});

// initial load
render();