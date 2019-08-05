import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        person: [
            {name: 'Sundar Pichayi from Google', age: 49},
            {name: 'Jeff Bezos from Amazon', age: 60},
            {name: 'Elon Musk from Paypal', age: 62}
        ],
    otherState : 'some random value', 

    setPersons : false       
};

switchNameHandler = (newName) => {
    this.setState({
    person: [
            {name: newName, age:47},
            {name: 'P.Malati', age: 65},
            {name: 'Narayan murthy', age: 98}
            ]
        })
    }

nameChangedHandler = (event) => {
        this.setState({
          person: [
            {name: 'sayli', age: 50},
            {name: event.target.value, age:20},
            {name: 'will smith', age:40}
              ]
         })
        }

handleToggleEvent = () => {

       const isClicked = this.state.setPersons;
       this.setState({setPersons : !isClicked});
}


    render() {
            const style = {
          backgroundColor: 'white',
          font: 'inherit',
          padding : '8 px',
          border: '1x solid blue',
          cursor: 'pointer'
        };
    
    let persons = null;

    if (this.state.setPersons){
        persons = ( 
        <div>
            <Person
                name={this.state.person[0].name}
                age={this.state.person[0].age}
            >
                children
            </Person>

            <Person
                name={this.state.person[1].name}
                age={this.state.person[1].age}
                click = {this.switchNameHandler.bind(this,'schawn T.L.')}
                changed ={this.nameChangedHandler}
            />

            <Person
                name={this.state.person[2].name}
                age={this.state.person[2].age}
                // changed ={this.nameChangedHandler}
            />

        </div> )

        }

return (
            <div className="App">     
            <h1>Hi, I am react app</h1>

             <button style= {style} 
             onClick= {this.handleToggleEvent} > 
                Switch Name </button>
                {persons}                   
            </div>
        );
    }
}


export default App;





























// import React, { useState} from 'react';

// import Person from './Person/Person';

// const App = props => {

//    const [ personState, setPersonState] =  useState({ 
//     person : [
//             {name : 'swapnali', age: '20'},
//             {name: 'alexa', age :'28'},
//             {name : 'bear grylls', age: '30'}
//          ],
//           otherState : 'some other value'
//       })

//       console.log(personState);

//   const  switchNameHandler = (newName) => {
//     this.setState({
//            person : [
//                {name : 'newName', age: '23'},
//                {name: 'alexa', age :'28'},
//                {name : 'schwan', age: '30'}
//                ]
//           });
          
//       };

//    return( 

//         <div> 
//           <h1>Hello there I am Maximilliar..!! </h1>

//           <p>This is the complete react guide for you..!!</p>
          
//           <button onClick={this.switchNameHandler.bind(this,'abcdef')}> switch name </button>

//         <Person name={personState.person[0].name} 
//         age={personState.person[0].age} />

//         <Person  name={personState.person[1].name} 
//         age={personState.person[1].age}
//         click={this.switchNameHandler.bind(this,'Max!!')}
//         > My-hobbies: Singing and reading</Person>

//         <Person name={personState.person[2].name} 
//         age={personState.person[2].age} />

//         </div>
//    );

// }

// export default App;



















