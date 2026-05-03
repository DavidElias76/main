
import { useState } from "react";
import axios from "axios";

const divStyles = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    padding: '25px',
    borderRadius: '12px',
    overflowX: 'auto',
    marginTop: '30px',
    boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    fontFamily: "'Courier New', monospace",
    lineHeight: '2',
    fontSize: '15px'
}

function ModuleHtml(){

    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {

        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8080/api/data');
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
        <br />
        <br />
        <h2 style={{fontSize: '20px', color: 'black'}}>Fetching the data from the backend using the exporst and imports modules</h2>
            <button onClick={fetchData} disabled={loading} style={{padding: '10px 20px', fontSize: '16px', cursor: 'pointer'}}>
                {loading ? 'Loading...' : 'Fetch Data'}
            </button>
            {data && <div style={divStyles}>{data}</div>}
        </>
    )
}

export default ModuleHtml;