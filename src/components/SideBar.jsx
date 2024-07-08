import React from "react";

export default function SideBar() {
    const date = new Date();
    const month_name = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"][date.getMonth()];
    const day = date.getDate();
    const fisrt_day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const last_day = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    return (
        <div className="bg-[var(--smoke)] h-full w-[277px] rounded-e-3xl shadow-[-10px_0_20px_-5px_var(--shawdon)] flex flex-col items-center justify-between">
            <div>

            </div>
            <div className="flex flex-col w-[95%] px-2 pb-4 mb-3 rounded-2xl bg-white items-center">
                <h1 className="font-semibold p-1">{month_name}</h1>
                <div>
                    <ul className="flex text-sm font-medium items-center justify-between">
                        <li>Dom</li>
                        <li>Seg</li>
                        <li>Ter</li>
                        <li>Qua</li>
                        <li>Qui</li>
                        <li>Sex</li>
                        <li>Sab</li>
                    </ul>
                    <ul className="flex flex-wrap w-full">
                        {[...Array(fisrt_day).keys()].map((emptyDay) => (
                            <li key={`empty-${emptyDay}`}></li>
                        ))}
                        {[...Array(last_day).keys()].map((dayNumber) => (
                            <li key={dayNumber + 1} className={dayNumber + 1 === day ? 'z-10 before:absolute before:z-0 before:w-5 before:h-5 before:bg-[var(--primary-shawdon)] before:rounded-full' : ''}>
                                {dayNumber + 1}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}