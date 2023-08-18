import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//import './index.css'
import {TonConnectUIProvider} from "@tonconnect/ui-react"

const manifestUrl = 'https://gist.githubusercontent.com/romanovichim/07684709b5dae549a8820cc1ff2420e8/raw/59f9edfca3fd19eb11d8edf925b6dfd0ecb4c8cf/manifest.txt';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
	<App />
  </TonConnectUIProvider>
)