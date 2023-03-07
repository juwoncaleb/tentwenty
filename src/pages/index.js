import Head from 'next/head'
import React from 'react'
import LandingPage from './landingpage'

export default function index() {
  return (
    <div>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet"/>
      </Head>
      <LandingPage />
    </div>
  )
}
