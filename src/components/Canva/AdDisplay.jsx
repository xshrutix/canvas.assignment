import Canvas from './Canvas'

import './bg.css'
import { useContext } from 'react';
import { ConfigurationContext } from '../../context/config';

const AdDisplay = () => {

  const { configuration } = useContext(ConfigurationContext)

  console.log(configuration)
  return (
    <div class="diagonal-lines">
      <div className="content">
        <div className='sm:w-1/2 w-screen sm:h-screen h-[30rem] flex justify-center items-center'>
          <Canvas />
        </div>
      </div>

    </div>
  )
}
export default AdDisplay