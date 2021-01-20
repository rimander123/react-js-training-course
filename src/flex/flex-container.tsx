import React from "react";

export type ContainerProps = {
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
} & React.CSSProperties;

export const Container: React.FunctionComponent<ContainerProps> = (
	props: ContainerProps
) => {
	const { children, className, style, ...CSSProperties } = props;
	return (
		<div className={className} style={{ ...style, ...CSSProperties }}>
			{children}
		</div>
	);
};
