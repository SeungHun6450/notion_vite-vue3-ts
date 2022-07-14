import { VercelRequest, VercelResponse } from '@vercel/load'

export default async function(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    name: 'Hun'
  })
}
