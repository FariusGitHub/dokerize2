import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header >
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <center>
          <img src={require('./globo.png')} height="180"/>
        </center>
        </header>
        <body>
        <div class="container">
          
        <div class='row well mb-3'>
          <div class='col-md-3 col-sm-3'>
            <button type="button" class="btn btn-secondary btn-lg disabled">Add Student</button>
          </div>
          <div class='col-md-3 col-sm-3'>
            <button type="button" class="btn btn-secondary btn-lg disabled">Check Student List</button>
          </div>
          <div class='col-md-3 col-sm-3'>
            <button type="button" class="btn btn-secondary btn-lg disabled">Sell Books</button>
           </div>
          </div>
         
          <div class="row well mb-3">
            <div class="col-md-6">
                <h5>There are 8 Students Enrolled</h5>
            </div>
          </div>
        </div>
        </body>
        
  
      
      
     
    </div>
  );
}

export default App;