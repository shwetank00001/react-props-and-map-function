import React from 'react'

const JokeWork = (props) => {

    const [flip,setFlip] = React.useState(false)

    function addFlip(){
        setFlip(function(item){
            return(!item)
        })
    }


    const check = flip ? "Hide Punchline " : "Show Punchline"



  return (
    <div>
       <h2>The question is : {props.header}</h2>
        {flip && <h4>The punch is : {props.punch}</h4>}
        <button onClick={addFlip}>{check}</button>
        <hr />
    </div>
  )
}

export default JokeWork