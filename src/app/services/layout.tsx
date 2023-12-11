import ContainerBox from '@/components/ui/ContainerBox'
import NextBreadcrumb from '@/components/ui/Nextbreadcrumb'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <ContainerBox>
            <NextBreadcrumb 
               homeElement={'Home'}
               separator={<span className="text-slate-400"> 	&gt; </span>}
               activeClasses=''
               containerClasses='flex py-5 flex-wrap text-sm' 
               listClasses='hover:underline mx-2 font-medium text-slate-400'
               capitalizeLinks
            />
        </ContainerBox>
        {children}
    </div>
  )
}

export default layout