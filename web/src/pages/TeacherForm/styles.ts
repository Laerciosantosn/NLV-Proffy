import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    #page {
      height: 1000px;
      background: yellowgreen;
      border: solid 2px green;
      max-width: 1100px;
    }
  }
`;
