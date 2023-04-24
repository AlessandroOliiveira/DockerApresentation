import React from 'react';
import { BodyStyle, ContainerInner, Wrapper, ContentWrapper, Description, Button, TextWrapper, Title, ImageWrapper, ButtonIcon, Code, WrapperC, ContainerContent, Divider, ContentContainer2, NavButton, LinkButton } from '../../shared/styles/Base';
import { Btext, Gtext, Rtext, Ytext } from '../../shared/styles/text';
import DockerLogo from '../../assets/DockerLogo.png'

// import { Container } from './styles';

function Sobre() {
    return (
        <BodyStyle>
            <ContainerInner firstC>
                <Wrapper firstC>
                    <ContentWrapper >
                        <TextWrapper>
                            <Title><Ytext>Sobre</Ytext></Title>
                            <Description width="380px">
                                <Gtext>Este</Gtext> é um trabalho <Rtext>feito</Rtext> por
                                <Rtext> tais integrantes: </Rtext> <Btext>Alessandro R de Oliveira, </Btext>
                                <Ytext>Lucas Mateus E. S Mota</Ytext> <Gtext>Leandro Gabriel</Gtext> e <Rtext>Caue Bandeira</Rtext>
                            </Description>
                            <Divider />
                            <LinkButton to="https://hub.docker.com/r/sssssandro/dockerapresentation" >Link Do DockerHub</LinkButton>
                        </TextWrapper>
                        <ImageWrapper>
                            <img src={DockerLogo} alt="dockerlogo" />
                        </ImageWrapper>

                    </ContentWrapper>
                </Wrapper>

            </ContainerInner>
        </BodyStyle>
    );
}

export default Sobre;