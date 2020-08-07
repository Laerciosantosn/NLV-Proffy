import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);

  background: var(--color-primary);

  @media (min-width: 1100px) {
    #page-landing-content {
      max-width: 1100px;

      display: grid;
      grid-template-rows: auto 1fr;
      grid-template-columns: 275px 275px repeat(3, 1fr);
      grid-template-areas:
        'logo logo hero hero hero'
        'buttons buttons buttons total total';

      .logo-container {
        grid-area: logo;
        text-align: initial;
        margin-left: 32px;

        & h2 {
          text-align: initial;
          font-size: 2.6rem;
          width: 55%;
        }
      }

      .hero-image {
        grid-area: hero;
        justify-self: end;
      }

      .buttons-container {
        grid-area: buttons;
        justify-content: flex-start;
        margin: 32px 0 32px 32px;

        & a {
          font-size: 2.4rem;
        }
      }

      .total-connections {
        grid-area: total;
        justify-content: flex-end;
      }
    }
  }
`;

export const Content = styled.div`
  > img {
    width: 100%;
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  & img {
    height: 10rem;
  }

  & h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem;

  & a:first-child {
    margin-right: 1.6rem;
  }

  > a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-button-text);
    transition: background-color 0.2s;

    & img {
      margin-right: 2.4rem;
      width: 4rem;
    }

    &.study {
      background: var(--color-primary-lighter);
    }

    &.give-classes {
      background: var(--color-secondary);
    }

    &.study:hover {
      background: var(--color-primary-light);
    }

    &.give-classes:hover {
      background: var(--color-secondary-dark);
    }
  }
`;

export const ConnnectionContainer = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    margin-left: 0.8rem;
  }
`;
