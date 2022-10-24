import React from 'react';
import {Button} from '../Button';


import styles from './styles.module.scss';


export const InfoBlockCompany = ({
  price,
}) => {

  return <div className={styles.infoBlockWrapper}>
            <div className={styles.infoBlockWrapper__specialWrapper}>
              <p className={styles.infoBlockWrapper__special}>Most popular</p>
            </div>
          <div className={styles.infoBlockWrapper__priceBlock}>
            <span className={styles.infoBlockWrapper__price}>{price}</span>
            <spann className={styles.infoBlockWrapper__month}>/month</spann>
          </div>
          <h2 className={styles.infoBlockWrapper__title}>Company</h2>
          <p className={styles.infoBlockWrapper__subtitle}>Automation plus enterprise-grade features.</p>
          <div  className={styles.infoBlockWrapper__stepContainer}>
            <div className={styles.infoBlockWrapper__stepWrapper}>
              <img  className={styles.infoBlockWrapper__image} src="./checkWhite.png" alt="check" />
              <p className={styles.infoBlockWrapper__step}>Multi-step Zaps</p>
            </div>
            <div className={styles.infoBlockWrapper__stepWrapper}>
              <img  className={styles.infoBlockWrapper__image} src="./checkWhite.png" alt="check" />
              <p className={styles.infoBlockWrapper__step}>Unlimited Premium Apps</p>
            </div>
            <div className={styles.infoBlockWrapper__stepWrapper}>
              <img  className={styles.infoBlockWrapper__image} src="./checkWhite.png" alt="check" />
              <p className={styles.infoBlockWrapper__step}>Unlimited Users Team</p>
            </div>
            <div className={styles.infoBlockWrapper__stepWrapper}>
              <img  className={styles.infoBlockWrapper__image} src="./checkWhite.png" alt="check" />
              <p className={styles.infoBlockWrapper__step}>Advanced Admin</p>
            </div>
            <div className={styles.infoBlockWrapper__stepWrapper}>
              <img  className={styles.infoBlockWrapper__image} src="./checkWhite.png" alt="check" />
              <p className={styles.infoBlockWrapper__step}>Custom Data Retention</p>
            </div>
          </div>

          <div className={styles.infoBlockWrapper__buttonWrapper}>
            <Button >Choose plan</Button>
          </div>
         </div>;
};
