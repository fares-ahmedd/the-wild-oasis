import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useState } from "react";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;
const Li = styled.li`
  &.active button {
    background-color: var(--color-brand-600);
    & svg {
      color: var(--color-brand-50);
    }
  }
`;

function HeaderMenu() {
  const navigate = useNavigate();
  const [select, setSelect] = useState(null);
  const menuItems = [
    {
      component: (
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      ),
    },
    {
      component: <DarkModeToggle />,
    },
    {
      component: <Logout />,
    },
  ];

  return (
    <StyledHeaderMenu>
      {menuItems.map((item, index) => (
        <Li
          key={Math.random()}
          onClick={() => setSelect(index)}
          className={`${select === index ? "active" : ""}`}
        >
          {item.component}
        </Li>
      ))}
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
