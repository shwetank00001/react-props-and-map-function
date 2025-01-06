import React from 'react'
import './jokesData'
import jokesData from './jokesData'

const Jokes = () => {


    const [ show, setShow ] = React.useState(false)

    const swapBtn = show ? "Show punchline" : "Hide punchline"

    function swap(){
        setShow(function(item){
            return(!item)
        })
    }

    const ele = jokesData.map(function(item){
        return(
            <div>
                <h3>{item.Question}</h3>
                { show && <h3>{item.punchline}</h3> }
                <button onClick={swap}>{swapBtn}</button>
            </div>
        )
    })
  return (
    <div>
        {ele}
    </div>
  )
}

export default Jokes