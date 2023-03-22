import React from 'react'
import "./Map.css";

const Map = ({weather:{name}}) => {
    const url = `https://maps.google.com/maps?q=${name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  return (
    <div className="flex items-center justify-center mapouter ">
      <div className='gmap_canvas'>
        <iframe
            title={name}
            src={url}
            className='mx-0 my-6'
            frameborder="0" 
            width="700"
            height="500"
          >
          </iframe>
      </div>
    </div>
  )
}

export default Map