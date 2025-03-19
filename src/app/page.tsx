import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main >
      <div className="flex flex-col items-center justify-center h-screen">
        <Button className="rounded-t-3xl scale-150 hover:scale-155">
          <Link href="/login">
            Log In
          </Link>
        </Button>
      </div>
    </main>
  );
}
