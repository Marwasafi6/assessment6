# assessment6
Post Dashboard – React Assignment
Description
This project is a Post Dashboard built with React using Vite.
The application fetches posts asynchronously from an external API and displays them with proper loading, error, and empty states. It also includes a simple filtering feature to filter posts by title.

The goal of this assignment is to practice:

Side effects using useEffect

Asynchronous data fetching

State management with useReducer

Controlled forms

Derived state

Clean component structure
How the App Works

postsApi.js
Handles fetching posts using the browser fetch API.

postsReducer.js
Manages async state (loading, error, posts) using useReducer.

App.jsx

Uses useReducer and useEffect to fetch posts on mount

Handles loading, error, and empty states

Stores filter text in state

Filters posts during render (derived state)

FilterForm.jsx
A controlled input component for filtering posts by title.

PostList.jsx
Renders a list of posts using .map().                                                  
How to Run the Project

Install dependencies:

npm install


Start the development server:

npm run dev


Open the browser at:

http://localhost:5173/Important Notes

node_modules is not included in the repository

Only React concepts from Week 1 and Week 2 were used

No external libraries, Context API, Redux, or custom hooks were used
Challenges Faced
Fixing Vite setup issues (main.jsx missing)

Understanding how to properly use useReducer for async state

Debugging props mismatch in the filter form

Implementing filtering as derived state instead of storing it in state

These challenges helped reinforce correct React patterns and debugging skills.
Conclusion

This project demonstrates correct handling of:

Async data fetching

Reducer-based state management

Controlled inputs

Conditional rendering

The application follows best practices taught in the course and meets all assignment requirements.

Post.jsx
Presentational component for displaying a single post.
