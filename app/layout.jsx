import '@styles/globals.css';
import '@styles/style.scss';
import { Providers } from '@redux/provider';
import SessionProviders from '@components/Provider';
import App from '@components/App';

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const metadata = {
    title: 'Devgram',
    description: 'Instagram for developers!',
}

const RootLayout = async ({ children }) => {


    return (
            <Providers>
                <App>
                    {children}
                </App>
            </Providers>
    )
}

export default RootLayout