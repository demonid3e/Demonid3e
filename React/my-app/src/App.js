import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
}

const Field = () =>{
  return <input type="text" placeholder='Type Here' />
}

function Btn(){
  const text = "Done";
  const logged = false;
  return <button>{logged ? text : "Log in"}  </button> 
}

function App() {  
   return    (
     
     <div className="App">
         <img src={logo} className="App-logo" alt="logo" />
       
       <Header />
       <Field />
       <Btn />
      
       {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>

       </header> */}
     </div>

   );
}

export default App;
