import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Article } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Article className="teacher-item">
      <header>
        <img
          src="https://api.adorable.io/avatars/face/eyes5/nose3/mouth7/fe8895"
          alt="Adorable avatar"
        />
        <div>
          <strong>Adorable Avatar Feliz</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>
      <footer>
        <p>
          Preço/horas
          <strong>R$ 100.00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="icon whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </Article>
  );
};

export default TeacherItem;
