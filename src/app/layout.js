import '@/styles/globals.css';
import "toastify-js/src/toastify.css";
import { open_sans } from './font';

export const metadata = {
  title: 'Daily Scoop',
  description: 'The latest and most popular news and press',
}
// const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    // <QueryClientProvider client={queryClient}>
      <html lang="en" className={`${open_sans.className}`}>
        <body>
          {children}
        </body>
      </html>
    // </QueryClientProvider>
  )
}
