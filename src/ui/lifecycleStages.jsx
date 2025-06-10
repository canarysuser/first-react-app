import React, { Component } from 'react'

export class LifecycleStages extends Component {
    state={
        counter:1
    }
    constructor(props) {
        super(props);
        console.log('LifecycleStages constructor');
    }
    componentDidMount() {
        console.log('LifecycleStages componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifecycleStages shouldComponentUpdate', nextProps, nextState);
        return false; // or false based on your logic
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('LifecycleStages componentDidUpdate', prevProps, prevState);
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('LifecycleStages getDerivedStateFromProps', nextProps, prevState);
        // Return new state or null to indicate no change
        return null; // or { counter: nextProps.counter } if you want to update state based on props
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleStages getSnapshotBeforeUpdate', prevProps, prevState);
        // Return a value to be passed to componentDidUpdate
        return null; // or some value if you need to capture something before the update
    }   
    componentWillUnmount() {
        console.log('LifecycleStages componentWillUnmount');
    }
    // UNSAFE_componentWillMount() {
    //     console.log('LifecycleStages UNSAFE_componentWillMount');
    //     // Note: This method is deprecated and should not be used in new code
    // }
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log('LifecycleStages UNSAFE_componentWillReceiveProps', nextProps);
    //     // Note: This method is deprecated and should not be used in new code
    // }
    // UNSAFE_componentWillUpdate(nextProps, nextState) {
    //     console.log('LifecycleStages UNSAFE_componentWillUpdate', nextProps, nextState);
    //     // Note: This method is deprecated and should not be used in new code
    // }
  render() {
    console.log('LifecycleStages render');
    return (
      <div>
        LifecycleStages
        <button className='btn btn-primary m-2'
                onClick={() => this.setState({ counter: this.state.counter + 1 })}>
          Increment Counter
          </button>
        <p>Counter: {this.state.counter}</p>
      </div>
    )
  }
}

export default LifecycleStages