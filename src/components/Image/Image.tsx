import * as React from 'react';
import "./Image.scss";


export default function Image(props: any) {
    return (
        <img src={props.src} alt={props.alt}/>
    )
}


