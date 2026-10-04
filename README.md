# QuickNotes - My PLP Project 1

I built this as part of PLP Web Dev. I wanted a simple place to quickly write down ideas for school, work and personal life without needing an account or internet.

**Try it live here:** https://ginahaphane.github.io/quicknotes-app/
**My code:** https://github.com/ginahAphane/quicknotes-app

### Why I made it
I was always losing my notes in WhatsApp saved messages. So I made this app that saves everything right in my browser. Even if I close Chrome, my notes are still there when I come back.

### What it can do
I focused on what was asked but also added small things that help me:
- I can type a note and pick if it's Personal, Work or Study - the color changes on the side so I know which is which
- It stops me from saving empty notes and tells me when my note is too long
- I can search instantly, like if I type "homework" it only shows those notes
- It counts my notes and tells me "You have no notes yet" when empty
- I can delete one note or clear everything if I want to start fresh (it asks me first)
- It works on my phone too because I used flexbox and added media queries

### How I built it
I didn't use any library, just plain HTML, CSS and JS because that's what we learned in week 2-4.
- For HTML I made sure every input has a label and the form has the IDs PLP asked for
- For CSS I used flexbox to center everything and made cards for each note
- For JS I keep all notes in an array, then save that array to localStorage so it doesn't disappear. I used textContent instead of innerHTML because we were taught that innerHTML is not safe

### How to open it on your laptop
```bash
git clone https://github.com/ginahAphane/quicknotes-app.git