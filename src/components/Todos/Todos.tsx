import { useState } from 'react';
import AddTodo from './AddTodo';
import { Todo } from './types';
import TodoItem from './TodoItem';

const intialTodos: Todo[] = [
	{
		id: 1,
		title: 'Todo 1',
		description: 'Todo 1 description',
	},
	{
		id: 2,
		title: 'Todo 2',
		description: 'Todo 2 description',
	},
	{
		id: 3,
		title: 'Todo 3',
		description: 'Todo 3 description',
	},
];

const Todos = () => {
	const [todos, setTodos] = useState(intialTodos);

	const addTodo = (todo: Todo) => {
		setTodos([...todos, todo]);
	};

	return (
		<div>
      <h2>Todos</h2>
			<AddTodo addTodo={addTodo} />
			{todos.map((item) => (
				<TodoItem  key={item.id} {...item} />
			))}
		</div>
	);
};

export default Todos;
