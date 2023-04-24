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
  height:${(props) => (props.firstC ? 'calc(100vh - 70px)' : '100vh')};
  padding-bottom: 100px;
`


export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1110px;
  padding: 0 2rem;
`;

export const ContainerContent = styled.div`

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
  margin-bottom: 2rem;
`;

export const Code = styled.div`
  background-color: #070714;
  display: flex;
  align-items: center;
  justify-content: center;
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

