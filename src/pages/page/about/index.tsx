import PageTitle from '@/components/PageTitle'
import { FiUser } from '@react-icons/all-files/fi/FiUser'
import React from 'react'

const about = () => {
  return (
    <div>
      <PageTitle text='about me.' Icon={<FiUser className='text-font-inherit' />}/>
    </div>
  )
}

export default about