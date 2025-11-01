import { useState, useRef } from 'react'
import {
  PxText,
  PxButton,
  PxIcon,
  PxButtonGroup,
  PxOverlay,
  PxInput,
  PxTooltip,
  type ButtonExpose
} from '@mmt817/pixel-ui-react'

import './App.css'

function App() {
  const btnRef = useRef<ButtonExpose>(null)
  const tooltipTestRef = useRef<HTMLDivElement>(null)
  const [overlayOpen, setOverlayOpen] = useState(false)
  const [input, setInput] = useState<string>('')
  const [tooltipVisible, setTooltipVisible] = useState(false)

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
      <PxButton ref={btnRef} size="small" onClick={() => console.log(btnRef.current)}>Normal</PxButton>
      <PxButton type="primary" size="small">Primary</PxButton>
      <PxButton type="success" size="small">Success</PxButton>
      <PxButton type="warning" size="small">Warning</PxButton>
      <PxButton type="danger" size="small">Danger</PxButton>
      <PxButton disabled size="small">Disabled</PxButton>
      <hr />
      <PxButton size="small">Normal</PxButton>
      <PxButton type="primary" size="small">Primary</PxButton>
      <PxButton type="success" size="small">Success</PxButton>
      <PxButton type="warning" size="small">Warning</PxButton>
      <PxButton type="danger" size="small">Danger</PxButton>
      <PxButton disabled size="small">Disabled</PxButton>
      <hr />
      <PxButton plain>Normal</PxButton>
      <PxButton type="primary" plain>Primary</PxButton>
      <PxButton type="success" plain>Success</PxButton>
      <PxButton type="warning" plain>Warning</PxButton>
      <PxButton type="danger" plain>Danger</PxButton>
      <PxButton disabled plain>Disabled</PxButton>
      <hr />
      <PxButton size="large">Normal</PxButton>
      <PxButton type="primary" size="large">Primary</PxButton>
      <PxButton type="success" size="large">Success</PxButton>
      <PxButton type="warning" size="large">Warning</PxButton>
      <PxButton type="danger" size="large">Danger</PxButton>
      <PxButton disabled size="large">Disabled</PxButton>
      <hr />
      <PxButton round>Normal</PxButton>
      <PxButton type="primary" round>Primary</PxButton>
      <PxButton type="success" round>Success</PxButton>
      <PxButton type="warning" round>Warning</PxButton>
      <PxButton type="danger" round>Danger</PxButton>
      <PxButton disabled round>Disabled</PxButton>
      <hr />
      <PxButton circle>Normal</PxButton>
      <PxButton type="primary" circle>Primary</PxButton>
      <PxButton type="success" circle>Success</PxButton>
      <PxButton type="warning" circle>Warning</PxButton>
      <PxButton type="danger" circle>Danger</PxButton>
      <PxButton disabled circle>Disabled</PxButton>
      <PxButton disabled circle icon='face-thinking-solid'></PxButton>
      <hr />
      <PxButton icon="upload-alt-solid" tag="span" onClick={() => console.log('span button clicked')}>Span Button</PxButton>
      <hr />
      <PxIcon icon="face-thinking-solid" />
      <PxIcon icon="face-thinking-solid" size={30} />
      <PxIcon icon="face-thinking-solid" color="red" />
      <PxIcon icon="face-thinking-solid" type="primary" />
      <PxIcon icon="face-thinking-solid" type="success" />
      <PxIcon icon="face-thinking-solid" type="warning" />
      <PxIcon icon="face-thinking-solid" type="danger" />
      <PxIcon icon="face-thinking-solid" flip="horizontal" />
      <PxIcon icon="face-thinking-solid" flip="vertical" />
      <PxIcon icon="face-thinking-solid" flip="both" />
      <PxIcon icon="face-thinking-solid" rotation={180} />
      <PxIcon icon="face-thinking-solid" spin />
      <PxIcon icon="face-thinking-solid" bounce />
      <PxIcon icon="face-thinking-solid" shake />
      <PxIcon icon="face-thinking-solid" beat />
      <hr />
      <PxButtonGroup type="primary" round size="small">
        <PxButton>Button1</PxButton>
        <PxButton>Button2</PxButton>
        <PxButton>Button3</PxButton>
      </PxButtonGroup>
      <PxButtonGroup type="success" circle size="large">
        <PxButton>Button1</PxButton>
        <PxButton>Button3</PxButton>
      </PxButtonGroup>
      <PxButtonGroup type="warning">
        <PxButton>Button1</PxButton>
        <PxButton>Button2</PxButton>
        <PxButton>Button3</PxButton>
        <PxButton>Button4</PxButton>
      </PxButtonGroup>
      <hr />
      <PxButton color="#626aef">Button</PxButton>
      <PxButton color="#626aef" disabled>Button</PxButton>
      <PxButton color="#626aef" plain>Button</PxButton>
      <PxButton color="#dfee56">Button</PxButton>
      <PxButton color="#dfee56" disabled>Button</PxButton>
      <PxButton color="#dfee56" plain>Button</PxButton>
      <PxButton color="#fadbe0">Button</PxButton>
      <PxButton color="#fadbe0" disabled>Button</PxButton>
      <PxButton color="#fadbe0" plain>Button</PxButton>
      <hr />
      <div className="tooltip-base-box w-1000">
        <div className="flex items-center justify-center">
          <PxTooltip content="Top Left prompts info" placement="top-start">
            <PxButton>top-start</PxButton>
          </PxTooltip>
          <PxTooltip content="Top Center prompts info" placement="top">
            <PxButton>top</PxButton>
          </PxTooltip>
          <PxTooltip
            content="Top Right prompts info"
            placement="top-end"
          >
            <PxButton>top-end</PxButton>
          </PxTooltip>
        </div>
        <div className="f-b">
          <PxTooltip content="Left Top prompts info" placement="left-start">
            <PxButton>left-start</PxButton>
          </PxTooltip>
          <PxTooltip content="Right Top prompts info" placement="right-start">
            <PxButton>right-start</PxButton>
          </PxTooltip>
        </div>
        <div className="f-b">
          <PxTooltip content="Left Center prompts info" placement="left">
            <PxButton className="mt-3 mb-3">left</PxButton>
          </PxTooltip>
          <PxTooltip content="Right Center prompts info" placement="right">
            <PxButton>right</PxButton>
          </PxTooltip>
        </div>
        <div className="f-b">
          <PxTooltip
            content="Left Bottom prompts info"
            placement="left-end"
          >
            <PxButton>left-end</PxButton>
          </PxTooltip>
          <PxTooltip
            content="Right Bottom prompts info"
            placement="right-end"
          >
            <PxButton>right-end</PxButton>
          </PxTooltip>
        </div>
        <div className="flex items-center justify-center">
          <PxTooltip
            content="Bottom Left prompts info"
            placement="bottom-start"
          >
            <PxButton>bottom-start</PxButton>
          </PxTooltip>
          <PxTooltip content="Bottom Center prompts info" placement="bottom">
            <PxButton>bottom</PxButton>
          </PxTooltip>
          <PxTooltip content="Bottom Right prompts info" placement="bottom-end" effect="dark">
            <PxButton>bottom-end</PxButton>
          </PxTooltip>
        </div>
      </div>
      <hr />
      <div className="w-600 mt-20">
        <PxButton onClick={() => setTooltipVisible(!tooltipVisible)}>toggle</PxButton>
        <PxTooltip content="controlled visible prompts info" placement="right" visible={tooltipVisible}>
          <PxButton>controlled visible</PxButton>
        </PxTooltip>
      </div>
      <div className="w-600 mt-20">
        <PxTooltip content="click prompts info" trigger="click">
          <PxButton>click visible</PxButton>
        </PxTooltip>
        <PxTooltip content="contextmenu prompts info" trigger="contextmenu">
          <PxButton>contextmenu visible</PxButton>
        </PxTooltip>
      </div>

      {/* tooltip virtual trigger */}
      <div className="w-600 mt-20">
        <PxTooltip
          content="Bottom center"
          placement="bottom"
          trigger="hover"
          virtualTriggering
          virtualRef={tooltipTestRef}
        >
        </PxTooltip>
        <div ref={tooltipTestRef} className="inline-block">
          <PxButton>virtual trigger</PxButton>
        </div>
      </div>
      <hr />
      <div className="mb-20">
        <PxInput
          value={input}
          style={{ width: '240px' }}
          placeholder="Please input"
        />
      </div>
      <div className="mb-20">
        <PxInput
          value={input}
          style={{ width: '240px' }}
          disabled
          placeholder="Please input"
        />
      </div>
      <div className="mb-20">
        <PxInput
          value={input}
          style={{ width: '240px' }}
          clearable
          placeholder="Please input"
          onChange={(value: string) => setInput(value)}
        />
      </div>
      <div className="mb-20">
        <PxInput value={input} type="password" placeholder="Please input password" showPassword />
      </div>
      <div className="mb-20">
        <PxInput size="large" value={input} style={{ width: '240px' }} placeholder="Pick a date" prepend={<PxIcon style={{ fontSize: '32px' }} icon="bluesky" />} />
      </div>
      <div className="mb-20">
        <PxInput
          value={input}
          style={{ width: '240px' }}
          placeholder="Type something"
          prefix={<PxIcon icon="unsplash" />}
        />
      </div>
      <div className="mb-20">
        <PxInput
          value={input}
          style={{ width: '240px' }}
          rows={3}
          type="textarea"
          placeholder="Please input"
          onChange={(value: string) => setInput(value)}
        />
      </div>
      <hr />
      <PxOverlay
        open={overlayOpen}
        setOpen={setOverlayOpen}
        // grid
        // preset1
        // matte
        lockScroll
        backdropClose
        color="rgba(255, 119, 7, 0.4)"
        overlayClass={['f-c']}
      >
        <PxButton onClick={() => setOverlayOpen(false)}>Close</PxButton>
      </PxOverlay>
      <PxButton onClick={() => setOverlayOpen(!overlayOpen)}>overlay</PxButton>
    </div>
  )
}

export default App
