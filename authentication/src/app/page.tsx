import { Button } from "@/components/ui/button";
import { SiAuth0 } from "react-icons/si";
import LoginButton from "../components/ui/auth/login-button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center 
  bg-gradient-to-r from-pink-500 to-yellow-500
    ">
      <div className="space-y-6 text-center ">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md flex">

          <SiAuth0 />   Auth
        </h1>
        <p className="text-white"> A Simple Authentication Service</p>
      </div>
      <div>
        <LoginButton mode="redirect">
          <Button variant={"secondary"} size={"sm"}> Sign In</Button>
        </LoginButton>

      </div>


    </main>

  );
}
