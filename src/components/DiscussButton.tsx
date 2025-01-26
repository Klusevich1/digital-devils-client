import React from 'react';

const DiscussButton: React.FC = () => {
    return (
        <button
            type="submit"
            className="gap-2.5 mt-2 self-stretch px-[39px] py-[12px] max-w-full md:w-[227px] text-lg bg-blue_main h-fit min-h-[50px] rounded-[30px] text-neutral-50"
        >
            Обсудить проект
        </button>
    );
};

export default DiscussButton;