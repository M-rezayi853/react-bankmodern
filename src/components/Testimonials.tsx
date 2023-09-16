import { FC } from 'react'

import FeedbackCard from './FeedbackCard'
import { feedback } from '../constants'
import styles from '../style'

interface Props {}

const Testimonials: FC<Props> = (): JSX.Element => {
  return (
    <section
      id='clients'
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>
          آنچه مردم <br className='sm:block hidden' /> در مورد ما می گویند.
        </h1>

        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-right max-w-[450px]`}>
            همه چیزهایی که برای پذیرش پرداخت های کارتی و رشد کسب و کار خود در هر
            نقطه از کره زمین نیاز دارید.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((item, index) => (
          <FeedbackCard key={item.id + index} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
