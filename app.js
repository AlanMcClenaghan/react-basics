// In React, "state" is the data you want to track in your app. 

// State is what allows you to create components that are dynamic and interactive, and it's the only data that changes over time.

// State is only available to components that are class components.

/*
function Header() {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
} */

// The above Function Declaration rewritten as an Arrow Function below:

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
                {props.name}     
            </span>
        
            <Counter />
        
        </div>
    );
}

/*
const Counter = (props) => {
    return (      
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
} */

// The above Stateless Functional Component above rewritten as a class below:

// Classes need to access props with this.props.

class Counter extends React.Component {
    
    /*
    constructor() {
        super()
        this.state = {
            score: 0
        };
    } */
    
    // The above Constructor method for initialising state can be rewritten as a class property below:
    
    state = {
        score: 0
    }

    // The only way React allows you to update a component's state is by using its built-in setState() method.

    // You need to bind your custom methods, so that 'this' refers to the component instance.

    // Because the prevState callback function is guaranteed to fire after the update applied and rendered out to the DOM, this is a more reliable way to set state based on previous state.

    // Whenever you're updating to a new state based on a previous state, it's actively recommended that you use this approach. That way, you can be sure that state did indeed update correctly:

    decrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score - 1
            };          
        });
    }

    // To make the callback more concise, you could omit the return keyword and curly braces, by wrapping the body of the function in parentheses:

    incrementScore = () => {
        this.setState( prevState => ({
            score: prevState.score + 1         
        }));
    }

    // You need to bind your custom methods, so that 'this' refers to the component instance.

    // A common way is to call .bind(this) method in the render method.

    // Another common way to bind event handlers is with an arrow function, that's because arrow functions use what's called a lexical 'this' binding which means that it automatically bind them to the scope in which they are defined.

    // if we rewrite the increment score method as an arrow function, the function gets bound to the component instance:

    /*
    
    incrementScore() {
        this.setState({
            score: this.state.score + 1
        });
    }
    
    incrementScore = () => {
        this.setState({
            score: this.state.score + 1
        });
    } */

    // The arrow function is enclosed inside the counter class, so the context is the component instance.

    /* Now we don't need to worry about binding it in the onClick event or in the constructor which is yet another way to bind custom methods. We can simply reference and call the function in the onClick event with:
    
    this.incrementScore
    
    and make sure there are no parentheses at the end. */

    render() {
        return (      
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
            </div>
        );
    }
}

class App extends React.Component {
    
    state = {
        players: [
    
            {
                name: "Alan",
                id: 1
            },
            {
                name: "Ruth",
                id: 2
            },
            {
                name: "Matthew",
                id: 3
            },
            {
                name: "Lucy",
                id: 4
            }
        ]
    };
    
    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter( player => player.id !== id )
            };
        });
    }
    
    render() {
        return (
            <div className="scoreboard">
                <Header 
                    title="Scoreboard" 
                    totalPlayers={this.state.players.length} 
            />
            
                { /* Players list */  }
                {this.state.players.map( player =>
                    <Player
                        name={player.name}
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}      
            </div>  
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// In React, your entire UI is a composition of functions.

// User-Defined Components Must Be Capitalized

// JSX lets you define your own tags. A JSX tag can not only represent an HTML element (like <h1>, <span>, and <header>), it can also represent a user-defined component.

// Every React component and element can receive a list of attributes called properties (or props). Props are a core concept in React because it's how you get data into a component. Most of the components in your UI will be configured with props. For example, you'll add functionality to a component, have it behave a certain way, and display its contents with props.

// In React, "state" is the data you want to track in your app. State is what allows you to create components that are dynamic and interactive, and it's the only data that changes over time.

// Data from state is distributed through props.

// State is only available to components that are class components. Class components offer a more powerful way to build components because they're the only type of components that let you use state.

// There are two ways to create a component in React, a function and a class.

// Classes need to access props with this.props.

// In class components, props are not accessed through arguments like they are in functional components. Props are a property of the component itself. So 'this' refers to the component instance.

// So when do you use a class versus a function?

// If a component is only receiving input through props and rendering UI, it's best to use a function or a Stateless Functional Component.

// Functions are a little bit easier to write, read and understand, and you can think of a stateless functional component as just the render method from a class component with props passed in as an argument.

// When you want to add state, that's when you use a class component.

// To make the Counter component interactive, we need to be able to trigger changes to the data in state. We'll first create an event handler that updates state, using React's built-in setState() method. Then we'll give the buttons an onClick event that calls the event handler when clicked.

// In React, state is never modified directly. The only way React allows you to update a component's state is by using its built-in setState() method.

// When you create a class component that extends from React.Component, any custom methods you create are not bound to the component by default. You need to bind your custom methods, so that 'this' refers to the component instance.

// Whenever you need to update state based on previous state, you shouldn't rely on this.state to calculate the next state. State updates may be asynchronous, so it may not always lead to the component re-rendering with new data, and could cause state inconsistency. setState() accepts a callback function that produces state based on the previous state in a more reliable way.

// One important concept to understand is the different types of state.

// There are two main types of state to consider when designing a React app: application state and component state.

// Application state is the main state we typically think about. It's usually the data that's available to the entire app. In the scoreboard app, application state lives in the app component, and all of its child components have access to it.

// The counter however has state that's not shared or visible outside of the component. It's state required just for that component to do it's job like increasing and decreasing the score. This type of state is refered to as local component state.

// Props is what React uses to pass data from component to component. You can pass functions through props, even data from state.