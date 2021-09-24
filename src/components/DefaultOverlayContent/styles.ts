
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
flex: 1;
`;

export const Heading = styled.div`
margin-top: 16.5vh;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;

 h1 {
     font-weight: 500;
     font-size: 40px;
     line-height: 48px;
     color: #393c41;
 }

 h2 {
     font-weight: normal;
     font-size: 16px;
     line-height: 20px;
     color: #5c5e62;
     
 }
`;

export const Buttons = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

margin-bottom: 130px;




@media (min-width: 600px) {
    flex-direction: row;
    margin-bottom: 90px;

}

`;
