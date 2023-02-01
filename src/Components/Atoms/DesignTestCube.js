import React from 'react';
import ColorThemeContext from '../../Contexts/ColorThemeContext';
import '../../Styles/designTest.css';

function DesignTestCube(props) {

    return (
        <ColorThemeContext.Consumer>
            {(value) => {
                return ( 
                    <li id='designTest' 
                        style={{ 
                            backgroundColor: value.colorTheme.colors[1],
                            left: props.left,
                            top: props.top,
                            animationDuration: props.animDur,
                        }}>
                    {props.children}
                    </li>);
            }}
        </ColorThemeContext.Consumer>
    );

}

export default DesignTestCube;