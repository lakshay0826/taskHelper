import React from 'react';
import './App.css';
import Fab from '@material-ui/core/Fab';
import '../node_modules/font-awesome/css/font-awesome.min.css';



function App() {
  return (
    <div className="box">
      <div className="container"> 
          <Fab 
          style={{margin:'2px'}}
          variant="extended" 
          color="secondary">
            Sign In
          </Fab>
          <Fab 
          style={{margin:'2px'}}
          variant="extended" 
          color="secondary">
            Sign Up
          </Fab>
          <div>

          </div>
          <h3 className="white">or</h3>
          <i 
          style={{margin:'2px'}}
          class="fa fa-facebook-square fa-3x white"
           aria-hidden="true"></i>
          <i 
          class="fa fa-google fa-3x white" 
          aria-hidden="true"
          style={{margin:'2px'}}
          ></i>
      </div>
    
    </div>
  );
}

export default App;
