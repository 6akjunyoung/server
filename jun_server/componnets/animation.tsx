"use client";

import dynamic from "next/dynamic";
import React from 'react'

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function Animation({lottieJson}) {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 300, height: 300 }}
    />
  )
}