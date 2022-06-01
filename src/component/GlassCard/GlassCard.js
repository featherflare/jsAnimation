import React from 'react'
import './GlassCard.css'
import $ from 'jquery'

$(document).ready(function () {
  animateDiv()
})

function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50
  var w = $(window).width()*0.7 - 50

  var nh = Math.floor(Math.random() * h)
  var nw = Math.floor(Math.random() * w)

  return [nh, nw]
}

function makeNewPosition2() {
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 25
  var w = $(window).width() - 25

  var nh = Math.floor(Math.random() * h)
  var nw = Math.floor(Math.random()*0.7 * w)

  return [nh, nw]
}

function animateDiv() {
  var newq = makeNewPosition()
  var newq2 = makeNewPosition2()
  var oldq = $('.a').offset()
  var oldq2 = $('.b').offset()
  var speed = calcSpeed([oldq.top, oldq.left], newq)
  var speed2 = calcSpeed2([oldq2.top, oldq2.left], newq2)

  $('.a').animate({ bottom: newq[0], right: newq[1] }, speed, function () {
    animateDiv()
  })

  $('.b').animate({ top: newq2[0], left: newq2[1] }, speed2, function () {
    animateDiv()
  })
}

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1])
  var y = Math.abs(prev[0] - next[0])

  var greatest = x > y ? x : y

  var speedModifier = 0.1

  var speed = Math.ceil(greatest / speedModifier)

  return speed
}

function calcSpeed2(prev, next) {
  var x = Math.abs(prev[1] - next[1])
  var y = Math.abs(prev[0] - next[0])

  var greatest = x > y ? x : y

  var speedModifier = 0.2

  var speed2 = Math.ceil(greatest / speedModifier)

  return speed2
}

export default function GlassCard() {
  return (
    <div class='bg2'>
      <div class='card2'>
        <div class='a'></div>
        <div class='b'></div>
        <div class='card-inner'></div>
      </div>
    </div>
  )
}
