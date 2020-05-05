import React, { useEffect } from 'react'
import { useDencrypt } from "use-dencrypt-effect";
import Controls from './generator/Controls'

export default function Home() {
    const { result, dencrypt } = useDencrypt();
    useEffect(() => {

        const action = setInterval(() => {
            dencrypt("Div Generator");


        }, 1000);

        return () => clearInterval(action);
    })
    return (
        <div style={{ width: '100%', height: '100%', margin: 'auto', fontSize: '24px' }}>
            <h2>{result}</h2>
            <Controls />
        </div>
    )
}
