export const fetchUsers = async () => {
	const res =  await fetch(
		'https://jsonplaceholder.typicode.com/users?_limit=5'
	);
	const users = await res.json();
	return users;
};
