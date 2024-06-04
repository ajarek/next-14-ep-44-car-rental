import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

const Dashboard = async () => {
  const session = await auth()
  const { user } = (session as any) || {}

  if (!user?.admin) {
    redirect('/')
  }
  return <div className='min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-24 py-12'>
    <h1 className='text-3xl font-bold'>Dashboard</h1>
  </div>
}

export default Dashboard
