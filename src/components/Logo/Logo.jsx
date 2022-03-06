import styled from "@emotion/styled";

const LogoLite = styled.p`
	font-size: 28px;
	line-height: 28px;
	letter-spacing: 4px;
	font-weight: 700;
	color: #64eebc;
`

const LogoModifier = styled.span`
	font-weight: 400;
`

const Logo = () => {
	return (
		<div>
			<LogoLite>
				LITE<LogoModifier >FLIX</LogoModifier>
			</LogoLite>
		</div>
	);
};

export default Logo;
