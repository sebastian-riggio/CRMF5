import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'

function LoginPage () {
  return (
    <div>
      <div>
        <img src='src/assets/isologo-f5.png' alt='isologo-f5' />
      </div>
      <div>
        <Tabs defaultValue='account' className='w-[400px]'>
          <TabsList>
            <TabsTrigger value='account'>Account</TabsTrigger>
            <TabsTrigger value='password'>Password</TabsTrigger>
          </TabsList>
          <TabsContent value='account'>Make changes to your account here.</TabsContent>
          <TabsContent value='password'>Change your password here.</TabsContent>
        </Tabs>
      </div>

    </div>
  )
}

export default LoginPage
