import MainLayout from '@layout/MainLayout';
import '@styles/tailwind.css';
import '../styles/backupStyles.css';
import { ProviderAuth } from '@hooks/useAuth';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
    </>
  );
}

export default MyApp;
