import React, { useContext } from 'react';
import ColorThemeContext from '../../Contexts/ColorThemeContext';
import "../../Styles/individualExperience.css";

function IndiviudalExp(props) {
    return (
        <ColorThemeContext.Consumer>
            {(value) => {
                return (
                    <div className='expContainer'>
                        <div className='date' style={{ backgroundColor: value.colorTheme.colors[4] }}>
                            {props.startDate} - {props.endDate}
                        </div>
                        <div className='companyName' style={{ backgroundColor: value.colorTheme.colors[2] }}>
                            {props.company}
                            <div className='jobTitle'>
                                {props.title}
                            </div>
                        </div>

                        <div className='companyDescription' style={{ backgroundColor: value.colorTheme.colors[3] }}>
                            {props.description}
                        </div>
                    </div>
                );

            }}
        </ColorThemeContext.Consumer>

    );
}

export default IndiviudalExp;