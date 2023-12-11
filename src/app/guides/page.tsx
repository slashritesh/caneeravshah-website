import ContainerBox from '@/components/ui/ContainerBox'
import NextBreadcrumb from '@/components/ui/Nextbreadcrumb'
import React from 'react'

const page = () => {
  return (
    <>
    <ContainerBox>
    <NextBreadcrumb 
       homeElement={'Home'}
       separator={<span className="text-slate-400"> 	&gt; </span>}
       activeClasses=''
       containerClasses='flex py-5 text-sm  from-purple-600 to-blue-600' 
       listClasses='hover:underline mx-2 font-medium text-slate-400'
       capitalizeLinks
    />
    <div>
      
    </div>
    </ContainerBox>
    </>
  )
}

export default page