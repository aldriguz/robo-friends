import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
//import { robots } from './robots';
import './App.css';


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }

        console.log('constructor');
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
        
        console.log('componentDidMount');
    }

    //before: onSearchChange(event){} as method
    onSearchChange = (event) => {              
        this.setState({ searchField: event.target.value});                  
    }

    render(){
        const {robots, searchField} = this.state;
        
        const filteredRobots = robots.filter(robot =>{ 
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        console.log('render');
        if(!robots.length){
            return <h1>Loading...</h1>
        }else{
            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                    
                </div>
            );
        }
        
    }
}

export default App;

