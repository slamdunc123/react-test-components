import { FunctionComponent, PropsWithChildren } from 'react';

const Child = (props: { children: unknown }) => {
	return (
		<>
			<h3>Child</h3>
			{props.children}
		</>
	);
};

const ChildrenProps: FunctionComponent<PropsWithChildren> = () => {
	return (
		<div>
			<h2>Parent</h2>
      <h4>In Parent</h4>
			<Child>
				<h4>In Child 1</h4>
				<h4>In Child 2</h4>
			</Child>
		</div>
	);
};

export default ChildrenProps;
