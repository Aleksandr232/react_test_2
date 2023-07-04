import './footer.css';


 const Footer = ()=>{
    return(
        <div className="footer">
            <div className='footer_text'>
                <div>ПОКУПАТЕЛЯМ</div>
                <div>О НАС</div>
                <div>УЗНАЙТЕ ПЕРВЫМ О НОВИНКАХ И АКЦИЯХ</div>
            </div>
            <div className='footer_link'>
                <div>Каталог</div>
                <div>О Компании</div>
            </div>
            <div className='footer_link_two'>
                <div>Акции</div>
                <div>Новости</div>
            </div>
            <div className="footer_link_one">
                <div>Бренды</div>
                <div>Команда</div>
            </div>
            <div class="custom-input">
            <svg className='input_svg' xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
            <path d="M4.22803 11.9941L12.3809 4.00432" stroke="#C4C4C4" stroke-width="0.976389"/>
            <path d="M12.5781 11.9941L4.42524 4.0043" stroke="#C4C4C4" stroke-width="0.976389"/>
            </svg>

            <input type="text" id="custom-input" name='email' placeholder='Адрес электроной почты' />
            <button className='btn_footer'>Подписаться</button>
            </div>

            
        </div>
    )
}

export default Footer;