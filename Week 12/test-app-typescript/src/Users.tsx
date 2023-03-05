import { useState, useEffect } from "react";

type PostType = {
  title: string;
  body: string;
};
export const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  //["jack", "Helen"]
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch(() => setError("Error fetching users"));
  }, []);

  const [posts, setPosts] = useState<PostType[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const dataFunction = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const dataJson = await result.json();
      const fetchData = dataJson.slice(0, 4);
      setPosts(fetchData);
      setLoadingData(false);
    };
    dataFunction();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      {loadingData ? (
        <div>loading...</div>
      ) : (
        <ul data-testid="posts">
          {posts.map((post, i) => (
            <li key={i}>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

//1. We want to write a test to make  sure the name of users are displayed correctly
// or when we have an error we get some error. BUT

// * Real APIs are primarily used for End 2 end tests and not unit tests or integration tests
// because:
// 1. we don't have to ensure the server is up and running whe nwe want to test something
// which is dependant to an API.
// 2. Tests are run quite often , It is not fisible to include the APIs which may also charge you
// based on the number of requests.

// SOLUTION= MOCK the HTTP Requests
// => here we mock the response to the request with the LIST OF USERS or an error.

//MOCKING =>Mock SERVICE Worker (msw)
//MSW Setup: https://mswjs.io/:
//1. npm install msw --save-dev
//2. in src create mocks foldre
//3. create server.ts in mocks.
//4.copy in this file ,settings from "node" integrate here: https://mswjs.io/docs/getting-started/integrate/node
//5. create handlers.ts in mocks folder. This is the file in which we handle the http requests
// and respond with a mock respond.

//WRITE OUR TEST:
//go to user.test.tsx

//Add settings to setUpTest.ts : https://mswjs.io/docs/getting-started/integrate/node
//* remove .js from server.js

//HOW TO HANDLE ERRORS IN HTTP REQUESTS
