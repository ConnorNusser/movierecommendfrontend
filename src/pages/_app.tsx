import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useMemo, useState } from 'react';
import { UserContext } from './hooks/usercontext'
export default function App({ Component, pageProps }: AppProps) {
  const [value, setValue] = useState<any>(null);

  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem('name');
    setValue(item);
  }, [])
  const providerValue = useMemo(() => ({value, setValue}), [value, setValue]);
  return <UserContext.Provider value={providerValue}>
    <Component {...pageProps} />
    </UserContext.Provider>
}
