const Blog = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay

  return (
    <div>
      <h1>Blog Page</h1>
      <p>This is the blog page of our routing demo application.</p>
    </div>
  );
};

export default Blog;
