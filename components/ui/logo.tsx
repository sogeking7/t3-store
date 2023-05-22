import Link from "next/link"
import { FC } from "react"

export const Logo:FC = () => {
    return (
        <Link href='/'>
            <p className='text-2xl font-medium'>t3-store</p>
        </Link>
    )
}