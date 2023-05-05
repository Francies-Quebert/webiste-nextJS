import PageTitle from '@/components/PageTitle'
import { FiBriefcase } from '@react-icons/all-files/fi/FiBriefcase'
import Head from 'next/head'
import React from 'react'

const portfolio = () => {
  return (
    <>
      <Head><title>Portfolio</title></Head>
      <div>
        <PageTitle text='Portfolio.' Icon={<FiBriefcase className='text-font-inherit' />} />
      </div>
    </>
  )
}

export default portfolio