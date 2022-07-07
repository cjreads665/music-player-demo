import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import List from '../List'

const Favourite = () => {
 const props = {
  title : 'Your Favourite Tunes',
  list : 'released'
 }
  return (
    <div>
<List props={props} />
  </div>
  )
}

export default Favourite