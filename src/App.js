import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App d-flex">
      <div className="p-2 sidebar">
        <Sidebar />
      </div>
      <div className="p-0 mainContent flex-grow-1 w-100">
        <div className="sticky-top">
        <Header />
        </div>
        <Content />
      </div>
    
    </div>
  );
}

export default App;
