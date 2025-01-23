import React from 'react';
import TeamSlider from '@/components/TeamSlider';
import StandardMarginsLayout from '@/layouts/StandardMarginsLayout';

const OurTeamBlock: React.FC = () => {
    const teamMembers = [
        {
            imageUrl: "/resources/AvatarTeamSlider.png",
            name: 'Елизавета',
            position: 'UX/UI дизайнер',
        },
        {
            imageUrl: "/resources/person2.png",
            name: 'Егор',
            position: 'Frontend-разработчик',
        },
        {
            imageUrl: "/resources/person4.png",
            name: 'Алексей',
            position: 'Backend-разработчик',
        },
        {
            imageUrl: "/resources/person3.png",
            name: 'Егор',
            position: 'CEO',
        },
        {
            imageUrl: "/resources/person5.png",
            name: 'Юлия',
            position: 'Motion-дизайнер',
        }
    ];

    return (
        <StandardMarginsLayout styles="mt-[50px] sm:mt-[60px]" children={
            <>
                <div>
                    <h2 className="text-[32px] lg:text-[48px] 2xl:text-[60px] font-bold ">Команда которая реализует ваши идеи</h2>
                    <p className="my-[30px] text-[22px]">Анализируем, проектируем, разрабатываем сайты, сервисы и мобильные приложения для бизнеса под любой бюджет.</p>
                    <TeamSlider members={teamMembers} />
                </div>
            </>
        } />
    );
};

export default OurTeamBlock;
