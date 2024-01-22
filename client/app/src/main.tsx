import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import client from './featchers/global/apolloclient/clientConect.ts';
import { Provider } from 'react-redux';
import { store } from './rtk/store.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>

)
