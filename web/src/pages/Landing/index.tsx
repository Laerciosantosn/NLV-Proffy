import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeatIcon from '../../assets/images/icons/purple-heart.svg';

import {
  Container,
  Content,
  LogoContainer,
  ButtonsContainer,
  ConnnectionContainer,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container className="page-landing">
      <Content
        id="page-landing-content"
        className="container page-landing-content"
      >
        <LogoContainer className="logo-container">
          <img src={logoImg} alt="Logo Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <img
          src={landingImg}
          className="hero-image"
          alt="Platafomra de estudos"
        />

        <ButtonsContainer className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Study Icons" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassIcon} alt="Study Icons" />
            Dar aulas
          </Link>
        </ButtonsContainer>

        <ConnnectionContainer className="total-connections">
          Total de 5604 conexões já realizadas
          <img src={purpleHeatIcon} alt="Purple Heart" />
        </ConnnectionContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
