import { useState, useEffect } from 'react';
import { User } from './types';


const FetchData = () => {
	const [users, setUsers] = useState<User[]>([]);

	const fetchUsers = async () => {
		try {
			const res = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);
			const users = await res.json();
			console.log('slamdunc ~ fetchUsers ~ users:', users);
			setUsers(users);
		} catch (error) {
			console.log('slamdunc ~ fetchUsers ~ error:', error);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);


	return (
		<div>
			<h2>FetchData</h2>
			{users.map((user: User) => (
				<div key={user.id}>
					<h3>{user.name}</h3>
					<p>{user.email}</p>
				</div>
			))}
		</div>
	);
};

export default FetchData;
