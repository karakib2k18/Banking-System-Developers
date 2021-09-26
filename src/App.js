import './App.css';
import Header from './components/Header/Header';
import Projectdetails from './components/Projectdetails/Projectdetails';

function App() {
  return (
    <div className="App">

      {/* import Header and ProjectDetails components */}

      <Header></Header>
      <Projectdetails></Projectdetails>
    </div>
  );
}

export default App;
