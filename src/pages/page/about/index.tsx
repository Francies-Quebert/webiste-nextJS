import DownloadButton from '@/components/DownloadButton'
import PageTitle from '@/components/PageTitle'
import PersolnalInformation from '@/components/PersolnalInformation'
import SectionMainTitle from '@/components/SectionMainTitle'
import SectionTitle from '@/components/SectionTitle'
import { FiUser } from '@react-icons/all-files/fi/FiUser'
import React from 'react'
import { BsLaptop } from "@react-icons/all-files/bs/BsLaptop";


function calculateAge(otherDateProp: any) {
  const birthDate: any = new Date(otherDateProp);
  const otherDate: any = new Date();

  let years = (otherDate.getFullYear() - birthDate.getFullYear());

  if (otherDate.getMonth() < birthDate.getMonth() ||
    otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
    years--;
  }
  return years;
}

const data = [
  { label: 'Name', text: 'Francies Feranandes' },
  { label: 'Age', text: `${calculateAge('10/21/1998')} Years` },
  { label: 'Residence', text: 'London, United Kingdom' },
  { label: 'Email', text: 'francies.quebert@gmail.com' },
  { label: 'Title', text: 'Front End / Full Stack Developer' },
  { label: 'Freelance', text: 'Available' },
]

const about = () => {
  return (
    <div className='max-w-screen-lg mx-auto'>
      <PageTitle text='about me.' Icon={<FiUser className='text-font-inherit' />} />
      <div className='container pt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='mb-10'>
            <SectionTitle title={`UI/UX Designer & Developer`} />
            <div className="font font-roboto">
              <p className='pb-4 font-roboto text-dark-theme-text'>Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat placeat quas consequatur? Obcaecati natus rerum</p>
              <p className='pb-4 font-roboto text-dark-theme-text'>Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis unde aliquid excepturi laudantium? Illo architecto aliquam velit illo magnam neque perferendis sint Incidunt eius ipsa inventore labore eos velit. Minus hic magni reiciendis necessitatibus ex Quidem officia deleniti accusamus obcaecati dolores. Porro culpa quibusdam impedit porro praesentium excepturi. Alias ab consequatur?</p>
            </div>
          </div>
          <div>
            <SectionTitle title={'Personal Information'} />
            <PersolnalInformation data={data} />
            <DownloadButton text='DOWNLOAD RESUME' />
          </div>
        </div>
        <section>
          <SectionMainTitle text='SERVICES' />
          <div>
            <div>
            <BsLaptop />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default about