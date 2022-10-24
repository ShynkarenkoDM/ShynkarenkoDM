import React from 'react';
import {Button} from '../Button';


import styles from './styles.module.scss';


export const InfoBlockStarter = ({
  price,
}) => {

  return <div className={styles.infoBlockWrapper}>
          <div className={styles.infoBlockWrapper__priceBlock}>
            <span className={styles.infoBlockWrapper__price}>{price}</span>
            <spann className={styles.infoBlockWrapper__month}>/month</spann>
          </div>
          <h2 className={styles.infoBlockWrapper__title}>Starter</h2>
          <p className={styles.infoBlockWrapper__subtitle}>Unleash the power of automation.</p>
          <div  className={styles.infoBlockWrapper__stepContainer}>
            <div className={styles.infoBlockWrapper__stepWrapper}>
              <img  className={styles.infoBlockWrapper__image} src="./check.png" alt="check" />
              <p className={styles.infoBlockWrapper__step}>Multi-step Zaps</p>
            </div>
            <div className={styles.infoBlockWrapper__stepWrapper}>
              <img  className={styles.infoBlockWrapper__image} src="./check.png" alt="check" />
              <p className={styles.infoBlockWrapper__step}>3 Premium Apps</p>
            </div>
            <div className={styles.infoBlockWrapper__stepWrapper}>
              <img  className={styles.infoBlockWrapper__image} src="./check.png" alt="check" />
              <p className={styles.infoBlockWrapper__step}>2 Users team</p>
            </div>
          </div>
          <div className={styles.infoBlockWrapper__buttonWrapper}>
            <Button color="blue">Choose plan</Button>
          </div>
         </div>;
};
