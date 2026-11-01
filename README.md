# Ev24 Kh

Ev24 Kh is a private, long-distance taxi booking site for Cambodia. Passengers can request a private car for intercity trips, and drivers can register to join the network.

The app is a single-page Angular 20 application styled with Tailwind CSS 3.

## Features

- Hero section with brand introduction and call to action
- Booking form with pickup, destination, travel date, and passenger count
- Fixed-fare signature routes from Phnom Penh, with distance and duration for each
- Add-on driver services (from $30 per hour)
- Driver registration section ($100 per month subscription)
- Responsive navigation with a mobile menu

## Tech stack

- Angular 20 (standalone components, signals)
- TypeScript
- Tailwind CSS 3.4 with the Typography plugin
- Angular CLI and Karma/Jasmine for tests

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Then open `http://localhost:4200/`. The app reloads when source files change.

## Scripts

| Command         | Purpose                                      |
| --------------- | -------------------------------------------- |
| `npm start`     | Run the development server                   |
| `npm run build` | Create a production build in `dist/`         |
| `npm run watch` | Rebuild on change in development mode        |
| `npm test`      | Run unit tests with Karma (requires Chrome)  |

## Project structure

```
src/
├── app/
│   ├── app.ts          # Root component: booking state, routes data, handlers
│   ├── app.html        # Homepage markup
│   ├── app.css         # Component styles and responsive breakpoints
│   ├── app.config.ts   # Application providers
│   ├── app.routes.ts   # Route definitions
│   └── app.spec.ts     # Root component tests
├── styles.css          # Tailwind directives, fonts, and global base styles
├── index.html          # HTML entry point
└── main.ts             # Application bootstrap
tailwind.config.js      # Brand colors and font families
```

## Brand tokens

Defined in `tailwind.config.js` under the `ev` color group:

| Token        | Hex       | Use                      |
| ------------ | --------- | ------------------------ |
| `ev-ink`     | `#1c2a2a` | Primary text, dark buttons |
| `ev-forest`  | `#1d3736` | Service and mobile nav backgrounds |
| `ev-lime`    | `#c4d849` | Accents, primary buttons |
| `ev-paper`   | `#f3f0e9` | Page background          |
| `ev-cream`   | `#f8f6ee` | Light surfaces           |

Display headings use DM Serif Display, and body text uses Manrope.

## Routes and fares

Long-range fares are defined in `src/app/app.ts`. Each route has a fixed price in USD, and only the listed destinations are accepted. Rides inside Phnom Penh are priced by kilometer.

## Additional resources

- [Angular CLI overview](https://angular.dev/tools/cli)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
