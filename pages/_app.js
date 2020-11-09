import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

import '../styles/App.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    when: 'afterChildren',
  };

  return (
    <AnimatePresence>
      <div className="page-transition-wrapper">
        <motion.div
          transition={spring}
          key={router.pathname}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          id="page-transition-container"
        >
          <Component {...pageProps} key={router.pathname} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
