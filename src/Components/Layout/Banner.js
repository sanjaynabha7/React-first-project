import react from "react";
import Carousel from 'react-elastic-carousel';
const Banner = () => {
    const items = [
        {id: 1, title: 'Hello World', imgSrc: 'http://pophonic.com/_lenze-155962119/media/category3/main/05.jpg', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', imgSrc: 'http://pophonic.com/_lenze-155962119/media/category3/main/06.jpg',  content: 'You can install React from npm.'},
        {id: 3, title: 'Hello World', imgSrc: 'http://pophonic.com/_lenze-155962119/media/category3/main/09.jpg', content: 'Welcome to learning React!'},
      ];
    return(
        <div className="BannerSlider">
            <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={2000} >
                {items.map(item => <div key={item.id}> <img src={item.imgSrc}/></div>)}
            </Carousel>
        </div>
    )
}
export default Banner;