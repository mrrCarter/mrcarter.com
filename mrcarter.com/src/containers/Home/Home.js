import React, { Component, PropTypes } from 'react';
import {Container} from '../../theme/grid';
import {
    Image,
    SmallClip,
    RevealP
} from './Home.style';


export default class Home extends Component {
    static PropTypes = {};

    render() {
        return (
            <Container>
                <SmallClip>
                    <h1>Carther S. Theogene</h1>
                    <h3>Full Stack Developer</h3>
                </SmallClip>
                {/* <Image src={require('../assets/me-coding-clip.gif')} alt="me-coding-clip.gif"/> */}
                <RevealP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</RevealP>
            </Container>
        );
    }
}