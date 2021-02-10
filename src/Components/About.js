import react from "react";

const About = () => {

    let imgUrl = "https://www.consolebit.com/static/images/about-hm-img.png";

    return(
        <div id="page">
	<div className="container">
		<div id="content" className="site-content">
			<div id="primary" className="content-area column full">
				<main id="main" className="site-main">
				<article className="hentry">
				<header className="entry-header">
				<h1 className="entry-title">About</h1>	
				</header>
				<div className="entry-content">
				<p><img  src={imgUrl} alt="bg5" width="430" className="alignright"/></p>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				<h5>Yours, Von Muellerhoff</h5>
				</div>
				</article>
				
				</main>
			
			</div>
			
		</div>
		
	</div>
        </div>
    )

}
export default About;