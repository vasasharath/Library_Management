import React, { Component } from 'react';

class Book extends Component {

  render() {
  	let imageUrl
  	if(this.props.book.image){
  		 imageUrl = this.props.book.image.indexOf('http')!=-1 ? this.props.book.image : 'http://'+this.props.book.image;
  	}else{
  		imageUrl="";
  	}
    
    return (
    	<div className="col-sm-3 card-margin">
	  		<div className="card card-width" >
			    <img className="card-img-top card-image" src={imageUrl} alt="Card image"/>
			    <div className="card-body">
			      <p className="text-dark card-title"><strong>{this.props.book.title}</strong></p>
			      <p className="card-title"><strong>Author : </strong> {this.props.book.authors[0].display_name}</p>
			      <p className="card-title"><strong>ISBN :  </strong>{this.props.book.primary_isbn}</p>
			      <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal">
						Details</button>
			    </div>
			  </div>
      </div>
    );
  }
}

export default Book;