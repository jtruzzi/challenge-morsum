# Movie catalog e-commerce:

## Instalation and setup

In order to run this project locally, you'll need to create an **.env.local** file on the root of the project with the corresponding RapidAPI key.

The user also needs to be subscribed to the **movies-tv-shows-database** service.

**NOTE:** Since regular e-commerce apis from RapidAPI had either a low monthly quota or intermitent fails, I chose to use the movies-tv-shows-database service that worked really well, even though it lacks images and details.

```
RAPIDAPI_KEY="YOUR API KEY";
```

## Tests and coverage:

- Tests for the cartSlice selectors and reducers.
- Tests for the CartBadge to check that consumes the amount of cart items from the store correctly.
