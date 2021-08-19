import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Img = styled.img`
  display: block;
  width: 180px;
  height: 170px;
  margin: 20px 0 10px 0;
  /* border: solid 2px #fff;*/
  border-radius: 50px; 
  box-shadow: rgba(38, 57, 77, 0.5) -0px 10px 8px -5px;


  /* margin-left: 100px; */

`
