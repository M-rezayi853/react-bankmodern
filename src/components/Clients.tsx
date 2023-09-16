import { FC } from 'react'

import { clients } from '../constants'
import styles from '../style'

interface Props {}

const Clients: FC<Props> = (): JSX.Element => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, index) => (
          <div
            key={client.id + index}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt='client'
              className='sm:w-[192px] w-[100px] object-contain'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
