import CalendarBoard from '../components/home/CalendarBoard'
import ResumeBoard from '../components/home/ResumeBoard'
import { SideBar } from '../components/home/SideBar'
import { Card } from '../components/ui/card'
import { Tabs } from '../components/ui/tabs'

function HomePage () {
  return (
    <Card className='container mx-auto mt-5 flex px-4'>
      <div className='w-1/5 pr-5'>
        <SideBar />
      </div>
      <div className=''>
        <Tabs defaultValue='overview' className='space-y-4 my-4'>
          <ResumeBoard />
          <CalendarBoard />
        </Tabs>
      </div>
    </Card>
  )
}

export default HomePage
