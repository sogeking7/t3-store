import React from "react";
import {signIn, signOut, useSession} from "next-auth/react";
import {api} from "~/utils/api";

export const UserRounded = () => {
    const { data: sessionData } = useSession();
    return (
        <div className="">
            {sessionData && <img src={sessionData.user?.image} width={30} height={30} className="rounded-full" alt="user-image"/>}
        </div>
    )
}

export const AuthShowcase: React.FC = () => {
    const { data: sessionData } = useSession();

    const { data: secretMessage } = api.example.getSecretMessage.useQuery(
        undefined, // no input
        { enabled: sessionData?.user !== undefined }
    );

    return (
        <div className="flex flex-col bg-white dark:bg-indigo-900 items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
                {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
                {secretMessage && <span> - {secretMessage}</span>}
            </p>
            <button
                className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
                onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
                {sessionData ? "Sign out" : "Sign in"}
            </button>
        </div>
    );
};