import React from 'react'
import Navbar from '../navbar/navbar'
import Bookpage from '../bookpage/bookpage'
import Allbook from '../allbooks/allbook'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Bookpage/>
      <Allbook/>
    </div>
  )
}
