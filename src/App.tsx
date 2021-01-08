import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is my react app</h1>
      <p>BASE Url: {process.env.REACT_APP_BASE_URL}</p>
      <p>API Key: {process.env.REACT_APP_API_KEY}</p>
    </div>
  );
}

export default App;
