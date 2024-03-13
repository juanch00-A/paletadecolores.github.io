import { useState } from "react"
import Values from "values.js"

export const FormColor = ({setList}) => {

    const [color, setColor] = useState("blue")
    const [error, setError] = useState(false)


    const handleGenerator = e => {
        e.preventDefault()
        try {
            let colors = new Values(color).all(5)
            setList(colors)
            setError(false)
            // console.log(colors)
        } catch (error) {
            console.log(error);
            setError(true)
        }
        console.log(color);
    }

    
    return (
        <>
            <div className="form-color">
            <h1>Color Palette Generator</h1>
            <form onSubmit={handleGenerator}>
                <input type="text" placeholder="Red" onChange={e => setColor(e.target.value)}  />
                <input type="submit" value='Generate'/>
            </form>
            {error ? <p className="error">No existe este color...</p> : null}
            </div>
        </>
    
    )
}
