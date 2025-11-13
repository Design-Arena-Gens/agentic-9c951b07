export const metadata = {
  title: 'CAD Training UGC Reel Scripts',
  description: 'Professional UGC-style advertisement scripts for CAD training institute',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
