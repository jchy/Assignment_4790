import logo from './logo.svg';
import './App.css';
import CreateCard from './Components/CreateCard';

function App() {
  return (
    <div className="App">
      <CreateCard title="JOIN US"/>
      <CreateCard title="CONTACT US"/>
      <CreateCard title="HOME" />
      <CreateCard title="LOGIN" />
      <CreateCard title="SETTINGS" />
      <CreateCard title="HELP" />
      <CreateCard title="SEARCH"/>
      <CreateCard title="DOWNLOAD"/>
    </div>
  );
}

export default App;
