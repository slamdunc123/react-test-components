import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h2>Counter</h2>
			<button onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</button>
		</div>
	);
};

export default Counter;
