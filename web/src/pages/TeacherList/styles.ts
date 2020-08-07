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
      grid-template-columns: repeat(3, 1fr) 60px;
      column-gap: 16px;
      position: absolute;
      bottom: -28px;

      & button {
        width: 100%;
        height: 5.6rem;
        background: var(--color-secondary);
        color: var(--color-button-text);
        border: 0;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.6rem Archivo;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;
        margin-top: 4.5rem;
      }

      & button:hover {
        background: var(--color-secondary-dark);
      }
    }
    /*
    & .input-block + .input-block {
      margin-top: 0;
    } */
    & .select-block {
      margin-bottom: 0;
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
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;
`;
