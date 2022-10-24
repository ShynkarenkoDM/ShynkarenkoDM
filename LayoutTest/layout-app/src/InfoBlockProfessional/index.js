import React from 'react';
import {Button} from '../Button';


import styles from './styles.module.scss';


export const InfoBlockProfessional = ({
  price,
}) => {

  return <div className={styles.infoBlockWrapper}>
          <div className={styles.infoBlockWrapper__priceBlock}>
            <span className={styles.infoBlockWrapper__price}>{price}</span>
            <spann className={styles.infoBlockWrapper__month}>/month</spann>
          </div>
          <h2 className={styles.infoBlockWrapper__title}>Professional</h2>
          <p className={styles.infoBlockWrapper__subtitle}>Advanced tools to take your work to the next level.</p>
          <div  className={styles.infoBlockWrapper__stepContainer}>
            <div className={styles.infoBlockWrapper__stepWrapper}>
              <img  className={styles.infoBlockWrapper__image} src="./check.png" alt="check" />
              <p className={styles.infoBlockWrapper__step}>Multi-step Zaps</p>
            </div>
            <div className={styles.infoBlockWrapper__stepWrapper}>
              <img  className={styles.infoBlockWrapper__image} src="./check.png" alt="check" />
              <p className={styles.infoBlockWrapper__step}>Unlimited Premium Apps</p>
            </div>
            <div className={styles.infoBlockWrapper__stepWrapper}>
              <img  className={styles.infoBlockWrapper__image} src="./check.png" alt="check" />
              <p className={styles.infoBlockWrapper__step}>50 Users team</p>
            </div>
            <div className={styles.infoBlockWrapper__stepWrapper}>
              <img  className={styles.infoBlockWrapper__image} src="./check.png" alt="check" />
              <p className={styles.infoBlockWrapper__step}>Shared Workspace</p>
            </div>
          </div>

          <div className={styles.infoBlockWrapper__buttonWrapper}>
            <Button color="blue">Choose plan</Button>
          </div>
         </div>;
};
