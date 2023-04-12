import PageTitle from '@/components/PageTitle'
import { FiFileText } from '@react-icons/all-files/fi/FiFileText'
import React from 'react'

const resume = () => {
  return (
    <div>
      <PageTitle text='My Resume.' Icon={<FiFileText className='text-font-inherit' />}/>
    </div>
  )
}

export default resume