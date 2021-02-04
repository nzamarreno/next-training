import * as React from "react"

const Input = ({onChange, value}) => {
    const handleOnChange = (event) => {
        onChange(event.currentTarget.value)
    }

    return (
        <>
        <input className="input" type="text" value={value} onChange={handleOnChange}/>
        <style jsx>{`
            .input {
                flex: 1;
                margin: 1rem;
                padding: 1rem;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
            }
        `}</style>
        </>
    )
}

export default Input;