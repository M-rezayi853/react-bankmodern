import { FC } from 'react'

import Button from './Button'
import styles from '../style'

interface Props {}

const CTA: FC<Props> = (): JSX.Element => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>
          بیایید خدمات ما را اکنون امتحان کنید!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          همه چیزهایی که برای پذیرش پرداخت کارت و رشد کسب و کار خود نیاز دارید
          در هر نقطه از این سیاره.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:mr-10 mr-0 sm:mt-0 mt-10`}>
        <Button styles='' />
      </div>
    </section>
  )
}

export default CTA
