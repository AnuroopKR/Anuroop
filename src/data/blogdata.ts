// blogData.ts (or directly inside the component)
export const blogArticles = [
  {
    title: "Understanding React Hooks",
    summary:
      "Explore how React Hooks simplify your components and enhance code reusability. Dive into useState, useEffect, and custom hooks.",
    date: "March 12, 2025",
    tags: ["React", "Hooks", "JavaScript"],
    slug: "react-hooks", // Use this instead of link for dynamic routes
    image: "/blogs/hooks-blog.png",
    content: `

React Hooks allow you to use state and other React features without writing a class component. Before hooks, managing state in functional components wasn’t possible, and we were limited to class components. Now, with hooks, we can simplify our code and make it more reusable.

## useState

The useState hook allows functional components to maintain state:

\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

This hook provides a way to declare and update state in a functional component.

## useEffect

The useEffect hook handles side effects like data fetching and subscriptions. For instance, to fetch data when a component mounts:

\`\`\`javascript
useEffect(() => {
  fetch('/api/data')
    .then(response => response.json())
    .then(data => setData(data));
}, []);
\`\`\`

## Custom Hooks

Custom hooks let you encapsulate and reuse stateful logic across components.

\`\`\`javascript
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
  }, [key]);

  return [value, setValue];
}
\`\`\`

This pattern is useful when you want to store and retrieve values from localStorage.

---

Hooks have revolutionized React development, offering a more concise and reusable way to write components without the need for class-based components.
`
  },
  {
    title: "Best Practices for Building Scalable Web Applications with Node.js",
    summary:
      "Discover key practices for organizing Node.js applications that scale well and stay maintainable. Covers async flows and structure.",
    date: "April 1, 2025",
    tags: ["Node.js", "Backend", "Best Practices"],
    slug: "scalable-nodejs-apps", // Use this for dynamic route handling
    image: "/blogs/nodejs-blog.png",
    content: `

When developing applications with Node.js, you want to ensure they are scalable and maintainable. Here are some best practices that can help:

## Asynchronous Programming with Promises and Async/Await

Node.js shines with its non-blocking, event-driven architecture. Make sure to use Promises and async/await for asynchronous operations.

\`\`\`javascript
async function fetchUserData() {
  const user = await getUserFromDb();
  return user;
}
\`\`\`

## Middleware for Modularity

Break down your application logic using middleware. For example, authentication, logging, and error handling should be separate concerns in your codebase.

\`\`\`javascript
app.use(authenticateUser);  // Authentication middleware
app.use(logger);  // Logging middleware
app.use(errorHandler);  // Global error handler
\`\`\`

## Error Handling and Logging

Proper error handling is essential. Use try-catch blocks and log errors to a file or external service for monitoring.

\`\`\`javascript
try {
  const result = await databaseQuery();
} catch (error) {
  console.error('Error occurred:', error);
}
\`\`\`

## Code Structure

Use a modular approach with well-organized directories like:


This makes your codebase scalable and easy to maintain.

---

Following these best practices ensures that your Node.js application can handle growth and stay maintainable as it scales.
`
  },
  {
    title: "What I Learned from Building a CRUD Application in React",
    summary:
      "Lessons learned from creating a full-stack CRUD app: managing state, connecting to backend APIs, and implementing authentication.",
    date: "April 10, 2025",
    tags: ["React", "Redux", "Full Stack"],
    slug: "crud-app-learnings", // Use this for dynamic route handling
    image: "/blogs/crud-blog.png",
    content: `

Building a full-stack CRUD app taught me several essential concepts, from managing state in React to interacting with backend APIs. Here are the key lessons I learned:

## Managing State

State management is crucial for keeping track of your app's data. I used React's useState and Redux to manage global state across multiple components.

\`\`\`javascript
const [data, setData] = useState([]);
\`\`\`

## Working with APIs

Interacting with the backend API is essential for a CRUD app. I used the Fetch API to retrieve and send data from/to the server.

\`\`\`javascript
useEffect(() => {
  fetch('/api/data')
    .then(response => response.json())
    .then(fetchedData => setData(fetchedData));
}, []);
\`\`\`

## Authentication

For security, I implemented authentication using JWT tokens to ensure that users could securely log in and access the app's features.

\`\`\`javascript
const token = localStorage.getItem('authToken');
if (token) {
  // Fetch user data
} else {
  // Redirect to login page
}
\`\`\`

## Form Handling

Managing user input is key in a CRUD app. I used controlled components to handle forms efficiently.

\`\`\`javascript
const [userName, setUserName] = useState('');

const handleInputChange = (e) => {
  setUserName(e.target.value);
};
\`\`\`

---

Building this app gave me hands-on experience in full-stack development, API integration, and authentication. It was a rewarding project that helped solidify my understanding of React and Redux.
`
  },
];
