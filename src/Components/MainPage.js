import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

class MainPage extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()));
    }

    render() {
        const { searchField, onSearchChange, isPending } = this.props;
        if (isPending) {
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox 
                    searchChange={onSearchChange}
                    searchfield={searchField}
                    />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={this.filterRobots()}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default MainPage;