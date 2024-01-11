'use client'
import React from 'react'
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <div className='footer-component'>
      <h4>Contact Me</h4>
      <section>
        <ul>
          <a href='mailto:contact@tsyen@me.com'>
            <Icon icon="mdi-light:email" />
          </a>
          <a href='https://www.instagram.com/71yan/' target='_blank'>
            <Icon icon="openmoji:instagram" />
          </a>
          <a href='https://qianzhishenequipment.s3.amazonaws.com/Resume.pdf' target='_blank'>
            <Icon icon="ph:file-pdf-thin" />
          </a>
          <a href='https://www.imdb.com/name/nm5123852/' target='_blank'>
            <Icon icon="simple-icons:imdb" />
          </a>
        </ul>
      </section>

      <div className='copyright'>
        © 2024, Qianzhi Shen
      </div>
    </div>
  )
}
