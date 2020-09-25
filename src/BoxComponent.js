import React, {Component} from 'react';
import'./Hello.css';

/*
class BoxComponent extends Component {
    render() {
        return (
            <div className='f1 tc'>
                <h1> This is my box component </h1>
                <p>Welcome to React</p>
                <p>{this.props.greeting}</p>
            </div>
        )
    }
}

*/
const BoxComponent = (props) => {
    return (
        <div className='f1 tc'>
            <h1> This is my box component </h1>
            <p>Welcome to React</p>
            <p>{props.greeting}</p>
        </div>
    );
}
export default BoxComponent;