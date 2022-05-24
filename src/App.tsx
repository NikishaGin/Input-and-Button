import React, {useState} from 'react';
import './App.css';
import {Input} from "./Components/Input";
import {Button} from "./Components/Button";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let[title, setTitle]=useState('')


    const addMessage = (title:string) => {
        let newMessage = {message:title}
        setMessage([newMessage,...message])

    }

    const callbackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            <Input title={title} setTitle={setTitle} />
            <Button name={'+'} callback={callbackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}

        </div>


    );
}

export default App;
