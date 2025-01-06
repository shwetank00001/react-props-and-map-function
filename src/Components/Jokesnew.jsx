import React from 'react'

const Jokesnew = (props) => {
  return (
    <div>
        <p><b>Setup: {props.setup}</b></p>
        <p>Punchline: {props.punchline}</p>
        <p>Upvotes: {props.upVotes}</p>
        {props.downVotes && <p>DownVotes: {props.downVotes}</p>}
        <hr />
    </div>
  )
}

export default Jokesnew