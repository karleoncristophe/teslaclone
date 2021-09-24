import React from 'react';
import styled from 'styled-components'
import { Container, Heading, Buttons } from './styles';

const CustomButton = styled.button`
 background: #1a1720;
    color: #ffff;
    opacity: 0.8;

    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 13px 40px;
    border: none;
    outline: 0;
    border-radius: 20px;
    cursor: pointer;
    margin: 10px 0 0;
`
const ExisringButton = styled.button`
 background: #ffff;
    color: #1a1720;
    opacity: 0.8;

    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 13px 40px;
    border: none;
    outline: 0;
    border-radius: 20px;
    cursor: pointer;
    margin: 10px 0 0;
    margin-left: 10px;
`

interface Props {
  label: string
  description: string
}

const DefaultOverlayContent: React.FC<Props> = ({
  label, description
}) => {
  return (
    <Container>

      <Heading>
      <h1>{label}</h1>
      <h2>{description}</h2>
      </Heading>

      <Buttons>
        <CustomButton>Custom Order</CustomButton>
        <ExisringButton>Existing Inventory</ExisringButton>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
