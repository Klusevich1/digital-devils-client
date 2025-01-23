import React from 'react';
import Image from 'next/image';

const FooterLogo: React.FC = () => {
    return (
        <a className="text-xl flex items-center text-white h-fit" href="#">
            <Image src="/resources/logo-footer.png" width={60} height={60} className="size-[40px] md:size-[60px]" alt="Digital Devils logo" />
            <span className="mt-[4px] md:text-[18px] text-[16px] font-semibold">Digital Devils</span>
        </a>
    );
};

export default FooterLogo;