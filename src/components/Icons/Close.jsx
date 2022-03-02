import * as React from "react"
import styled from "@emotion/styled"

const CLoseSVG = styled.svg`
  display: none;
  @media (min-width: 768px) {
		display: block;
    position: absolute;
    top: 24px;
    right: 24px;
	}
`
const Close = (props) => (
  <CLoseSVG
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.429 1.429 15.57 15.571M1.429 15.571 15.57 1.429"
      stroke="#fff"
      strokeLinecap="square"
    />
  </CLoseSVG>
)

export default Close