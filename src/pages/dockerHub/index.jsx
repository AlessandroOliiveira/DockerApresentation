

import React, { useRef } from 'react';
import { BodyStyle, ContainerInner, Wrapper, ContentWrapper, Description, Button, TextWrapper, Title, ImageWrapper, ButtonIcon, Code, WrapperC, ContainerContent, Divider, ContentContainer2, NavButton, LinkButton } from '../../shared/styles/Base';
import DockerHubLogo from '../../assets/DockerHub.png'
import { Btext, CText, Gtext, Mtext, PText, Rtext, Ytext } from '../../shared/styles/text';

function DockerHub() {

    const secao1Ref = useRef(null);
    const secao2Ref = useRef(null);
    const secao3Ref = useRef(null);
    const secao4Ref = useRef(null);

    const handleClickSecao1 = () => {
        secao1Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollBy(0, -160);
    };

    const handleClickSecao2 = () => {
        secao2Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollBy(0, -80);
    };
    const handleClickSecao3 = () => {
        secao3Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollBy(0, -80);
    };
    const handleClickSecao4 = () => {
        secao4Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollBy(0, -80);
    };



    return (

        <BodyStyle>
            <ContainerInner firstC>
                <Wrapper firstC>
                    <ContentWrapper >
                        <TextWrapper>
                            <Title><Ytext>Starting</Ytext></Title>
                            <Description width="380px">
                                <Gtext>Agora</Gtext> você irá <Rtext>aprender</Rtext> a como
                                <Rtext> utilizar e baixar</Rtext> uma imagem do <Btext>docker</Btext>, de
                                forma <Ytext>simples</Ytext> e <Ytext>intuitiva</Ytext>"
                            </Description>
                            <Divider />
                            <Button onClick={handleClickSecao1}>Get Started</Button>
                        </TextWrapper>
                        <ImageWrapper>
                            <img src={DockerHubLogo} alt="dockerlogo" />
                        </ImageWrapper>

                    </ContentWrapper>
                </Wrapper>

            </ContainerInner>

            <ContainerInner ref={secao1Ref}>
                <WrapperC>
                    <Title><PText>Quick Start</PText></Title>
                    <ContainerContent>
                        <Description>1 - Crie uma conta nesse link/Description</Description>
                        <Code>
                            <Gtext> https://hub.docker.com/signup/</Gtext>
                        </Code>
                    </ContainerContent>
                    <ContainerContent>
                        <Description>2 - Crie seu primeiro repositorio</Description>
                        <Code>
                            <Ytext> https://hub.docker.com/repository/create?namespace=sssssandro</Ytext>
                        </Code>
                    </ContainerContent>
                    <ContainerContent>
                        <Description>3 - Defina a visibilidate entre public e private e aperte criar</Description>
                    </ContainerContent>
                    <Button onClick={handleClickSecao2}>Next</Button>
                </WrapperC>
            </ContainerInner>



            <ContainerInner ref={secao2Ref}>
                <WrapperC>
                    <Title><Rtext>Utilizando o DockerHub</Rtext></Title>
                    <ContentWrapper>

                        <ContainerContent>
                            <Description>1 - Crie um Dockerfile para especificar o seu “aplicativo”</Description>
                            <Code>
                                <Gtext>#syntax=docker/dockerfile:1 <br />FROM busybox
                                    <br />CMD echo "Hello world! This is my first Docker image."</Gtext>

                            </Code>
                        </ContainerContent>
                        <ContainerContent>
                            <Description>2 - Criar a imagem no repositorio</Description>
                            <Code>
                                <CText>$</CText><Btext>docker</Btext> <Mtext>build</Mtext> <Ytext>-t</Ytext>  <Rtext>{"<your_username>/my-private-repo"}</Rtext>
                            </Code>
                        </ContainerContent>
                    </ContentWrapper>
                    <ContainerContent>
                        <Description>3 - Para mandar as alterações que voce fizer use:</Description>
                        <Code>
                            <CText>$</CText> <Btext>docker</Btext> <Gtext>push</Gtext> <Rtext>{"<your_username>/my-private-repo"}</Rtext>
                        </Code>
                    </ContainerContent>
                    <Button onClick={handleClickSecao3}>Next</Button>
                </WrapperC>
            </ContainerInner>



            <Divider />
            <ContainerInner ref={secao3Ref}>
                <ContentWrapper>
                    <ImageWrapper>
                        <img src={DockerHubLogo} alt="dockerlogo" />
                    </ImageWrapper>
                    <ContentContainer2>
                        <ContainerContent>
                            <Description>Agora é só testar</Description>
                            <Code>
                                <CText>$</CText> <Btext>docker</Btext> <Gtext>run</Gtext> <Rtext>{"<your_username>/my-private-repo"}</Rtext>
                            </Code>
                        </ContainerContent>

                        <ContainerContent>
                            <Description>Este site esta tambem no Docker Hub</Description>
                        </ContainerContent>

                        <ContainerContent>
                            <Description>Para mais informações clique abaixo</Description>
                        </ContainerContent>

                        <LinkButton to="https://docs.docker.com/docker-hub/">Docker Documentation</LinkButton>
                    </ContentContainer2>
                </ContentWrapper>
            </ContainerInner>
        </BodyStyle >


    );
}

export default DockerHub;


