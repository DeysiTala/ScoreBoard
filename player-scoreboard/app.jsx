let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
   {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
   {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

const Header = (props)=>{
 let points =props.players.map((e) => e.score).reduce((a,b) =>{return a+ b});
 return(
   <div className="header">
     <div className= "count">
       <table>
         <tr><td>PLAYERS:</td>{props.players.length}</tr>
         <tr><td>TOTAL:</td>{points}</tr>
         </table>
         </div>
         <div className="stopwatch">
           <h3>Atopht</h3>
           <h1 className="stopwatch-time">0</h1>
           <p><button></button></p>
           <p><button></button></p>
           </div>
           </div>
 )
}
const PlayerList=(props)=>{
  return(<div>{
    props.players.map((data,index)=>{
      return(
        <div className="player">
          <div className="player-name">{data.name}</div>
          <div className="player-socore counter">
            <button className="counter-action decrement btn"></button>
              <p className="counter-score">{data.score}</p>
              <button className="counter-action increment btn"></button>
              </div>
              </div>
      
      )
    })} </div>)
}

let PlayerForm= React.createClass({
  render: function(){
    return(
      <div className="add-player-form">
        <form>
          <p><input type="text"></input></p>
          <p><input type="submit"></input></p>
    </form>
    </div>
    )
  }
})
const Application = ({title, players}) => {
   return (
     <div className="scoreboard">
      <Header players={players}/>
      <PlayerList players={players}/>
      <PlayerForm />      
   </div>
   ) ;
}

ReactDOM.render(<Application title="Scoreboard" players = {PLAYERS}/>, document.getElementById('container'));