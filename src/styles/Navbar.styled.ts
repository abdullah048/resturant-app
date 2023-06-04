import styled from 'styled-components'
import { FlexCenter, ParaOpenSans } from './utils/Utils.styled';

export const NavbarContainer = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--color-black);
    padding: 1rem 2rem;

    @media screen and (max-width:650px){
        padding: 1rem;
    }
`;

export const NavbarLogo = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;

img {
    width: 150px;
}

@media screen and (max-width:650px){
    img {
        width: 110px;
    }
}
`;

export const NavLinks = styled.ul`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
`;

export const StyledLi = styled(ParaOpenSans)`
list-style: none;
margin: 0 1rem;
cursor: pointer;

a {
    &:hover {
    color: var(--color-grey);
    }
}
`;

export const SmallStyledLi = styled(StyledLi)`
margin: 2rem;
color: var(--color-golden);
font-family: var(--font-base);
font-size: 2rem;

a {
    &:hover {
    color: var(--color-white) !important;
}
}
`;

export const NavbarActionContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;

a {
    margin: 0 1rem;
    text-decoration: none;

    &:hover {
        color: white;
        border-bottom:1px solid var(--color-golden);
    }
}

div {
    width: 1px;
    height: 30px;
    background-color: var(--color-grey);
}

    @media screen and (max-width:650px){
        display: none;
    }
`;

export const NavbarSmallContainer = styled.div`

`;

export const NavbarSmallLinks = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledSmallOverlay = styled(FlexCenter)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--color-black);
    transition: 0.5s ease;
    z-index: 5;
    flex-direction: column;
    -webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    .overlay__close {
        font-size: 27px;
        color: var(--color-golden);
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;
    }
`;