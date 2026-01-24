import './App.css'

function DeveloperCard({name, age, country}){

    return (
        <>
            <div className='app'>
                <h2 className='heading'>Name: {name}</h2>
                <p>Age: {age}</p>
                <p>Country: {country}</p>
            </div>
        </>
    )
}

export default DeveloperCard;