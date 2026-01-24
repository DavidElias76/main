
import './App.css'

function Card({name, title, bio}){

    return (

        <div className='card-show'>
            <h2>{name}</h2>
            <p className="card-title">{title}</p>
            <p>{bio}</p>
        </div>
    )
}

export default Card;