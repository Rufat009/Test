import { useState } from 'react';
import './App.css';

import DecrementButton from './components/DecrementButton/DecrementButton';
import IncrementButton from './components/IncrementButton/IncrementButton';
import Display from './components/Display/Display';
import { createContext } from 'react';

export const CountContext = createContext(null);

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<CountContext.Provider value={{count, setCount}}>
				<DecrementButton />
				<Display />
				<IncrementButton />
			</CountContext.Provider>
		</>
	);
}

export default App;
