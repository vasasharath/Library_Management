import React, { Component } from 'react';

class Pagenation extends Component {
  render() {
  	console.log(this.propspageIndex);
    return (
    	<div className="">
 			<ul className="pagination justify-content-center">
			    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
			    <li className="page-item"><a className="page-link" href="#">Next</a></li>
			</ul> 
    	</div>
    );
  }
}

export default Pagenation;

 