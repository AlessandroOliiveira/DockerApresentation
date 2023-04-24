import React from 'react';
import { BodyStyle, ContainerInner, Wrapper, ContentWrapper, Description, Button, TextWrapper, Title, ImageWrapper, ButtonIcon, Code, WrapperC, ContainerContent } from '../../shared/styles/Base';
import DockerLogo from '../../assets/DockerLogo.png'
import { NavLink } from "react-router-dom"

function Home() {


    return (

        <BodyStyle>
            <ContainerInner firstC>
                <Wrapper firstC>
                    <ContentWrapper >
                        <TextWrapper>
                            <Title>Welcome</Title>
                            <Description>
                                Aqui você irá aprender a como <br />
                                instalar o docker no Ubuntu, de <br />
                                forma simples e intuitiva
                            </Description>
                            <Button onClick={<NavLink to="#section_2" scrollOptions={{ behavior: 'smooth' }} />}>Get Started<ButtonIcon /></Button>
                        </TextWrapper>
                        <ImageWrapper>
                            <img src={DockerLogo} alt="dockerlogo" />
                        </ImageWrapper>

                    </ContentWrapper>
                </Wrapper>

            </ContainerInner>

            <ContainerInner id="section_1">
                <WrapperC>

                    <Title>First Steps</Title>

                    <ContentWrapper>
                        <ContainerContent>

                            <Description>
                                1 - instalar e atualizar <br />
                                os repositorios com os seguintes <br />
                                comandos:
                            </Description>
                            <Code>
                                $ sudo apt-get update <br />
                                <br />
                                $ sudo apt-get install \<br />
                                ca-certificates \<br />
                                curl \<br />
                                gnupg
                            </Code>
                        </ContainerContent>
                        <ContainerContent>

                            <Description>
                                2 - Instalar chave oficial GPG do docker
                            </Description>
                            <Code>
                                $ sudo install -m 0755 FAFF00 /etc/apt/keyrings<br />
                                <br />
                                $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg |<br />
                                sudo gpg --dearmor -o /etc/apt/keyrings/
                                docker.gpg<br />
                                <br />
                                $ sudo chmod a+r /etc/apt/keyrings/docker.gpg
                            </Code>
                        </ContainerContent>
                    </ContentWrapper>
                    <ContainerContent>
                        teste
                    </ContainerContent>
                    <Button></Button>
                </WrapperC>
            </ContainerInner>
            <ContainerInner id="section_2">
                teste
            </ContainerInner>
            <ContainerInner id="section_3">
                teste
            </ContainerInner>
            <ContainerInner id="section_4">
                teste
            </ContainerInner>
        </BodyStyle >


    );
}

export default Home;