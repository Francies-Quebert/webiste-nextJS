import PageTitle from '@/components/PageTitle'
import { FiFileText } from '@react-icons/all-files/fi/FiFileText'
import Head from 'next/head'
import React from 'react'

const resume = () => {
  return (
    <> <Head><title>Resume</title></Head>
      <div>
        <PageTitle text='My Resume.' Icon={<FiFileText className='text-font-inherit' />} />
      </div>
    </>
  )
}

export default resume