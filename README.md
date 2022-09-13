# Color Generator Documentation

## How to Run

- Before installation, please install the node packages with `npm run install`.
- For development, `npm run dev` to start the development process and visit `http://localhost:3000/`.
- For production, `npm run build` to build and `npm run start` to start the production Next JS server.

## Architecture

- React JS + Next JS + Tailwind

## Extensibility

- The main Business logic is depended on the conversion between the different types of colors. Therefore, in order to ease the development for the new types, the `RGB` type is defined as the main type for the system. By defining the main type, when new color types are introduced, we only have to consider the conversion between the main type and new type (vice versa). We longer have to consider conversion between each and every type. The main type is also used in CSS to standardized the usage. The helper function for colors can be found in `utils/colors.ts` and it can be shared between API and Front End Codes.

- The React JS and Next JS codes are structured as following. `elements` are the very basic components, ie. buttons, text fields. `blocks` are built by composing of the `elements`, ie. layouts, custom components. `pages` represents the web pages.

## Total Development Time

- Around 3 and half hours
