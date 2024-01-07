'use client'
import React from 'react'

export default function Footer() {
  return (
    <div className='footer-component'>
      <h4>Contact Me</h4>
      <section>
        <ul>
          <a href='mailto:contact@tsyen@me.com'>Tsyen@me.com</a>
          <a href='https://qianzhishenequipment.s3.amazonaws.com/Resume.pdf' target='_blank'>Resume</a>
          <a href='https://www.instagram.com/71yan/' target='_blank'>Instagram</a>
          <a href='https://www.imdb.com/name/nm5123852/' target='_blank'>IMDB</a>
        </ul>
      </section>

      <div className='copyright'>
        © 2024, Qianzhi Shen
      </div>
    </div>
  )
}
