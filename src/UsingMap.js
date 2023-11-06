import React from 'react'
import Jokes from './Components/Jokes'
import jokesData from './jokesData'

export default function UsingMap(){
  
  const joke = jokesData.map(function(item){
    return <Jokes 
          Setup = {item.Question}
          Punchline = {item.punchline}
          upvotes = {item.Up}
          downvotes = {item.Down}
    />
  })


  return (
    <div>
      {joke}
    </div>
  )
}
