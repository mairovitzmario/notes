'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage() {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-red-500">
            <h1 className="text-5xl sm:text-8xl font-bold text-white">Oh No!</h1>
            <p className="sm:text-2xl text-white">Sorry, something went wrong</p>
            <Link href={'/'} className=" absolute bottom-10">
                <Button variant={'link'}
                    className="hover:cursor-pointer scale-110 sm:scale-150 text-white">
                    Go to Home Page
                </Button>
            </Link>
        </div>
    );
}