import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Cauan Victor</Name>
        <Function>FullStack Developer</Function>
        <Intro>Cursando em Redes de Computadores, 
          tenho experiência em desenvolvimento Web
          (React, JS, TS, Node, Express, Prisma e outros).
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
