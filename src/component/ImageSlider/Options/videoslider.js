import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision'
import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import '../styles/videoslider.scss'

function VideoSlider() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const video = useRef()
  const canvas = useRef()
  const slider = useRef()
  const lastY = useRef(0)
  useEffect(() => {
    startRecord()
  }, [])

  async function startRecord() {
    try {
      // Load the vision fileset and create the hand landmarker
      const vision = await FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm'
      )
      const handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
          delegate: 'GPU',
        },
        runningMode: 'VIDEO',
        numHands: 1,
      })

      // Access webcam
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { aspectRatio: { ideal: 4 / 3 } },
        audio: false,
      })

      // Set video stream
      if (video.current) {
        video.current.srcObject = stream
        video.current.onloadedmetadata = () => {
          video.current.play()
          predictWebcam(handLandmarker)
        }
      }
    } catch (err) {
      console.error(`An error occurred: ${err}`)
    }
  }

  let lastVideoTime = -1
  let results = undefined

  async function predictWebcam(handLandmarker) {
    if (!video.current) return

    let startTimeMs = performance.now()

    if (lastVideoTime !== video.current.currentTime) {
      lastVideoTime = video.current.currentTime

      const results = await handLandmarker.detectForVideo(
        video.current,
        startTimeMs
      )
      const canvasCtx = canvas.current.getContext('2d')
      canvasCtx.save()
      canvasCtx.clearRect(0, 0, canvas.current.width, canvas.current.height)

      if (results.landmarks) {
        // console.log(results)
        for (const landmarks of results.landmarks) {
          const indexFingerTip = landmarks[8] // Index finger tip (landmark 8)
          const normalizedX = indexFingerTip.x // Normalized [0,1] across the width
          const normalizedY = indexFingerTip.y // Normalized [0,1] across the height

          const indexFinger = distanceCalc(landmarks[8], landmarks[5])
          const indexFingerAxisZ = Math.floor(
            Math.abs(landmarks[8].z - landmarks[5].z) * 10 + 0.2
          )

          const deltaY = normalizedY - lastY.current
          lastY.current = normalizedY

          console.log(indexFinger, indexFingerAxisZ)

          if (Math.abs(deltaY) > 0.01 && indexFingerAxisZ >= 1)
            scrollBox(deltaY)

          const distance = {
            x: landmarks[8].x - landmarks[12].x,
            y: landmarks[8].y - landmarks[12].y,
            z: landmarks[8].z - landmarks[12].z,
          }

          const test = Math.sqrt(
            landmarks[8].x * landmarks[8].x +
              landmarks[8].y * landmarks[8].y +
              landmarks[8].z * landmarks[8].z
          )
          const test2 = Math.sqrt(
            landmarks[12].x * landmarks[12].x +
              landmarks[12].y * landmarks[12].y +
              landmarks[12].z * landmarks[12].z
          )

          const displacement1 = Math.sqrt(
            distance.x * distance.x + distance.y * distance.y
          )

          const displacement2 = Math.sqrt(
            distance.z * distance.z + distance.y * distance.y
          )

          const displacement3 = Math.sqrt(
            distance.x * distance.x + distance.z * distance.z
          )

          // console.log(test, test2, Math.abs(test - test2))

          // Update position only if it changes significantly
          setPosition((prev) => {
            const dx = Math.abs(prev.x - normalizedX)
            const dy = Math.abs(prev.y - normalizedY)
            if (dx > 0.01 || dy > 0.01) {
              return { x: normalizedX, y: normalizedY }
            }
            return prev
          })
        }

        drawLandmarks(results.landmarks)
      } else {
        setPosition((prev) => {
          const dx = Math.abs(prev.x)
          const dy = Math.abs(prev.y)
          if (dx > 0.01 || dy > 0.01) {
            return { x: dx, y: dy }
          }
          return prev
        })
      }
    }

    requestAnimationFrame(() => predictWebcam(handLandmarker))
  }

  const drawLandmarks = (landmarksArray) => {
    const c = canvas.current
    const ctx = c.getContext('2d')
    ctx.clearRect(0, 0, c.width, c.height)

    landmarksArray.forEach((landmarks) => {
      landmarks.forEach((landmark, i) => {
        const x = landmark.x * c.width
        const y = landmark.y * c.height
        if (i === 8 || i === 12) {
          ctx.fillStyle = 'red'
        } else if (i === 5 || i === 9) {
          ctx.fillStyle = 'green'
        } else {
          ctx.fillStyle = 'transparent'
        }
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, 2 * Math.PI) // Draw a circle for each landmark
        ctx.fill()
      })
    })
  }

  function distanceCalc(a, b) {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
  }

  function scrollBox(deltaY) {
    console.log('in')
    if (slider.current) {
      const sliderHeight = slider.current.scrollHeight
      const containerHeight = slider.current.clientHeight

      const maxScrollTop = (sliderHeight - containerHeight) / 6

      const targetScrollTop = deltaY * maxScrollTop
      slider.current.scrollTop -= targetScrollTop
    }
  }

  return (
    <div className='c'>
      <div>
        <video ref={video}></video>
        <canvas ref={canvas}></canvas>
        <div
          className='pointer'
          style={{
            left: `${100 - position.x * 100}%`,
            top: `${position.y * 100}%`,
          }}
        ></div>
      </div>
      <div className='slider' ref={slider}>
        <div key='1'>1</div>
        <div key='2'>2</div>
        <div key='3'>3</div>
        <div key='4'>4</div>
        <div key='5'>5</div>
        <div key='6'>6</div>
      </div>
    </div>
  )
}

export default VideoSlider
