import React from 'react'
import Rectangle from './Rectangle'

function Rectangles(props) {
    return (
        <div className="Rectangles">
            {props.data.map((data, index) => {
                return (
                    <Rectangle
                        // Guarantee a unique key for each item in the list
                        key={
                            `${index}` +
                            `${Object.values(data)}`
                                .split(' ')
                                .join('')
                                .slice(10, 20)
                        }
                        title={Object.keys(data)}
                        content={Object.values(data)}
                    />
                )
            })}
        </div>
    )
}

export default Rectangles