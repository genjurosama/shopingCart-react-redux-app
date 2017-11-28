import React from 'react';

export const Product = ({title,price})=>{
   return ( 
       [ 
        <td> {title}</td>,
        <td> {price}</td>
       ]
    );
}