export default async function handler(req, res) {
  const { handle = "ultromics" } = req.query;

  try {
    const response = await fetch(
      `https://api.sociavault.com/v1/scrape/twitter/profile?handle=${handle}`,
      {
        headers: {
          "X-API-Key": process.env.SOCIALVAULT_API_KEY,
        },
      }
    );

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch social data",
      details: error.message,
    });
  }
}
