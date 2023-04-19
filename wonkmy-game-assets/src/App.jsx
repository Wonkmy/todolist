import { useState } from 'react'
import './style.css'
import { AssetsCard } from './AssetsCard'
import {TopNav} from './TopNav'

import assets_icon from '/1.png'
import max from '/1-06.png'
import Maya from '/1-07.png'
import blender from '/1-08.png'
import ps from '/1-09.png'

function App() {
  const [count, setCount] = useState(0)

  const softwareIconSrc={
    max:max,
    Maya:Maya,
    blender:blender,
    ps:ps,
  }

  return (
    <div className='App'>
      <TopNav />
      <div className="Assets-Area">
        <AssetsCard
          title={"一把斧子"}
          iconSrc={assets_icon}
          author={"作者:王启明"}
          date={"日期:2023-04-19"}
          softwareIconSrc={softwareIconSrc}
          assetsSize={"资源大小:10M"} />
      </div>
    </div>
  )
}

export default App
