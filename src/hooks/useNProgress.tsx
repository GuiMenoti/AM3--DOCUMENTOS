import { useEffect, useState } from 'react';
import { useMounted } from './useMounted';
import { useLocation } from 'react-router-dom';
import nProgress from 'nprogress';
import '../styles/nProgress.css';

export function useNprogress() {
  const isMounted = useMounted();
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  nProgress.configure({
    showSpinner: false,
  });

  useEffect(() => {
    if (!visible) {
      nProgress.start();
      setVisible(true);
    }

    if (visible) {
      nProgress.done();
      setVisible(false);
    }

    if (!visible && isMounted()) {
      setVisible(false);
      nProgress.done();
    }

    return () => {
      nProgress.done();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, isMounted]);
  return visible;
}
