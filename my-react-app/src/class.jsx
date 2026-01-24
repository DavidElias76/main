
// import './App.css'
// import React from 'react';

import React from "react";

// component properties should be kept in an object called state.
// The state object is where you store properties and values of na object
// super()  is used to inherit the properties and methods of the parent class React.Component

class CarComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            color: "red"
        }
    }

    render(){
        return (
            <>
                <h2 className="text">Hi I am car</h2>
            </>
        )
    }
}

// NOTE: props can be used with or without the constructor

class Vehicle extends React.Component {
    constructor(props){
        // the prop property is passed to the parent class using super()
        super(props);
    }

    render(){
        return (
            <>
                <h2 className="text">I am  a {this.props.model}</h2>
            </>
        )
    }
}

// the setState method is used to update/change value of the state object
class VehicleDetails extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
            brand: "Toyota",
            model: "Corolla",
            year: 2020,
            color: "blue"
        }
    }

    // The setState() method will change the color property value of the state object when the button is clicked
    changeColor = () => {
        this.setState({ color: "green" }); // updating the color property of the state object(sepcify the property to be changed inside the setState method)
    }

    render(){
        return (
            <>
                <h2 className="text">I have a {this.state.color} {this.state.brand} {this.state.model} from {this.state.year}</h2>
                <button className="button" onClick={this.changeColor}>Change Color</button>
            </>
        )
    }

}

// Lifecycle of Components: Mounting Phase - using getDerivedStateFromProps() method

// Mounting Methods:
// constructor(), getDerivedStateFromProps(), render(), componentDidMount()

// the constructor() is called before anything else

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {favouriteColor: "blue"}; // this is the initial state which will be overridden by the getDerivedStateFromProps method
    }

    static getDerivedStateFromProps(props){
        return {favouriteColor: props.favcol}; // does not have access to this keyword since it is a static method and it belongs to the class itself
    }

    render(){
        return (
            <>
            {/* the new object before rendering it will be favouriteColor: green */}
                <h2>My Favourite Color is {this.state.favouriteColor}</h2>
            </>
        )
    }

}

// The CompoonentDidMount() method
// The ComponentDidMount method is called after the component is rendered
class Mounting extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favouriteColor: "red"
        }
    }

    // componentDidMount method is called after the component is rendered
    componentDidMount(){
        setTimeout(() => {
            this.setState({favouriteColor: "yellow"}) // after 5 second the favouriteColor state will be changed to yellow
        }, 5000);
    }

    render(){
        return (
            <>
                <h2>My Favourite Color is {this.state.favouriteColor}</h2>
            </>
        )   
    }
}


// Updating Methods:
// getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// getDerivedStateFromProps() method is also called during the updating phase

class GetDerivedState extends React.Component {
    constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"}); // The color doesnot change to blue on button click
  }
//  The button will not change the color since the getDerivedStateFromProps method overrides the state value with the prop value because it is called before every render
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button> 
      </div>
    );
  }
}

// shouldComponentUpdate method - determines whether the component should updated or not
// the default value is true - if true the component will update otherwise it will not update
class ShouldChangeComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favouritecolor: "blue"
        }
    }

    shouldComponentUpdate(){
        // return true; // This is the default value of this method - if true the component will update otherwise 
        return false; // if false the component will not update 
    }

    changeColor = () => {
        this.setState({favouritecolor: "red"});
    }

    render(){
        // the button will not change the color since shouldComponentUpdate returns false - so it will remain the same 
        return (
            <>
                <h2>My Favourite Color is {this.state.favouritecolor}</h2>
                <button className="button" onClick={this.changeColor}>Change Color</button>
            </>
        )
    }
}

// getSnapshotBeforeUpdate() method - used to capture some information from the DOM before it is potentially/previously changed
class GetSpanShot extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favouritecolor: "red"
        }
    }
    // upadate the component after 2 seconds
    componentDidMount(){
        setTimeout(() => {
            this.setState({favouritecolor: "yellow"})
        }, 2000);
    }

    // getSnapshotBeforeUpdate method is called right before the changes from the virtual DOM are to be reflected in the DOM
    // it lets ypu check what values were before the update
    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML = "Before the update, the favourite color was " + prevState.favouritecolor;
    }

    componentDidUpdate(){
        document.getElementById("div2").innerHTML = "The updated favourite color is " + this.state.favouritecolor;

    }

    render(){
        return (
            <>
                <h2>My Favourite Color is {this.state.favouritecolor}</h2>
                <div id="div1"></div>
                <div id="div2"></div>
            </>
        )
    }
}
export {CarComponent, Vehicle, VehicleDetails, Header, Mounting, GetDerivedState, ShouldChangeComponent, GetSpanShot};