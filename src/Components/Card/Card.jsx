import React from 'react';
import { Chip } from '@mui/material';
import styles from './Card.module.css';

const Card = ({albumImage,albumName,follows}) => {
  return (
    <div className={styles.outerCard}>
      <div className={styles.innerCard}>
        <img
          src={albumImage}
          alt="Album Cover"
          className={styles.albumImage}
        />
        <Chip label={follows} className={styles.chip} />
      </div>
      <h3 className={styles.albumName}>{albumName}</h3>
    </div>
  );
};

export default Card;
