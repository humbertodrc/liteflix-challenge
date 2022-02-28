import React from "react";
import styled from "@emotion/styled";
import play from "../../assets/img/play.png";

const Container = styled.div`
	width: 90%;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		top: 0.5rem;
		bottom: 0.5rem;
		left: 0;
		right: 0;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 22.78%,
			#000000 122.69%
		);
	}
`;

const Image = styled.img`
	display: block;
	width: 100%;
	margin: 0.5rem auto;
`;

const Title = styled.p`
	font-size: 16px;
	letter-spacing: 4px;
	text-align: center;
	color: #fff;
	position: absolute;
	top: 65%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Play = styled.img`
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const CardMovie = ({movie, loading}) => {

	return (
		<Container>
			{loading ? (
				<p>Cargando....</p>
			) : (
				<>
					<Image
						src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
						alt="Popular Movie"
						width={200}
					/>
					<Play src={play} alt="play" />
					<Title>{movie?.original_title}</Title>
				</>
			)}
		</Container>
	);
};

export default CardMovie;
