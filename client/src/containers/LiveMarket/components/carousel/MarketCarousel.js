import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./marketCarousel.css";
const CarouselDiv = () => {
	// const [slides, setSlides] = useState([
	// 	{
	// 		id: 1,
	// 		title: "Slide 1",
	// 		iframe:
	// 			"https://in.widgets.investing.com/top-cryptocurrencies?theme=darkTheme",
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Slide 2",
	// 		iframe:
	// 			"https://in.widgets.investing.com/top-cryptocurrencies?theme=darkTheme",
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Slide 3",
	// 		iframe:
	// 			"https://in.widgets.investing.com/top-cryptocurrencies?theme=darkTheme",
	// 	},
	// ]);

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	// const renderSlides = () => {
	// 	return slides.map((slide, index) => {
	// 		return (
	// 			<div key={index}>
	// 				<h3>{slide.title}</h3>
	// 				<iframe
	// 					src={slide.iframe}
	// 					width={"100%"}
	// 					height={"100%"}
	// 					frameborder={"0"}
	// 					allowtransparency={"true"}
	// 					marginwidth={"0"}
	// 					marginheight={"0"}
	// 					className="cryptoFrame"
	// 				></iframe>
	// 			</div>
	// 		);
	// 	});
	// };

	return (
		<Carousel
			className="carouselDiv"
			responsive={responsive}
			infinite={true}
			autoPlay={false}
			autoPlaySpeed={3000}
		>
			{/* {renderSlides()} */}
			<div>
				<iframe
					src={
						"https://in.widgets.investing.com/top-cryptocurrencies?theme=darkTheme"
					}
					width={"100%"}
					height={"100%"}
					frameborder={"0"}
					allowtransparency={"true"}
					marginwidth={"0"}
					marginheight={"0"}
					className="cryptoFrame"
				></iframe>
			</div>
			<div>
				<iframe
					src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=25,34,32,6,37,72,71,22,17,51,39,14,33,10,35,42,43,45,38,56,36,110,11,26,9,12,41,4,5,178&calType=week&timeZone=23&lang=56"
					width="650"
					height="467"
					frameborder="0"
					allowtransparency="true"
					marginwidth="0"
					marginheight="0"
					className="economicCalendarFrame"
				></iframe>
			</div>
			{/* <div>
				<iframe
					frameborder="0"
					height="175"
					width="555"
					allowtransparency="true"
					marginwidth="0"
					marginheight="0"
					src="https://sslfxrates.investing.com/index_exchange.php?params&inner-border-color=%23CBCBCB&border-color=%23cbcbcb&bg1=%23F6F6F6&bg2=%23ffffff&inner-text-color=%23000000&currency-name-color=%23000000&header-text-color=%23FFFFFF&force_lang=56"
					align="center"
					className="exchangeRatesFrame"
				></iframe>
			</div> */}

			<div>
				<iframe
					src={
						"https://in.widgets.investing.com/live-currency-cross-rates?theme=darkTheme"
					}
					width={"100%"}
					height={"100%"}
					frameborder={"0"}
					allowtransparency={"true"}
					marginwidth={"0"}
					marginheight={"0"}
					className="currencyCrossFrame"
				></iframe>
			</div>
		</Carousel>
	);
};

export default CarouselDiv;
