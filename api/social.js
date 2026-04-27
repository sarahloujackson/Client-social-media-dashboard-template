export default async function handler(req, res) {
  const { handle } = req.query;

  const response = await fetch(
    `https://api.sociavault.com/v1/twitter/profile?username=${handle}`,
    {
      headers: {
        "X-API-Key": process.env.SOCIALVAULT_API_KEY,
      },
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}
