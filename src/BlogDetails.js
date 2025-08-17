import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  // useFetch is called with url of db.json and it is returning a object
  const { data: blog, isPending, error } = useFetch('http://localhost:5000/blogs/' + id);
  const navigate = useNavigate();

  const handleClick = () => {
    // Fetching the url of db.json
    fetch('http://localhost:5000/blogs/' + blog.id, {
      method: 'DELETE'
    })
      .then(() => {
        navigate('/');
      })
      .catch(err => {
        console.error("Failed to delete blog:", err);
      });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
