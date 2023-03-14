import logo from './logo.svg';
import './App.css';
import Stories from 'react-insta-stories';
function App() {
  const stories = [
    "https://review2020.s3.us-east-1.amazonaws.com/1678577830143input%20with%20label.png",
    "https://review2020.s3.us-east-1.amazonaws.com/1678580586441Input%20with%20validation%20erro.png",
  ];
  return (
    <div className="App">
    <Stories
			stories={stories}
			defaultInterval={1500}
			width={432}
			height={768}
		/>
    </div>
  );
}

export default App;
