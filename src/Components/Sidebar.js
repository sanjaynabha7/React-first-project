import react from "react";

const Sidebar = () => {
    return(
<div id="secondary" className="column third">
				<div id="sidebar-1" className="widget-area" role="complementary">
				
					<aside id="text-5" className="widget widget_text">
					<h4 className="widget-title">About Me</h4>
					<div className="textwidget">
						<p>
							<img style={{width: "80px", borderRadius: "50%", marginBottom: "0" }} src="http://www.themepush.com/demo-hypnosa/wp-content/uploads/sites/9/2015/09/avatar5.png" className="alignleft" /> I'm a professional photographer for 10 years. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
						</p>
					</div>
					</aside>
					
					<aside id="recent-posts-2" className="widget widget_recent_entries">
					<h4 className="widget-title">Recent Posts</h4>
					<ul>
						<li>
						<a href="blog-single.html">Somewhere in time</a>
						</li>
						<li>
						<a href="blog-single.html">Thanks for watching!</a>
						</li>
						<li>
						<a href="blog-single.html/">Who could have thought?</a>
						</li>
						<li>
						<a href="blog-single.html">Text Alignement</a>
						</li>
						<li>
						<a href="blog-single.html">HTML Tags and Formatting</a>
						</li>
					</ul>
					</aside>
					
			</div>
			
			</div>
    )
}

export default Sidebar;