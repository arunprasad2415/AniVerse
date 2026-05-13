import { motion }
from "framer-motion";

import "../styles/featured-banner.css";

const FeaturedBanner = () => {

  return (
    <motion.div

      className="featured-banner"

      initial={{
        opacity: 0,
        y: 40
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 0.8
      }}
    >

      <div className="featured-overlay">

        <p className="featured-tag">
          FEATURED ANIME
        </p>

        <h1>
          Attack on Titan
        </h1>

        <p className="featured-description">
          Humanity fights for survival
          against gigantic titans in one
          of the most intense anime ever made.
        </p>

        <button>
          Watch Now
        </button>

      </div>

    </motion.div>
  );
};

export default FeaturedBanner;