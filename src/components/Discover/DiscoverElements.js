import styled from "styled-components";

import backgroundBg from "../../images/animaedShape.svg"

export const DiscoverBg = styled.div`
  background: url(${backgroundBg});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: top;
  z-index: -1;
  position: fixed;
  width: 100vw;
  height: 500px;
`;

export const DiscoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
`;
export const DiscoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  margin-top: 10em;
  margin-bottom: 3em;
  /* padding: 30px 20px; */
`;
export const DiscoverForm = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 60%;
  background-color: rgba(0, 0, 0, 0.3);
  outline: none;
  border: none;
  font-size: 1.1rem;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;

  @media screen and (max-width: 400px) {
    width: 75%;
  }
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.2rem;
`;

export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DiscoverCards = styled.div`
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 450px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const DiscoverCard = styled.div`
  width: 200px;
  height: 250px;
  background-color: #e0ecde;
  border-radius: 4px;
  box-shadow: 3px 3px 20px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  gap: 1rem;
`;

export const Title = styled.h1`
  color: #2c6975;
`;
export const Subtitle = styled.p`
  color: #2c6975;
  text-align: center;
`;
