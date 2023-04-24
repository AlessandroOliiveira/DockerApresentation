import styled from "styled-components";


export const BodyStyle = styled.div`
padding: 0;
`;

export const ContainerInner = styled.div`
color: white;
display: flex;
flex-direction: column;
justify-content: center;
 height:${(props) => (props.firstC ? 'calc(100vh - 70px)' : '100vh')};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height:${(props) => (props.firstC ? 'calc(100vh - 70px)' : '100vh')};
  padding-bottom: 100px;
`

export const WrapperC = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height:${(props) => (props.firstC ? 'calc(100vh - 70px)' : '100vh')};
  padding-bottom: 100px;
`


export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  padding: 0 2rem;
`;

export const Divider = styled.div`
  margin: 20px;
  width: 100%;
`

export const ContainerContent = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
justify-content: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  color: ${(props) => (props.color)};
  margin-bottom: 1rem;
`;


export const Description = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 29.05px;
  padding: 2px;
  text-align: center;
  width: ${(props) => props.width};
  text-align: justify;
`;

export const Code = styled.div`
  background-color: #070714;
 
  font-size: 24px;
  border-radius: 29px;
  padding: 30px;
`;
export const Button = styled.button`
  font-size: 1.6rem;
  padding: 1rem 2rem;
  width: 380px;
  background: #5379FF;
  border-radius: 37px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3861f8;
  }
`;

export const ButtonIcon = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;


export const ImageWrapper = styled.div`
  flex-shrink: 0;
`;

export const ContentContainer2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 40px;

`;