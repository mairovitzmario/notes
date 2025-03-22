'use client'

import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function SignOutButton() {
    const router = useRouter();

    function signOut() {
        const client = createClient();
        client.auth.signOut();
        router.refresh();
    }

    return (
        <Button variant={'destructive'} onClick={signOut}>
            Sign Out
        </Button>
    );
}