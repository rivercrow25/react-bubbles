import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const initialColor = {
    color: "",
    code: { hex: "" }
};

const AddColorForm = ({ getColors, colors }) => {
    const [addColor, setAddColor] = useState({
        color: "",
        code: { hex: "" },
        id: colors.length
    })

    const handleChange = event => {
        setAddColor({ ...addColor, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        axiosWithAuth().post('/api/colors', addColor)
            .then(res => {
                console.log(res)
                getColors()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='colorname'>Add a Color</label>
            <input name='color' type='text' id='colorname' placeholder='color name' onChange={handleChange} />
            <input id='name' name='hex' type='text' placeholder='color hex' onChange={event => setAddColor({
                ...addColor, code: { hex: event.target.value }
            })} />
            <button type='submit'>Add Color</button>
        </form>
    )
}

export default AddColorForm