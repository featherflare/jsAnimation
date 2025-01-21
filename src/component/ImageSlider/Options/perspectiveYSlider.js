import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision'
import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import '../styles/perspectiveYSlider.scss'

function PerspectiveYSlider() {
  return (
    <div className='per'>
      <div className='slider'>
        <div key='1'>1</div>
        <div key='2'>2</div>
        <div key='3'>3</div>
        <div key='4'>4</div>
        <div key='5'>5</div>
        <div key='6'>6</div>
        <div key='7'>7</div>
        <div key='8'>8</div>
        <div key='9'>9</div>
        <div key='10'>10</div>
        <div key='11'>11</div>
        <div key='12'>12</div>
        <div key='13'>13</div>
        <div key='14'>14</div>
        <div key='15'>15</div>
        <div key='16'>16</div>
        <div key='17'>17</div>
        <div key='18'>18</div>
        <div key='19'>19</div>
        <div key='20'>20</div>
      </div>
    </div>
  )
}

export default PerspectiveYSlider
