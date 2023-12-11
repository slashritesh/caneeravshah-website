import ContainerBox from '@/components/ui/ContainerBox'
import { client } from '../../sanity/sanity'
import { service } from '../../types/commanTypes'
import limitStringLength from '@/lib/shortlenght'
import Link from 'next/link'
import ServiceViewCard from '@/components/ServiceViewCard'


const getdata = ()=>{
  const query = "*[_type == 'services']{title,description,body,slug,_id,category->{title}}"
  const data = client.fetch(query,{},{next : {revalidate: 30}})
  return data
}


const ServicesPage = async() => {
  const Services = await getdata()
  // console.log(Services);
  
  return (
    <ContainerBox>
      <div className='grid sm:grid-cols-3 mt-10 gap-5'>
     {Services.map((item : service)=>{
      return <>
      <ServiceViewCard item={item} />
      </>
     })}
      </div>
    </ContainerBox>
  )
}

export default ServicesPage