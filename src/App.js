import React, {Component} from 'react';
import './App.css';
import Forms from './FormEmployee'
class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
        ;
    }
    // componentDidMount() {
    //     this.myinterval =
    //         setInterval(
    //             () => {
    //                 this.setState({
    //                     date:new Date()
    //                 })}
    //             ,1000)
    // }
    // componentWillUnmount() {
    //     clearInterval(this.myinterval);
    // }
    // componentDidUpdate() {
    //     console.log("New Change")
    // }
    render(){
        return <div className="App">
            <header className="App-header">
            <Forms/>
            </header>
            {this.state.date.toLocaleTimeString()}
        </div>
    }
}
export default App;
