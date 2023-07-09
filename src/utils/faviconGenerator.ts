import sharp from 'sharp'

type Favicon = {
  name: string
  data: Buffer
}

const generateFavicons = async (image: Buffer): Promise<Favicon[]> => {
  const sizes = [16, 32, 64, 128, 192, 256, 512]

  const favicons = await Promise.all(
    sizes.map(async (size) => {
      const data = await sharp(image)
        .resize(size, size)
        .toBuffer()

      return {
        name: `favicon-${size}x${size}.png`,
        data,
      }
    })
  )

  return favicons
}

export default generateFavicons