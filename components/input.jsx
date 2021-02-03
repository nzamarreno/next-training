import * as React from "react"

const Input = React.FC = () => {
    const [value, setValue] = React.useState('');

    const handleOnChange = React.useCallback((event) => {
        setValue(event.currentTarget.value)
    }, [])

    return (
        <input type="text" value={value} onChange={handleOnChange}/>
    )
}

export default Input;