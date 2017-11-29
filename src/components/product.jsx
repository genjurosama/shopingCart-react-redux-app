import React from 'react';

export const Product = ({title,price,qt,unitPrice,cartView})=>{
    if(cartView){
        return (
            [ 
                <td> {title}</td>,
                <td> {price.toFixed(2)}</td>,
                <td> {qt} </td>
               ]
        )
    }else{
        return(
            [ 
                <td> {title}</td>,
                <td> {price.toFixed(2)}</td>
               ]
        )
    }
}