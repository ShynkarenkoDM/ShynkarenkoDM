import { useState } from 'react';
import styles from './styles.module.scss';
import { Header } from '../Header';
import { ContentLimiterTemplate } from '../ContentLimiter';
import { InfoBlockStarter } from '../InfoBlockStarter';
import { InfoBlockProfessional } from '../InfoBlockProfessional';
import { InfoBlockCompany } from '../InfoBlockCompany';


export const MainLayout = () => {

  const [isSwitch, setIsSwitch] = useState(false);


  return (
    <div className={styles.main}>
      <Header />
      <ContentLimiterTemplate middleMaxWidth>
        <div className={styles.titleBlock}>
          <div className={styles.titleBlock__container}>
            <h1 className={styles.titleBlock__title}>Plans & Pricing</h1>
            <p className={styles.titleBlock__subtitle}>Whether your time-saving automation needs are large or small, we’re here to help you scale.</p>
          </div>
          {!isSwitch ? (
          <div className={styles.switchBlock}>
          <button onClick={() => setIsSwitch(!isSwitch)} className={styles.switchBlock__button}>Monthly</button>
          <span className={styles.switchBlock__text}>Early</span>
        </div>
          ): (
            <div className={styles.switchBlockRight}>
            <span className={styles.switchBlockRight__textRight}>Monthly</span>
            <button onClick={() => setIsSwitch(!isSwitch)} className={styles.switchBlockRight__buttonRight}>Early</button>
          </div>
          )}
        </div>
        <div className={styles.infoBlock}>
            <InfoBlockStarter price={!isSwitch ? "$19" : "$12"}/>
            <InfoBlockProfessional price={!isSwitch ? "$54" : "$36"} />
            <InfoBlockCompany price={!isSwitch ? "$89" : "$56"} />
        </div>
      </ContentLimiterTemplate>
    </div>
  );
};
