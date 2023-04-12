import PageTitle from '@/components/PageTitle'
import { FiBriefcase } from '@react-icons/all-files/fi/FiBriefcase'
import React from 'react'

const portfolio = () => {
  return (
    <div>
      <PageTitle text='Portfolio.' Icon={<FiBriefcase className='text-font-inherit' />}/>
    </div>
  )
}

export default portfolio