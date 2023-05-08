import DarkmodeSwitcher from "./darkmode-switcher";
import React from "react";
import {UserRounded} from "../ui/user-model";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

export const Header = () => {
    return (
        <div className="h-[60px] border-b-[1px] dark:border-b-zinc-800">
            <div className="cont flex justify-between items-center h-full">
                <p className="text-2xl font-medium">
                    t3-store
                </p>

               <div className="flex gap-8">
                   <SignedIn>
                       {/* Mount the UserButton component */}
                       <UserButton />
                   </SignedIn>
                   <SignedOut>
                       {/* Signed out users get sign in button */}
                       <SignInButton />
                   </SignedOut>
                   <div className="border-l dark:border-l-zinc-800 flex pl-4">
                       <DarkmodeSwitcher />
                   </div>
               </div>
            </div>
        </div>
    )
}