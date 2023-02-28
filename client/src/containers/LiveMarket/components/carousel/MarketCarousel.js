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
		</Carousel>
	);
};

export default CarouselDiv;
