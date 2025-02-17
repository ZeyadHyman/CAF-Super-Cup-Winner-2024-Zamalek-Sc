import { useEffect, useState } from "react";
import test from "/src/assets/Images/test.jpg";

function Home() {
    const targetDate = new Date("2024-09-27T23:00:00");
    const [timeRemaining, setTimeRemaining] = useState({ weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

    const calculateTimeRemaining = () => {
        const now = new Date();
        const totalSeconds = Math.floor((now - targetDate) / 1000);

        if (totalSeconds < 0) {
            setTimeRemaining({ weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
            return;
        }

        const weeks = Math.floor(totalSeconds / 604800);
        const days = Math.floor((totalSeconds % 604800) / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        setTimeRemaining({ weeks, days, hours, minutes, seconds });
    };

    useEffect(() => {
        const interval = setInterval(calculateTimeRemaining, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="h-[90vh] w-full bg-zinc-100 flex justify-center items-center relative">
                <div className="absolute w-full">
                    <div className="bg-red-700 w-full h-10">.</div>
                    <div className="bg-red-700 w-full h-10 mt-10">.</div>
                </div>
                <div className="bg-white/50 w-full h-full rounded-lg z-50 flex flex-col justify-center p-6" dir="rtl">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mt-10 mb-5 text-red-700">لا خير فينا ان نسينا</h1>
                    {/* <div className="flex-grow"></div>    */}
                    <h1 className=" text-center mb-2  text-2xl font-bold ">الزمالك بطل السوبر الافريقي 2024</h1>
                    <div className="flex flex-wrap gap-4 justify-center text-center">
                        {Object.entries(timeRemaining).map(([unit, value]) => (
                            <div key={unit} className="bg-gray-100 rounded-lg p-4 shadow-md w-24 md:w-28">
                                <div className="text-3xl md:text-4xl font-semibold text-gray-800">{value}</div>
                                <div className="text-base md:text-lg font-bold text-gray-600 capitalize">
                                    {unit === 'weeks' ? 'جمعة' : unit === 'days' ? 'يوم' : unit === 'hours' ? 'ساعة' : unit === 'minutes' ? 'دقيقة' : 'ثانية'}
                                </div>
                            </div>
                        ))}
                    </div>
                        <img className="self-center rounded-lg md:w-1/2 mt-10 " src={test} alt="" />
                </div>
            </div>
        </>
    );
}

export default Home;