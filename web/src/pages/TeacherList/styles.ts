import styled from 'styled-components';

export const Container = styled.div`
  &#page-teachers-list {
    width: 100vw;
    height: 100vh;
  }

  @media (min-width: 700px) {
    &#page-teachers-list {
      max-width: 100%;
    }

    & form {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -28px;
    }

    .input-block + .input-block {
      margin-top: 0;
    }

    & main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;

      & article header,
      article footer {
        padding: 3.2rem;
      }

      & article > p {
        padding: 0 3.2rem;
      }

      & article footer p strong {
        display: initial;
        margin-left: 1.6rem;
      }

      & article footer button {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;

        & img {
          margin-right: 1.6rem;
        }
      }
    }
  }
`;

export const Form = styled.form`
  margin-top: 3.2rem;

  & label {
    color: var(--color-text-in-primary);
  }

  & div {
    position: relative;

    & + div {
      margin-top: 1.4rem;
    }

    & label {
      font-size: 1.4rem;
    }

    &:focus-within::after {
      width: calc(100% - 3.2rem);
      height: 2px;
      content: '';
      background: var(--color-primary-light);
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
    }
  }

  & input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background-color: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;
`;
