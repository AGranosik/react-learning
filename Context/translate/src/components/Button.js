import React from 'react';
import LanguageContext from '../Context/LanguageContext';

class Button extends React.Component{

    render(){
        return(

            <button className="ui button primary">
                <LanguageContext.Consumer>
                    { (value) => value === 'english' ? 'Submit' : 'Voorleggeen'}
                </LanguageContext.Consumer>
            </button>
        );
    }
}

export default Button;