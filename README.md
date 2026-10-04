# QuickNotes App

QuickNotes is a simple, responsive web app that lets you create, categorize, search and manage short notes. All notes are saved in the browser using localStorage, so they survive page refreshes.

Live Demo: https://ginahAphane.github.io/quicknotes-app/

## Features
- Add notes with categories (Personal, Work, Study)
- Delete individual notes and Clear All with confirmation (bonus)
- Live search filter (case-insensitive)
- Input validation (empty check + 200 characters max) with error-message display
- Note counter that updates (You have no notes yet / 1 note / N notes)
- LocalStorage persistence using JSON.stringify and JSON.parse
- Responsive design using Flexbox, category color coding, and media queries
- XSS prevention using textContent and createElement

## How to Run Locally
1. Clone the repo:
   `git clone https://github.com/ginahAphane/quicknotes-app.git`
2. Open the folder in VS Code
3. Open `index.html` in your browser or use Live