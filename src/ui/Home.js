import React from 'react'
import { Greetings } from './Miscellaneous';
import CounterStoreComponent from '../statemanagement/CounterStoreComponent';

function Home() {
    let title="Home";
    let subtitle="Sub Header";
  return (
    <div className='container'>
      <div className='text-white bg-primary'>{title}</div>
      <CounterStoreComponent/>
      <MyComponent title={subtitle}/>
      <Greetings/>
    </div>
  )
}
class MyComponent extends React.Component {
  //message = "Initial Message";
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
    this.state = { 
      message : 'Initial Message from State'
    }
  }
  buttonClick() { 
    //alert("Button has been clicked!");
   // this.message = "Button Clicked!";
   //this.state.message = "Button Clicked!"; // This will not trigger a re-render
   this.setState({
      message: "Button Clicked!"
    });
    //this.forceUpdate(); // Not recommended, use setState instead
    //this.message = "Button Clicked!";
    //console.log(this.message);
    //console.log(this.state.message);
  }
  render() {
    //this.props.title = "New title";
    return (
      <div>
        <hr/>
        <h1>My Component</h1>
        <p>{this.state.message}</p>
        <p> Title from Home: {this.props.title}</p>
        <button className='btn btn-primary' 
          onClick={this.buttonClick}>Click Me!</button>
        <hr/>
      </div>
    );
  }
}
export default Home