import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => {
                this.setState({
                    robots: users
                });
            })
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));
        if (!robots.length) {
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox 
                    searchChange={this.onSearchChange}
                    searchfield={searchfield}
                    />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;