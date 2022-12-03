 import React, { Component } from "react";
 import NavBar from "./components/navbar.jsx";
 import Counters from "./components/Counters";
 import "./App.css";


 class App extends Component {
   state = {
     counters: [
       { id: 1, value: 0 },
       { id: 2, value: 0 },
       { id: 3, value: 0 },
       { id: 4, value: 0 },
     ],
   };
   constructor(){
    super();
    console.log("App-Constructor");
   }
   componentDidMount(){
    console.log("App-Mount");
   }

   handleIncrement = (counter) => {
     const copyCounters = [...this.state.counters];
     //  const index = copyCounters.indexOf(counter);
     //  copyCounters[index] = {...counter};
     //  copyCounters[index].value++;
     //  this.setState({copyCounters});
     //  console.log(copyCounters[index]);
     const idx = copyCounters.findIndex((item) => item.id === counter.id);
     copyCounters[idx].value++;
     this.setState({ counters: copyCounters });
   };

   handleReset = () => {
     const counters = this.state.counters.map((c) => {
       c.value = 0;
       return c;
     });
     this.setState({ counters });
   };

   handleDelete = (counterId) => {
     const counters = this.state.counters.filter((c) => c.id !== counterId);
     this.setState({ counters });
     console.log(counterId);
   };
   render() {
   // console.log("App-Rendered")
     return (
       <React.Fragment>
         <NavBar 
         totalCounters={this.state.counters.filter(c => c.value > 0).length}
         />
         <main className="container">
           <Counters 
           counters={this.state.counters}
           onReset={this.handleReset} 
           onIncrement={this.handleIncrement}
           onDelete={this.handleDelete}/>
         </main>
       </React.Fragment>
     );
   }
 }

 export default App;
