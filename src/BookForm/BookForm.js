import React, { Component } from 'react';

export default class BookForm extends Component{
    constructor(props){
        super(props);
        this.state={id:0, title:'', author:''};

        this.getInputId=this.getInputId.bind(this);
        this.getInputAuthor=this.getInputAuthor.bind(this);
        this.getInputTitle=this.getInputTitle.bind(this);
        this.submit=this.submit.bind(this);
    }

    getInputId(event){
        this.setState({id : event.target.value})
    }

    getInputAuthor(event){
        this.setState({author: event.target.value})
    }

    getInputTitle(event){
        this.setState({title: event.target.value})
    }

    submit(){
        if(this.state.id!=='' & this.state.id!==0){
            this.props.addBook({id:this.state.id, title:this.state.title, author:this.state.author});
            this.setState({id:0, title:'', author:''});
        }
    }
    render(){
        return( <div>
           <label htmlFor ="idBook">id ksiazki</label>
           <input type="text" id="idBook" value={this.state.id} onChange={this.getInputId}/> 
           <br/>
           <label htmlFor ="author">author</label> 
           <input type="text" id="author" value={this.state.author} onChange={this.getInputAuthor}/>  
           <br/>
           <label htmlFor ="title">title</label>
           <input type="text" id="title" value={this.state.title}  onChange={this.getInputTitle}/> 
           <button type="submit" onClick={this.submit}>dodaj</button>
        </div>)
    }
}