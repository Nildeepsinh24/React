import { ApolloClient, InMemoryCache, ApolloLink, Observable } from '@apollo/client/core';

// Mocked local data (mimicking a database)
let mockData = {
  profile: { id: "1", name: "Jane Doe", bio: "Digital Creator & Developer", __typename: "Profile" },
  links: [
    { id: "101", title: "My GitHub", url: "https://github.com", __typename: "Link" },
    { id: "102", title: "My Twitter", url: "https://twitter.com", __typename: "Link" },
    { id: "103", title: "My Portfolio", url: "https://portfolio.com", __typename: "Link" }
  ]
};

// Custom Link to mock network requests without a real backend server
const mockLink = new ApolloLink((operation) => {
  return new Observable(observer => {
    setTimeout(() => {
      if (operation.operationName === 'GetProfile') {
        observer.next({ data: mockData });
        observer.complete();
      } else if (operation.operationName === 'UpdateProfile') {
        const { name, bio } = operation.variables;
        mockData.profile = { ...mockData.profile, name, bio };
        observer.next({ data: { updateProfile: mockData.profile } });
        observer.complete();
      } else {
        observer.error(new Error('Unknown operation'));
      }
    }, 500); // Simulate network delay
  });
});

export const client = new ApolloClient({
  link: mockLink,
  cache: new InMemoryCache()
});
