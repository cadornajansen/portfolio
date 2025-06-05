import { ImageResponse } from 'next/og'
import type { ImageResponseOptions } from 'next/server'
import { getPostMeta } from '@/lib/posts'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Define params type
interface RouteParams {
  params: {
    slug: string
  }
}

// Image generation
export default async function Image({ params }: RouteParams): Promise<ImageResponse> {
  const post = await getPostMeta(params.slug)

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
        <div style={{ margin: 25 }}>{post.title}</div>
        <div style={{ margin: 25, fontSize: 32 }}>
          {post.description}
        </div>
      </div>
    ),
    {
      ...size,
    } satisfies ImageResponseOptions
  )
}

