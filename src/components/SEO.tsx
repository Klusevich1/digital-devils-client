import { FC } from 'react';
import Head from 'next/head';

type SEOProps = {
    title: string;
    description: string;
};

const SEO: FC<SEOProps> = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default SEO;
