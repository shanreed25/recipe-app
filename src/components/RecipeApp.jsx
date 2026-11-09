import { Outlet } from 'react-router';
import {NavBar} from './NavBar';
import { styles } from '../styles/styles';

export function RecipeApp() {
  return (
    <>
      <NavBar />
      <main className={styles.app}>
        <Outlet />
      </main>
    </>
  );
}


