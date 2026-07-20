# Session 1 – Introduction to GraphQL
## Student Assignment / Exam Submission

**Q1. Open the public GraphQL Pokémon API in the GraphiQL Playground and run a query to fetch the name and image of any 3 Pokémon.**

**Answer 1:**
*(Assuming execution via the standard PokeAPI GraphQL wrapper, as the specific URL is down)*

```graphql
query GetThreePokemon {
  pokemons(limit: 3) {
    results {
      name
      image
    }
  }
}
```

**Q2. Write a GraphQL query that fetches the name, types, and maximum HP of a single Pokémon by its name (for example, 'pikachu') using the Pokémon GraphQL API.**

**Answer 2:**
```graphql
query GetPokemonDetails {
  pokemon(name: "pikachu") {
    name
    types
    maxHP
  }
}
```

**Q3. Compare GraphQL and REST by listing 3 ways GraphQL allows apps like Zomato or Flipkart to fetch only the data they need, compared to typical REST API responses.**

**Answer 3:**
Compared to typical REST API responses, GraphQL allows large-scale applications like Zomato or Flipkart to optimize data fetching in the following three ways:

1. **Elimination of Over-fetching:** In a REST API, requesting a Zomato restaurant list might return excess data (e.g., the full menu and all reviews) just to display the restaurant's name and rating. GraphQL solves this by allowing the frontend to specify exactly which fields it needs (e.g., `name` and `rating` only), significantly reducing the payload size.
2. **Elimination of Under-fetching (Fewer API Calls):** To load a Flipkart user dashboard, REST might require multiple separate requests to different endpoints (e.g., `/user` for profile details, `/user/orders` for order history). GraphQL allows Flipkart to fetch all related data across multiple resources in a single, nested query.
3. **Predictable, Client-Driven Data Structures:** REST APIs dictate the structure of the response from the backend. With GraphQL's strongly-typed schema, the frontend specifies the exact shape of the data it requires. This allows the client application to fetch precisely what is needed to render a specific UI component, without having to filter through unwanted data on the client side.

**Q4. Given this GraphQL schema snippet... Write a sample query to fetch the title and poster of a movie named 'Inception'.**

**Answer 4:**
```graphql
query FetchMovie {
  movie(title: "Inception") {
    title
    poster
  }
}
```

**Q5. Use ChatGPT to generate a GraphQL mutation example for adding a new playlist to a music app (like Spotify). Paste the mutation query and explain what each part does in one line.**

**Answer 5:**
**Mutation Query:**
```graphql
mutation AddNewPlaylist {
  createPlaylist(name: "Workout Mix", description: "Gym songs", isPublic: true) {
    id
    name
    isPublic
  }
}
```

**Explanation:**
* `mutation AddNewPlaylist {` : Declares the GraphQL operation as a mutation (used for writing data) and names it "AddNewPlaylist".
* `createPlaylist(name: "Workout Mix", description: "Gym songs", isPublic: true) {` : Invokes the specific endpoint/function defined in the schema to create the playlist while passing the required input arguments.
* `id name isPublic` : Specifies the exact return fields requested from the server immediately after the playlist is successfully created.
