import React from 'react';

function ViewQuestion(props) {
    const { greeting, farewell, link } = props;

    return (
        <div>
            View Question Component
            <a href={link}>Check it out yo</a>
            <br/>
            {greeting}
            <br/>
            {farewell}
        </div>
    )
}

export default ViewQuestion;