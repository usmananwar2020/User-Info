import React from 'react'
function CurrentDate(props) {
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();

    const { setDate } = props;

    return (
        <div>
            {
                <>
                    {setDate(`${currDate},${currTime}`)}
                </>
            }
        </div>
    )
}

export default CurrentDate
