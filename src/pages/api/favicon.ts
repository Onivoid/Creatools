import type { NextApiRequest, NextApiResponse } from 'next'
import archiver from 'archiver'
import generateFavicons from '../../utils/faviconGenerator'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const imageBuffer = await new Promise<Buffer>((resolve, reject) => {
        const chunks: Uint8Array[] = []
        req.on('data', (chunk) => chunks.push(chunk))
        req.on('end', () => resolve(Buffer.concat(chunks)))
        req.on('error', reject)
      })

      const favicons = await generateFavicons(imageBuffer)

      const archive = archiver('zip')
      archive.on('error', (err) => {
        throw err
      })

      // Set the content type to application/zip
      res.setHeader('Content-Type', 'application/zip')
      // This will ensure that the file is downloaded rather than displayed in the browser
      res.setHeader('Content-Disposition', 'attachment; filename=favicons.zip')

      archive.pipe(res)

      favicons.forEach((favicon) => {
        archive.append(favicon.data, { name: favicon.name })
      })

      await archive.finalize()

    } catch (error) {
      res.status(500).send({ error: 'Erreur lors de la création de la favicon' })
    }
  } else {
    res.status(405).send({ error: 'Seules les requêtes POST sont acceptées' })
  }
}

export default handler
