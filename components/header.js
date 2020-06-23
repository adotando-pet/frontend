import React from 'react';

import { Container, Content, Profile } from 'styles/header';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src="https://api.adorable.io/avatars/50/abott@adorable.png" />
          <a href="/">Adote</a>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Tonho</strong>
              <a href="/">Meu Perfil</a>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
