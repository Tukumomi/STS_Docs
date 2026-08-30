import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '【ModularAvatar対応】',
    image: require('@site/static/img/homepage/STS_サムネ_01.png').default,    
    description: (
      <>
        MA対応で非破壊で追加、低Bitで同期<br/>
        (通常版14bit、個人接続機能のみの場合最小6bit)<br/><br/>
        <strong>簡単3stepでアバターへ追加</strong><br/>
        ※アバターによっては調整が必要になる場合があります。<br/>
      </>
    ),
  },
  {
    title: '【内緒話システム】',
    image: require('@site/static/img/homepage/STS_サムネ_02_機能紹介.png').default,
    description: (
      <>
        <strong>選択した人にだけ声を聞かせられる内緒話システム。</strong><br/>
        離れた人に声を届けることも可能。<br/>
        他にも<strong>専用HUD/ヘイロー/ドローン</strong>など、様々な機能を搭載<br/><br/>

        寝ている人を起こさないように話したり、ワールド探索への利用など。
      </>
    ),
  },
];

function Feature({title, image, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img src={image} role="img" />
      </div>
      <div className="text--center padding-horiz--md" style={{ color: "var(--ifm-color-primary)"}}>
        <Spacer size={50}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export const Spacer = ({ size, horizontal }) => {
  return (
    <div
      style={
        horizontal
          ? { width: size, height: 'auto', display: 'inline-block', flexShrink: 0 }
          : { width: 'auto', height: size, flexShrink: 0  }
      }
    />
  )
}
