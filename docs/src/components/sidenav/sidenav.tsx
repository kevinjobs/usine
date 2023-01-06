import React from "react";
import './style.css';

interface SideNavProps {
  items: SideNavItem[];
}

interface SideNavItem {
  title: string;
  path: string;
}

const styles = {
  nav: {
    
  } as React.CSSProperties,
  item: {
    padding: '8px 0',
    margin: '0 8px',
    width: 'calc(100% - 16px)',
    textAlign: 'center',
    borderRadius: 8,
  } as React.CSSProperties,
}

function SideNav(props: SideNavProps) {
  const Item = (item: SideNavItem) => {
    let cls = 'sidenav-item';
    
    if ((new RegExp(item.path)).test(window.location.href)) {
      cls = 'sidenav-item actived';
    }

    return (
      <div className={cls} key={item.title} style={styles.item}>
        <a href={item.path}>{item.title}</a>
      </div>
    )
  }

  return (
    <div className="component-sidenav" style={styles.nav}>
      {props.items.map(Item)}
    </div>
  )
}

export { SideNav, type SideNavItem, type SideNavProps }