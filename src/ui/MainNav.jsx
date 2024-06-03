import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiHome,
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        {navArr.map((link) => (
          <li key={link.id}>
            <StyledNavLink to={link.link}>
              {link.icon} <span>{link.title}</span>
            </StyledNavLink>
          </li>
        ))}
      </NavList>
    </nav>
  );
}

export default MainNav;

const navArr = [
  { title: "Home", link: "/dashboard", icon: <HiHome />, id: "h123" },
  {
    title: "Bookings",
    link: "/bookings",
    icon: <HiOutlineCalendarDays />,
    id: "6516",
  },
  {
    title: "Cabins",
    link: "/cabins",
    icon: <HiOutlineHomeModern />,
    id: "dwqeqw",
  },
  { title: "Users", link: "/users", icon: <HiOutlineUsers />, id: "grthrth" },
  {
    title: "Settings",
    link: "/settings",
    icon: <HiOutlineCog6Tooth />,
    id: "6512e6qw",
  },
];
