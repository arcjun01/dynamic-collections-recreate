export default function Content(props) {

    const { img, name, position, jersey, teams } = props.content;

    return (
        <div className="playerCard">
            <img src={img}></img>
            <h1>Name: {name}</h1>
            <h2>Position: {position}</h2>
            <h2>Number: {jersey}</h2>
            <h2>Teams: {teams}</h2>            

        </div>
    )
}