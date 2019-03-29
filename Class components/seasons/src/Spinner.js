import React from 'react';

const Spinner = () => {
    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">
                Need permision to get position!
            </div>
        </div>
    );
}

export default Spinner;