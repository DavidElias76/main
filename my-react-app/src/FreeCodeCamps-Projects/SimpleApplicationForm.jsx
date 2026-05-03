
import { useState } from "react";
import { powersOptions } from "./powerOptions";
import { powerSourceOptions } from "./powerSourceOptions";
import './form.css'

export default function SimpleApplicationForm(){

    // change everything an use only one state instead of all this state

    const [heroName, setHeroName] = useState('') 
    const [realName, setRealName] = useState('')
    const [powerSource, setPowerSource] = useState('')
    const [powers, setPowers] = useState([])

    // add one handle change function that gets the value of the inputs
    
    
    const handlePowersChange = (e) => {
        const { value, checked } = e.target;
        setPowers(checked ? [...powers, value] : powers.filter(p => p !== value))
    }

    // const object = {
    //     name: heroName,
    //     realName: realName,
    //     powerSource: powerSource,
    //     powers: powers
    // }

    // const [objectSaved, setObjectSaved] = UseLocalStorage('name', () => '')

    return (
        
        <div className="form-wrap">
            <h2>SuperHero Application Form</h2>
            <p>Please complete all fields</p>

            <form>
                <div className="section">
                    <label htmlFor="">Hero Name:
                        <input type="text" value={heroName} onChange={(e) => setHeroName(e.target.value)}/>
                    </label>

                    <label htmlFor="">Real Name:
                        <input type="text"  value={realName} onChange={(e) => setRealName(e.target.value)}/>
                    </label>

                    <label htmlFor="powerSource" className="section column">How did you get your powers?: 
                        <select value={powerSource} onChange={(e) => setPowerSource(e.target.value)}>
                            <option value="">Select One</option>
                            {powerSourceOptions.map(source => (
                                <option value={source} key={source}>{source}</option>
                            ))}
                        </select>
                    </label>

                    <div className="section column">
                        <label htmlFor="">List your powers (select all that apply):</label>
                        {powersOptions.map(power => (
                            <label key={power}>
                                <input type="checkbox" 
                                value={power} 
                                onChange={handlePowersChange} 
                                checked={powers.includes(power)}/><span>{power}</span>
                            </label>
                        ))}
                    </div>

                    <button className='submit-btn' type='submit' 
                    disabled={!heroName || !realName || !powerSource || powers.length === 0}>
                        Join the League
                    </button>
                </div>
            </form>
        </div>
    )
} 