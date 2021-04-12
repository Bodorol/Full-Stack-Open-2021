import React from 'react'

const Total = (props) => {
    const parts = props.course.parts;
    return (
      <div>
        <p><strong>Total Number of Exercises: {parts.reduce((sum, part) => sum + part.exercises, 0)}</strong></p>
      </div>
    );
}

export default Total