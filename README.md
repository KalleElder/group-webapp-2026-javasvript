# Träningsdagbok

## Beskrivning

En enkel webbapplikation där användaren kan logga och hantera sina träningspass.

## Funktioner

- Lägg till träningspass
- Visa träningspass i en lista
- Redigera träningspass
- Ta bort träningspass
- Markera träningspass som klara
- Spara träningspass i localStorage så att datan finns kvar efter uppdatering

## Teknik

- HTML
- CSS
- JavaScript (ES6 modules)
- DOM manipulation
- localStorage
- Vitest (test)

## Struktur

- `index.html` – grundstruktur
- `css/style.css` – design
- `app.js` – startfil
- `modules/state.js` – hanterar data
- `modules/ui.js` – rendering
- `modules/handlers.js` – events
- `modules/storage.js` – localStorage
- `tests/app.test.js` – test

## Test

Projektet använder Vitest för testning.

Kör tester med:

```bash
npm test
```
