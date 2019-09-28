import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { first = "johnny", last = "appleseed" } = req.query;

  res.end(`<h1>Hello ${first} ${last}</h1>`, null);
};
