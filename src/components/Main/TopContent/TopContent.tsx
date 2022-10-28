import React from "react";
import "./index.scss";
import {useStore,actions} from '../../../store'

import Trail from "../../common/useTrial/UseTrial";
import CardTransform from "../../common/Card/CardTransform";
import { BackgroundImage } from "@mantine/core";

function TopContent() {

  const [state,dispatch] = useStore();
  const dataTrail = state?.main.topMain.trail;
  const avatar = state?.main.topMain.avatar;

  return (
    <div className='top__content__wrapper'>
      <div className='header__top'>
        <div className='content__wrapper'>
          <div className='content'>
            <Trail open={true}>
              {dataTrail && dataTrail.map((item:string, idx:number) => (
                <span key={idx} className='letter'>
                  {item}
                </span>
              ))}
            </Trail>
          </div>
        </div>

        <div className='avatar__wrapper'>
          <CardTransform>
            <BackgroundImage className='avatar card' src={avatar} />
          </CardTransform>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
