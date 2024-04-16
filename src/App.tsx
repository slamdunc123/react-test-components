import './App.css';
import ChildrenProps from './components/ChildrenProps';
import Counter from './components/Counter';
import SimpleForm from './components/SimpleForm';
import HarderForm from './components/HarderForm';
import TodoList from './components/Todos/Todos.tsx';
import FetchData from './components/FetchData/FetchData.tsx';
import FetchDataWithCustomHook from './components/FetchDataWithCustomHook/FetchDataWithCustomHook.tsx';
import FetchDataWithAPI from './components/FetchDataWithAPI/FetchDataWithAPI.tsx';
import FetchDataWithAxios from './components/FetchDataWithAxios/FetchDataWithAxios.tsx';

function App() {
	return (
		<>
			<h1>Vite + React</h1>
			<div className='cards'>
				<div className='card'>
					<Counter />
				</div>
				<div className='card'>
					<ChildrenProps />
				</div>
				<div className='card'>
					<SimpleForm />
				</div>
				<div className='card'>
					<HarderForm />
				</div>
				<div className='card'>
					<TodoList />
				</div>
				<div className='card'>
					<FetchData />
				</div>
				<div className='card'>
					<FetchDataWithCustomHook />
				</div>
				<div className='card'>
					<FetchDataWithAPI />
				</div>
				<div className='card'>
					<FetchDataWithAxios />
				</div>
			</div>
		</>
	);
}

export default App;
