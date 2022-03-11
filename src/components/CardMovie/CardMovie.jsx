import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styled from "@emotion/styled";
import Spinner from "../Spinner/Spinner";
import play from "../../assets/img/play.png";

const Container = styled.div`
	position: relative;
	margin: 5px auto;

	@media (min-width: 768px) {
		margin-right: 2rem;
	}

	&:hover {
		transform: scale(1.1);
	}
`;

const Image = styled.img`
	display: block;
	height: auto;
	margin: 0.5rem auto;
	width: 327px;
	height: 127px;
	object-fit: cover;
	position: relative;
	@media (min-width: 768px) {
		width: 220px;
		height: 146px;
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 22.78%,
			#000000 122.69%
		);
	}
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
	cursor: pointer;
`;

const CardMovie = ({movie, select, loading}) => {
	const {backdrop_path, original_title} = movie;

	return (
		<Container>
			{loading ? (
				<p>
					<Spinner />
				</p>
			) : (
				<>
					<LazyLoadImage
						src={
							select === 1
								? `https://image.tmdb.org/t/p/original/${backdrop_path}`
								: `${backdrop_path}`
						}
						alt="Popular Movie"
						width={327}
						height={147}
						effect="blur"
					/>
					<Play src={play} alt="play" />
					<Title>{original_title}</Title>
				</>
			)}
		</Container>
	);
};

export default CardMovie;
