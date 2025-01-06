import React from 'react'
import Jokesnew from './Components/Jokesnew'


const App = () => {
  return (
    <div>
      <Jokesnew 
        setup = "I got my daughter a fridge for her birthday."
        punchline = "I can't wait to see her face light up when she opens it"
        upVotes = "5"
        downVotes = "6"
       />
      <Jokesnew 
        setup = "What's the best thing about Switzerland?"
        punchline = "I don't know, but the flag is a big plus!"
        upVotes = "5"
        downVotes = "6"
       />
      <Jokesnew 
        setup = "Jokes HEHHEHE"
        punchline = "Bhow Bhow!!"
        upVotes = "5"
        downVotes = "6"
       />
      <Jokesnew 
        setup = "Woof Woof"
        punchline = "Bhow Bhow!!"
        upVotes = "5"
        downVotes = {6}
       />
      <Jokesnew 
        setup = "Maggi Noodles"
        punchline = "feeling hundy"
        upVotes = {5}
       />
    </div>
  )
}

export default App