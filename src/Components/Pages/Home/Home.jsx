import React from 'react'
import Layout from '../../Layout/Layout'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'

function Home() {
  return (
    <>
      <Layout>
        
        <SectionOne />
        
        {/* SECTION TWO */}

        <SectionTwo />

        {/* SECTION THREE  */}

        <SectionThree />


      </Layout>
    </>
  )
}

export default Home