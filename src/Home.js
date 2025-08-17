import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // useFetch is called with url of db.json and it is returning a object
    const { data: blogs, isPending, error } = useFetch('/api/blogs') 
 
    return ( 
        <div className="home">
            {error && <div>{error}</div> }
            {isPending && <div>Loading...</div> }
            {/*BlogList is called with parameters, blogs & title*/}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}
 
export default Home;