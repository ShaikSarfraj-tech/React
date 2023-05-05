import React, { useState } from 'react'
import ScrollArea from 'react-scrollbar'
import AllPages from './AllPages'

const Home = () => {

  return (
    <ScrollArea
      speed = {0.8}
      className="area"
      contentClassName="content"
      horizontal={false}
    >
        <AllPages />
        
    </ScrollArea>
  )
}

export default Home