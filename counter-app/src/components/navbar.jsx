//import React, { Component } from 'react';
import React from 'react';


//stateless function 
const  NavBar = ({totalCounters}) => {
  return (
    <React.Fragment>
      <nav>
        <div>
          Navbar
           <span className="ml-2">
            {totalCounters}
            </span>
        </div>
      </nav>
    </React.Fragment>
  );

};

// class NavBar extends Component {
//     render() {
//     console.log(this.props.totalCounters);
//     return (
//       <React.Fragment>
//         <nav>
//           <div>
//             Navbar
//             <span className="ml-2">{this.props.totalCounters}</span>
//           </div>
//         </nav>
//       </React.Fragment>
//     );
     
//     }

// }
export default NavBar;