"use client";

import { useEffect, useState } from 'react';
import MainContent from '../components/MainContent';
import DrawingsContent from '../components/DrawingsContent';

export default function Page() {
  const [currentRoute, setCurrentRoute] = useState('/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      setCurrentRoute(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  return currentRoute === '/' ? <MainContent navigate={navigate} /> : <DrawingsContent navigate={navigate} />;
}

