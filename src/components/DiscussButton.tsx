import React from 'react';

const DiscussButton: React.FC = () => {
    return (
        <button
            type="submit"
            className="gap-2.5 mt-2 self-stretch px-5 py-3.5 max-w-full text-lg bg-blue_main h-fit min-h-[50px] rounded-[30px] text-neutral-50 w-[227px]"
        >
            Обсудить проект
        </button>
    );
};

export default DiscussButton;