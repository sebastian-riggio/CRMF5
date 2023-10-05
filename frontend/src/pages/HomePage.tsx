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
      <Card className='mt-5 flex px-0 border-none shadow-none pl-5 pr-5 md:border-1 md:shadow-lg'>
        <div>
          <SideBar onSidebarItemClick={handleSidebarItemClick} />
        </div>
        <div className='flex-1'>
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
