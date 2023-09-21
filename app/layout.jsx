import '@styles/globals.css';
import '@styles/style.scss';
import { Providers } from '@redux/provider';
import SessionProviders from '@components/Provider';
import App from '@components/App';

import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
    cloud_name: 'di9mpt7gd',
    api_key: '882998772671579',
    api_secret: 'v6crZDTlZ5QwyhSmjKcB6OcSP8M'
});

export const metadata = {
    title: 'Devgram',
    description: 'Instagram for developers!',
}

const RootLayout = ({ children }) => {
    return (
        <SessionProviders>
            <Providers>
                <App>
                    {children}
                </App>
            </Providers>
        </SessionProviders>
    )
}

export default RootLayout