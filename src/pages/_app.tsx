import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useMemo, useState } from 'react';
import { UserContext } from './hooks/usercontext'
export default function App({ Component, pageProps }: AppProps) {
  function setVal(){
    setValue("New Value");
  }
  const [value, setValue] = useState("Hello from context");
  const providerValue = useMemo(() => ({value, setValue}), [value, setValue]);
  return <UserContext.Provider value={providerValue}>
    <Component {...pageProps} />
    </UserContext.Provider>
}
