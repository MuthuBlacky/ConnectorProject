import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="App bg-[url(https://images.unsplash.com/photo-1679678691010-985ab6b8ff62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Z3JlZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)] bg-cover  bg-center h-full w-full absolute top-0 left-0 rounded-sm">
      <Navbar />
      
      <br>
      
      </br>
      <Hero click={!false}/>
    </div>
  );
}

export default App;
