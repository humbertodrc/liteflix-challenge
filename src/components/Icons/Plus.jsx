import * as React from "react";
import styled from "@emotion/styled";

const PlusSvg = styled.svg`
	display: none;
	@media (min-width: 768px) {
		display: inline-block;
		margin-right: 0.8rem;
	}
`;

const Plus = (props) => (
	<PlusSvg
		width={14}
		height={14}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M7 0v14M14 7H0" stroke="#fff" />
	</PlusSvg>
);

export default Plus;
