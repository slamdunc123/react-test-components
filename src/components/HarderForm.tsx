import { useState } from 'react';

const HarderForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
	});

	const handleOnChange = (e: { target: { name: string; value: string } }) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleOnSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log(formData.firstName, formData.lastName);
	};

	return (
		<div>
			<h2>HarderForm</h2>
			<form onSubmit={handleOnSubmit}>
				<input
					type='text'
					name='firstName'
					value={formData.firstName}
					onChange={handleOnChange}
				/>
				<input
					type='text'
					name='lastName'
					value={formData.lastName}
					onChange={handleOnChange}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default HarderForm;
