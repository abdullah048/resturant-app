import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import { SmallStyledLi,StyledSmallOverlay, NavbarContainer, NavbarLogo, NavLinks, StyledLi, NavbarActionContainer, NavbarSmallContainer, NavbarSmallLinks } from '../../styles/Navbar.styled';
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

  const [toggleMenu, setToggleMenu] = React.useState<Boolean>(false);

  const handleToggleMenu = React.useCallback(() => {
    setToggleMenu(!toggleMenu)
  }, [toggleMenu])
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
      <NavbarSmallContainer>
        {showNavLinks &&
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={handleToggleMenu} style={{ cursor: 'pointer' }} />
        }
        {toggleMenu && (
          <StyledSmallOverlay>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={handleToggleMenu} />
            <NavbarSmallLinks>
              {navbarLinks.map(({ href, name }) => (
                <SmallStyledLi>
                  <a href={href}>{name}</a>
                </SmallStyledLi>
              ))}
            </NavbarSmallLinks>
          </StyledSmallOverlay>
        )}
      </NavbarSmallContainer>
    </NavbarContainer>
  );
};

export default Navbar;
