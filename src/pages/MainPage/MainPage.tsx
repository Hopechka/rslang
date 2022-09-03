import React from 'react';

import { AboutTeam } from '@/components/AboutTeam/AboutTeam';
import { Carousel } from '@/components/Carousel/Carousel';

export function MainPage (){

  return(
    <main >
      <Carousel/>
      <section>
        <h2 className='teamHeader'>Оцени наши преимущества</h2>
        <div>
          <div className='advantageCard'>
            <h3>Учебник</h3>
            <p>Вам доступны для обучения более 3500 часто употребляемых английских слов.
      Слова заботливо разбиты на разделы по уровню сложности, это позволит вам подходить к обучению системно и последовательно!</p>
          </div>
          <div className='advantageCard'>
            <h3>Сложные слова</h3>
            <p>Мы знаем, как порой бывает сложно запомнить новые слова, и чтобы справиться с этим, наш учебник содержит раздел 7, куда вы сможете сохранять свою персональную подборку сложных слов,
              чтобы уделить им особое внимание при изучении.
            </p>
          </div>
          <div className='advantageCard'>
            <h3>Игры</h3>
            <p>Порой, изучать слова может быть скучным! На этот случай мы предлагаем Вам на выбор две игры увлекательные игры,
               которые помогут вам натренировать запоминание слов, а так же восприятие слов на слух.
            </p>
          </div>
          <div className='advantageCard'>
            <h3>Статистика</h3>
            <p>Изучение новых слов, это долгий процесс и очень важно видеть свой прогресс, чтобы не потерять мотивацию.
              Мы предлагаем Вам отслеживать свой прогресс в разделе статистики
            </p>
          </div>
        </div>
      </section>
      <AboutTeam/>
    </main>
  );
}
