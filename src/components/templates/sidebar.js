import React, { Component } from 'react';

export default class SideBar extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <br /><br /><br /><br />
        <p>スポンサードリンク</p>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <hr />

        <h3>筆者</h3>
        <p>ムラケン</p>
        <h3>一言自己紹介</h3>
        <p>瀬戸内出身のアラサーエンジニア</p>
        <h3>仕事</h3>
        <p>
          某通信企業でインフラエンジニアをやっています<br />
          基本的にLinux系サーバエンジニアですが<br />
          最近はリーダー的な業務が増えてきました<br />
          自動化して楽になることに生きがいを感じます<br />
        </p>
        <h3>得意</h3>
          * Linuxの運用<br />
          * bash/awk<br />
          * 打ち合わせ中に相手が熱くなっても気にしないこと<br />
      </div>
    )
  }
}