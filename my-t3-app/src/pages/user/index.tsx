import {type GetServerSideProps} from "next";
import {getServerAuthSession} from "~/server/auth";
import React from "react";
import {AuthShowcase} from "../../../components/ui/user-model";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getServerAuthSession(ctx);
    return {
        props: {session},
    };
};

export default function UserPage() {
    return (
        <div>
            <h1>User</h1>
            <AuthShowcase />
        </div>
    )
}

