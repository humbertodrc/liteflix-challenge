import * as React from "react";
import styled from "@emotion/styled";

const AlertSvg = styled.svg`
	display: none;
	animation: dance 1s 3 alternate;
	
	@keyframes dance {
		50% {
			transform: rotate(-15deg);
		}
		100% {
			transform: rotate(15deg);
		}
	}

	@media (min-width: 768px) {
		display: block;
	}
`;

const ALert = (props) => (
	<AlertSvg
		width={26}
		height={26}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M20.8 8.667c0-1.97-.822-3.86-2.285-5.253C17.053 2.02 15.07 1.238 13 1.238c-2.069 0-4.053.783-5.515 2.176C6.022 4.807 5.2 6.696 5.2 8.667c0 8.666-3.9 11.143-3.9 11.143h23.4s-3.9-2.477-3.9-11.143ZM15.249 23.524a2.543 2.543 0 0 1-.951.903c-.395.216-.842.33-1.298.33-.456 0-.903-.114-1.298-.33a2.542 2.542 0 0 1-.951-.903"
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<circle className="circle" cx={20.5} cy={5.5} r={4.5} fill="#64EEBC" />
	</AlertSvg>
);

export default ALert;
