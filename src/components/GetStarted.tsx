import { FC } from 'react'

import styles from '../style'
import { arrowUp } from '../assets'

interface Props {}

const GetStarted: FC<Props> = (): JSX.Element => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <img
            src={arrowUp}
            alt='arrow up'
            className='w-[23px] h-[23px] object-contain'
          />
          <p className='font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>شروع</span>
          </p>
        </div>

        <p className='font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>کنید</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted
