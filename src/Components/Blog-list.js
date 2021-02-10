import react, { useState , useEffect } from "react";
import axios from "axios";
const BlogList = () => {
const blogApi = 'https://jsonplaceholder.typicode.com/users';

const blogApiStatic = {
    name : "LEANNE GRAHAM",
    email : "Sincere@april.biz",
    img : "http://www.themepush.com/demo-hypnosa/wp-content/uploads/sites/9/2015/09/avatar5.png",
}

const [blogs, setBlogs] = useState([])

const loadBlogs = async () => {
    const result = await axios.get(blogApi);
    console.log(result.data);
    setBlogs(result.data)
};

useEffect(() => {
    loadBlogs();
},[])


    return(
<div className="">
 {blogs.slice(0, 4).map(blog =>
<article key={blog.id}>
<header className="entry-header">
<h1 className="entry-title"><a to={blog.url} rel="bookmark">{blog.name}</a></h1>
<div className="entry-meta">
    <span className="posted-on"><time className="entry-date published">{blog.email}</time></span>						
</div>
<div className="entry-thumbnail">						
    <img  src={blog.thumbnailUrl} alt=""/>
</div>
</header>
{/* <div className="entry-summary">
    <p>
        When Mary Lennox was sent to Manor to live with her uncle everybody said she was the most disagreeablelooking child ever seen. It was true, too. She had a little thin face and a little thin body, thin light hair and a sour expression. Her hair was yellow, and her face was yellow because she <a className="more-link" href="blog-single.html">Read more</a>
    </p>
</div> */}
</article>
  
    )}

 </div>
    )
}

export default BlogList;