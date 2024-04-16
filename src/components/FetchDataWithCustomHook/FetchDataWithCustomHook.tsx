import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { User, Post } from './types';

const FetchDataWithCustomHook = () => {
	const [title, setTitle] = useState('users');
	const { data } = useFetch(
		`https://jsonplaceholder.typicode.com/${title}?_limit=5`
	);

	const handleOnClick = () => {
		if (title === 'users') setTitle('posts');
		else setTitle('users');
	};

	const isUsers = title === 'users';

	return (
		<div>
			<h2>FetchDataWithCustomHook</h2>
			<button onClick={handleOnClick}>{title}</button>

			{isUsers
				? data.map((item: User) => (
						<div key={item.id}>
							<h3>{item.name}</h3>
							<p>{item.email}</p>
						</div>
				  ))
				: data.map((item: Post) => (
						<div key={item.id}>
							<h3>{item.title}</h3>
						</div>
				  ))}
		</div>
	);
};

export default FetchDataWithCustomHook;
