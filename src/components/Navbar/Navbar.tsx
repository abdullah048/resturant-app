import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import { StyledSmallOverlay, NavbarContainer, NavbarLogo, NavLinks, StyledLi, NavbarActionContainer, NavbarSmallContainer, NavbarSmallLinks } from '../../styles/Navbar.styled';
import { useMediaQuery } from 'react-responsive'
const navbarLinks = [
  {
    href: '#home',
    name: 'Home'
  },
  {
    href: '#about',
    name: 'About'
  },
  {
    href: '#menu',
    name: 'Menu'
  },
  {
    href: '#awards',
    name: 'Awards'
  },
  {
    href: '#contact',
    name: 'Contact'
  },
]

const Navbar = () => {
  const showNavLinks = useMediaQuery({
    query: '(max-width:1150px)'
  })
  return (
    <NavbarContainer>
      <NavbarLogo>
        <img src={images.gericht} alt="navbar-logo" />
      </NavbarLogo>
      {!showNavLinks && (
        <NavLinks>
          {navbarLinks.map(({ href, name }) => (
            <StyledLi>
              <a href={href}>{name}</a>
            </StyledLi>
          ))}
        </NavLinks>
      )}
      <NavbarActionContainer>
        <StyledLi>
          <a href="#login">Login / Register</a>
        </StyledLi>
        <div />
        <StyledLi>
          <a href="/">Book Table</a>
        </StyledLi>
      </NavbarActionContainer>
      {showNavLinks && (
        <NavbarSmallContainer>
          <GiHamburgerMenu color='#fff' fontSize={27} />
          <StyledSmallOverlay>
            <MdOutlineRestaurantMenu color='#fff' fontSize={27} className='overlay__close' />
            <NavbarSmallLinks>
              {navbarLinks.map(({ href, name }) => (
                <StyledLi>
                  <a href={href}>{name}</a>
                </StyledLi>
              ))}
            </NavbarSmallLinks>
          </StyledSmallOverlay>
        </NavbarSmallContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
