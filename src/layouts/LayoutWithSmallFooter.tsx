import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import FooterSmall from '@/components/FooterSmall';

const LayoutWithSmallFooter = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="">{children}</main>
            <FooterSmall />
        </>
    );
};

export { LayoutWithSmallFooter };