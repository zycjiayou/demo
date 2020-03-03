import React from 'react';
import _ from 'lodash';

import jpg from './1.jpg';
import png from './图片.png';

import './abc.less';

export default function() {

  const btnClick = () => {
    import(/* webpackChunkName: "print" */'./print.js').then(module => {
      console.log(module);
      var print = module.default;
      print();
    })
    console.log(_.join('hello', 'abc.js'));
  }

  return (
    <div className="abc" onClick={btnClick}>
      {'颈椎很重要！生效了吗'}
      <img src={jpg} />
      <img src={png} />
    </div>
  )
}