import React from 'react'
import './index.scss'

import MainContent from './MainContent/MainContent'
import TopContent from './TopContent/TopContent'


function Content() {
  return (
    <div className='content mb-2'>
        <TopContent />
        <MainContent />
    </div>
  )
}

export default Content