import React, {useState} from 'react'

export function Greetings() {

    //hook to manage state
    const [title, setTitle] = useState("Greetings"); 
    const [subtitle, setSubtitle] = useState("Sub Header");
    const [message, setMessage] = useState("Initial Message from State");

    return (
        <>
        <div className='card shadow m-auto w-50'>
            <div className='bg-warning p-2'>
                <h3>State with Function Objects</h3>
            </div> 
            <div className='card-body'>
                <Greeting title={title} subtitle={subtitle} message={message}/>
                <HelloWorld title={title} setTitle={setTitle}/>
            </div>
        </div>
        </>
    )
}

//Presentational Component
function Greeting(props){
    return (
        <h6>
            Greeting: [Title: {props.title}, Subtitle: {props.subtitle}]
            Message: {props.message}
        </h6>
    )
}

function HelloWorld(props) {
    return (
        <p className='fw-bold fs-3'>
            To Change the title [{props.title}], click the button below.
            <button className='btn btn-success m-2' 
                onClick={() => props.setTitle("Hello World")}>
                Change Title
            </button>
        </p>
    )
}


