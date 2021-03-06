import React from 'react';
import { STACK } from '../../../content/titles';
import Tab from '../../section-deviders/Tab';
import PcStack from './PcStack';
import MobileStacks from './MobileFrontEndStack';

export default function Stacks() {

  return (
    <section css={{ display: 'flex', marginBottom: '30px', width:'100%', color:'#99cc00' }}>
      <Tab title={STACK} />
      <section css={{display:'flex', justifyContent:'center', width:'100%'}}>
        <PcStack />
      </section>



      <section css={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        '@media (min-width: 720px)': {
          display: `none`,
        }
      }}>
        {/* <MobileStacks /> */}

      </section>
    </section>

  )
}