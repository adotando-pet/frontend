import React from 'react';
import Link from 'next/link';

import api from 'services/api';
import Layout from 'components/_layout';
import { Container, Card, Pet } from 'styles/adverts';

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

const Adverts = ({ data: advertisements }: Props) => {
  return (
    <Layout title="Anuncios">
      <Card>
        <div>
          <img src="https://api.adorable.io/avatars/50/abott@adorable.png" />
          <section>
            <Pet>
              <h3>Scooby</h3>
              <p>
                Macho, <span>2 anos</span>
              </p>
              <p>São Paulo</p>
            </Pet>
          </section>
        </div>
        <Link href="details">
          <p>➡️</p>
        </Link>
      </Card>
    </Layout>
  );
};

Adverts.getInitialProps = async () => {
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

export default Adverts;
