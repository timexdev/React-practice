import React from 'react';
import './Home.css'

const Home = () => {

    let myStyle = {
        color:'black',
        backgroundColor:'white',
        padding:'30px',
    }
  return (

        <>
            <h1 style={{color:"red", backgroundColor:"white", padding:"30px"}}>INLINE STYLING</h1>
            <p style={myStyle}>INTERNAL STYLING</p>
            <h3 className='head'>MODULE CSS</h3>
            <h2>EXTERNAL STYLING</h2>
            <h4 className='fw-bold text-success bg-white mt-5 p-5'>CSS LIBRARY</h4>
        </>
        
  )
}

export default Home