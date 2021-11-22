import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';

import './Sidebar.css';
export default function Sidebar() {
    return (
        <div id="sidebar">

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>لیست آیتم شماره 1</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">منوی 1</Nav.Link>
                            <Nav.Link eventKey="link-1">منوی 2</Nav.Link>
                            <Nav.Link eventKey="link-2">منوی 3</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>لیست آیتم شماره 2</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">منوی 1</Nav.Link>
                            <Nav.Link eventKey="link-1">منوی 2</Nav.Link>
                            <Nav.Link eventKey="link-2">منوی 3</Nav.Link>
                            <Nav.Link href="/home">منوی 4</Nav.Link>
                            <Nav.Link eventKey="link-1">منوی 5</Nav.Link>
                            <Nav.Link eventKey="link-2">منوی 6</Nav.Link>
                            <Nav.Link href="/home">منوی 7</Nav.Link>
                            <Nav.Link eventKey="link-1">منوی 8</Nav.Link>
                            <Nav.Link eventKey="link-2">منوی 9</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>لیست آیتم شماره 3</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">منوی 1</Nav.Link>
                            <Nav.Link eventKey="link-1">منوی 2</Nav.Link>
                            <Nav.Link eventKey="link-2">منوی 3</Nav.Link>
                            <Nav.Link href="/home">منوی 4</Nav.Link>
                            <Nav.Link eventKey="link-1">منوی 5</Nav.Link>
                            <Nav.Link eventKey="link-2">منوی 6</Nav.Link>
                            <Nav.Link href="/home">منوی 7</Nav.Link>
                            <Nav.Link eventKey="link-1">منوی 8</Nav.Link>
                            <Nav.Link eventKey="link-2">منوی 9</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>لیست آیتم شماره 4</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">منوی 1</Nav.Link>
                            <Nav.Link eventKey="link-1">منوی 2</Nav.Link>
                            <Nav.Link eventKey="link-2">منوی 3</Nav.Link>
                            <Nav.Link href="/home">منوی 4</Nav.Link>
                            <Nav.Link eventKey="link-1">منوی 5</Nav.Link>
                            <Nav.Link eventKey="link-2">منوی 6</Nav.Link>
                            <Nav.Link href="/home">منوی 7</Nav.Link>
                            <Nav.Link eventKey="link-1">منوی 8</Nav.Link>
                            <Nav.Link eventKey="link-2">منوی 9</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>لیست آیتم شماره 5</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">منوی 1</Nav.Link>
                            <Nav.Link eventKey="link-1">منوی 2</Nav.Link>
                            <Nav.Link eventKey="link-2">منوی 3</Nav.Link>
                            <Nav.Link href="/home">منوی 4</Nav.Link>
                            <Nav.Link eventKey="link-1">منوی 5</Nav.Link>
                            <Nav.Link eventKey="link-2">منوی 6</Nav.Link>
                            <Nav.Link href="/home">منوی 7</Nav.Link>
                            <Nav.Link eventKey="link-1">منوی 8</Nav.Link>
                            <Nav.Link eventKey="link-2">منوی 9</Nav.Link>
                            <Nav.Link href="/home">منوی 10</Nav.Link>
                            <Nav.Link eventKey="link-1">منوی 11</Nav.Link>
                            <Nav.Link eventKey="link-2">منوی 12</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
