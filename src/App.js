import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import CardRevealOnHover from './component/CardRevealOnHover/CardRevealOnHover'
import GlassCard from './component/GlassCard/GlassCard'
import ButtonAni from './component/Button/ButtonBorderMoving'
import BarColorGen from './component/BarColorGen/BarColorGen'
import CardBorderMoving from './component/CardBorderMoving/CardBorderMoving'
import ExplandingFlexCard from './component/ExplandingFlexCard/ExplandingFlexCard'
import CardHoverZoomEffect from './component/CardHoverZoomEffect/CardHoverZoomEffect'
import HambergerToggle from './component/HambergerToggle/HambergerToggle'
import CardBlurWhenNoHover from './component/CardBlurWhenNoHover/CardBlurWhenNoHover'
import CardHoverSildeEffect from './component/CardHoverSildeEffect/CardHoverSildeEffect'
import JQueryTest from './component/JQueryTest/JQueryTest'
import GsapTest from './component/GsapTest/GsapTest'
import Profile from './component/Profile/Profile'
import GsapCardSelectWithFlip from './component/GsapTest/GsapDemo/GsapCardSelectWithFlip/GsapCardSelectWithFlip'
import GsapScrollTrigerDemo from './component/GsapTest/GsapDemo/GsapScrollTrigerDemo/GsapScrollTrigerDemo'
import Navbar from './component/Navbar'
import { useState } from 'react'
import Day1 from './component/100DaysCSSChallenge/Day1/Day1'
import Day2 from './component/100DaysCSSChallenge/Day2/Day2'
import Day3 from './component/100DaysCSSChallenge/Day3/Day3'
import Day4 from './component/100DaysCSSChallenge/Day4/Day4'
import Day5 from './component/100DaysCSSChallenge/Day5/Day5'
import Day6 from './component/100DaysCSSChallenge/Day6/Day6'
import Day7 from './component/100DaysCSSChallenge/Day7/Day7'
import Day8 from './component/100DaysCSSChallenge/Day8/Day8'
import Day9 from './component/100DaysCSSChallenge/Day9/Day9'
import Day10 from './component/100DaysCSSChallenge/Day10/Day10'
import Day11 from './component/100DaysCSSChallenge/Day11/Day11'
import Day12 from './component/100DaysCSSChallenge/Day12/Day12'
import Day13 from './component/100DaysCSSChallenge/Day13/Day13'
import Day14 from './component/100DaysCSSChallenge/Day14/Day14'
import Day15 from './component/100DaysCSSChallenge/Day15/Day15'
import Day16 from './component/100DaysCSSChallenge/Day16/Day16'
import Day17 from './component/100DaysCSSChallenge/Day17/Day17'
import Day18 from './component/100DaysCSSChallenge/Day18/Day18'
import Day19 from './component/100DaysCSSChallenge/Day19/Day19'
import Day20 from './component/100DaysCSSChallenge/Day20/Day20'
import Day21 from './component/100DaysCSSChallenge/Day21/Day21'
import Day22 from './component/100DaysCSSChallenge/Day22/Day22'
import Day23 from './component/100DaysCSSChallenge/Day23/Day23'
import Day24 from './component/100DaysCSSChallenge/Day24/Day24'
import Day25 from './component/100DaysCSSChallenge/Day25/Day25'
import Day26 from './component/100DaysCSSChallenge/Day26/Day26'
import Day27 from './component/100DaysCSSChallenge/Day27/Day27'
import Day28 from './component/100DaysCSSChallenge/Day28/Day28'
import Day29 from './component/100DaysCSSChallenge/Day29/Day29'
import Day30 from './component/100DaysCSSChallenge/Day30/Day30'
import Day31 from './component/100DaysCSSChallenge/Day31/Day31'
import Day32 from './component/100DaysCSSChallenge/Day32/Day32'
import Day33 from './component/100DaysCSSChallenge/Day33/Day33'
import Day34 from './component/100DaysCSSChallenge/Day34/Day34'
import Day35 from './component/100DaysCSSChallenge/Day35/Day35'
import Day36 from './component/100DaysCSSChallenge/Day36/Day36'
import Day37 from './component/100DaysCSSChallenge/Day37/Day37'
import Day38 from './component/100DaysCSSChallenge/Day38/Day38'
import Day39 from './component/100DaysCSSChallenge/Day39/Day39'
import Day40 from './component/100DaysCSSChallenge/Day40/Day40'
import Day41 from './component/100DaysCSSChallenge/Day41/Day41'
import Day42 from './component/100DaysCSSChallenge/Day42/Day42'
import Day43 from './component/100DaysCSSChallenge/Day43/Day43'
import Day44 from './component/100DaysCSSChallenge/Day44/Day44'
import Day45 from './component/100DaysCSSChallenge/Day45/Day45'
import Day46 from './component/100DaysCSSChallenge/Day46/Day46'
import Day47 from './component/100DaysCSSChallenge/Day47/Day47'
import Day48 from './component/100DaysCSSChallenge/Day48/Day48'
import Day49 from './component/100DaysCSSChallenge/Day49/Day49'
import Day50 from './component/100DaysCSSChallenge/Day50/Day50'
import Day51 from './component/100DaysCSSChallenge/Day51/Day51'
import Day52 from './component/100DaysCSSChallenge/Day52/Day52'
import Day53 from './component/100DaysCSSChallenge/Day53/Day53'
import Day54 from './component/100DaysCSSChallenge/Day54/Day54'
import Day55 from './component/100DaysCSSChallenge/Day55/Day55'
import Day56 from './component/100DaysCSSChallenge/Day56/Day56'
import Day57 from './component/100DaysCSSChallenge/Day57/Day57'
import Day58 from './component/100DaysCSSChallenge/Day58/Day58'
import Day59 from './component/100DaysCSSChallenge/Day59/Day59'
import Day60 from './component/100DaysCSSChallenge/Day60/Day60'
import Day61 from './component/100DaysCSSChallenge/Day61/Day61'
import Day62 from './component/100DaysCSSChallenge/Day62/Day62'
import Day63 from './component/100DaysCSSChallenge/Day63/Day63'
import Day64 from './component/100DaysCSSChallenge/Day64/Day64'
import Day65 from './component/100DaysCSSChallenge/Day65/Day65'
import Day66 from './component/100DaysCSSChallenge/Day66/Day66'
import Day67 from './component/100DaysCSSChallenge/Day67/Day67'
import Day68 from './component/100DaysCSSChallenge/Day68/Day68'
import Day69 from './component/100DaysCSSChallenge/Day69/Day69'
import Day70 from './component/100DaysCSSChallenge/Day70/Day70'
import Day71 from './component/100DaysCSSChallenge/Day71/Day71'
import Day72 from './component/100DaysCSSChallenge/Day72/Day72'
import Day73 from './component/100DaysCSSChallenge/Day73/Day73'
import Day74 from './component/100DaysCSSChallenge/Day74/Day74'
import Day75 from './component/100DaysCSSChallenge/Day75/Day75'
import Day76 from './component/100DaysCSSChallenge/Day76/Day76'
import Day77 from './component/100DaysCSSChallenge/Day77/Day77'
import Day78 from './component/100DaysCSSChallenge/Day78/Day78'
import Day79 from './component/100DaysCSSChallenge/Day79/Day79'
import Day80 from './component/100DaysCSSChallenge/Day80/Day80'
import Day81 from './component/100DaysCSSChallenge/Day81/Day81'
import Day82 from './component/100DaysCSSChallenge/Day82/Day82'
import Day83 from './component/100DaysCSSChallenge/Day83/Day83'
import Day84 from './component/100DaysCSSChallenge/Day84/Day84'
import Day85 from './component/100DaysCSSChallenge/Day85/Day85'
import Day86 from './component/100DaysCSSChallenge/Day86/Day86'
import Day87 from './component/100DaysCSSChallenge/Day87/Day87'
import Day88 from './component/100DaysCSSChallenge/Day88/Day88'
import Day89 from './component/100DaysCSSChallenge/Day89/Day89'
import Day90 from './component/100DaysCSSChallenge/Day90/Day90'
import Day91 from './component/100DaysCSSChallenge/Day91/Day91'
import Day92 from './component/100DaysCSSChallenge/Day92/Day92'
import Day93 from './component/100DaysCSSChallenge/Day93/Day93'
import Day94 from './component/100DaysCSSChallenge/Day94/Day94'
import Day95 from './component/100DaysCSSChallenge/Day95/Day95'
import Day96 from './component/100DaysCSSChallenge/Day96/Day96'
import Day97 from './component/100DaysCSSChallenge/Day97/Day97'
import Day98 from './component/100DaysCSSChallenge/Day98/Day98'
import Day99 from './component/100DaysCSSChallenge/Day99/Day99'
import Day100 from './component/100DaysCSSChallenge/Day100/Day100'
import ImageSliders from './component/ImageSlider/ImageSlider'
import VideoSlider from './component/ImageSlider/Options/videoslider'
import PerspectiveYSlider from './component/ImageSlider/Options/perspectiveYSlider'

