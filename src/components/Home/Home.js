import React from 'react';
import './Home.css';
import logo from '../../logo2.png';
import { FiShoppingCart } from 'react-icons/fi';
import { Navbar, Button } from 'react-bootstrap';
import TopBanner from '../TopBanner/TopBanner';
import Menu from '../Menu/Menu';

const headerNAV =
    <Navbar variant="light" bg="white" sticky="top" >
        <Navbar.Brand href="/">
            <img className="banner-logo" src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Collapse variant="light" className="justify-content-end">
            <a href="/cart" className="left-margin"><FiShoppingCart className="iconColor" /></a>
            <a href="/login" className="left-margin">Login</a>
            <a href="/signup" className="just-margin" >
                <Button style={
                    {
                        borderRadius: "21px", 
                        height: "42px", 
                        width: "120px", 
                        backgroundColor: "#ff0046", 
                        border: "none"
                    }
                }>Sign Up</Button>
            </a>
        </Navbar.Collapse>
    </Navbar>;



const Home = () => {
    return (
        <div className="genMargin">

            {headerNAV}


            <TopBanner />

            <Menu />





            <h1>This is Home page</h1>

            <h1>This is Home page Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet quia cum assumenda ipsum quibusdam sed obcaecati, natus, aliquid minus iusto! Veritatis consequatur aut fugiat iste fugit voluptatibus sequi sed quod dolorem dicta ullam odit totam ipsa, aliquid unde doloremque. Temporibus incidunt iste, veniam enim deserunt ipsa architecto. Numquam tenetur non iure voluptatibus! Et sed quam, ex quis eius tenetur dolorem rerum, ad, accusantium atque saepe deserunt similique magnam amet praesentium porro. Ab illum vitae fugiat iusto voluptatum a asperiores ipsum exercitationem corrupti autem, non suscipit laboriosam. Dignissimos, molestiae. Modi voluptas dignissimos illo iste quam vel enim autem corporis atque?</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>
            <h1>This is Home page</h1>

        </div>
    );
};

export default Home;