import React from 'react';
import Image from 'next/image';

const FooterLogo: React.FC = () => {
    return (
        <a className="text-xl flex items-center text-white h-fit" href="#">
            <Image src="/resources/logo-footer.png" width={60} height={60} className="size-[30px] md:size-[40px] mr-[10px]" alt="Digital Devils logo" />
            <span className="md:text-[18px] text-[16px] font-semibold">Digital Devils</span>
        </a>
    );
};

export default FooterLogo;