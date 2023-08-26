import { useEffect, useState } from 'react';

const BREAKPOINT = 600;

export default function useDevice() {
  const [type, setType] = useState(() => (window?.innerWidth >= BREAKPOINT ? 'desktop' : 'mobile'));

  useEffect(() => {
    function onResize() {
      setType(window?.innerWidth >= BREAKPOINT ? 'desktop' : 'mobile');
    }
    window?.addEventListener('resize', onResize);
    return () => {
      window?.removeEventListener('resize', onResize);
    };
  }, []);

  return {
    isMobile: type === 'mobile',
    isDesktop: type === 'desktop',
  };
}
