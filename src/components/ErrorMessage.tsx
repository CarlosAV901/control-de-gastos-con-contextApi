import { ReactNode } from "react"

type ErrorMessageProps = {
    children: ReactNode
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
    return (
        <p className="bg-red-500 text-white text-sm text-center py-2 font-bold">
            {children}
        </p>
    )
}
