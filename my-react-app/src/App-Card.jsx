
import './App.css'
import Card from './profileCard'; 


function App(){

    const profiles = [
        {
            id: 1,
            name: "Mark",
            title: "Frontend developer",
            bio: "I like to work with different frontend technologies and play video games."
        },

        {
            id: 2,
            name: "Tiffany",
            title: "Engineering manager",
            bio: "I have worked in tech for 15 years and love to help   people grow in this industry."
        },

        {
            id: 3,
            name: "Doug",
            title: "Backend developer",
            bio: "I have been a software developer for over 20 years and I love working with Go and Rust."
        }

    ]  
    
    return (

        // loop the profiles array and display the component - render the card component 

        <div className="flex-container">
        {profiles.map((profile) => (
            <Card
                key={profile.id}
                name={profile.name}
                title={profile.title}
                bio={profile.bio}
            />
        ))}
    </div>
    )
}

export default App;