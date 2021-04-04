import './App.css';
import CenterRender from './components/First/CenterRender';
import LeftRightRender from './components/First/LeftRightRender'

function App() {
  return (
    <div className="App">
      <LeftRightRender/>
      <CenterRender/>
      <LeftRightRender/>
    </div>
  );
}

export default App;
