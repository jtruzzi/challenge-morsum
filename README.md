# Movie catalog e-commerce:

This is a NextJS project (version 13.5.6) and it's heavily dependant on redux and the @reduxjs/toolkit packages for state management and data fetching.

The UI, even though really rudimentary, uses @mui/material.

## Instalation and setup

To run the server locally we need to run these two commands:

```
npm i
npm run dev
```

To run the tests we need to run:

```
npm run test
```

In order to run this project locally, you'll need to create an **.env.local** file on the root of the project with the corresponding RapidAPI key. The user also needs to be subscribed to the **movies-tv-shows-database** service.

**NOTE:** Since regular e-commerce apis from RapidAPI had either a really low monthly quota or intermitent fails, I chose to change the object of the product and use the movies-tv-shows-database service that worked really well, even though it lacks images and details.

```
RAPIDAPI_KEY="YOUR API KEY";
```

## Live preview:

This website is live at https://ecommerce-challenge-ashen.vercel.app hosted by Vercel.

## Tests and coverage:

- Tests for the cartSlice selectors and reducers.
- Tests for the CartBadge to check that consumes the amount of cart items from the store correctly.
- Tests for the cart page to check that the UI changes based on having products in the cart or not.
