import React from 'react';
import Link from 'next/link';

import Layout from 'components/_layout';
import { Card } from 'styles/details';

interface PetData {
  id: string;
  name: string;
  gender: string;
  size: string;
  color: string;
  isCastrated: boolean;
  age: number;
  type: string;
  userId: string;
}

interface AdvertisementsData {
  id: string;
  isDisabled: boolean;
  description: string;
  isVaccinated: boolean;
  vaccinatedDescription?: string;
  specialCares: boolean;
  specialCaresDescription?: string;
  petId?: string;
  userId?: string;
  addressId?: string;
  pet: PetData;
}

interface Props {
  data: Array<AdvertisementsData>;
}

const Details = ({ data: advertisements }: Props) => {
  return (
    <Layout>
      <Link href="/">
        <p style={{ margin: '1rem 0' }}>« Voltar</p>
      </Link>
      <Card>
        <div>
          <h3>Scooby</h3>
          <p>Macho</p>
        </div>
        <div>
          <p>Golden Retriver</p>
          <p>8 meses de idade</p>
        </div>
        <div>
          <p>São Paulo - SP</p>
        </div>
        <div>
          <div>
            <img src="https://api.adorable.io/avatars/70/abott@adorable.png" />
            <img src="https://api.adorable.io/avatars/70/abott@adorable.png" />
            <img src="https://api.adorable.io/avatars/70/abott@adorable.png" />
          </div>
          <div>
            <img src="https://api.adorable.io/avatars/740/abott@adorable.png" />
          </div>
        </div>
        <div>
          <h4>Sobre</h4>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não
            altera o pão duris. Si u mundo tá muito paradis? Toma um mé que o
            mundo vai girarzis! Per aumento de cachacis, eu reclamis. Nec orci
            ornare consequat. Praesent lacinia ultrices consectetur. Sed non
            ipsum felis.
          </p>
        </div>
      </Card>
    </Layout>
  );
};

Details.getInitialProps = async () => {
  const filter = { include: [{ relation: 'pet' }] };
  // api.interceptors.request.use((config) => {
  //   config.params = {
  //     filter,
  //   };
  //   return config;
  // });
  // const res = await api.get('/advertisements/');
  // return { data: res.data };
  return filter;
};

export default Details;
