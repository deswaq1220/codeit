'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { gnb, headerContainer, logo } from './gnb.css';

const Gnb = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 500);
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
    <div className={headerContainer}>
      <div className={gnb}>
        <Link href='/'>
          <div className={logo} />
        </Link>
      </div>
    </div>
  );
};

export default Gnb;
