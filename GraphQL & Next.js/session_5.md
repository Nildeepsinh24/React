# Session 5 – GraphQL Schema & Playground Practice

**Q1. Define a GraphQL type called Product with fields id (ID!), name (String!), price (Float!), and inStock (Boolean!) in your schema.graphql file.**

**Answer 1:**
```graphql
# schema.graphql

type Product {
  id: ID!
  name: String!
  price: Float!
  inStock: Boolean!
}
```

**Q2. Write a custom query called getProductByName(name: String!) that returns a Product by its name, and test it using Apollo Sandbox or GraphiQL.**

**Answer 2:**
**Schema Definition:**
```graphql
type Query {
  getProductByName(name: String!): Product
}
```
**Sandbox/GraphiQL Test Query:**
```graphql
query FetchProduct {
  getProductByName(name: "Wireless Headphones") {
    id
    name
    price
    inStock
  }
}
```

**Q3. Add a relationship in your schema: create a type Order with fields id (ID!), products ([Product!]!), and total (Float!), then write a query getOrder(id: ID!) that returns an Order including its products.**

**Answer 3:**
**Updated Schema with Relationship:**
```graphql
type Order {
  id: ID!
  products: [Product!]!
  total: Float!
}

type Query {
  getOrder(id: ID!): Order
}
```

**Q4. Use Apollo Sandbox or GraphiQL introspection features to explore all available types and queries in your schema, then list 3 things you discovered that you didn't explicitly define.**

**Answer 4:**
By exploring the schema via the introspection features (Docs panel), I discovered the following built-in GraphQL constructs that are automatically generated and not explicitly defined by me:
1. **`__Schema`**: The system root object that describes the capabilities of the GraphQL server and lists all types.
2. **`__Type` / `__Field`**: Built-in introspection object types used to describe the schema itself, representing all types and their respective fields dynamically.
3. **Scalar Types (`String`, `Boolean`, `Float`)**: While I used them, they are native built-in types inherently understood and documented by GraphQL without requiring a manual type declaration.

**Q5. Test a nested query in Apollo Sandbox or GraphiQL that fetches an Order by ID and retrieves each Product's name and price inside that order.**

**Answer 5:**
```graphql
query GetOrderDetails {
  getOrder(id: "101") {
    id
    total
    products {
      name
      price
    }
  }
}
```
