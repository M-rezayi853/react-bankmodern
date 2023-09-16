import { FC } from 'react'

import Button from './Button'
import { card } from '../assets'
import styles, { layout } from '../style'

interface Props {}

const CardDeal: FC<Props> = (): JSX.Element => {
  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%] object-contain'
        />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          در چند مرحله آسان <br className='sm:block hidden' /> یک معامله کارت
          بهتر پیدا کنید.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
          متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
          رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد
          کرد.
        </p>

        <Button styles='mt-10' />
      </div>
    </section>
  )
}

export default CardDeal
