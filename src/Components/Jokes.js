import React from 'react'

const Jokes = (props) => {

  const [showPunch, setShowPunch ] = React.useState(false)

  function handleShowPunch(){
    setShowPunch(function(item){
      return(!item)
    })
  }


  // we use ternary to select between 2 values
  const buttonVal = showPunch ? "Hide Punchline" : "Show Punchline"

  return (
      <div>
          <h2>{props.Setup}</h2>
          {/* we use conditional rendering to show or hide one particular value */}
          {showPunch && <p>{props.Punchline}</p>}

          <button onClick={handleShowPunch}>{buttonVal}</button>

          <hr />
      </div>
  );
}

export default Jokes