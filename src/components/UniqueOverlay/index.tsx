import { useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";
import UseWrapperScroll from "../Model/UseWrapperScroll";

import { Container, Header, Logo, Burger, Footer } from "./styles";

const ContentTitles = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 80px;
`;

const Titles = styled.a`
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  padding-left: 20px;
  font-family: "Poppins", sans-serif;
`;
const ContentMoreOptions = styled.div`
  display: flex;
  flex-direction: row;
`;
const MoreOptions = styled.a`
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  padding-left: 20px;
  font-family: "Poppins", sans-serif;
`;

const dataMoreOptions = [
  {
    id: 0,
    name: "Shop",
  },
  {
    id: 0,
    name: "Tesla Account",
  },
];
const dataModel = [
  {
    id: 0,
    name: "Model S",
  },
  {
    id: 1,
    name: "Model Y",
  },
  {
    id: 2,
    name: "Model 3",
  },
  {
    id: 3,
    name: "Model X",
  },
  {
    id: 4,
    name: "Solar Roof",
  },
  {
    id: 5,
    name: "Solar Paneles",
  },
];

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = UseWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <ContentTitles>
          {dataModel.map((item) => (
            <Titles>{item.name}</Titles>
          ))}
        </ContentTitles>

        <ContentMoreOptions>
          {dataMoreOptions.map((item) => (
            <MoreOptions>{item.name}</MoreOptions>
          ))}
          <Burger />
        </ContentMoreOptions>
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="/">Tesla © 2021</a>
          </li>

          <li>
            <a href="/">Privacy & Legal</a>
          </li>

          <li>
            <a href="/">Contact</a>
          </li>

          <li>
            <a href="/">Careers</a>
          </li>

          <li>
            <a href="/">Get Newsletter</a>
          </li>

          <li>
            <a href="/">News</a>
          </li>

          <li>
            <a href="/">Forum</a>
          </li>

          <li>
            <a href="/">Location</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
