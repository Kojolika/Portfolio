import React from 'react';
import '../../Styles/menu.css';

function Menu (props){
    return (
    <div className='container'>
        {props.children}
    </div>
    );
}

export default Menu;