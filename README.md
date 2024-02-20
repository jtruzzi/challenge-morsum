# Movie catalog e-commerce:

## Summary

This NextJS project (version 13) showcases a movie catalog e-commerce site. It's designed to highlight my skills in web development, particularly with `redux` and `@reduxjs/toolkit` for state management and data fetching, and `@mui/material` for the user interface.

## Setup Instructions

Ensure Node.js is installed.

To start the server: `npm i` followed by `npm run dev`.

To run tests: `npm run test`.

To validate code format run `npm run format`.

In order to run this project locally, you'll need to create an **.env.local** file on the root of the project with the corresponding RapidAPI key. The user also needs to be subscribed to the **movies-tv-shows-database** service.

```
RAPIDAPI_KEY="YOUR API KEY";
```

**NOTE:** Since regular e-commerce apis from RapidAPI had either a really low monthly quota or intermitent fails, I chose to change the object of the product and use the movies-tv-shows-database service that worked really well, even though it lacks images and details.

## Testing focus:

Tests are centered around critical functionalities like the cart system and UI responsiveness to state.

- Tests for the cartSlice selectors and reducers.
- Tests for the CartBadge to check that consumes the amount of cart items from the store correctly.
- Tests for the cart page to check that the UI changes based on having products in the cart or not.

## Live preview:

This website is live at:

https://ecommerce-challenge-ashen.vercel.app

hosted by Vercel.

## Pending improvements:

- Sync cart slice to localStorage via a redux middleware.
- Add integration tests mocking up the service.
