import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { requestRobots, setSearchField } from '../actions';


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
     return {
         onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
         onRequestRobots: () => dispatch(requestRobots())
     }
}


class App extends Component {
    componentDidMount() {        
        this.props.onRequestRobots();
    }

    render(){
        const {searchField, onSearchChange, robots, isPending, error} = this.props;
        
        const filteredRobots = robots.filter(robot =>{ 
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        
        if(!isPending && error !== '')
            return <h1>An error has ocurred</h1>

        return isPending ?
            <h1>Loading</h1> : 
           (               
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                    
                </div>
            );
    }
}

//connect returns another function that executes App as a parameter
export default connect(mapStateToProps, mapDispatchToProps)(App);
