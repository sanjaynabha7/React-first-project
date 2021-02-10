import react from "react";
import Sidebar from "./Sidebar"
import BlogList from "./Blog-list";
const Blog = () => {
    return(
        <div id="page">
            <div className="container">
                <div id="content" className="site-content">
                    <div id="primary" className="content-area column two-thirds">
                        <main id="main" className="site-main" role="main">
                            <div className="grid bloggrid">
                                <BlogList />				
                            </div>
                        </main>
                    </div>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Blog;