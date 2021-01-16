import React, { Component } from 'react';

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    //with this we make sure component will not update even if parent component is updated
    shouldComponentUpdate(nextProps, nextState) {        
        if(this.state.count !== nextProps.count){
            return true;
        }
        return false;
    }

    updateCount = () => {
        //improved way to update, why? I don´t know xD
        this.setState( state => {
            return {count: state.count + 1}
        });
    }
    
    render() {
        console.log('CounterButton');
        return (
            <button color={this.props.color} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>    
        )
    }  
}

export default CounterButton;
