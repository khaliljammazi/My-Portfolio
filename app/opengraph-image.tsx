import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Jammazi Khalil - Full-Stack Developer'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
        }}
      >
        {/* Decorative gradient circles */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(144, 25, 215, 0.3) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(82, 39, 255, 0.2) 0%, transparent 70%)',
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #9019d7, #5227FF)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 16,
          }}
        >
          Jammazi Khalil
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 36,
            color: '#e0e0e0',
            marginBottom: 32,
          }}
        >
          Full-Stack Developer & Software Engineer
        </div>

        {/* Tech Stack */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            marginTop: 24,
          }}
        >
          {['React', 'Next.js', 'Vue.js', 'TypeScript', 'Node.js'].map((tech) => (
            <div
              key={tech}
              style={{
                padding: '8px 20px',
                borderRadius: 24,
                border: '1px solid rgba(144, 25, 215, 0.5)',
                color: '#b19eef',
                fontSize: 20,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Website */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            color: '#888',
            fontSize: 24,
          }}
        >
          khalil-jammazi.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
