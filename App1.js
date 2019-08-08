import React, { Component} from 'react';
import Person from './Person/Person';

class App extends Component {
    
    constructor(props) {
    super(props);

    this.state = {  
        person:[  
                {id:'id1',name:'Alexa', age:'80'},
                {id:'id2',name:'jordan', age:'40'}, 
                {id:'id3',name:'max' , age:'50'}               
            ],

        setPersonToggle : false
    }

    this.handleClick = this.handleClick.bind(this);
    this.nameChangedHandler= this.nameChangedHandler.bind(this);
    this.handleToggleEvent= this.handleToggleEvent.bind(this);
    this.deletePersonHandler = this.deletePersonHandler.bind(this);
}

handleToggleEvent() {
    const isClicked = this.state.setPersonToggle;
    this.setState({setPersonToggle:!isClicked});
    }


handleClick(){
    this.setState({
    person:[  
        {name:'Tony stark', age:'30'},
        {name:'Jeniffer', age:'46'}, 
        {name:'Mark' , age:'78'}   
        ]
    })
}

nameChangedHandler(event, id) {
        this.setState({
            person: [
                {name:'karl_marks',age:'25'},
                {name: event.target.value, age:'87'},
                {name:'steve', age: '50'}
            ]
        })
    }
    
deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.person];  //createing copy of the original array
    persons.splice(personIndex,1);
    this.setState({person:persons});
}

render(){   
    const style = {
        backgroundColor: 'white', 
        font: 'inherit', 
        padding : '8 px',
        border: '1x solid blue',
        cursor: 'pointer'
    };

    let persons = null;
    
    if(this.state.setPersonToggle){
    persons = (  
     <div> 
        {this.state.person.map((user, index)=> {
         return <Person 
         name={user.name} 
         age={user.age}
         changed= {(event) => this.nameChangedHandler(event,user.id)}
         click= {() => this.deletePersonHandler(index)}
         key={user.id}
         />
        })}
     </div>   
    )  
}


    return(
            <div>
            <button onClick={this.handleToggleEvent} 
            style={style}>Click Me</button>
            {persons}
            </div>
        );
    }
}

export default App;

