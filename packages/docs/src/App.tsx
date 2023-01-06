import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SliderDoc from './pages/slider.doc';
import ButtonDoc from './pages/buton.doc';
import { SideNav } from './components/sidenav';
import './App.css';

const items = [
  {
    title: 'Slider',
    path: '/component/slider',
    element: <SliderDoc />,
  },
  {
    title: 'Button',
    path: '/component/button',
    element: <ButtonDoc />,
  }
];

const router = createBrowserRouter(items);

interface Styles {
  [key: string]: React.CSSProperties;
}

const styles: Styles = {
  app: {},
  header: {
    height: 64,
    width: '100%',
    borderBottom: '1px solid #dedede'
  },
  logo: {
    height: 64,
    width: 220,
    textAlign: 'center',
    lineHeight: '64px',
    fontWeight: 600,
  },
  main: {
    height: 'calc(100vh - 65px)',
    display: 'flex',
  },
  left: {
    minWidth: 220,
    borderRight: '1px solid #dedede',
    padding: '8px 0',
  },
  right: {
    flexGrow: 1,
    padding: '16px 32px',
  },
}

export default function App() {
  return (
    <div className="App" style={styles.app}>
      <div className='header' style={styles.header}>
        <div className='logo' style={styles.logo}>Smede UI</div>
      </div>
      <div className='main' style={styles.main}>
        <div className='left' style={styles.left}>
          <SideNav items={items} />
        </div>
        <div className='right' style={styles.right}>
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}
