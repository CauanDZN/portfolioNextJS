import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/francisco-cauan-victor/" 
        />
        <ItemContact 
          IconFa={FaGithub} 
          LinkContact="https://github.com/CauanDZN" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/cauanvictoroficial/" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="cauanvictor0325@gmail.com" 
        />
      </Content>
    </Container>
  )
}
