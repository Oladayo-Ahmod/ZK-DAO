import "@/styles/globals.css";
import {Government_provider} from '../../context/GovernanceContext'

export default function App({ Component, pageProps }) {
  return(
      <Government_provider>
        <Component {...pageProps} />
      </Government_provider>
  )
}
