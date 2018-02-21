import styled, {css} from 'styled-components';


export const Image = styled.img`
    width: 100%;
`;

//vh is relative to 1% of the height of the viewport
//Also since we're inside of backticks we have to 
//use string literals to require anything $...
export const SmallClip = styled.div`
    height: 100vh;
    background-image: url('${require('../../assets/me-coding-clip.gif')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    text-align: center;
    color: #E78403;

    font-size: 2em;

    h1 {
        margin-bottom: 0;
    }
    h3 {
        margin-top: 0;
    }
`;
//Above we are using flexbox to display the text
//in the center of the picture background see http://bit.ly/2oKZZlz for documentation

//to make text look like they are revealing themselves in a way. paragraph tag

//below we made use of pseudo element to style specified parts of an element.
//content here is considered a child of p
//we style it and then what transform is doing:
//when the hide value is true &:after {} happens

export const RevealP = styled.p`
    position: relative;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;

        transform-origin: left;
        transform: rotateY(90deg);

        transition: transform 1s;
    }

    ${({ hide }) => hide && css`
        &:after {
            transform: rotateY(0deg);
        }
    `}
`;