import {fetchRickAndMorty, rickAndMortyCharacter} from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCard from "../components/AntCard";
import styles from './character.module.css'

interface CharacterData {
  results: Array<{
      id: number;
      image: string;
      titulo: string;
      plataforma: string;
  }>;
}

export const Character: React.FC = () => {
  const { data, error } = useSWR<CharacterData>(rickAndMortyCharacter, fetchRickAndMorty, {
      suspense: false,
  });

  return (
      <>
          <h1>Character</h1>
          <div className={styles.container}>
              {data?.results.map((character) => (
                  <AntCard
                      key={character.id}
                      titulo={character.titulo}
                      image={character.image}
                      description={character.plataforma}
                  />
              ))}
          </div>
      </>
  );
};