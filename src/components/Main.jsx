import React from "react";

export default function Main({children}) {
    return (
        <div className="flex items-center justify-center h-[90vh] w-[80vw] bg-[var(--bruma)] rounded-[40px] border-[3px] border-[var(--white)] shadow-[0_0_15px_3px_var(--shawdon)]">
            <div className="flex items-center justify-between h-[94%] w-[96%] bg-[var(--ivory)] rounded-[30px] shadow-sm">
                {children}
            </div>
        </div>
    );
}