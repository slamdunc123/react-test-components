import { useState, useEffect } from 'react';
import { User } from './types';
import { fetchUsers } from './axios';

const FetchDataWithAxios = () => {
	const [users, setUsers] = useState<User[]>([]);

	const getUsers = async () => {
		const result = await fetchUsers();
		setUsers(result);
	};


	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div>
			<h2>FetchDataWithAxios</h2>
			{users.map((user: User) => (
				<div key={user.id}>
					<h3>{user.name}</h3>
					<p>{user.email}</p>
				</div>
			))}
		</div>
	);
};

export default FetchDataWithAxios;
