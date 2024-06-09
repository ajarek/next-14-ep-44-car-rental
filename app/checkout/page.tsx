import PaymentForm from '@/components/FormPayment'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

const Payment = async ({
  searchParams,
}: {
  searchParams: { total: number }
}) => {
  const { total } = searchParams
  const session = await auth()
  const { user } = (session as any) || {}

  if (!user) {
    redirect('/register')
  }
  return (
    <> 
      <PaymentForm total={total} />
    </>
  )
}
export default Payment