import React from "react";
import "./index.scss";
import Trail from "../../common/useTrial/UseTrial";
import CardTransform from "../../common/Card/CardTransform";
function TopContent() {
  return (
    <div className='top__content__wrapper'>
      <div className='header__top'>
        <div className='content__wrapper'>
          <div className='content'>
            <Trail open={true}>
              <div className='letter'>Kind</div>
              <div className='letter'>Quiet</div>
              <div className='letter'>Serious</div>
              <div className='letter'>Optimistic</div>
              <div className='letter'>Responsible</div>
              {/* <span>Sit</span> */}
            </Trail>
          </div>
        </div>

        <div className='avatar__wrapper'>
          <CardTransform>
            <div className='avatar card'></div>
          </CardTransform>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
