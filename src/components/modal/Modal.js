import React, { useState } from 'react';
import './modal.css'

const Modal = ({ isOpen, onClose }) => {
    
  if (!isOpen) {
    return null;
  }

 

  return (
    <div   className="modal">
      <div className="modal-content">
        <div className="close-button" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
        <path d="M10.0026 11.2822L5.50354 6.77901L1.0045 11.2822L0 10.2784L4.50611 5.78223L0 1.28608L1.0045 0.282227L5.50354 4.78544L10.0026 0.289296L11 1.28608L6.50096 5.78223L11 10.2784L10.0026 11.2822Z" fill="#303030"/>
        </svg>
        </div>
        <div className='modal_clik'>Купить в 1 клик</div>
            <input placeholder='+ 7 (---) --- -- -- ' className='input_phone' type="text" />
            <input placeholder='Ваше имя' className='input_name' type="text" />
            <div className='divider'></div>
            <div className='text'>
            Нажимая кнопку “Отправить”, я даю согласие на обработку моих персональных данных в соответствии с 
            Условиями конфиденциальности
            </div>
            <button className='btn_modal'>Отправить</button>
      </div>
    </div>
  );
};

export default Modal;