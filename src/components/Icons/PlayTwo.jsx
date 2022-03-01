import * as React from "react";
import styled from "@emotion/styled";

const PlaySvg = styled.svg`
  margin-right: 0.8rem;
`

const PlayTwo = (props) => (
	<PlaySvg
		width={11}
		height={16}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			clipRule="evenodd"
			d="M9.942 8.236.625 1.875v12.25l9.317-5.889Z"
			stroke="#fff"
		/>
	</PlaySvg>
);

export default PlayTwo;
