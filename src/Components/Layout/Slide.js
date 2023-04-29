import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import SLIDE1 from '../../assets/Slide/slide1.jpeg'
import SLIDE2 from "../../assets/Slide/slide2.jpeg";

const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10,
        arrows: false,
    };

    return (
        <div>
            <div className="w-full overflow-hidden border-none outline-none">
                <Slider settings={settings}>
                    <div>
                        <img src={SLIDE1} alt="slide" />
                    </div>
                    <div>
                        <img src={SLIDE2} alt="slide" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Slide;