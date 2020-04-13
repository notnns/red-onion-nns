import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import { Tab } from 'react-bootstrap';

const Menu = () => {
    return (
        <div>
            <h1>This is Menu With three toggle item. lunch dinner breakfast</h1>

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                
                <Tab eventKey="home" title="Home">
                    <p>kdsjfhaksdjfhaskjdfhaksjdfhkasjdh skajdfhaksjdfhjkasd jkasdfh kjsadf h</p>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur minus consectetur natus porro dolor facere officia distinctio, maxime aspernatur blanditiis dolorum quibusdam amet libero modi earum ad praesentium voluptatum rem et! Ipsum, doloribus? Eligendi beatae odio minus error, corrupti voluptatem aut repudiandae facere nam omnis non deleniti magni debitis natus?</p>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni, sit nulla nostrum minus asperiores officiis. Temporibus deleniti ullam nostrum!</p>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Menu;