import React from 'react'
import LandingTop from '../LandingTop/LandingTop'
import LikedSongLists from '../LikedSongLists/LikedSongLiked'
import './LikedPage.css'

export default function LikedPage() {
  return (
    <div className='LikedPage'>
        <LandingTop/>
        <LikedSongLists/>
        </div>
  )
}
