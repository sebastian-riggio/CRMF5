import { useState } from 'react'
import CalendarBoard from '../components/home/CalendarBoard'
import ResumeBoard from '../components/home/ResumeBoard'
import { SideBar } from '../components/home/SideBar'
import { Card } from '../components/ui/card'
import { Tabs } from '../components/ui/tabs'

function HomePage () {
  const [selectedComponent, setSelectedComponent] = useState('resume')

  const handleSidebarItemClick = (component: string) => {
    console.log('handleSidebarItemClick llamado con:', component)
    setSelectedComponent(component)
  }

  return (
    <Card className='container mx-auto mt-5 flex px-0'>
      <div className='w-1/5'>
        <SideBar onSidebarItemClick={handleSidebarItemClick} />
      </div>
      <div className=''>
        <Tabs defaultValue='overview' className='space-y-4 my-4'>
          {selectedComponent === 'resume' && <ResumeBoard />}
          {selectedComponent === 'calendar' && <CalendarBoard />}
        </Tabs>
      </div>
    </Card>
  )
}

export default HomePage