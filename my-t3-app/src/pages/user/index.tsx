import {type GetServerSideProps} from "next";
import {signIn, signOut, useSession} from "next-auth/react";
import {getServerAuthSession} from "~/server/auth";
import React from "react";
import {api} from "~/utils/api";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getServerAuthSession(ctx);
    return {
        props: {session},
    };
};

export default function User() {
    const {data: session} = useSession();
    return (
        <div>
            <h1>User</h1>
            <AuthShowcase />
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
        <div className="flex flex-col bg-indigo-900 items-center justify-center gap-4">
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