import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import Login from "./components/account/Login";
import CreateAccount from "./components/account/CreateAccount";
// import CheckJwt from "./components/account/CheckJWT";
import ShowTodos from "./components/todo/ShowTodos";
import Logout from "./components/account/Logout";
import {getStatus} from "./api/account/Account";
import CreateLists from "./components/account/CreateLists";
import FoodSearch from "./components/edamam/FoodSearch";

// Entry point

function App() {

  const [Newclicked, setnewClicked] = useState('unclicked');
  const [loggedIn, setLoggedIn] = useState('checking');
  // const [CreatenewPressed, notPressed] 

  // check whether user is logged in already
  useEffect(() => {
    (async () => {
      let res = await getStatus();
      setLoggedIn(res ? res : 'invalid');
    })();
  }, []);

  if (loggedIn === 'checking') return <div className="App">Checking if logged in</div>;


  // S

  const logger = (
    <div className="App content">
      {loggedIn === 'invalid' ?
        <div className="account-components">
          <Login/>
          <CreateAccount/>
        </div>
        :
        <React.Fragment>
        <h3>
          <span className="is-bold is-size-12">Welcome</span> {loggedIn.user.name}
        </h3>
        <div><button className="button is-success"
              onClick={() => {
                setnewClicked('clicked');
                console.log("loggiewoggie");
                console.log(Newclicked);
                // window.location.reload();
              }}>View Your Recipies</button>
              <button className = "button is-info">View Other's Recipies</button>
              </div>
        </React.Fragment>
      }
      <Logout/>
      <br/>
      {/* <ShowTodos/> */}
    </div>
  );
  const listmakerclicked = (<ShowTodos/>);


  const otherslists = (<div className = "box">
    <article className = "media">
      <div className = "media-left">
        <figure className = "image is 64x64">
        <img src="https://www.soscuisine.com/media/images/recettes/very_large/199.jpg?lang=en" alt="Image"></img>
        </figure>
      </div>
  <div class="media-content">
  <div class="content">
    <p><strong>Rosemary and Thyme Boiled Chicken By Jake</strong></p>
    <p><strong>Ingredients</strong></p>
    <ol>
      <li><strong>1 Rotisserie Chicken</strong></li>
      <li><strong>2 Cups Diced Tomatoes</strong></li>
      <li><strong>1 Cup Rosemary</strong></li>
      <li><strong>1/2 Cup Thyme</strong></li>
      <li><strong>1/2 Lemon</strong></li>
    </ol>

    <p><strong>Directions</strong></p>
    <ul>
    <li><strong>Bring water to a boil</strong></li>
    <li><strong>Throw Chicken in Water</strong></li>
    <li><strong>Throw the rest of the stuff in</strong></li>
    <li><strong>Boil and enjoy</strong></li>
  </ul>
    <p><strong>Nutritional Information</strong></p>
    <p>Courtesy of <img src="https://developer.edamam.com/images/logo-dev.png" alt="Image"></img></p>
    <ul>
    <li><strong>Yield: Feeds 2</strong></li>
    <li><strong>1 Rotisserie Chicken: </strong>1037 Calories</li>
    <li><strong>2 Cups Diced Tomatoes: </strong>74 Calories</li>
    <li><strong>1 Cup Rosemary: </strong>24 Calories</li>
    <li><strong>1/2 Cup Thyme: </strong>24 Calories</li>
    <li><strong>1/2 Lemon: </strong>10 Calories</li>
    <li><strong>Calories Per Serving</strong> 572</li>
  </ul>
      
  </div>
  <nav class="level is-mobile">
    <div class="level-left">
    <input className="button is-primary" value={"Like"}/>
    <input className="button is-info" value={"Save to your Recipes"}/>
    <div class = "level is-mobile">
    <h1 className = 'is-bold'>Likes: 3</h1>
    </div>
    </div>
  </nav>
</div>
</article>
</div> )


  console.log(Newclicked);
  var render;
  
  if(Newclicked == 'clicked'){
    return listmakerclicked;
  }
  else{
    return logger;
    // return otherslists;
  }
}

export default App;
