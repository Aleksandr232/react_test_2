import { useState } from 'react';
import Modal from '../modal/Modal';
import './content_right.css';
import row from './row.png'
import price from './price.png'

const ContentRight=()=>{
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };

    const [count, setCount] = useState(0);

    const HandleClick = () => {
          setCount(count + 1);
          
      };

    const HandleClickMin = () =>{
        setCount(count - 1);
    }  

    return(
        <div className='content_right'>
            <div className='heading'>Пижама для девочек</div>
            <div className='art'>Арт. 02765/46</div>
            <div className='group'>
                <div>Отзывы</div>
                <img src={row} alt="" />
                <div>14 отзывов</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 5L16 12L8 18.5" stroke="#333333"/>
                </svg>
            </div>
            <div className='block_prices'>
                <img src={price} alt="" />
            </div>
            <div className='block_bag'>
                <select className='select'  name="size" id="">
                    <option selected >Выбрать размер</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="XS">XS</option>
                    <option value="L">L</option>
                </select>
                <div className='select_size'>
                    Определить размер
                </div>
                <div className='block_button'>
                    <div className='btn'>
                        <div onClick={HandleClick} className='btn_pluse'>+</div>
                                <div className='divider_btn'></div>
                                <div className='divider_btn1'></div>
                            <div>{count}</div>
                                
                        <div onClick={HandleClickMin} className='btn_min'>-</div>
                    </div>
                    <div>
                        <button className='btn_bag'>Добавить в корзину</button>
                    </div>
                </div>
                <button className='btn_favorite'>
                <svg className='heart' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.9004 7.0948C10.7002 1.47892 1.40917 5.90389 5.76074 11.6018C10.1123 17.2996 12.4004 19.4908 12.4004 19.4908" stroke="white"/>
                <path d="M11.8943 7.0948C13.0945 1.47892 22.7306 5.90389 18.379 11.6018C14.0275 17.2996 11.7002 19.5 11.7002 19.5" stroke="white"/>
                <path d="M11.3911 6.70752L12.4044 6.70757L12.3835 7.24079H11.3911V6.70752Z" fill="white"/>
                </svg>
                </button>
            </div>
            <div  onClick={openModal} className='click_pay' >Купить в 1 клик</div>
            <Modal isOpen={isOpen} onClose={closeModal}/>
        </div>
    )
}

export default ContentRight;