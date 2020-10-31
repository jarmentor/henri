import styled from 'styled-components'

export const Wrapper = styled.div`
    text-align: center;
`
export const Header = styled.header`
    background-color: teal;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`
export const Nav = styled.nav`
    display: flex;

    a {
        padding: 2em 3em;
        display: block;
        color: white;
        text-decoration: none;
        :hover {
            text-decoration: underline;
        }
    }
`
