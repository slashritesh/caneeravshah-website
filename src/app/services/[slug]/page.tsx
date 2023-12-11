import ContainerBox from '@/components/ui/ContainerBox'
import ServiceViewCard from '@/components/ServiceViewCard'
import { client } from '@/sanity/sanity'
import { service } from '@/types/commanTypes'
import Link from 'next/link'


const getdata = (slug : string)=>{
  const query = `*[_type == 'services' && category->title == 'Taxation']{
    ...,
    category->{
      title
    }
  }`
  const data = client.fetch(query,{},{next : {revalidate : 10}})
  return data
}

const page = async ({ params }: { params: { slug: string } }) => {
    const formattedText = params.slug.charAt(0).toUpperCase() + params.slug.slice(1).replace(/-/g, ' ')
    const Services = await getdata(formattedText)
    
  return (
    <>
    <ContainerBox>
       <div>
        <div className='grid sm:grid-cols-3 gap-5'>
          {
            Services.map((item : service)=>{
              return <>
              <ServiceViewCard item={item} />
              </>
            })
          }
        </div>
       </div>
    </ContainerBox>
    </>
  )
}

export default page