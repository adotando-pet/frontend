import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  height: 70px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 5px;
      padding-right: 20px;
    }

    a {
      font-weight: bold;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    margin-right: 10px;

    strong {
      display: block;
    }

    a {
      display: flex;
    }
  }
`;
