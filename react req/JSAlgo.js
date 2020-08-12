
		param = "" + 34556;			<==== string conversion
        param = param.substr(1);   <====  param[1:]
		
-----------------------------------------------------------------------------
state = {
persons: [		// [] for similar datatype objects
  { id: 'asfa1', name: 'Max', age: 28 },
  { id: 'vasdf1', name: 'Manu', age: 29 },
  { id: 'asdf11', name: 'Stephanie', age: 26 }
],
otherState: 'some other value',
showPersons: false
}
--------------------------------------------------------------------------
//iterate each elem from [person:{a:b}, {a:b},...]
/*MAP IS USED ON ARRAY ONLY*/

{this.state.persons.map((person, index) => {
return <Person
  click={() => this.deletePersonHandler(index)}
  name={person.name} 
  age={person.age}
  key={person.id}
  changed={(event) => this.nameChangedHandler(event, person.id)} />
})}
-----------------------------------------------------------------------
//when OBJECT then Transform to ARRAY, then use MAP

let transformedIngredients = Object.keys( props.ingredients )
	.map( igKey => {
		return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
			return <BurgerIngredient key={igKey + i} type={igKey} />;
		} );
	} )
	.reduce((arr, el) => {
		return arr.concat(el)
	}, []);
-----------------------------------------------------------------------
  // when to pass parameter in component,
  this.state.persons.map((person, index) => {
	return <Person
	  click={() => this.deletePersonHandler(index)}	
-----------------------------------------------------------------------
// DELETE ELEMENT by 
persons.splice(personIndex, 1);

-----------------------------------------------------------------------
//cannot use setState() in render(),
 Warning : Cannot update during an existing state transition (such as within `render`)
 recursion error also.
-----------------------------------------------------------------------
// find index in state

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
  })};
-----------------------------------------------------------------------
// (TIP) 
	// js used in {} but how to use JSX here
	// BY RETURNING THE JSX CODE FROM JS {}
  
  {this.state.persons.map((person, index) => {
--	return <Person
	  click={() => this.deletePersonHandler(index)}
	  name={person.name} 
	  age={person.age}
	  key={person.id}
	  changed={(event) => this.nameChangedHandler(event, person.id)} />		// here event was recieved from Person.js(onChange Event)
  })}
  
------------------------------------------------------------------------
// RENDER accepts JSX Code Only
// show/hide components based on STATE
// encapsule the varCode in <div></div>
// "return" JSX from varCode

    let personCode = null;
    if(this.state.showPersons){
      personCode = (
        <div>{
        this.state.person.map((el,index) =>{
          return <Person name={
           el.name} 
            age="23" 
            changed={(event) => this.OnChangeHandler(event,el.id)}
            clicked={() => this.deleteThisHandler(index)}
            key={el.id}
            />
        })}</div>
      )
    }  // return ( {personCode} );
--------------------------------------------------------------------------
//style const to be used
style={{
	textTransform: 'capitalize',
	display: 'inline-block',
	margin: '0 8px',
	border: '1px solid #ccc',
	padding: '5px'
}}

or

<div style={{width: '100%', margin: 'auto'}}>
	<Burger ingredients={props.ingredients}/>
</div>

---------------------------------------------------------------------------------------
// passing ingredients in URL
const queryParams = [];
for (let i in this.state.ingredients) {
	queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));			// encodeURIComponent [CONV 3 -> "3"]
}
queryParams.push('price=' + this.state.totalPrice);
const queryString = queryParams.join('&');					// JOINING ELEM OVER '&'
this.props.history.push({
	pathname: '/checkout',
	search: '?' + queryString								//ACTUAL PUSHING OF STRING IN URL
});


// catchhing param and put in js objects
const query = new URLSearchParams( this.props.location.search );		// removes '?', classify elems with '=' 
const ingredients = {};
let price = 0;
for ( let param of query.entries() ) {
																		// param => ['salad', '1']
	if (param[0] === 'price') {
		price = param[1];
	} else {
		ingredients[param[0]] = +param[1];
	}
}
this.setState( { ingredients: ingredients, totalPrice: price } );