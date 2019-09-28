import { NextApiRequest, NextApiResponse } from "next";

import { HttpException } from "../exceptions/http.exception";

type Route = (req: NextApiRequest, res: NextApiResponse) => void;

export function Lambda(route: Route) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    try {
      route(req, res);
    } catch (error) {
      const { status = 500, message = error } = error as HttpException;

      if (!res.headersSent) {
        res.status(status).json({ message });
      }
    }
  };
}
