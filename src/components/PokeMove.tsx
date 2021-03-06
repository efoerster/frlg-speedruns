import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { usePokeMove } from '../pokeapi';
import { PokeTypeText } from './PokeTypeText';

type PokeMoveProps = {
  name: string;
  torrent?: boolean;
};

export function PokeMove({ name, torrent }: PokeMoveProps): JSX.Element {
  const move = usePokeMove(name);
  const type = move && move.type.name;
  const style = torrent
    ? { borderBottom: '3px dashed var(--pokemon-type-water)' }
    : undefined;

  return (
    <>
      {move && move.priority >= 1 && (
        <>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            style={{ color: 'var(--ifm-color-danger)' }}
          />{' '}
        </>
      )}
      <span style={style}>
        <PokeTypeText type={type} text={name} />
      </span>
    </>
  );
}
