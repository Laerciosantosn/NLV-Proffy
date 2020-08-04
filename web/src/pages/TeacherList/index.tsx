import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { Container, Form, Main } from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container id="page-teachers-list" className="container">
      <PageHeader title="Estes são os Proffy disponiveis.">
        <Form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>
        </Form>
      </PageHeader>
      <Main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </Main>
    </Container>
  );
};

export default TeacherList;
