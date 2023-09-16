import { FC } from 'react'

import Button from './Button'
import { features } from '../constants'
import styles, { layout } from '../style'

interface Props {}
interface FeatureCardProps {
  icon: string
  title: string
  content: string
  index: number
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
    </div>

    <div className='flex-1 flex flex-col mr-3'>
      <h4 className='font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)

const Business: FC<Props> = (): JSX.Element => {
  return (
    <section id='features' className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          شما کار را انجام دهید، <br className='sm:block hidden' />
          ما پول را اداره می کنیم.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          با کارت اعتباری مناسب، می توانید زندگی مالی خود را با ایجاد اعتبار،
          کسب پاداش و پس انداز پول بهبود بخشید. اما با صدها کارت اعتباری در
          بازار.
        </p>

        <Button styles='mt-10' />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id + index} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business
