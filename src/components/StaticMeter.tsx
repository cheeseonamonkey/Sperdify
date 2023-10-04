import React from 'react';

interface StaticMeterProps {
    label: string;
    value: number;
    max: number;
}

const StaticMeter: React.FC<StaticMeterProps> = ({ label, value, max }) => {
    const percentage = (value / max) * 100;
    const color = getRandomColor();

    return (
        <div className="w-full">
            <div className="relative h-4 bg-gray-200 rounded">
                <div
                    className={`absolute top-0 left-0 h-full bg-${color}-500 rounded`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="mt-2 flex justify-between">
                <span>{label}</span>
                <span>{value}/{max}</span>
            </div>
        </div>
    );
};

function getRandomColor() {
    const colors = [
        'pink',
        'purple',
        'indigo',
        'blue',
        'green',
        'yellow',
        'orange',
        'red',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

export default StaticMeter;
