import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container';

const Image = styled.img`
    width: 100%;
`;

export default class Home extends Component {
    static PropTypes = {};

    render() {
        return (
            <Container>
                <Image src={require('../assets/me-coding-clip.gif')} alt="me-coding-clip.gif"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Container>
        );
    }
}