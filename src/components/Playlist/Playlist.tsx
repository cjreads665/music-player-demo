import React,{Children} from 'react'
import { useSelector } from 'react-redux'
import List from '../List'

const Playlist = () => {
  const props = {
    title : 'Your Playlists',
    list : 'featured'
  }
  return (
    <div>
<List props={props} />
    </div>
  )
}

export default Playlist