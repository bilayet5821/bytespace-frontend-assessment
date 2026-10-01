import { AuthLayout } from '../components/auth/AuthLayout'
import { AuthForm } from '../components/auth/AuthForm'
export function LoginPage() {
  return (
    <AuthLayout mode="login">
      <AuthForm mode="login" />
    </AuthLayout>
  )
}
