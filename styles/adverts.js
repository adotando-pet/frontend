import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  padding: 0 30px;

  @media (max-width: 800px) {
    margin: 5% 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #eee;
    border-radius: 4px;
    -webkit-box-shadow: 2px 7px 10px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 2px 7px 10px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 2px 7px 10px 0px rgba(0, 0, 0, 0.15);

    :hover {
      -webkit-box-shadow: 2px 7px 10px 0px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 2px 7px 10px 0px rgba(0, 0, 0, 0.2);
      box-shadow: 2px 7px 10px 0px rgba(0, 0, 0, 0.2);
      transition: box-shadow 0.3s ease-in-out;
    }

    img {
      height: 50px;
      width: 50px;
      border-radius: 50px;
      border: 3px solid #0070f3;
      margin-right: 20px;
      align-self: center;
    }

    section {
      display: flex;
    }

    div:first-child {
      display: flex;
    }
  }
`;

export const Pet = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  span {
    font-weight: bold;
  }
`;
