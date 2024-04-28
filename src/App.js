import NavigationBar from './components/NavigationBar';
import styles from "./App.module.scss"
import { Outlet } from "react-router-dom"
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.App}>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
