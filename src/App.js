import NavigationBar from './components/NavigationBar';
import styles from "./App.module.scss"
import { Outlet } from "react-router-dom"
import Footer from './components/Footer';
import AnimatedLogo from './components/AnimatedLogo';

function App() {

  return (
    <div className={styles.App}>
      <AnimatedLogo />
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
