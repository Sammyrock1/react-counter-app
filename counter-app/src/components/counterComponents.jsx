import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//     tags: [],
//   };

//   renderTags() {
//     if (this.state.tags.length === 0) return <p>There is no tag!!!</p>;

//     return (
//       <ul>
//         {this.state.tags.map((tag) => (
//           <li key={tag}>{tag}</li>
//         ))}
//       </ul>
//     );

//   }

//   render() {
//     return (
//       <div>
//         {this.state.tags.length === 0 && "please create a new tag!!!"}
//         {this.renderTags()}
//       </div>
//     );
//   }
// }
class Counter extends Component {
  state = {
   counter: this.props.counter,
  };

//constructor() {
  //super();
  //this.handleIncrement = this.handleIncrement.bind(this);
//}

 // handleIncrement = () =>{
   // this.setState({value: this.state.value + 1})
//  };


  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick= {() =>
            this.props.onIncrement(this.props.counter)
          }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => 
          this.props.onDelete(this.props.counter.id)} 
          className="btn btn-danger btn-sm m-2">
            delete
            </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.counter.value === 0 ? "warning" : "primary";
  return classes;
  }

  formatCount() {
    const { value } = this.state.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
