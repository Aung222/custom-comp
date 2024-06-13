export function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-lg rounded-lg border shadow-lg p-4 bg-white">
            {children}
        </div>
    );
}

export function CardHeader({children}: {children: React.ReactNode}) {
    return(
        <div className="pb-2">
            {children}
        </div>
    )
}

export function CardBody({children}: {children: React.ReactNode}) {
    return(
        <div className="pb-2">
            {children}
        </div>
    )
}

export function CardFooter({children}: {children: React.ReactNode}) {
    return(
        <div className="">
            {children}
        </div>
    )
}