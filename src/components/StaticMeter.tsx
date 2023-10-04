import React, { useEffect, useState } from 'react';

interface StaticMeterProps {
    className?: string;
    label: string;
    value: number;
    max: number;
}

const StaticMeter: React.FC<StaticMeterProps> = ({ label, value, max, className = '' }) => {
    const [percentage, setPercentage] = useState(0);
    const [color, setColor] = useState('');

    useEffect(() => {
        setPercentage((value / max) * 100);
        const randomColor = getRandomPastelColor();
        setColor(randomColor);
    }, [value, max]);

    function getRandomPastelColor() {
        const hue = Math.floor(Math.random() * 335) + 15; // (leans to cool colors)
        const pastelSaturation = Math.floor(Math.random() * 50) + 25; // Saturation 
        const pastelLightness = Math.floor(Math.random() * 25) + 45; // Lightness 
        return `hsl(${hue}, ${pastelSaturation}%, ${pastelLightness}%)`;
    }
    return (
        <div className={`relative h-3 md:h-4 lg:h-5 ${className}`}>
            <div className="absolute z-10 inset-0 md:py-[1px] lg:py-[1.5px] shadow-inner shadow-gray-500 bg-gray-200 rounded-sm overflow-hidden ">
                <div style={{ width: `${percentage}%`, backgroundColor: color }} className="h-full shadow-lg shadow-black rounded "></div>
            </div>
            <div className=" relative top-[-1px] contrast-200  text-gray-900 z-30 font-arvo text-[.8em] md:text-[]" style={{ textShadow: '.5px .5px 2px #ab9' }}>
                <span className="mix-blend-subtract contrast-200 absolute bg-stone-200/5 rounded  font-semibold left-2 ">{label}</span>
                <span className="mix-blend-subtract contrast-200 absolute bg-stone-200/10 rounded  font-extrabold right-2">{value}/{max}</span>
            </div>
        </div>
    );
}

export default StaticMeter;
