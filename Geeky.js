import React, {useState} from 'react';

function Geeky (){

const [name, setname] = useState('dsvxsv');


const handleClick = ()=>{

    setname('bxhbsj');
}
    return (
            <div> 
                <h4> {name}</h4>
                <button onClick={handleClick}>button</button>
            </div>        
        );

}



export default Geeky;