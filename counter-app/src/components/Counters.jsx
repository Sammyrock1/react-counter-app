import React, { Component } from 'react';
import Counter from "./counterComponents";

class Counters extends Component {
  // componentDidUpdate(prevProps,preState){
  //   console.log("prevProps",prevProps);
  //   console.log("prevState",preState);
  //   if(prevProps.counters.value !== this.props.value){
  //     //ajex call and get new data from the server
  //   }
  // }
  // componentWillUnmount(){
  //   console.log("Counter-Unmount")
  // }
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
     return (
       <div>
         <button
           onClick={onReset}
           className="btn btn-primary btn-sm m-2"
         >
           Reset
         </button>
         {counters.map((counter) => (
           <Counter
             key={counter.id}
             onDelete={onDelete}
             onIncrement={onIncrement}
             counter={counter}
           />
         ))}
       </div>
      
     );
   };
  };
  

  
 

 
export default Counters;