function App({ children }) {
  const [size, setSize] = useState({ x: 380, y: 50 })
  const [click, setClick] = useState('click')
  const handler = (mouseDownEvent) => {
    const startSize = size
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY }

    function onMouseMove(mouseMoveEvent) {
      setSize((currentSize) => ({
        x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
        y: startSize.y - startPosition.y + mouseMoveEvent.pageY,
      }))
    }
    function onMouseUp() {
      document.body.removeEventListener('mousemove', onMouseMove)
      // uncomment the following line if not using `{ once: true }`
      // document.body.removeEventListener("mouseup", onMouseUp);
    }

    document.body.addEventListener('mousemove', onMouseMove)
    document.body.addEventListener('mouseup', onMouseUp, { once: true })
  }

  const clicks = () => {
    if (click == '') {
      setSize({ x: 0, y: 0 })
      setClick('click')
    } else {
      setClick('')
      setSize({ x: 0, y: 50 })
    }
  }

  return (
    <div className='App '>
      <header>
        <div
          className={`nav-area  ${click}`}
          id='container'
          style={{ width: '100vw', height: size.y }}
        >
          <Navbar />
        </div>
      </header>
      <BrowserRouter>
        <div id='draghandle' onMouseDown={handler} onDoubleClick={clicks}></div>

        <div className='Component'>
          <Routes>
            <Route index element={<Profile />} />
            <Route path='' element={<Profile />} />
            <Route element={<ImageSliders />}>
              <Route path='handDetect' element={<VideoSlider />} />
              <Route path='axisY' element={<PerspectiveYSlider />} />
            </Route>
            <Route path='cardRevealOnHover' element={<CardRevealOnHover />} />
            <Route path='glassCard' element={<GlassCard />} />
            <Route path='buttonANi' element={<ButtonAni />} />
            <Route path='barColorGen' element={<BarColorGen />} />
            <Route path='cardBorderMoving' element={<CardBorderMoving />} />
            <Route path='explandingFlexCard' element={<ExplandingFlexCard />} />
            <Route
              path='cardHoverZoomEffect'
              element={<CardHoverZoomEffect />}
            />
            <Route path='hambergerToggle' element={<HambergerToggle />} />
            <Route
              path='cardBlurWhenNoHover'
              element={<CardBlurWhenNoHover />}
            />
            <Route
              path='cardHoverSildeEffect'
              element={<CardHoverSildeEffect />}
            />
            <Route path='jQueryTest' element={<JQueryTest />} />
            <Route path='gsapTest' element={<GsapTest />} />
            <Route
              path='gsapCardSelectWithFlip'
              element={<GsapCardSelectWithFlip />}
            />
            <Route
              path='gsapScrollTrigerDemo'
              element={<GsapScrollTrigerDemo />}
            />
            <Route path='day1' element={<Day1 />} />
            <Route path='day2' element={<Day2 />} />
            <Route path='day3' element={<Day3 />} />
            <Route path='day4' element={<Day4 />} />
            <Route path='day5' element={<Day5 />} />
            <Route path='day6' element={<Day6 />} />
            <Route path='day7' element={<Day7 />} />
            <Route path='day8' element={<Day8 />} />
            <Route path='day9' element={<Day9 />} />
            <Route path='day10' element={<Day10 />} />
            <Route path='day11' element={<Day11 />} />
            <Route path='day12' element={<Day12 />} />
            <Route path='day13' element={<Day13 />} />
            <Route path='day14' element={<Day14 />} />
            <Route path='day15' element={<Day15 />} />
            <Route path='day16' element={<Day16 />} />
            <Route path='day17' element={<Day17 />} />
            <Route path='day18' element={<Day18 />} />
            <Route path='day19' element={<Day19 />} />
            <Route path='day20' element={<Day20 />} />
            <Route path='day21' element={<Day21 />} />
            <Route path='day22' element={<Day22 />} />
            <Route path='day23' element={<Day23 />} />
            <Route path='day24' element={<Day24 />} />
            <Route path='day25' element={<Day25 />} />
            <Route path='day26' element={<Day26 />} />
            <Route path='day27' element={<Day27 />} />
            <Route path='day28' element={<Day28 />} />
            <Route path='day29' element={<Day29 />} />
            <Route path='day30' element={<Day30 />} />
            <Route path='day31' element={<Day31 />} />
            <Route path='day32' element={<Day32 />} />
            <Route path='day33' element={<Day33 />} />
            <Route path='day34' element={<Day34 />} />
            <Route path='day35' element={<Day35 />} />
            <Route path='day36' element={<Day36 />} />
            <Route path='day37' element={<Day37 />} />
            <Route path='day38' element={<Day38 />} />
            <Route path='day39' element={<Day39 />} />
            <Route path='day40' element={<Day40 />} />
            <Route path='day41' element={<Day41 />} />
            <Route path='day42' element={<Day42 />} />
            <Route path='day43' element={<Day43 />} />
            <Route path='day44' element={<Day44 />} />
            <Route path='day45' element={<Day45 />} />
            <Route path='day46' element={<Day46 />} />
            <Route path='day47' element={<Day47 />} />
            <Route path='day48' element={<Day48 />} />
            <Route path='day49' element={<Day49 />} />
            <Route path='day50' element={<Day50 />} />
            <Route path='day51' element={<Day51 />} />
            <Route path='day52' element={<Day52 />} />
            <Route path='day53' element={<Day53 />} />
            <Route path='day54' element={<Day54 />} />
            <Route path='day55' element={<Day55 />} />
            <Route path='day56' element={<Day56 />} />
            <Route path='day57' element={<Day57 />} />
            <Route path='day58' element={<Day58 />} />
            <Route path='day59' element={<Day59 />} />
            <Route path='day60' element={<Day60 />} />
            <Route path='day61' element={<Day61 />} />
            <Route path='day62' element={<Day62 />} />
            <Route path='day63' element={<Day63 />} />
            <Route path='day64' element={<Day64 />} />
            <Route path='day65' element={<Day65 />} />
            <Route path='day66' element={<Day66 />} />
            <Route path='day67' element={<Day67 />} />
            <Route path='day68' element={<Day68 />} />
            <Route path='day69' element={<Day69 />} />
            <Route path='day70' element={<Day70 />} />
            <Route path='day71' element={<Day71 />} />
            <Route path='day72' element={<Day72 />} />
            <Route path='day73' element={<Day73 />} />
            <Route path='day74' element={<Day74 />} />
            <Route path='day75' element={<Day75 />} />
            <Route path='day76' element={<Day76 />} />
            <Route path='day77' element={<Day77 />} />
            <Route path='day78' element={<Day78 />} />
            <Route path='day79' element={<Day79 />} />
            <Route path='day80' element={<Day80 />} />
            <Route path='day81' element={<Day81 />} />
            <Route path='day82' element={<Day82 />} />
            <Route path='day83' element={<Day83 />} />
            <Route path='day84' element={<Day84 />} />
            <Route path='day85' element={<Day85 />} />
            <Route path='day86' element={<Day86 />} />
            <Route path='day87' element={<Day87 />} />
            <Route path='day88' element={<Day88 />} />
            <Route path='day89' element={<Day89 />} />
            <Route path='day90' element={<Day90 />} />
            <Route path='day91' element={<Day91 />} />
            <Route path='day92' element={<Day92 />} />
            <Route path='day93' element={<Day93 />} />
            <Route path='day94' element={<Day94 />} />
            <Route path='day95' element={<Day95 />} />
            <Route path='day96' element={<Day96 />} />
            <Route path='day97' element={<Day97 />} />
            <Route path='day98' element={<Day98 />} />
            <Route path='day99' element={<Day99 />} />
            <Route path='day100' element={<Day100 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
