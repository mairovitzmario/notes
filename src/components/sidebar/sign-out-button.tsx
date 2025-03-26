'use client'

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function SignOutButton() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSignOut = () => {
        setIsLoading(true);
    };

    return (
        <form action="/auth/signout" method="post" onSubmit={handleSignOut}>
            <Button
                variant='destructive'
                type="submit"
                className='w-full'
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing out...
                    </>
                ) : (
                    "Sign out"
                )}
            </Button>
        </form>
    );
}