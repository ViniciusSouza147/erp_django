import React from 'react';
import ReaciDOM from 'react-dom/client';

// 1) Estado global (Redux) + Persistência
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// 2) Configuração de layout do Datta Able (Context)
import { ConfigProvider } from './contexts/ConfigContext';

// 3) Store e persistor vindos do template (você copiou a pasta src/store/)
import { store, persister } from './store';

// 4) CSS/SCSS do tema (precisa do 'sass' instalado)
import './index.scss'

// 5) Sua aplicação (vai configurar o Router e as Rotas)
import App from './App';

// (Opcional) Um mini Loader enquanto reidrata o Redux
function BootLoader() {
  return <div style={{ padding: 24 }}>Carregando...</div>;
}

// React 18: createRoot (substitui ReactDOM.render)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ConfigProvider>
      <PersistGate loading={<BootLoader />} persistor={persister}>
        <App />
      </PersistGate>
    </ConfigProvider>
  </Provider>
);