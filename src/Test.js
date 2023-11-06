import React from 'react'
import jokesData from './jokesData'
import JokeWork from './Components/JokeWork'

const Test = () => {

    const ele = jokesData.map(function(item){
        return (
            <JokeWork
            header= {item.Question}
            punch = {item.punchline} />
        )
    })

  return (
    <div>
        {ele}
    </div>
  )
}

export default Test