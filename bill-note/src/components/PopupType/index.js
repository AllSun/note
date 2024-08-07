// PopupType/index.jsx
import React, { forwardRef, useEffect, useState } from 'react'
import { Popup } from 'antd-mobile'
import cx from 'classnames'
import { get } from '@/utils'
import PropTypes from 'prop-types'

import  './index.css'

// forwardRef 用于拿到父组件传入的 ref 属性，这样在父组件便能通过 ref 控制子组件。
const PopupType = forwardRef(({ onSelect }, ref) => {
  const [show, setShow] = useState(false); // 组件的显示和隐藏
  const [active, setActive] = useState('all'); // 激活的 type
  const [expense, setExpense] = useState([]); // 支出类型标签
  const [income, setIncome] = useState([]); // 收入类型标签

  useEffect(() => {
    (async () => {
      // 请求标签接口放在弹窗内，这个弹窗可能会被复用，所以请求如果放在外面，会造成代码冗余。
      const { data: { list } } = await get('/api/type/list')
      setExpense(list.filter(i => i.type === 1))
      setIncome(list.filter(i => i.type === 2))
    })()
  }, [])
  console.log(expense)

  if (ref) {
    ref.current = {
      // 外部可以通过 ref.current.show 来控制组件的显示
      show: () => {
        setShow(true)
      },
      // 外部可以通过 ref.current.close 来控制组件的显示
      close: () => {
        setShow(false)
      }
    }
  };

  // 选择类型回调
  const choseType = (item) => {
    setActive(item.id)
    setShow(false)
    // 父组件传入的 onSelect，为了获取类型
    onSelect(item)
  };

  return <Popup
    visible={show}
    position="bottom"
    onMaskClick={() => setShow(false)}
    destroyOnClose={false}
    getContainer={() => document.body}
  >
    <div className='popupType'>
      <div className='header'>
        请选择类型
      </div>
      <div className='content'>
        <div onClick={() => choseType({ id: 'all' })} className={cx({ 'all': true, 'active': active === 'all' })}>全部类型</div>
        <div className='title'>支出</div>
        <div className='expenseWrap'>
          {
            expense.map((item, index) => <p key={index} onClick={() => choseType(item)} className={cx({'active': active === item.id})} >{ item.name }</p>)
          }
        </div>
        <div className='title'>收入</div>
        <div className='incomeWrap'>
          {
            income.map((item, index) => <p key={index} onClick={() => choseType(item)} className={cx({'active': active === item.id})} >{ item.name }</p>)
          }
        </div>
      </div>
    </div>
  </Popup>
});

PopupType.propTypes = {
  onSelect: PropTypes.func
}

export default PopupType;
