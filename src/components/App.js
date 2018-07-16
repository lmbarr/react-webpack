import Header from './Header';
import HabitItem from './HabitItem';
import SocialNet from './SocialNet'
import Footer from "./Footer";
import Buttons from './Buttons'
import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { habits: [] };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(e.target);
        let filterList = [];
        for (let habit of this.state.habits) {
            if (habit.id != e.target.id) {
                filterList.push(habit);
            }
        }
        this.setState({
            habits: filterList
        });
        // console.log("dataaa handle ", this.state.habits);

    }

    componentDidMount() {
        console.log("Inside componentDidMount");
        fetch('http://localhost:3001/habits')
            .then(res => res.json())
            .then(habits => this.setState({ habits }));
    }

    render() {
        const listItems = this.state.habits.map((habit) =>
            <HabitItem handleClick={this.handleClick} id={habit.id} name={habit.name} date={habit.name}/>
        );
        console.log("dataaa", this.state.habits);
        console.log("componenets ", listItems);
        return (
              <div>
                  <Buttons/>
                  {listItems}
                  <SocialNet/>
                  <Footer/>
              </div>
        );
      }
}

export default App;
