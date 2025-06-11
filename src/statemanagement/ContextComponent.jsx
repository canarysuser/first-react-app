import React, {useContext, useReducer, useState} from "react";

//default values for the state
const initialState={name:'', email:'', location:''}

//Define the context Object for storing the data 
export const PersonContext = React.createContext(); 

//Define the action types 
const NameActionType='Name',
    EmailActionType='Email',
    LocationActionType='Location';

//Define Action Object creators - returns the action object 
export function nameActionCreator(personName) { 
    return {type: NameActionType, name:personName};
}
export function emailActionCreator(email) { 
    return {type: EmailActionType, email:email};
}
export function locationActionCreator(location) { 
    return {type: LocationActionType, location:location};
}

//Reducer 
export const stepReducer = (currentState, incomingAction) => { 
    currentState = currentState || initialState; 
    switch(incomingAction.type) { 
        case NameActionType: return {...currentState, name:incomingAction.name}
        case EmailActionType: return {...currentState, email:incomingAction.email}
        case LocationActionType: return{ ...currentState, location:incomingAction.location}
    }
    return currentState;
}
//Individual Components 
export function NameComponent() {
    const [personName, setPersonName] = useState('');
    const {dispatch} = useContext(PersonContext);
    return (
        <div className="input-group mb-3">
            <input type="text"
                className="form-control"
                placeholder="Enter Name"
                value={personName}
                onChange={(e)=>setPersonName(e.target.value)}
                />
            <button className="btn btn-success"
            type="button" id="btn1" 
            onClick={()=>dispatch(nameActionCreator(personName))}>
                Set Name
            </button>
        </div>
    )
}
export function EmailComponent() {
    const [personEmail, setPersonEmail] = useState('');
    const {dispatch} = useContext(PersonContext);
    return (
        <div className="input-group mb-3">
            <input type="text"
                className="form-control"
                placeholder="Enter Email"
                value={personEmail}
                onChange={(e)=>setPersonEmail(e.target.value)}
                />
            <button className="btn btn-success"
            type="button" id="btn1" 
            onClick={()=>dispatch(emailActionCreator(personEmail))}>
                Set Email
            </button>
        </div>
    )
}
export function LocationComponent() {
    const [personLocation, setPersonLocation] = useState('');
    const {dispatch} = useContext(PersonContext);
    return (
        <div className="input-group mb-3">
            <input type="text"
                className="form-control"
                placeholder="Enter Email"
                value={personLocation}
                onChange={(e)=>setPersonLocation(e.target.value)}
                />
            <button className="btn btn-success"
            type="button" id="btn1" 
            onClick={()=>dispatch(locationActionCreator(personLocation))}>
                Set Location
            </button>
        </div>
    )
}
export function ContextSubComponent1() { 
    const {state} = useContext(PersonContext); 
    return (
        <div className="card shadow m-auto mt-5">
            <div className="card-header h3 bg-danger text-center p-3">Context Ops 1</div>
            <div className="card-body">
                <NameComponent />
                { state.name && <EmailComponent/>}
                { state.email && <LocationComponent/>}
                <div className="alert alert-success mt-5">
                    {
                        state.location && 
                        <p className="lead">
                            Person with name 
                            <span className="text-danger fs-5 text-uppercase"> {state.name} </span>
                            and email 
                            <span className="text-danger fs-5 text-uppercase"> {state.email} </span>
                            residing at 
                            <span className="text-danger fs-5 text-uppercase"> {state.location} </span>
                            is created successfully
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}
export function ContextSubComponent2() { 
    const {state} = useContext(PersonContext); 
    return (
        <div className="card shadow m-auto mt-5">
            <div className="card-header h3 bg-warning text-center p-3">Context Ops 2</div>
            <div className="card-body">
                <NameComponent />
                { state.name && <EmailComponent/>}
                { state.email && <LocationComponent/>}
                <div className="alert alert-success mt-5">
                    {
                        state.location && 
                        <p className="lead">
                            Person with name 
                            <span className="text-danger fs-5 text-uppercase"> {state.name} </span>
                            and email 
                            <span className="text-danger fs-5 text-uppercase"> {state.email} </span>
                            residing at 
                            <span className="text-danger fs-5 text-uppercase"> {state.location} </span>
                            is created successfully
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}
export function ContextComponent() { 
    const [state, dispatch] = useReducer(stepReducer, initialState); 

    return (
        <PersonContext.Provider value={{state, dispatch}}>
            <div className="row">
                <div className="col-6">
                    <ContextSubComponent1/>
                </div>
                <div className="col-6">
                    <ContextSubComponent2/>
                </div>
            </div>
        </PersonContext.Provider>
    )
}