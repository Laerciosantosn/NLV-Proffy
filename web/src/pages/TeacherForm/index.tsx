import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

import { Container } from './styles';

const TeacherForm: React.FC = () => {
  return (
    <Container id="page">
      <PageHeader title="Que incrivel que você quer dar aulas." />
    </Container>
  );
};

export default TeacherForm;
