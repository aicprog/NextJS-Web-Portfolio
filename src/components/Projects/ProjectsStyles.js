import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  /* height:100%; */
  height: 300px;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
  
  background: #fff;
  
  
  
  border-radius: 10px;
  transition: all .5s ease-in-out;
  line-height: 0;
  padding: 0em;
  color: transparent;


  

  &:hover{
    /* transform: translateY(-100%); */
    transform: translateY(-20px);
    line-height: 1.5;
    /* padding: 0.1em; */
    color: black;
    /* box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.7); */
    

  }
`

export const GridContainer = styled.section`
display: grid;
/* grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); */
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 6rem;



@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
  
}
`

export const BlogCard = styled.div`
  
  background-color: #17141d;
  
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  border-radius: 10px;
  /* box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5); */
  text-align: center;
  width: 300px;
  transition: 0.4s ease-out;


  @media screen and (min-width: 768px){
    height: 700px;
  }

  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }

  &:hover{
    box-shadow: rgb(38, 57, 77) 0px 20px 25px -10px;
    transform: translateY(-20px);
    transition: 0.4s ease-out;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: left;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: rgba(66, 122, 197, 0.1);
/* background: #6b3030; */
/* linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : linear-gradient(270deg, #13ADC7 0%, #945DD6 100%) */
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: rgba(66, 122, 197, 0.5);

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
/* color: #d8bfbf; */
color: rgb(255, 255, 255, 0.5);
font-size: 1.5rem;
`


export const CardBottom = styled.div`
  /* background-color: rgba(23, 20, 27); */
  padding: 2rem; 
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`