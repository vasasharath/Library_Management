import React, { Component } from 'react';
import Book from './Book';

class BookLists extends Component {
  render() {
    return (
    	<div className="container body"> 
    			<div className="row row-margin">
    			{	this.props.books.map((book)=>{
    					return <Book  book={book} key={book._id.$oid}/> ;
    				})
    			}
    		</div>
    	</div>
    );
  }
}

export default BookLists;