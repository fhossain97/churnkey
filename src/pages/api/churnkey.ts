import crypto from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  userHash?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const customerId = process.env.NEXT_PUBLIC_CHURNKEY_CUSTOMER_ID;

  if (!customerId) {
    return res.status(400).json({ error: "Missing customerId" });
  }

  const API_KEY = String(process.env.CHURNKEY_API_KEY);
  const userHash = crypto
    .createHmac("sha256", API_KEY)
    .update(String(customerId))
    .digest("hex");

  return res.status(200).json({ userHash });
}
