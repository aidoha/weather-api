import styled from 'styled-components';

export const Text = styled.div`
	font-size: ${props => props.size};
	color: ${props => props.color};
	font-weight: ${props => props.weight};
	margin: ${props => props.margin};
	margin-top: ${props => props.marginTop};
	margin-bottom: ${props => props.marginBottom};
	margin-left: ${props => props.marginLeft};
	margin-right: ${props => props.marginRight};
	padding: ${props => props.padding};
	padding-top: ${props => props.paddingTop};
	padding-bottom: ${props => props.paddingBottom};
	padding-left: ${props => props.paddingLeft};
	padding-right: ${props => props.paddingRight};
	line-height: ${props => props.lh};
	text-align: ${props => props.textAlign};
	letter-spacing: ${props => props.letterSpace};
`;

export const FlexBox = styled.div`
	display: flex;
	background: ${props => props.bg};
	justify-content: ${props => props.jc};
	align-items: ${props => props.ai};
	flex-direction: ${props => props.fd};
	flex-wrap: ${props => props.fw};
	margin: ${props => props.margin};
	padding: ${props => props.padding};
	margin-top: ${props => props.marginTop};
	margin-bottom: ${props => props.marginBottom};
	margin-left: ${props => props.marginLeft};
	margin-right: ${props => props.marginRight};
	padding-top: ${props => props.paddingTop};
	padding-bottom: ${props => props.paddingBottom};
	padding-left: ${props => props.paddingLeft};
	padding-right: ${props => props.paddingRight};
	width: ${props => props.width};
	height: ${props => props.height};
	border-radius: ${props => props.radius};
	border: ${props => props.border};
`;

export const Block = styled.div`
	background: ${props => props.bg};
	margin: ${props => props.margin};
	padding: ${props => props.padding};
	margin-top: ${props => props.marginTop};
	margin-bottom: ${props => props.marginBottom};
	margin-left: ${props => props.marginLeft};
	margin-right: ${props => props.marginRight};
	padding-top: ${props => props.paddingTop};
	padding-bottom: ${props => props.paddingBottom};
	padding-left: ${props => props.paddingLeft};
	padding-right: ${props => props.paddingRight};
	overflow: ${props => props.overflow};
	width: ${props => props.width};
	height: ${props => props.height};
	border-radius: ${props => props.radius};
	position: ${props => props.position};
	top: ${props => props.ptop};
	left: ${props => props.pleft};
	bottom: ${props => props.pbottom};
	right: ${props => props.pright};
	z-index: ${props => props.zIndex};
	font-family: Open Sans, sans-serif;
`;
