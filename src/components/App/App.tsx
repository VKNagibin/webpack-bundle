import * as React from 'react';
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import Image from "../Image/Image";
import "./App.scss";
import Img from '../../assets/images/peaceHand.png'

export default function App()
{
    return (
        <div className="app-container">
            <Heading content="It's working" />
            <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias atque consectetur cumque dolor, earum eum, id odit possimus provident quae quaerat quasi quidem quos tempore unde, voluptas voluptates? Qui."/>
            <Image src={Img} alt="Hello"/>
        </div>
    )
}


