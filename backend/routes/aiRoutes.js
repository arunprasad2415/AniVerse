const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post(
  "/recommend",
  async (req, res) => {

    try {

      const { prompt } = req.body;

      const response =
        await axios.post(

          "https://api.groq.com/openai/v1/chat/completions",

          {
            model:
              "llama-3.3-70b-versatile",

            messages: [
              {
                role: "system",

                content:
                  `
                  You are an anime expert.

                  Recommend anime based
                  on the user's mood
                  and preferences.

                  Give:
                  - anime names
                  - short explanations
                  - clean formatting
                  `
              },

              {
                role: "user",
                content: prompt
              }
            ]
          },

          {
            headers: {
              Authorization:
                `Bearer ${process.env.GROQ_API_KEY}`,

              "Content-Type":
                "application/json"
            }
          }
        );

      res.json({
        reply:
          response.data
          .choices[0]
          .message.content
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        error:
          "Something went wrong"
      });
    }
  }
);

module.exports = router;