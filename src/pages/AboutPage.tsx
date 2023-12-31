import React, { useContext, useEffect, useState } from 'react';
import { useAuthCode, useCount, useIsLoggedIn, useSomeBoolean } from '../util/GlobalStates';
import StaticMeter from '../components/StaticMeter';

export default function AboutPage() {
    const [count, setCount] = useCount();
    const [authCode, setAuthCode] = useAuthCode();
    const [someBoolean, setSomeBoolean] = useSomeBoolean();
    const isLoggedIn = useIsLoggedIn();

    return (
        <div className='flex flex-col space-y-4 m-4'>

            <div className='bg-gray-100 border border-gray-500 p-4 rounded-lg'>
                <h3 className='text-xl font-bold mb-4'>Debug Information:</h3>

                <ul className='space-y-2'>
                    <StaticMeter label={"Thing"} value={4} max={10} />
                    <StaticMeter label={"Thing"} value={6} max={10} />
                    <StaticMeter label={"Thing"} value={2} max={10} />

                    <li>
                        Auth Code:
                        <textarea className='overflow-x-auto block w-3/4 shadow-inner-lg bg-stone-300 border border-gray-700 text-xs text-gray-700 text-wrap text-blue-900 font-arvo'>{authCode}</textarea>
                    </li>

                    <li>
                        Logged in? <b className='font-bold text-blue-800'>{isLoggedIn.toString()}</b>
                    </li>

                    <button className='mb-3 bg-gray-200 p-1 shadow-md' onClick={() => setAuthCode('')}>Clear Auth Code</button>

                    <li>
                        Some Boolean: {someBoolean.toString()}
                        <button className='mb-3 text-blue-800 bg-gray-200 p-1 shadow-md' onClick={() => setSomeBoolean(!someBoolean)}>Toggle Boolean</button>
                    </li>

                    <li>
                        Count: {count}
                        <button className='mb-3 text-blue-800 bg-gray-200 p-1 shadow-md' onClick={() => setCount(count + 1)}>Increase Count</button>
                    </li>
                </ul>
            </div>

            <div className='bg-gray-100 border border-gray-500 p-4 rounded-lg'>
                {/* Additional content goes here */}
            </div>
        </div>
    );
}
