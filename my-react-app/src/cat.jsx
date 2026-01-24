import './App.css'

function Cat() {
     return (
        <div className='card'>
            <h2 className='heading'>Mr Whiskers</h2>
             <img
                src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
                alt="Tuxedo cats running on dirt ground."
             />
        </div>
     )
}

export  default Cat;

// function Cat2(){
//    return ( 
//       <>
//          <div className='card'>
//             <h1>Hello Whiskers</h1>
//             <p style={{color: "red"}}>i am a cat</p>
//          </div>
//       </>
//    )
// }


// function Cat3(){
//    const catName = "Whiskers";
//    return (
//       <>
//          <div className='card'>
//             <h1>Hello {catName}</h1>
//             <p style={{color: "blue"}}>i am a cat</p>
//          </div>
//       </>
//    )
// }

// export default Cat;