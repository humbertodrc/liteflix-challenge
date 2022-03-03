import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 3.5rem auto;
`


const ProgressModal = ({progress, isProgress}) => {
	return (
		<>
			{isProgress && (
				<Container>
				<progress id="file" max="100" value={progress}>
					70%
				</progress>
			</Container>
			)}
		</>
	);
};

export default ProgressModal;
