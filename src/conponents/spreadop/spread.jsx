import React from 'react'


const citrus = ['Lime', 'Lemon', 'Orange']
const fruits = ['Apple', 'Banana', 'Coconut', ...citrus]
console.log(fruits)


export default function Spread() {
  return (
    <div>
        Spread
    </div>
  )
}
