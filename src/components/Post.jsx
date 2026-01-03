function Post({ title, body }) {
  return (
    <div style={{ border: "1px solid #ccc", marginBottom: "1rem", padding: "0.5rem" }}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Post;