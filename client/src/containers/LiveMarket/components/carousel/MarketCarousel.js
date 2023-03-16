import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./marketCarousel.css";
const CarouselDiv = () => {
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
					width={"80%"}
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
					width="500"
					height="467"
					frameborder="0"
					allowtransparency="true"
					marginwidth="0"
					marginheight="0"
					className="economicCalendarFrame"
				></iframe>
			</div>

			<div>
				<iframe
					src={
						"https://in.widgets.investing.com/live-currency-cross-rates?theme=darkTheme"
					}
					width={"80%"}
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
