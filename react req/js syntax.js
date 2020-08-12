/************	react code + how to use css in js	*************/
----------------------------------------------------------------------
// Component Layout

import React from 'react'

const person = (props) => {    
    return (
        <div className="Person">
            <p>{props.name}</p>
        </div>  
    );
}

export default person;

----------------------------------------------------------------------
// BASIC App.js and Person.js

import React from 'react';
import './App.css';
import Person from './Person'

function App() {
  return (
    <div className="App">
      <h1> from app.js</h1>
      <Person name="gulshan"/>
      <Person name="sami"/>
      <Person name="vishu"/>
    </div>
  );
}

export default App;

------------------
import React, { Component } from 'react';
import './App.css';
import Person from './Person'

class App extends Component {
  render (){
  // js code here
  return (
    <div className="App">
      <h1> from app.js</h1>
      <Person name="gulshan" age="23"/>
      <Person name="sami" age="24"/>
      <Person name="vishu" age="25"/>
    </div>
  );
  }
}

export default App;

-------------------------------------------------------------------------------------
//BIND is used as an alternative to (pass arguments in method) inside component calling
-------------------------------------------------------------------------------------

//2-way binding App.js and Person.js

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person : [
    {id: 1, name:"gulshan"},
    {id: 2, name:"sami"},
    {id: 3, name:"vishu"}]
  };
  
  OnChangeHandler = (event, id) =>{
    
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });
    
    let persons = [...this.state.person];
    persons[personIndex].name = event.target.value;
    this.setState({person: persons})
  }


  render (){
  return (
    <div className="App">
      <h1> from app.js</h1>
      <Person name={this.state.person[0].name} age="23" changed={(event) => this.OnChangeHandler(event,this.state.person[0].id)}/>
      <Person name={this.state.person[1].name} age="24" changed={(event) => this.OnChangeHandler(event,this.state.person[1].id)}/>
      <Person name={this.state.person[2].name} age="25" changed={(event) => this.OnChangeHandler(event,this.state.person[2].id)}/>
    </div>
  );
  }
}

export default App;
-------------------------
import React from 'react'
import classes from './Person.module.css'

const person = (props) => {    
    return (
        <div className={classes.Person}>
            <p>{props.name}</p>
            <input type="text" value={props.name} onChange={props.changed}></input>
            <p>{props.age}</p>
        </div>  
    );
}

export default person;
----------------------------------------------------------------------------------
// Adding Multiple CSS Files
// DO NOT INCULDE "" OR . IN CLASSES NAME
In, render (){
    let personCode = null;
    --- let ButtonCss = [classes.Button,classes.Red];  ---
    if(this.state.showPerson){  
	.............
	.......
	
In return,	
<button className={ButtonCss.join(' ')} onClick={this.toggleAbleToDelete}>

------------------------
// Conditional CSS
In, render(){
	.....
	.....
	const assignedClasses = [];
	if (this.state.persons.length <= 2) {
	  assignedClasses.push(classes.red); // classes = ['red']
	}
	if (this.state.persons.length <= 1) {
	  assignedClasses.push(classes.bold); // classes = ['red', 'bold']
	}
}

---------------- 
//sidedrawer logic in layout
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
-----------------------------------------------------------------------------
// router defination in index.js and then in app.js
----------
const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();

---------- // just defining the available routes

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

--------------------- // to navigate use navlink or link 

<Link to="/person_data" component={bb}>hello</Link>

-------------------------------------------------------------------------------
// route routing on button click
// hoc <withRouter> is used (cannot use history w/o it)

import { Route, Switch, withRouter } from 'react-router-dom';

//method
  nextPath(path) {
    this.props.history.push(path);
  }
 
 // buttons
	<button onClick={() => {this.nextPath('/person_data')}}> Person Examples </button>
	<button onClick={() => {this.nextPath('/main_project')}}> main_project</button>
	
// hoc 
export default withRouter(App);


// pass by URL is in JSAlgo.js

-------------------------------------------------------------------------------
// aux component

const _Aux = (props) => props.children;

export default _Aux;

----------------------------------------------------------------------------
//REDUX

//index.js

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

------------------------------------------------
// reducer .js
import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        default:
            return state;
    }
};

export default reducer;


---------------------------
//action.js
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

--------------------------------------------------------------------------------------------------------------
// wrap component in which you want to use store with connect()
import { connect } from 'react-redux';
----------------------------------------
//usage
 <BuildControls
	ingredientAdded={this.props.onIngredientAdded}
	ingredientRemoved={this.props.onIngredientRemoved}
	......
------------------------------------------
const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}
-----------------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( BurgerBuilder, axios ));
--------------------------------------------------------------------------------------------------------------------

