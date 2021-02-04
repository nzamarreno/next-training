import * as React from "react"

const Input = ({onChange, value}) => {
    const handleOnChange = (event) => {
        onChange(event.currentTarget.value)
    }

    return (
        <>
        <input placeholder="Type something here..." className="input" type="text" value={value} onChange={handleOnChange}/>
        <style jsx>{`
            .input {
                flex: 1;
                font-size: 1.2rem;
                margin: 1rem;
                height: 49px;
                padding: 0 1rem;
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