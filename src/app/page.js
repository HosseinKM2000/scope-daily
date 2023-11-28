"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import HomeComponent from 'src/components/Home/Home'
const queryClient = new QueryClient();
export default function Home() {
  return (
 <QueryClientProvider client={queryClient}>
    <main>
      <HomeComponent/>
    </main>
    <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
  )
}
