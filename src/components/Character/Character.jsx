import React from "react";

export default function Character({ head, middle }) {
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
		</section>
	);
}
