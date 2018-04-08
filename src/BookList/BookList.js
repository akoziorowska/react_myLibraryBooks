import React, {Component} from 'react';
import Book from '../Book/Book'

export default function BookList({books, myAction}){
    console.log(books);
        return (<ul>
                   {books.map((v,i)=> <Book key={i} oneBook={v} myAction={myAction}/>)}
                </ul>)

}

// export default function BookList({books}){
//     console.log(books);
//         return (<ul>
//             {books.map(v=> <Book title={v.title} />)}
//             </ul>)
// }


// export default class BookList extends Component{
//     render(){
//         const books = this.props.books;
//         //{books.map(v=> <Book title={v.title} />)}
//         return (<ul>
            
//             {books.map(v=> <Book title={v.title} />)}
//             </ul>)
//     }
// }

