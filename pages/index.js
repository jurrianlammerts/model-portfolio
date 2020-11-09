import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProgressiveImage from 'react-progressive-image';

import Layout from '../components/Layout';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ image }) => (
  <Layout>
    <main>
      <div className="container">
        <div className="row center">
          <div className="image-container">
            <div
              className="thumbnail"
              ref={image}
              style={{
                width: 524,
                height: 650,
              }}
            >
              <Link href="/model/yasmeen-tariq">
                <div className="frame">
                  <ProgressiveImage
                    src={'/images/yasmeen.webp'}
                    placeholder={'/images/compressed-image.jpg'}
                  >
                    {(src) => (
                      <motion.img
                        src={src}
                        alt="Yasmeen Tariq"
                        initial={{ scale: 0.95 }}
                        whileHover={{ scale: 1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </div>
              </Link>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className="information"
            >
              <div className="title">Yasmeen Tariq</div>
              <div className="location">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
);

export default Home;
