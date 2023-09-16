import { FC } from 'react'

import { logo2 } from '../assets'
import styles from '../style'
import { footerLinks, socialMedia } from '../constants'

interface Props {}

const Footer: FC<Props> = (): JSX.Element => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start ml-10'>
          <img
            src={logo2}
            alt='logo'
            className='w-[266px] h-[72px] object-contain'
          />

          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            روشی جدید برای آسان کردن، قابل اطمینان و ایمن کردن پرداخت ها.
          </p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLink, index) => (
            <div
              key={footerLink.title + index}
              className='flex flex-col ss:my-0 my-4 min-w-[150px]'
            >
              <h4 className='font-medium text-[18px] leading-[27px] text-white'>
                {footerLink.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name + index}
                    className={`font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p className='font-normal text-[18px] leading-[27px] text-dimWhite text-center flex justify-start items-center gap-x-2'>
          کپی رایت{' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='#fff'
          >
            <g clip-path='url(#clip0_310_645)'>
              <path
                d='M8 0C3.5888 0 0 3.5888 0 8C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8C16 3.5888 12.4112 0 8 0ZM8 13.8182C4.79185 13.8182 2.18182 11.2081 2.18182 8C2.18182 4.79185 4.79185 2.18182 8 2.18182C11.2081 2.18182 13.8182 4.79185 13.8182 8C13.8182 11.2081 11.2081 13.8182 8 13.8182ZM10.1613 9.32829L11.3408 10.4239L10.7465 10.9441C10.002 11.5954 9.05105 11.9543 8.06887 11.9543C5.86204 11.9543 4.06662 10.1959 4.06662 8.03462C4.06662 5.87833 5.86204 4.124 8.06887 4.124C9.05185 4.124 9.99964 4.47949 10.7374 5.12502L11.31 5.62611L10.1796 6.75709L9.67774 6.31367C9.24596 5.93236 8.67469 5.72233 8.06887 5.72233C6.74335 5.72233 5.66495 6.75964 5.66495 8.03454C5.66495 9.31454 6.74335 10.3559 8.06887 10.3559C8.668 10.3559 9.23935 10.1425 9.67774 9.75527L10.1613 9.32829Z'
                fill='white'
                fill-opacity='0.6'
              />
            </g>
            <defs>
              <clipPath id='clip0_310_645'>
                <rect width='16' height='16' fill='white' />
              </clipPath>
            </defs>
          </svg>{' '}
          بانک مدرن 2023. تمامی حقوق محفوظ است.
        </p>

        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <img
              key={social.id + index}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? 'ml-6' : 'ml-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer
