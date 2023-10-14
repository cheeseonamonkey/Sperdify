import React, { useContext, useEffect, useState } from 'react';
import { useAuthCode, useCount, useIsLoggedIn, useSomeBoolean } from '../util/GlobalStates';
import StaticMeter from '../components/StaticMeter';


export default function AboutPage() {

    const [count, setCount] = useCount();
    const [authCode, setAuthCode] = useAuthCode();
    const [someBoolean, setSomeBoolean] = useSomeBoolean();
    const isLoggedIn = useIsLoggedIn();




    return (
        <>

            <StaticMeter label={"Thing"} value={4} max={10} />
            <StaticMeter label={"Thing"} value={6} max={10} />
            <StaticMeter label={"Thing"} value={2} max={10} />

            <div className='m-2 ml-3  text-stone-900  border border-gray-500 shadow-inner bg-gray-100 flex flex-col items-center p-4 rounded-lg'>

                <h3 className='text-xl font-bold mb-4'>debug stuff:</h3>


                <div>


                    <p>Auth Code: <br /> <span className='text-xs text-blue-900 font-mono'>{authCode}</span></p>

                    <p>Logged in? <b className='font-bold text-blue-800'> {isLoggedIn.toString()}</b></p>

                    <button className='mb-3 shadow-inner bg-gray-200 p-1' onClick={() => setAuthCode('')}>Clear Auth Code</button>


                    <p>Some Boolean: {someBoolean.toString()}</p>
                    <button className='mb-3 shadow-inner  text-blue-800 bg-gray-200 p-1' onClick={() => setSomeBoolean(!someBoolean)}>Toggle Boolean</button>

                    <p>Count: {count}</p>
                    <button className='mb-3 shadow-inner text-blue-800 bg-gray-200 p-1' onClick={() => setCount(count + 1)}>Increase Count</button>

                </div>


                <ul className='list-none'>


                    {/*kvDisplay('authCode:', 'authCode')*/}
                    <li className='my-2'>

                    </li>
                </ul>

            </div>


            <div className='m-2 ml-3 border border-gray-500 shadow-inner bg-gray-100 flex flex-col items-center p-4 rounded-lg'>


            </div>
        </>
    );


    function kvDisplay(k: string, v: string) {
        return (
            <li className='my-2'>
                <span>{k} </span> <span className='ml-2 font-mono text-xs'> {v} </span>
            </li>
        )
    }
}


