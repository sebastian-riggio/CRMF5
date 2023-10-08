import { useState } from 'react'
import ResumeBoard from '../components/home/ResumeBoard'
import { SideBar } from '../components/home/SideBar'
import { Card } from '../components/ui/card'
import { Tabs } from '../components/ui/tabs'
import { CalendarBoard } from '@/components/home/CalendarBoard'

function HomePage () {
  const [selectedComponent, setSelectedComponent] = useState('resume')

  const handleSidebarItemClick = (component: string) => {
    console.log('handleSidebarItemClick llamado con:', component)
    setSelectedComponent(component)
  }

  return (
    <div className='container mx-auto'>
      <Card className='mt-5 flex flex-col px-0 border-none shadow-none md:px-2 md:border-1 md:shadow-lg md:flex-row'>
        <div className='flex flex-row flex-1'>
          <SideBar onSidebarItemClick={handleSidebarItemClick} />
        </div>
        <div className='flex-[5]'>
          <Tabs defaultValue='overview' className='space-y-4 my-4'>
            {selectedComponent === 'resume' && <ResumeBoard />}
            {selectedComponent === 'calendar' && <CalendarBoard />}
          </Tabs>
        </div>
      </Card>
    </div>

  )
}

export default HomePage
