# quicknotes-app

QuickNotes is a simple, responsive web app that lets you create, categorize, search and manage short notes. All notes are saved in the browser, so they survive page refreshes without needing a backend.

## Features
- Add notes with categories (Personal, Work, Study)
- Delete individual notes
- Live search (case-insensitive)
- Validation for empty and too-long notes (200 chars max)
- Note counter (no notes / 1 note / N notes)
- LocalStorage persistence
- Responsive design with Flexbox and category colors
- Bonus: Clear all notes with confirmation

## How to Run Locally
1. Clone the repo: `git clone https://github.com/your-username/quicknotes-app.git`
2. Open the folder in VS Code
3. Open `index.html` in your browser or use Live Server.

## What I Learned
1. Using semantic HTML5 and linking labels to inputs correctly for accessibility.
2. Styling layouts with Flexbox, CSS cards, and media queries for responsiveness.
3. Managing state with an array of objects, DOM creation with createElement/textContent to prevent XSS, and persisting data with localStorage using JSON.stringify/parse.
