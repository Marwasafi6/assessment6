import { useEffect, useReducer, useState } from "react";
import { fetchPosts } from "./api/postsApi";
import { postsReducer, initialState } from "./reducer/postsReducer";
import PostList from "./components/PostList";
import FilterForm from "./components/FilterForm";

function App() {
  
  const [state, dispatch] = useReducer(postsReducer, initialState);

  
  const [filterText, setFilterText] = useState("");

  
  useEffect(() => {
    let isMounted = true;

    async function loadPosts() {
      dispatch({ type: "FETCH_START" });

      try {
        const posts = await fetchPosts();
        if (isMounted) {
          dispatch({ type: "FETCH_SUCCESS", payload: posts });
        }
      } catch (error) {
        if (isMounted) {
          dispatch({
            type: "FETCH_ERROR",
            payload: error.message,
          });
        }
      }
    }

    loadPosts();

    
    return () => {
      isMounted = false;
    };
  }, []);

  
  const filteredPosts = state.posts.filter((post) =>
    post.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Post Dashboard</h1>

      <FilterForm
        filter={filterText}
        onFilterChange={setFilterText}
      />

      {state.loading && <p>Loading posts...</p>}

      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      {!state.loading && !state.error && filteredPosts.length === 0 && (
        <p>No posts found.</p>
      )}

      {!state.loading && !state.error && filteredPosts.length > 0 && (
        <PostList posts={filteredPosts} />
      )}
    </div>
  );
}

export default App;
