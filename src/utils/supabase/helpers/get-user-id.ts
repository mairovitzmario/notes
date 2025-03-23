import { createClient } from "../server"
import { redirect } from "next/navigation"

export default async function getUserId() : Promise<string> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // Redirect to login if no active session
    if (!user) {
        redirect('/login')
    }

    // Get user ID from the user object
    const userId = user.id

    return userId;
    
}