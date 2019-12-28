import React, {useEffect, useState} from 'react'

export function EffectExample() {
    const [click, setClick] = useState(0)
    const [state, setState] = useState(0)
    useEffect(() => {
        document.title = `Clicked ${click} times`
    }, [click])

    return (
        <div>
            <p>
                You clicked {click} times
                {state}
            </p>
            <button onClick={() => {
                setClick(click + 1)
                setState(state + 1)
            }}>
                Click me
            </button>
        </div>
    )

}