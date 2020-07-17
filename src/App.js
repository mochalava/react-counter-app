import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    console.log("App - Constructor", this.props);
  }

  componentDidMount() {
    console.log("App - Mounted");
    // Ajax Call
  }

  state = {
    counters: [
      { id: "1", value: 1 },
      { id: "2", value: 2 },
      { id: "3", value: 3 },
      { id: "4", value: 4 },
      { id: "5", value: 5 },
      { id: "6", value: 6 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({
      counters,
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        ></Navbar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
