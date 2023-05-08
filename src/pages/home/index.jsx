import React, { useRef } from 'react';
import { BodyStyle, ContainerInner, Wrapper, ContentWrapper, Description, Button, TextWrapper, Title, ImageWrapper, ButtonIcon, Code, WrapperC, ContainerContent, Divider, ContentContainer2, NavButton } from '../../shared/styles/Base';
import DockerLogo from '../../assets/DockerLogo.png'
import DockerHubL from '../../assets/DockerHubL.png'
import ArrowDown from '../../assets/ArrowDown.png'
import ArrowRight from '../../assets/ArrowRight.png'

import { Link } from "react-router-dom"
import { Btext, CText, Gtext, Mtext, PText, Rtext, Ytext } from '../../shared/styles/text';

function Home() {

    const secao5Ref = useRef(null);
    const secao6Ref = useRef(null);
    const secao7Ref = useRef(null);
    const secao8Ref = useRef(null);

    const handleClickSecao5 = () => {
        secao5Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollBy(0, -160);
    };

    const handleClickSecao6 = () => {
        secao6Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollBy(0, -80);
    };
    const handleClickSecao7 = () => {
        secao7Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollBy(0, -80);
    };
    const handleClickSecao8 = () => {
        secao8Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollBy(0, -80);
    };



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
                            <Divider />
                            <Button onClick={handleClickSecao5}>Get Started</Button>
                        </TextWrapper>
                        <ImageWrapper>
                            <img src={DockerLogo} alt="dockerlogo" />
                        </ImageWrapper>

                    </ContentWrapper>
                </Wrapper>

            </ContainerInner>

            <ContainerInner ref={secao5Ref}>
                <WrapperC>

                    <Title><Rtext>First Steps</Rtext></Title>

                    <ContentWrapper>
                        <ContainerContent>

                            <Description>
                                1 - instalar e atualizar <br />
                                os repositorios com os seguintes <br />
                                comandos:
                            </Description>
                            <Code>
                                <CText>$</CText> <Gtext> sudo </Gtext>apt get update
                                <br />
                                <br />
                                <CText>$</CText> <Gtext>sudo</Gtext> apt-get <Gtext>install</Gtext> <Rtext>\</Rtext><br />
                                ca-certificates <Rtext>\</Rtext><br />
                                curl <Rtext>\</Rtext><br />
                                gnupg
                            </Code>
                        </ContainerContent>
                        <ContainerContent>

                            <Description>
                                2 - Instalar chave oficial GPG do docker
                            </Description>
                            <Code>
                                <CText>$</CText> <Gtext>sudo install</Gtext> <Ytext>-m</Ytext> 0755 FAFF00 <Mtext>/etc/apt/</Mtext><br />
                                keyrings<br />
                                <br />
                                <CText>$</CText> <Gtext>curl</Gtext> <Ytext>-fsSL</Ytext> <Mtext>https://<br />
                                    download.docker.com/linux/ubuntu/gpg</Mtext> |<br />
                                <Gtext>sudo</Gtext> gpg <Ytext>--dearmor -o</Ytext> <Mtext>/etc/apt/keyrings/<br />
                                    docker.gpg<br /></Mtext>
                                <br />
                                <CText>$</CText> <Gtext>sudo chmod</Gtext> <Ytext>a+r</Ytext> <Mtext>/etc/apt/keyrings/<br />
                                    docker.gpg</Mtext>
                            </Code>
                        </ContainerContent>

                    </ContentWrapper>
                    <ContainerContent>

                        <Description>
                            3 - Definir o Repositorio
                        </Description>
                        <Code>
                            <CText>$</CText> <Gtext>echo</Gtext> <Rtext>\<br />
                                "deb [arch="$(</Rtext>dpkg <Ytext>--print-architecture</Ytext><Rtext>)" signed-by=/etc/apt/keyrings/docker.gpg] https://<br />
                                download.docker.com/linux/ubuntu \"$(</Rtext><Gtext>.</Gtext> <Mtext>/etc/os-release </Mtext> && <Gtext>echo</Gtext> <Rtext>"</Rtext><Btext>$VERSION_CODENAME</Btext><Rtext>")" stable" </Rtext>| <Rtext> \</Rtext><br />
                            <Gtext>sudo tee</Gtext> <Mtext>/etc/apt/sources.list.d/docker.list</Mtext> {">"} /dev/null<br />

                        </Code>
                    </ContainerContent>
                    <Button onClick={handleClickSecao6}>Next </Button>
                </WrapperC>
            </ContainerInner>
            <Divider />
            <ContainerInner ref={secao6Ref}>
                <WrapperC>
                    <Title><Gtext>Installing Docker</Gtext></Title>
                    <ContainerContent>
                        <Description>1 - Atualizar os pacotes <br /> do indexDescription</Description>
                        <Code>
                            <CText>$</CText> <Gtext> sudo </Gtext>apt get update
                        </Code>
                    </ContainerContent>
                    <ContainerContent>
                        <Description>2 - Instalar chave oficial GPG do docker</Description>
                        <Code>
                            <CText>$</CText> <Gtext>sudo</Gtext> apt-get <Gtext>install </Gtext>
                            <Mtext>
                                docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
                            </Mtext>
                        </Code>
                    </ContainerContent>
                    <ContainerContent>
                        <Description>3 - verifique a instalação com esse comando:</Description>
                        <Code>
                            <CText>$</CText> <Gtext>sudo</Gtext> <Btext>docker</Btext> <Gtext>run</Gtext> hello-world
                        </Code>
                    </ContainerContent>
                    <Button onClick={handleClickSecao7}>Next</Button>
                </WrapperC>
            </ContainerInner>
            <Divider />
            <ContainerInner ref={secao7Ref}>
                <WrapperC>
                    <Title><PText>Post Installation</PText></Title>
                    <>Agora e necessario fazer com que o docker possa ser rodado por um usuario comum</>
                    <ContentWrapper>

                        <ContainerContent>
                            <Description>1 - Crie um grupo para o docker</Description>
                            <Code>
                                <CText>$</CText> <Gtext> sudo </Gtext>groupadd <Btext>docker</Btext>

                            </Code>
                        </ContainerContent>
                        <ContainerContent>
                            <Description>2 - adicione o ser usuario no grupo do docker</Description>
                            <Code>
                                <CText>$</CText> <Gtext>sudo</Gtext> usermod <Ytext>-aG</Ytext> <Btext>docker</Btext> <Rtext>$USER</Rtext>
                            </Code>
                        </ContainerContent>
                    </ContentWrapper>
                    <ContainerContent>
                        <Description>3 -  Ative as configurações</Description>
                        <Code>
                            <CText>$</CText> <Gtext>newgrp</Gtext> <Btext>docker</Btext>
                        </Code>
                    </ContainerContent>
                    <Button onClick={handleClickSecao8}>Next</Button>
                </WrapperC>
            </ContainerInner>
            <Divider />
            <ContainerInner ref={secao8Ref}>
                <ContentWrapper>
                    <ImageWrapper>
                        <img src={DockerLogo} alt="dockerlogo" />
                    </ImageWrapper>
                    <ContentContainer2>
                        <ContainerContent>
                            <Description>Agora é só testar</Description>
                            <Code>
                                <Btext>docker</Btext> <Gtext>run</Gtext> hello-world
                            </Code>
                        </ContainerContent>

                        <ContainerContent>
                            <Description>Para mais indormações</Description>
                        </ContainerContent>

                        <ContainerContent>
                            <Description>Veja Tambem sobre o Docker Hub</Description>
                        </ContainerContent>

                        <NavButton to="/dockerhub">  Docker Hub</NavButton>
                    </ContentContainer2>
                </ContentWrapper>
            </ContainerInner>
        </BodyStyle >


    );
}

export default Home;