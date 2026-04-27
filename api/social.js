export default async function handler(req, res) {
  const { handle = "ultromics" } = req.query;

  const response = await fetch(
    `https://api.sociavault.com/v1/scrape/twitter/profile?handle=${handle}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SOCIALVAULT_API_KEY}`,
      },
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}
