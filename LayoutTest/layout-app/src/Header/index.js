import styles from './styles.module.scss';
import {Button} from '../Button';
import { ContentLimiterTemplate } from '../ContentLimiter';


export const Header = () => {



  return (
    <ContentLimiterTemplate>
      <div className={styles.header}>
        <div><img src='./Vector.png' alt="btg-button" /></div>
        <div><img src='./logo-frame.png' alt="logo" /></div>
        <div className={styles.header__button}>
          <Button width="xs" height="sm">Join now</Button>
        </div>
      </div>
    </ContentLimiterTemplate>
  );
};
