import { PxText } from '@mmt817/pixel-ui-react'
import './App.css'

function App() {
  return (
    <div className="playground-container p-x-20 bgc-#ebe6e0">
      <div>一二三四---___"双引号"……'单引号'</div>
      <hr />
      <div>abcdefghijklmnopqrstuvwxyz事件发生ADJBasfbaf加班费</div>
      <hr />
      <div>
        <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
        <span style={{ fontFamily: 'Zpix' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
      </div>
      <hr />
      <div className="b-red b-solid b-1">
        逗号， 句号。 顿号、 分号； 冒号： 双引号“ 双引号” 单引号‘ 单引号’
        书名号《 书名号》 圆括号（ 圆括号） 方括号【 方括号】 破折号—— 省略号……
        感叹号！ 问号？ 人民币符号￥
        <br />
        <br />
        英文逗号, 英文句号. 英文分号; 英文冒号: 英文双引号" 英文单引号' 小于号&lt;
        大于号&gt; 圆括号( 圆括号) 方括号[ 方括号] 大括号{'{'} 大括号{'}'} 连接号/中横线-
        下划线_ 省略号… 感叹号! 问号? 艾特符@ 井号# 美元符号$ 百分号%
        脱字符/抑扬符^ 和号&amp; 星号* 斜杠/ 反斜杠\ 竖线| 波浪线~ 反引号` 等号=
        减号- 加号+
      </div>
      <hr />
      <div
        className="b-red b-solid b-1"
        style={{ fontFamily: 'Zpix' }}
      >
        逗号， 句号。 顿号、 分号； 冒号： 双引号“ 双引号” 单引号‘ 单引号’
        书名号《 书名号》 圆括号（ 圆括号） 方括号【 方括号】 破折号—— 省略号……
        感叹号！ 问号？ 人民币符号￥
        <br />
        <br />
        英文逗号, 英文句号. 英文分号; 英文冒号: 英文双引号" 英文单引号' 小于号&lt;
        大于号&gt; 圆括号( 圆括号) 方括号[ 方括号] 大括号{'{'} 大括号{'}'} 连接号/中横线-
        下划线_ 省略号… 感叹号! 问号? 艾特符@ 井号# 美元符号$ 百分号%
        脱字符/抑扬符^ 和号&amp; 星号* 斜杠/ 反斜杠\ 竖线| 波浪线~ 反引号` 等号=
        减号- 加号+
        <hr />
        ABCDEFGHIJKLMNOPQRSTUVWXYZ口口毛十力====----()={'>'}VOIDzxiabI123456:;
        <hr />
        abcdefghijklmnopqrstuvwxyz口口毛十力====----()={'>'}void
      </div>
      <hr />
      <PxText>Base</PxText>
      <PxText type="primary">Primary</PxText>
      <PxText type="success">Success</PxText>
      <PxText type="warning">Warning</PxText>
      <PxText type="danger">Danger</PxText>
      <PxText size={26} color="#626aef" align="left" bold>Text</PxText>
      <hr />
    </div>
  )
}

export default App
