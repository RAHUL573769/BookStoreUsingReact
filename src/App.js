import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';
import All from './Components/All/All';
import Questions from './Components/Questions/Questions';
import bookData from './fakeData/bookData'



function App() {

  // console.log(bookData);
  return (
    <div className="App">
   
      <All></All>
      <Questions></Questions>
    </div>
  );
}

export default App;
