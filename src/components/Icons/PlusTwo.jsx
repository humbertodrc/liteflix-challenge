import * as React from "react"
import styled from "@emotion/styled"

const Plus = styled.svg`
  margin-right: 0.8rem;
`

const PlusTwo = (props) => (
  <Plus
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 0v14M14 7H0" stroke="#fff" />
  </Plus>
)

export default PlusTwo