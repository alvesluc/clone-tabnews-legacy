function handler(request, response) {
  return response.status(200).json({ message: "funciona" });
}

export default handler;
