'use client'
import React from 'react'
import "../../app/globals.css"
import EmblaCarousel from '@/components/carousel/EmblaCarousel'


const OPTIONS = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function equipment() {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}
