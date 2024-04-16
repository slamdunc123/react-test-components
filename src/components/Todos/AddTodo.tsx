import { useState } from 'react';
import { Todo } from './types';

type AddTodoProps = {
	addTodo: (todo: Todo) => void;
};

const AddTodo = ({ addTodo }: AddTodoProps) => {
	const [formData, setformData] = useState({
		id: '',
		title: '',
		description: '',
	});

	const handleOnChange = (e: { target: { name: string; value: string } }) => {
		const { name, value } = e.target;
		setformData({ ...formData, [name]: value });
	};

	const handleOnSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		addTodo(formData);
	};
	return (
		<>
			<form onSubmit={handleOnSubmit}>
				<input
					type='text'
					value={formData.id}
					name='id'
					onChange={handleOnChange}
				/>
				<input
					type='text'
					value={formData.title}
					name='title'
					onChange={handleOnChange}
				/>
				<input
					type='text'
					value={formData.description}
					name='description'
					onChange={handleOnChange}
				/>
				<button type='submit'>Add Todo</button>
			</form>
		</>
	);
};

export default AddTodo;
