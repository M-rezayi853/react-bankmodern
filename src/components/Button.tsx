import { FC, ReactNode } from 'react'

interface Props {
  styles: ReactNode
}

const Button: FC<Props> = ({ styles }): JSX.Element => {
  return (
    <button
      type='button'
      className={`py-4 px-6 bg-blue-gradient font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}`}
    >
      شروع کنید
    </button>
  )
}

export default Button
