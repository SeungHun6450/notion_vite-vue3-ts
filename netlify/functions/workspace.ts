import { Handler } from '@netlify/functions'

const handler: Handler = async (event, context) => {
await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${id}`, {
  method,
  headers: {
    'content-type': 'application/json',
    'apikey': 'FcKdtJs202204',
    'username': 'ParkYoungWoong'
  },
  body: JSON.stringify(body)
  })
}
export { handler }
