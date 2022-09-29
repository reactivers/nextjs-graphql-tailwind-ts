import { FC, PropsWithChildren } from "react";

const Body: FC<PropsWithChildren> = ({
    children
}) => {
    return (
        <div className="w-screen p-4 flex">
            {children}
        </div>
    )
}

export default Body;