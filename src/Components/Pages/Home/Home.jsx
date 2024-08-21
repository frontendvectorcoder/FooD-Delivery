import React from 'react'
import Layout from '../../Layout/Layout'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'

function Home() {
  return (
    <>
      <Layout>
        
        <SectionOne />
        
        {/* SECTION TWO */}

        <SectionTwo />

        {/* SECTION THREE  */}

        <SectionThree />

        {/* SECTION FOUR  */}

        <SectionFour />

        {/* SECTION FOUR  */}

        <SectionFive />

      </Layout>
    </>
  )
}

export default Home