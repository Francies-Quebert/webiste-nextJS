import { useRouter } from 'next/router';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/components/layout";
import { AnimatePresence, motion } from 'framer-motion';
import PageLoadingIndicator from '@/components/Loading';
import { Analytics } from '@vercel/analytics/react';
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return <Layout>
    <Analytics />
    <PageLoadingIndicator />
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.3 }}
        className='h-full w-full px-[2em] md:px-[4em] py-[3em] relative overflow-y-auto overflow-x-hidden'
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </Layout>
}
