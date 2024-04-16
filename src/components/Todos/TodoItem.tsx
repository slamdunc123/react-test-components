import { Todo } from './types';

type TodoItemProps = Omit<Todo, 'id'>;

const TodoItem = ({ title, description }: TodoItemProps) => {
	return (
		<div>
			<div>{title}</div>
			<div>{description}</div>
		</div>
	);
};

export default TodoItem;
