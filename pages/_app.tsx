import '../styles/globals.css'
import {TransactionProvider} from '../context/TransactionContext'
import { ThirdwebProvider } from "@3rdweb/react";


const supportedChainIds = [4]
const connectors = {
  injected: {},
}


function MyApp({ Component, pageProps}) {
  return (
    <ThirdwebProvider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
