import styled from "styled-components";
import { FaFacebook, FaGoogle, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Info() {
  const StyledInfo = styled.section`
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
    padding: 10px;
    margin-bottom: 2px;
    font-size: 30px;
    border-radius: 10px;

    &:hover {
      background-color: var(--color-brand-900);
    }
  `;
  const Link = styled.a`
    display: block;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <div>
      <h1>Contact Me</h1>
      <StyledInfo>
        <Link href="https://api.whatsapp.com/send?phone=+201206953905&text=Hello!">
          <FaWhatsapp />
        </Link>
      </StyledInfo>
      <StyledInfo>
        <Link
          href="https://www.linkedin.com/in/fares-ahmed-3627b7239/"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </StyledInfo>
      <StyledInfo>
        <Link href="mailto:fares.haliim@gmail.com">
          <FaGoogle />
        </Link>
      </StyledInfo>
      <StyledInfo>
        <Link
          href="https://www.facebook.com/profile.php?id=100005496826371"
          target="_blank"
        >
          <FaFacebook />
        </Link>
      </StyledInfo>
    </div>
  );
}

export default Info;
