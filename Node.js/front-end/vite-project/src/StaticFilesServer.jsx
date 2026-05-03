import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080' // setup the base url

function StaticFilesServer() {

    const [images, setImages] = useState([])
    const [error, setError] = useState(null)

    // READING THE FILE OF IMAGES IN THE PUBLIC FOLDER
    const fetchFiles =  async () => {

        try{
            const response = await axios.get(`${API_BASE_URL}/images`)
            setImages(response.data)
            setError(null)
        }catch(err){
            console.log('error', err)
            setError('Failed fetching the images')
        }
    }

    useEffect(() => {
        fetchFiles()
    }, [])
  return (
        <div>
            <h1>Image Gallery</h1>
            <div style={{ display: 'flex', gap: '20px' }}>
                {images.map((img, index) => (
                <img key={index} src={img} alt={`image-${index}`} width="400" />
                ))}
            </div>
        </div>
  )
}

export default StaticFilesServer