import React, { useEffect, useRef } from "react";
import "./realTimeWidget.css";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
	const onLoadScriptRef = useRef();

	useEffect(() => {
		onLoadScriptRef.current = createWidget;

		if (!tvScriptLoadingPromise) {
			tvScriptLoadingPromise = new Promise((resolve) => {
				const script = document.createElement("script");
				script.id = "tradingview-widget-loading-script";
				script.src = "https://s3.tradingview.com/tv.js";
				script.type = "text/javascript";
				script.onload = resolve;

				document.head.appendChild(script);
			});
		}

		tvScriptLoadingPromise.then(
			() => onLoadScriptRef.current && onLoadScriptRef.current()
		);

		return () => (onLoadScriptRef.current = null);

		function createWidget() {
			if (
				document.getElementById("tradingview_64e34") &&
				"TradingView" in window
			) {
				new window.TradingView.widget({
					width: 1445,
					height: 450,
					symbol: "NSE:NIFTY",
					interval: "D",
					timezone: "Asia/Kolkata",
					theme: "dark",
					style: "1",
					locale: "in",
					toolbar_bg: "#f1f3f6",
					enable_publishing: false,
					allow_symbol_change: true,
					container_id: "tradingview_64e34",
				});
			}
		}
	}, []);

	return (
		<div className="tradingview-widget-container">
			<div id="tradingview_64e34" />
			<div className="tradingview-widget-copyright">
				<a
					href="https://in.tradingview.com/symbols/NSE-NIFTY/"
					rel="noopener"
					target="_blank"
				>
					<span className="blue-text">NIFTY chart</span>
				</a>{" "}
			</div>
		</div>
	);
}
