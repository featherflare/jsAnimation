import React, { useEffect, useRef } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

function ImageSliders() {
  return (
    <div class='container'>
      <Outlet />
      <div className='footer'>
        <div>
          <button
            onClick={() => {
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition)
              } else {
                alert('Geolocation is not supported by this browser.')
              }

              function showPosition(position) {
                alert(
                  'Latitude: ' +
                    position.coords.latitude +
                    '<br>Longitude: ' +
                    position.coords.longitude +
                    '<br>Altitude: ' +
                    position.coords.altitude
                )
              }
            }}
          >
            Get Location
          </button>
        </div>
        <div>
          <a href='axisY'>Axis-Y</a>
        </div>
        <div>
          <a href='axisY'>Axis-Y</a>
        </div>
        <div>
          <a href='axisY'>Axis-Y</a>
        </div>
      </div>
    </div>
  )
}

export default ImageSliders
