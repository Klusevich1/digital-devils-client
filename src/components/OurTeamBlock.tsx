import React from 'react';
import TeamSlider from '@/components/TeamSlider';
import avatar from '../../public/AvatarTeamSlider.png';
import person2 from '../../public/person2.png';
import person3 from '../../public/person3.png';
import person4 from '../../public/person4.png';
import person5 from '../../public/person5.png';
import StandardMarginsLayout from '@/layouts/StandardMarginsLayout';

const OurTeamBlock: React.FC = () => {
    const teamMembers = [
        {
            imageUrl: avatar,
            name: 'Елизавета',
            position: 'UX/UI дизайнер',
        },
        {
            imageUrl: person2,
            name: 'Егор',
            position: 'Frontend-разработчик',
        },
        {
            imageUrl: person4,
            name: 'Алексей',
            position: 'Backend-разработчик',
        },
        {
            imageUrl: person3,
            name: 'Егор',
            position: 'CEO',
        },
        {
            imageUrl: person5,
            name: 'Юлия',
            position: 'Motion-дизайнер',
        },
        {
            imageUrl: avatar,
            name: 'Елизавета',
            position: 'UX/UI дизайнер',
        },
    ];

    return (
        <StandardMarginsLayout styles="mt-[50px] sm:mt-[60px]" children={
            <>
                <div className="container mx-auto">
                    <h2 className="text-[32px] lg:text-[48px] 2xl:text-[60px] font-bold ">Наша команда</h2>
                    <p className="my-[30px] text-[22px]">Анализируем, проектируем, разрабатываем сайты, сервисы и мобильные приложения для бизнеса под любой бюджет.</p>
                    <TeamSlider members={teamMembers} />
                </div>
            </>
        } />
    );
};

export default OurTeamBlock;
