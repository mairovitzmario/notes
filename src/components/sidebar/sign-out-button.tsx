
import { Button } from '@/components/ui/button';


export default function SignOutButton() {

    return (
        <form action="/auth/signout" method="post" >
            <Button variant='destructive' type="submit" className='w-full'>
                Sign out
            </Button>
        </form>
    );
}