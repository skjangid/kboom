"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenus, setDrawerMenus } from '../store/reducers/global';
import Image from 'next/image'
import LogoHeader from '../public/static/img/KBOOM.png';
import Twitter from '../public/static/img/Twitter.png';
import Twitch from '../public/static/img/Twitch.png';
import TikTok from '../public/static/img/TikTok.png';
import YouTube from '../public/static/img/YouTube.png';
import Instagram from '../public/static/img/Instagram.png';
import Facebook from '../public/static/img/Facebook.png';
import Discord from '../public/static/img/Discord.png';
import DrawerIcon1 from '../public/static/img/DrawerIcon1.png';
import DrawerIcon2 from '../public/static/img/DrawerIcon2.png';
import DrawerIcon3 from '../public/static/img/DrawerIcon3.png';
import DrawerIcon4 from '../public/static/img/DrawerIcon4.png';
import TableQuests from '../public/static/img/TableQuests.png';
import TableMap from '../public/static/img/TableMap.png';
import TablerMadel from '../public/static/img/TablerMadel.png';
import TablerStore from '../public/static/img/TablerStore.png';
import TablerMilitaryAward from '../public/static/img/TablerMilitaryAward.png';
import TabletBell from '../public/static/img/TabletBell.png';
import Frame from '../public/static/img/Frame.png';
import Setting from '../public/static/img/Setting.png';
import Avatar from '../public/static/img/Avatar.png';
import GoldCoin from '../public/static/img/GoldCoin.png';
import PlusIcon from '../public/static/img/PlusIcon.png';
import EmojiOne from '../public/static/img/EmojiOne.png';
import Vector from '../public/static/img/Vector.png';

const socialIcons = [
  {
    id: 1,
    name: 'Twitter',
    iconName: Twitter,
  },
  {
    id: 2,
    name: 'Twitch',
    iconName: Twitch,
  },
  {
    id: 3,
    name: 'TikTok',
    iconName: TikTok,
  },
  {
    id: 4,
    name: 'YouTube',
    iconName: YouTube,
  },
  {
    id: 5,
    name: 'Instagram',
    iconName: Instagram,
  },
  {
    id: 6,
    name: 'Facebook',
    iconName: Facebook,
  },
  {
    id: 7,
    name: 'Discord',
    iconName: Discord,
  },
];

const tabList = [
  {
    id: 1,
    name: 'DrawerIcon1',
    iconName: DrawerIcon1
  },
  {
    id: 2,
    name: 'DrawerIcon2',
    iconName: DrawerIcon2
  },
  {
    id: 3,
    name: 'DrawerIcon3',
    iconName: DrawerIcon3
  },
  {
    id: 4,
    name: 'DrawerIcon4',
    iconName: DrawerIcon4
  },
]

const stepsList = [
  {
    id: 1,
    textName: 'Quests',
    iconName: TableQuests,
  },
  {
    id: 2,
    textName: '',
    iconName: TableMap,
  },
  {
    id: 3,
    textName: '',
    iconName: TablerMadel,
  },
  {
    id: 4,
    textName: 'Shop',
    iconName: TablerStore,
  },
  {
    id: 5,
    textName: '',
    iconName: TablerMilitaryAward,
  },
  {
    id: 6,
    textName: '',
    iconName: TabletBell,
  },
];

