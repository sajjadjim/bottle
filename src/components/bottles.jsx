import React, { use } from 'react';
import Bottle from './bottle/bottle';
import './bottles.css'
const bottles = ({bottlePromise}) => {
 const Bottles = use(bottlePromise)
//  console.log(Bottles)   
    return (
        <div>
  <h1 style={{textAlign:'center'}}>Total Number of Bottle : {Bottles.length}</h1>  
  <div className='bottles-single'>
  {
    Bottles.map(bottle_single=><Bottle key={bottle_single.id} bottle_single={bottle_single}></Bottle>)
  }
  </div>
        </div>
    );
};

export default bottles;