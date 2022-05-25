import React from 'react';
import '../style/components/Loading.css';

const Loading = () => {
    return (
        <div className="Loading">
            <div className="spinning">
                <i className="fa-solid fa-circle-notch fa-2xl" />
            </div>

        </div>
    )
}

export { Loading }