'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { gnb, header, logo } from './Gnb.css';

const Gnb = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on mount

    setHasMounted(true);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!hasMounted) {
    return null; // 클라이언트가 마운트되기 전에는 아무것도 렌더링하지 않음
  }

  return (
    <header className={header}>
      <div className={gnb}>
        <Link href='/'>
          <div className={logo} />
        </Link>
      </div>
    </header>
  );
};

export default Gnb;
