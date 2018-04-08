import React, {Component} from 'react';

export default function Book({oneBook, myAction}){
    const myStyle = {fontWeight: "bold"};
        return (
                 <li>
                    <span> {oneBook.id} </span>
                    tytuł: <span style={{fontWeight: "bold"}}> {oneBook.title}</span> {' '}
                    autor: <span style={myStyle}> {oneBook.author}</span>
                    {' '}
                    <button onClick={()=>myAction(oneBook)}>&times;</button>
                 </li>
        )

   
}