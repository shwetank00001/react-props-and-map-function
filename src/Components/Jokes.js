import React from 'react'

const Jokes = (props) => {

  const [isShown, setIsShown] = React.useState(false)
  
  const btnPunch = isShown ? "Hide Punchline" : "Show Punchline" 

  function toggle(){
    setIsShown(function(item){
      return(!item) 
      
    })
  }
  return (
    <div >
        {props.Setup && <h3> Setup: {props.Setup}</h3>}
        {isShown && <h5> Punchline: {props.Punchline}</h5>}
        <button onClick={toggle}>{btnPunch}</button>

        
        {/* <p>Upvotes- {props.upvotes}</p>
        <p>Downvotes- {props.downvotes}</p>
        <h4>{props.isPun}</h4> */}
        
        <hr />
    </div>
  )
}

export default Jokes

// import React from 'react'

// const Jokes = (props) => {
//   return (
//     <div>
//         <h3> Setup: {props.Setup}</h3>
//         <h5> Punchline: {props.Punchline}</h5>
//         <p>Upvotes- {props.upvotes}</p>
//         <p>Downvotes- {props.downvotes}</p>
//         <h4>{props.isPun}</h4>
//         <hr />
//     </div>
//   )
// }

// export default Jokes