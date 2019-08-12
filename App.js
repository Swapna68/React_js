import React,{ Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
constructor(props) {
    super(props);

this.state = {
    persons : [
        {id:'id1',name:'Alexa', age:'20'},
        {id:'id2',name:'will_smith', age:'40'},
        {id:'id3',name:'tony_stark', age:'50'},
         ],
    showPerson : false
        }
    }

nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {

            return p.id === id;
     });

const person = {
    ...this.state.persons[personIndex]
    };

person.name = event.target.value;

const persons = [...this.state.persons];
persons[personIndex] = person;


    this.setState({  persons : persons   })
}

handleToggleEvent = () => {
    const isClicked = this.state.showPerson;
    this.setState({showPerson : !isClicked});
}

deletePersonHandler = (personIndex) => {
 // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
}

render() {
    const style={
    backgroundColor: 'green',
    color: 'white', 
    font: 'inherit', 
    padding : '8 px',
    border: '1x solid blue',
    cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPerson) { 
        persons = (  
        <div> 
            {this.state.persons.map((person,index) => {
                return  <Person 
                        name= {person.name}
                        age= {person.age}
                        click= {()=>this.deletePersonHandler(index)}
                        key={index}
                        changed= {(event) => this.nameChangedHandler(event,person.id)}
                        />                
                })}
         </div>
        )
    }

return(  
    <div className="App"> 
        <p>Hey I am react App..</p>
        <p>It's really working </p>
        <button 
        style= {style}
        onClick={this.handleToggleEvent}>Click</button>
        {persons}
    </div>
        
        );
    }
}

export default App;

