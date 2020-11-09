import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

import '../styles/App.scss';

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 100,
  when: 'afterChildren',  
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence>
      <Component {...pageProps} key={router.pathname} />
    </AnimatePresence>
  );
}

export default MyApp;
