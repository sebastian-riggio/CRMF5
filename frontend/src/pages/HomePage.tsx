import { CalendarDashboard } from '../components/home/CalendarDashboard'
import CardReview from '../components/home/CardReview'
import { SideBar } from '../components/home/SideBar'
import { Card } from '../components/ui/card'
import { Separator } from '../components/ui/separator'

function HomePage () {
  return (
    <>
      <Card className='container mx-auto md:mt-5 flex'>
        <div className='hidden md:grid lg:grid-cols-5 flex'>
          <div className='hidden lg:block'>
            <SideBar />
          </div>
          <div className='lg:col-span-1 ml-3'>
            <Separator orientation='vertical' />
          </div>
          <div>
            <CalendarDashboard />
          </div>
          {/*           <div>
            <CardReview />
          </div> */}
        </div>

      </Card>
    </>
  )
}

export default HomePage
