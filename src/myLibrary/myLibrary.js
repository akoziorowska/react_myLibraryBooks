import React, {Component} from 'react';
import BookList from '../BookList/BookList';
import BookSorter from '../BookSorter/BookSorter';
import BookForm from '../BookForm/BookForm';


export default class MyLibrary extends Component{
    constructor(){
        super();
        this.state={myBooks:[{id:7, title:'Winnie the Pooh', author:'Milne'},
                            {id:2, title:'Pinokio', author:'Collodi'},
                            {id:4, title:'Gonne with the wind', author:'Mitchel'},
                            {id:5, title:'Dziela Lenina', author:'Lenin'},
                            {id:1, title:'Men are from Mars', author:'Gray'}    
                            ],
                    rentBooks:[{id:3, title:'This is me', author:'Keala'},
                                    {id:6, title:'Jeszcze Polska', author:'Wybicki'}]};
        this.rentBook=this.rentBook.bind(this);
        this.returnBook=this.returnBook.bind(this);
        this.sortByTitle=this.sortByTitle.bind(this);
        this.sortById=this.sortById.bind(this);
        this.addBook=this.addBook.bind(this);
    }

    rentBook(book){
       this.setState({rentBooks: this.state.rentBooks.concat([book]) });
       const newListBook = this.state.myBooks.filter((v)=> {return v.title!==book.title;});
       this.setState({myBooks: newListBook});
    }

    returnBook(book){
        this.setState({myBooks : this.state.myBooks.concat([book]) });
        const newListBook = this.state.rentBooks.filter((v)=> {return v.title!==book.title;});
        this.setState({rentBooks: newListBook});
     }

    sortByTitle(){
        const alfabSort = (a,b)=>{
            return a.title.toLowerCase()>b.title.toLowerCase()? 1 : -1;
        }
        this.state.myBooks.sort(alfabSort);
        this.setState(this.state.myBooks);
        this.state.rentBooks.sort(alfabSort);
        this.setState(this.state.rentBooks);
    }

    sortById(){
        const alfabSort = (a,b)=>{
            return a.id>b.id;
        }
        this.state.myBooks.sort(alfabSort);
        this.setState(this.state.myBooks);
        this.state.rentBooks.sort(alfabSort);
        this.setState(this.state.rentBooks);
    }    

    addBook(newBook){
        this.setState({myBooks: this.state.myBooks.concat([newBook])})   
    }

    render(){
        return (<div> 
                    <p   style={{color: "red"}}> te ksiazki są w domu </p>
                    <BookList books={this.state.myBooks} myAction={this.rentBook}/>
                    <p  style={{color: "red"}}> te ksiazki są wypozyczone </p>
                    <BookList books={this.state.rentBooks} myAction={this.returnBook}/> 
                    <BookSorter sortByTitle={this.sortByTitle} sortById={this.sortById}/>  
                    <BookForm addBook={this.addBook}/>                  
                </div>)
    }

}