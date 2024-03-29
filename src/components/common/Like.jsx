import React from 'react';

const Like = (props) => {
    
    let classes = 'fa fa-heart';
    if(!props.liked) classes += "-o";
    return (
        <i className={classes} 
        style={{cursor: "pointer"}} 
        area-hidden="true" 
        onClick={props.onClick}></i>
    );
    
}

export default Like;
