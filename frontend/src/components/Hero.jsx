import { useNavigate }
from "react-router-dom";

import { motion }
from "framer-motion";

import "../styles/Hero.css";

const Hero = () => {

  const navigate =
    useNavigate();

  return (
    <section className="hero">

      <motion.div

        className="hero-content"

        initial={{
          opacity: 0,
          y: 40
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1
        }}
      >

        <motion.p

          className="hero-tag"

          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            delay: 0.2
          }}
        >
          AI Powered Anime Discovery
        </motion.p>

        <motion.h1

          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            delay: 0.4
          }}
        >
          Discover Your Next
          Favorite Anime
        </motion.h1>

        <motion.p

          className="hero-description"

          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            delay: 0.6
          }}
        >
          Explore trending anime,
          discover hidden gems,
          and get personalized
          recommendations powered by AI.
        </motion.p>

        <motion.div

          className="hero-buttons"

          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            delay: 0.8
          }}
        >

          <motion.button

            whileHover={{
              scale: 1.05
            }}

            whileTap={{
              scale: 0.95
            }}

            onClick={() =>
              navigate("/ai")
            }
          >
            Explore Now
          </motion.button>

        </motion.div>

      </motion.div>

    </section>
  );
};

export default Hero;