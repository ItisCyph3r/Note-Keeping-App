import React from 'react';
import Emojipedia from '../emojipedia/data';

export default function Logic() {
    // var numbers = [1, 5, 19, 31, 98, 38]
    
    // function double(x){
        
    // }
    // const a = numbers.map((x) => {
    //     return (x * 2);
    // })
    // // console.log(a)

    // console.log('=========================')

    // const b = numbers.filter((x) => {
    //     return(x < 30)
    // })
    // // console.log(b)

    // const c = numbers.reduce((x, y) => {
    //     return(x * y)
    // })
    // console.log(c)

    // console.log(Emojipedia)
 

    const d = Emojipedia.map((x) => {
        return x.meaning.slice(0, 100)
    })
    console.log(d)

    return (
        <>

        </>
    );
}
