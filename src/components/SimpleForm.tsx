import { useState } from 'react';

const SimpleForm = () => {
	const [firstName, setFirsName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');

	const handleOnSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
    console.log(firstName, lastName);
	};

	return (
		<div>
			<h2>SimpleForm</h2>
			<form onSubmit={handleOnSubmit}>
				<input
					type='text'
					value={firstName}
					onChange={(e) => setFirsName(e.target.value)}
				/>
				<input
					type='text'
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default SimpleForm;
