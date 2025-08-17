import { Link } from 'react-router-dom';

// BlogList is taking parameters, blogs & title
const BlogList = ({blogs, title}) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} >
                    {/*Link used in place of ahref*/}
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;