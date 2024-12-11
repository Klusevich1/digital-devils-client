import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo-header.svg';

const HeaderLogo: React.FC = () => {
    return (
        <a className="text-xl flex items-center text-black outline-none" href="/">
            <Image src={logo} className="size-[30px] md:size-[40px] mr-[10px]" alt="Digital Devils logo" />
            <span className="mt-[4px] md:text-[18px] text-[16px] font-semibold">Digital Devils</span>
        </a>
    );
};

export default HeaderLogo;