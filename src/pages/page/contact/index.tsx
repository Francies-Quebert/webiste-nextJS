import PageTitle from '@/components/PageTitle'
import { FiMail } from '@react-icons/all-files/fi/FiMail'
import Head from 'next/head'
import React from 'react'

const contact = () => {
  return (
    <>
      <Head><title>Contact Me</title></Head>
      <div>
        <PageTitle text='Contact Me.' Icon={<FiMail className='text-font-inherit' />} />
      </div></>
  )
}

export default contact