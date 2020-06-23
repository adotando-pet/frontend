import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 10px;
    }

    div:nth-child(4) {
      display: flex;
      margin-top: 30px;

      div:nth-child(1) {
        width: 70px;
        flex-direction: column;
        justify-content: start;
        img {
          height: 70px;
          width: 70px;
          margin-bottom: 30px;
        }
      }

      div:nth-child(2) {
        display: flex;

        img {
          height: auto;
          max-width: 540px;
        }
      }
    }
    div:nth-child(5) {
      display: flex;
      flex-direction: column;
      margin-top: 30px;

      p {
        margin-top: 10px;
      }
    }
  }
`;