const Home = ({}) => {
  const dispatch = useDispatch();
  const menus = useSelector(({ global }) => global.menus);
  const drawerMenus = useSelector(({ global }) => global.drawerMenus);
  const [activeTab, setActiveTab] = useState(1);
  const [activeStep, setActiveStep] = useState(4);

  // Set menus in reducers on page load, we defined all menus as const

  useEffect(() => {
    console.log('useEffect')
    dispatch(setDrawerMenus(tabList))
    dispatch(setMenus(stepsList));
  }, [])

  return (
    
    <div className="home-tab-container">
      <div className="home-tab-header-container">
        <Image
          src={LogoHeader}
          alt={'kboom'}
          width={93}
          height={32}
        />

        <div className="ant-card-head-wrapper">
          {socialIcons.map((k, index) => (
            <div className="mr-15" key={index}>
              <Image
                src={k.iconName}
                alt={k.name}
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="home-tab-view-container">
        <div className="tab-list-outer">
          {drawerMenus && drawerMenus.length ? drawerMenus.map((k:any, index: number) => (
            <div className={k.id === activeTab ? 'tab-active' : 'tab-inactive'}
              onClick={() => setActiveTab(k.id)}
              key={index}
            >
              <Image
                src={k.iconName}
                alt={k.name}
                width={40}
                height={40}
              />
            </div>
          )) : null}
        </div>

        <div className="tab-list-details-outer">
          <div>
            <div className="ant-card-head-wrapper">
              <Image
                src={activeTab === 1 ? DrawerIcon1 : activeTab === 2 ? DrawerIcon2 : activeTab === 3 ? DrawerIcon3 : DrawerIcon4}
                alt={'DrawerIcon'}
                width={48}
                height={48}
              />

              <span className="home-tab-select-label">Team GO</span>
            </div>

            <div className="home-tab-user-view">

              <div className="ant-card-head-wrapper mb-15">
                <Image
                  src={Avatar}
                  alt={'Avatar'}
                  width={32}
                  height={32}
                />
                <span className="user-name-text">Pseudo</span>
              </div>

              <div className="ant-card-head-wrapper mb-15">
                <div className="user-number-container">
                  <span className="step-value-tex ml-0">7</span>
                </div>
                <div className="user-progress-container">
                  <span className="progress-out-number">168/1000</span>
                  <div className="progress-out-value" style={{ width: `${(168 * 100) / 1000}%`, }} />
                </div>
              </div>

              <div className="fl-space mb-15">
                <div className="ant-card-head-wrapper">
                  <div className="ant-ribbon-wrapper mt-10 ">
                    <Image
                      src={GoldCoin}
                      alt={'GoldCoin'}
                      width={24}
                      height={24}
                    />
                    <div className="tab-plus-icon">
                      <Image
                        src={PlusIcon}
                        alt={'PlusIcon'}
                        width={12}
                        height={12}
                      />
                    </div>
                  </div>

                  <div className="tab-value-text-outer" >
                    <span className='tab-list-value-text'>12,897</span>
                  </div>
                </div>

                <div className="ant-card-head-wrapper">
                  <div className="ant-ribbon-wrapper mt-10 ">
                    <Image
                      src={EmojiOne}
                      alt={'EmojiOne'}
                      width={24}
                      height={24}
                    />
                    <div className="tab-plus-icon">
                      <Image
                        src={PlusIcon}
                        alt={'PlusIcon'}
                        width={12}
                        height={12}
                      />
                    </div>
                  </div>

                  <div className="tab-value-text-outer" >
                    <span className='tab-list-value-text'>722</span>
                  </div>
                </div>

                <div className="ant-card-head-wrapper">
                  <div className="ant-ribbon-wrapper mt-10 ">
                    <Image
                      src={Vector}
                      alt={'Vector'}
                      width={20}
                      height={35}
                    />
                    <div className="tab-plus-icon">
                      <Image
                        src={PlusIcon}
                        alt={'PlusIcon'}
                        width={12}
                        height={12}
                      />
                    </div>
                  </div>

                  <div className="tab-value-text-outer" >
                    <span className='tab-list-value-text'>2/5</span>
                  </div>
                </div>

              </div>
            </div>

            {menus && menus.length ? menus.map((k:any, index: number) => (
              <div
                key={index}
                onClick={() => setActiveStep(k.id)}
                className={k.id === activeStep ? 'step-icon-outer step-active-bg-color' : "step-icon-outer"}
              >
                <Image
                  src={k.iconName}
                  alt={k.iconName}
                  width={24}
                  height={24}
                />
                <span className={k.id === activeStep ? 'step-value-text step-active-color' : "step-value-text"}>{k.textName}</span>
              </div>
            )) : null}

          </div>

          <div>
            <span className="account-label-text">Account management</span>
            <div className="step-icon-outer">
              <Image
                src={Frame}
                alt={'Frame'}
                width={24}
                height={24}
              />
            </div>

            <div className="step-icon-outer">
              <Image
                src={Setting}
                alt={'Setting'}
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
