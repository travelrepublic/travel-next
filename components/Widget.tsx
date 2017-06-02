import * as React from 'react'

function sayHello(from: string) : string {
    return `Can this really be typescript, ${from}?`;
}

export default () => 
    <div>
        <p>{sayHello('Julian')}</p>
    </div>
