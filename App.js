import React,{ Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
    constructor(props) {
    super(props);

      this.state = {
          person : [ 
              { id:'id1', name :'karl marks', age: 28},
              { id:'id2', name :'schwan', age: 50},
              { id:'id3', name :'alexander',  age: 40}
          ],
          showPerson : false      
       }
    }

togglePersonHandler = () => {
    const isClicked = this.state.showPerson;
    this.setState({showPerson : !isClicked})
}

nameChangedHandler = (event, id) =>{

  const personIndex =this.state.person.findIndex(p=> {
      return p.id === id;
    });

  const persons = this.state.person[personIndex];

this.setState({  person : [
   {name: 'karl marks', age: 34 },
   {name: event.target.value, age: 85 },
   {name: 'alexander', age: 32 }
   ] 
  });
}

deletePersonHandler = (personIndex) => {
   
  const persons= [...this.state.person]; 
  persons.splice(personIndex,1);
  this.setState({person:persons})
}


render (){

  const style= {
    backgroundColor: 'white', 
    font: 'inherit', 
    padding : '8 px',
    border: '1x solid blue',
    cursor: 'pointer'
  };

  let person = null;
  if (this.state.showPerson) {
      person = (    
        <div>
            {this.state.person.map((user,index) => {
              return   <Person name={user.name} 
                       age={user.age}
                       key={user.id}
                       click={() => this.deletePersonHandler(index)}
                       changed= {(event)=>this.nameChangedHandler(event, person.id)}
                       />                     
              })}
        </div>
      );
  }

  return (
    <div className="App"> 
    <h1> React App </h1>
    <p>It's Really Working</p>
      <button 
          style= {style}
          onClick={this.togglePersonHandler}>Switch Name</button>
          {person}
    </div>
  );

  }
}

export default App;