import React from 'react';
import { BodyStyle, ContainerInner, Wrapper, ContentWrapper, Description, Button, TextWrapper, Title, ImageWrapper, ButtonIcon, Code, WrapperC, ContainerContent } from '../../shared/styles/Base';
import DockerLogo from '../../assets/DockerLogo.png'
import { NavLink } from "react-router-dom"
import { Gtext, Rtext, Ytext } from '../../shared/styles/text';

function Home() {


    return (

        <BodyStyle>
            <ContainerInner firstC>
                <Wrapper firstC>
                    <ContentWrapper >
                        <TextWrapper>
                            <Title><Ytext>Welcome</Ytext></Title>
                            <Description width="380px">
                                <Gtext>Aqui</Gtext> você irá <Rtext>aprender</Rtext> a como
                                <Rtext> instalar</Rtext> o docker no <Gtext>Ubuntu</Gtext>, de
                                forma <Ytext>simples</Ytext> e <Ytext>intuitiva</Ytext>"
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
                                $ sudo install -m 0755 FAFF00 /etc/apt/<br />
                                keyrings<br />
                                <br />
                                $ curl -fsSL https://<br />
                                download.docker.com/linux/ubuntu/gpg |<br />
                                sudo gpg --dearmor -o /etc/apt/keyrings/<br />
                                docker.gpg<br />
                                <br />
                                $ sudo chmod a+r /etc/apt/keyrings/<br />
                                docker.gpg
                            </Code>
                        </ContainerContent>

                    </ContentWrapper>
                    <ContainerContent>

                        <Description>
                            3 - Definir o Repositorio
                        </Description>
                        <Code>
                            $ echo \<br />
                            "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://<br />
                            download.docker.com/linux/ubuntu \<br />
                            <br />
                            "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \<br />
                            $sudo tee /etc/apt/sources.list.d/docker.list {">"} /dev/null<br />

                        </Code>
                    </ContainerContent>
                    <Button>Next</Button>
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