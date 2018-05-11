import React, { Component } from 'react';
import '../app.css';
import Pagenation from './Pagenation';
import BookLists from './BookLists';

class Body extends Component {
	
constructor(props) {
    super(props);

    this.state = {
      books: [],
      searchText : '',
      pageIndex : 0
    };

    this.increasePageIndex = this.increasePageIndex.bind(this);
    this.decreasePageIndex = this.decreasePageIndex.bind(this)

}

updateSearch (event){
	this.setState({searchText :event.target.value});	
}

fetchData(){
		console.log(this.state.pageIndex);
		var url=`http://localhost:3001/books/?index=${this.state.pageIndex}`;
		fetch(url)
		.then(results => {
			return results.json();
		}).then(data => 
				{
					this.setState({books:data});
				}
		);
}

increasePageIndex (event){
	this.setState({pageIndex : this.state.pageIndex+1},()=>{
		this.fetchData();
	});
}

decreasePageIndex (event){
	if(this.state.pageIndex >=1){
		this.setState({pageIndex : this.state.pageIndex-1},()=>{
			this.fetchData();		
		});			
	}
}
  

	componentDidMount(){

		this.fetchData();
	}


  render() {
  	let filteredObject = this.state.books.filter((book)=>{
  		return book.title.toLowerCase().indexOf(this.state.searchText.toLowerCase())!==-1
  	});

    return (
    	<div>
    		<div className="row row-margin" >
    			<div className="col-sm-6"></div>
    			<div className="col-sm-5">
	    			<form>
	    			  <div className="form-group">
					    <input type="text" className="form-control" placeholder="Search by Book Title..." value={this.state.searchText} onChange={this.updateSearch.bind(this)}/>
					  </div>
					</form>
	    		</div>
    		</div>
    		<div>
    			<BookLists books={filteredObject} />
    		</div>
    		<div>
    			<div className="">
		 			<ul className="pagination justify-content-center">
					    <li className="page-item"><a className="page-link" href="#" onClick={this.decreasePageIndex}>Previous</a></li>
					    <li className="page-item"><a className="page-link" href="#" onClick={this.increasePageIndex}>Next</a></li>
					</ul> 
		    	</div>
    		</div>
    	</div>
    );
  }
}

export default Body;