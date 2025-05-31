import { ImageResponse } from 'next/og'
import type { ImageResponseOptions } from 'next/server'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Define dynamic titles
const titles: Record<string, string> = {
  first: 'Hello First!',
  second: 'Hello Second!',
}

// Define params type
interface RouteParams {
  params: {
    slug: keyof typeof titles
  }
}

// Image generation
export default async function Image({ params }: RouteParams): Promise<ImageResponse> {
  const interSemiBold = await fetch(
    new URL('./inter.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 84,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ margin: 25 }}>{titles[params.slug]}</div>
        <div style={{ margin: 25, fontSize: 32 }}>
          This is a desc of the blog post
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: interSemiBold,
          style: 'normal',
          weight: 400,
        },
      ],
    } satisfies ImageResponseOptions
  )
}
