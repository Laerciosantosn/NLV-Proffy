import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import { Header } from './styles';

interface IPageHeaderProps {
  title: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ children, title }) => {
  return (
    <Header id="page-header" className="page-header">
      <nav className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar pra Home" />
        </Link>
        <img src={logoImg} alt="Logo Proffy" />
      </nav>

      <div className="header-content">
        <strong>{title}</strong>

        {children}
      </div>
    </Header>
  );
};

export default PageHeader;
