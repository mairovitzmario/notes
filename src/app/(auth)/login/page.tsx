import { login, signup } from '@/app/(auth)/login/actions'

export default function Login() {
    return (
        <form >
            <div className='flex flex-col jutify-center align-center min-h-screen'>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required className='bg-amber-300' />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required className='bg-amber-300' />
                <button formAction={login}>Log in</button>
                <button formAction={signup}>Sign up</button>
            </div>
        </form>
    )

}