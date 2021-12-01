import React from "react";

export default function Character({ head, middle, bottom }) {
	return (
		<section style={{ display: "flex", flexDirection: "column" }}>
			<article
				className='head'
				style={{
					backgroundImage: `url(./${head}-head.png)`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					height: 170,
					width: 170,
				}}></article>
			<article
				className='middle'
				style={{
					backgroundImage: `url(./${middle}-middle.png)`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					height: 170,
					width: 150,
				}}></article>
			<article
				className='bottom'
				style={{
					backgroundImage: `url(./${bottom}-bottom.png)`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					height: 300,
					width: 170,
				}}></article>
		</section>
	);
}
