import {getProviders, signIn} from 'next-auth/react';
import type {GetServerSidePropsContext, InferGetServerSidePropsType} from 'next';
import {getServerSession} from 'next-auth';
import React from 'react';
import {authOptions} from "~/server/auth";

function SignIn({providers}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [loading, setLoading] = React.useState(false);
    return (
        <div className="cont">
            <div className="flex justify-center py-[100px]">
                <div className="w-[300px]">
                    {
                        loading ?
                            <div className="flex justify-center">
                                Loading...
                            </div>
                            :
                            Object.values(providers).map((provider) => (
                                <div key={provider.name}>
                                    <button
                                        className="btn-primary"
                                        onClick={() => {
                                            void signIn(provider.id);
                                            setLoading(true);
                                        }}
                                    >
                                        Sign in with Google
                                    </button>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SignIn;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);
    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!
    if (session) {
        return {redirect: {destination: '/'}};
    }

    const providers = await getProviders();

    return {
        props: {providers: providers ?? []},
    };
}