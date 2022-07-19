import React, { useState } from 'react';
import css from './WishPage.module.scss';
import ProfileSNB from '../../components/Profile/ProfileSNB';

function WishPage() {
  const [isUpdated, setIsUpdated] = useState(true);

  function close() {
    setIsUpdated(false);
  }

  return (
    <div className={css.container}>
      <ProfileSNB />
      <div className={css.content_box}>
        <div className={css.content_title_border}>
          <h3>관심상품</h3>
        </div>

        <ul className={css.wish_list}>
          {isUpdated && (
            <li>
              <div className={css.wish_product_box}>
                <div className={css.wish_product}>
                  <img
                    src="https://i.pinimg.com/564x/7b/cf/9f/7bcf9fd06731087ef9edce2a35fd2cfa.jpg"
                    alt="사용자이미지"
                  />
                  <div className={css.product_detail}>
                    <p className={css.brand}>Nike</p>
                    <p className={css.product_name}>
                      Nike Dunk Low Retro Black
                    </p>
                    <p className={css.size}>230</p>
                  </div>
                </div>
                <div className={css.wish_buy}>
                  <button className={css.wish_btn}>
                    <div className={css.text}>
                      <div className={css.buy_text}>구매</div>
                      <div className={css.buy_price}>
                        <div>60000원</div>
                        <div className={css.immediately}>즉시 구매가</div>
                      </div>
                    </div>
                  </button>
                  <div>
                    <span onClick={close}>삭제</span>
                  </div>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default WishPage;
