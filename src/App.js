import RecipeFinder from './Components/RecipeFinder';
import './App.css';

function App() {
  return (
    <div>
      <header className="bg-green-300">
      <h1 className='mb-4 text-4xl ml-5 font-extrabold leading-none tracking-tight text-purple-500 md:text-5xl lg:text-6xl dark:text-white'>Recipe Finder App</h1> <br></br>
      <RecipeFinder />
      </header>
    </div>
  );
}

export default App;
