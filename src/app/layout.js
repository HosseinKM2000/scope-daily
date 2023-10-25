import '@/styles/globals.css'
import { open_sans } from './font';

export const metadata = {
  title: 'Daily Scoop',
  description: 'The latest and most popular news and press',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${open_sans.className}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
