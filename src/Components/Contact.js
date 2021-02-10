import react, {Component}  from 'react'
import Formjson from "./Form-json";
export default class Contact extends Component {
	constructor(props){
		super(props)
	}
	render(){
			
		return(
			<div id="page">
	<div className="container">

		<div id="content" className="site-content">
			<div id="primary" className="content-area column full">
				<main id="main" className="site-main">
				<article id="post-39" className="post-39 page type-page status-publish hentry">
				<header className="entry-header">
					<h1 className="entry-title">Contact</h1>
				</header>
				<div className="entry-content">
					<div className="wpcmsdev-columns">
						<div className="column column-width-one-half">
							<h4>Quick Contact</h4>						
							<Formjson />
						</div>
						<div className="column column-width-one-half">
							<h4>Find Us: (888) 252 389 3571</h4>
							<p>
								If you want to hire me or have any feedback or questions about our service in general, please send us a message by completing our enquiry form. It’s best to call though, someone we’ll always be there for you.
							</p>
							<p>
								Monday – Friday: 9am to 5pm<br/>
								Saturday: 10am to 2pm<br/>
								Sunday: Closed
							</p>
						</div>
					</div>
				</div>
				</article>
				</main>
			</div>
		</div>
	</div>
    </div>

		)
	}

}
