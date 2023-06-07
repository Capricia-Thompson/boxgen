import React, { useState } from 'react'

const BoxGenerator = (props) => {
    let { boxes, addBoxes } = props;
    let [color, setColor] = useState('')
    let [size, setSize] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        addBoxes({ color, size });
        setColor('');
        setSize('')
    }

    return (
        <div style={{
            margin: '20px'
        }}>
            <form onSubmit={handleSubmit}>
                <div style={{
                    margin: '20px'
                }}>
                    <label>Color</label>
                    <input type="text" value={color} onChange={(e) => { setColor(e.target.value) }} />
                </div>
                <div style={{
                    margin: '20px'
                }}>
                    <label>Size</label>
                    <input type="text" value={size} onChange={(e) => { setSize(e.target.value) }} />
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default BoxGenerator;