import { useState } from "react";

import { motion } from "framer-motion";

import axios from "axios";

import ReactMarkdown
from "react-markdown";

import Navbar
from "../components/Navbar";

import "../styles/ai-page.css";

const AIRecommendations = () => {

  const [prompt, setPrompt] =
    useState("");

  const [response, setResponse] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      if (!prompt) return;

      try {

        setLoading(true);

        const res =
          await axios.post(

            "http://localhost:5000/api/ai/recommend",

            { prompt }
          );

        setResponse(
          res.data.reply
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
  };

  return (
    <div className="ai-page">

      <Navbar />

      <motion.div

        initial={{
          opacity: 0,
          y: 30
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.8
        }}
      >

        <h1>
          AI Anime Recommender
        </h1>

        <p className="ai-subtitle">
          Describe your mood,
          favorite anime,
          genre, or vibe.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="dark psychological anime like death note..."
            value={prompt}
            onChange={(e) =>
              setPrompt(e.target.value)
            }
          />

          <motion.button

            whileHover={{
              scale: 1.05
            }}

            whileTap={{
              scale: 0.95
            }}

            type="submit"
          >
            Ask AI
          </motion.button>

        </form>

      </motion.div>

      {(loading || response) && (

        <motion.div

          className="ai-response"

          initial={{
            opacity: 0,
            y: 20
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.5
          }}
        >

          {loading ? (

            <div className="thinking">

              <span></span>
              <span></span>
              <span></span>

            </div>

          ) : (

            <ReactMarkdown>
              {response}
            </ReactMarkdown>

          )}

        </motion.div>
      )}

    </div>
  );
};

export default AIRecommendations;