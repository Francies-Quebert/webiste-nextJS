import PageTitle from '@/components/PageTitle'
import { FiMail } from '@react-icons/all-files/fi/FiMail'
import React from 'react'

const contact = () => {
  return (
    <div>
      <PageTitle text='Contact Me.' Icon={<FiMail className='text-font-inherit' />}/>
    </div>
  )
}

export default contact