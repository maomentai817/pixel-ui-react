!(function(){"use strict";var Ua=Object.defineProperty,_a=Object.defineProperties;var Ha=Object.getOwnPropertyDescriptors;var fr=Object.getOwnPropertySymbols;var Va=Object.prototype.hasOwnProperty,Ga=Object.prototype.propertyIsEnumerable;var gr=(oe,D,e)=>D in oe?Ua(oe,D,{enumerable:!0,configurable:!0,writable:!0,value:e}):oe[D]=e,Re=(oe,D)=>{for(var e in D||(D={}))Va.call(D,e)&&gr(oe,e,D[e]);if(fr)for(var e of fr(D))Ga.call(D,e)&&gr(oe,e,D[e]);return oe},Jt=(oe,D)=>_a(oe,Ha(D));var vr=(oe,D,e)=>new Promise((m,ce)=>{var I=z=>{try{B(e.next(z))}catch(P){ce(P)}},ge=z=>{try{B(e.throw(z))}catch(P){ce(P)}},B=z=>z.done?m(z.value):Promise.resolve(z.value).then(I,ge);B((e=e.apply(oe,D)).next())});(self.webpackChunk_pixel_ui_react_docs=self.webpackChunk_pixel_ui_react_docs||[]).push([[904],{87394:function(oe,D,e){var m;e.r(D),e.d(D,{demos:function(){return O}});var ce=e(90819),I=e.n(ce),ge=e(89933),B=e.n(ge),z=e(21077),P=e(85916),O={"docs-components-button-demo-0":{component:z.memo(z.lazy(B()(I()().mark(function T(){var C,o,c,t;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return C=a.sent,o=C.default,a.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return c=a.sent,t=c.PxButton,a.abrupt("return",{default:function(){return o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement(t,null,"Button"),o.createElement(t,{type:"primary"},"Primary"),o.createElement(t,{type:"success"},"Success"),o.createElement(t,{type:"warning"},"Warning"),o.createElement(t,{type:"danger"},"Danger"),o.createElement(t,{type:"sakura"},"Sakura")),o.createElement("p",null,o.createElement(t,{plain:!0},"Plain"),o.createElement(t,{type:"primary",plain:!0},"Primary"),o.createElement(t,{type:"success",plain:!0},"Success"),o.createElement(t,{type:"warning",plain:!0},"Warning"),o.createElement(t,{type:"danger",plain:!0},"Danger"),o.createElement(t,{type:"sakura",plain:!0},"Sakura")),o.createElement("p",null,o.createElement(t,{round:!0},"Round"),o.createElement(t,{type:"primary",round:!0},"Primary"),o.createElement(t,{type:"success",round:!0},"Success"),o.createElement(t,{type:"warning",round:!0},"Warning"),o.createElement(t,{type:"danger",round:!0},"Danger"),o.createElement(t,{type:"sakura",round:!0},"Sakura")),o.createElement("p",null,o.createElement(t,{icon:"search",circle:!0}),o.createElement(t,{type:"primary",icon:"edit-solid",circle:!0}),o.createElement(t,{type:"success",icon:"check-solid",circle:!0}),o.createElement(t,{type:"warning",icon:"star-solid",circle:!0}),o.createElement(t,{type:"danger",icon:"trash-solid",circle:!0}),o.createElement(t,{type:"sakura",icon:"tag-solid",circle:!0})))}});case 9:case"end":return a.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxButton>Button</PxButton>
        <PxButton type="primary">Primary</PxButton>
        <PxButton type="success">Success</PxButton>
        <PxButton type="warning">Warning</PxButton>
        <PxButton type="danger">Danger</PxButton>
        <PxButton type="sakura">Sakura</PxButton>
      </p>
      <p>
        <PxButton plain>Plain</PxButton>
        <PxButton type="primary" plain>Primary</PxButton>
        <PxButton type="success" plain>Success</PxButton>
        <PxButton type="warning" plain>Warning</PxButton>
        <PxButton type="danger" plain>Danger</PxButton>
        <PxButton type="sakura" plain>Sakura</PxButton>
      </p>
      <p>
        <PxButton round>Round</PxButton>
        <PxButton type="primary" round>Primary</PxButton>
        <PxButton type="success" round>Success</PxButton>
        <PxButton type="warning" round>Warning</PxButton>
        <PxButton type="danger" round>Danger</PxButton>
        <PxButton type="sakura" round>Sakura</PxButton>
      </p>
      <p>
        <PxButton icon="search" circle></PxButton>
        <PxButton type="primary" icon="edit-solid" circle></PxButton>
        <PxButton type="success" icon="check-solid" circle></PxButton>
        <PxButton type="warning" icon="star-solid" circle></PxButton>
        <PxButton type="danger" icon="trash-solid" circle></PxButton>
        <PxButton type="sakura" icon="tag-solid" circle></PxButton>
      </p>
    </>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(z,2)),"@duheng1992/pixel-ui-react":P},renderOpts:{compile:function(){var T=B()(I()().mark(function o(){var c,t=arguments;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(977).then(e.bind(e,97977));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,t));case 3:case"end":return a.stop()}},o)}));function C(){return T.apply(this,arguments)}return C}()}},"docs-components-button-demo-1":{component:z.memo(z.lazy(B()(I()().mark(function T(){var C,o,c,t;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return C=a.sent,o=C.default,a.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return c=a.sent,t=c.PxButton,a.abrupt("return",{default:function(){return o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement(t,null,"Button"),o.createElement(t,{type:"primary"},"Primary"),o.createElement(t,{type:"success"},"Success"),o.createElement(t,{type:"warning"},"Warning"),o.createElement(t,{type:"danger"},"Danger"),o.createElement(t,{type:"sakura"},"Sakura")),o.createElement("p",null,o.createElement(t,{disabled:!0},"Button"),o.createElement(t,{type:"primary",disabled:!0},"Primary"),o.createElement(t,{type:"success",disabled:!0},"Success"),o.createElement(t,{type:"warning",disabled:!0},"Warning"),o.createElement(t,{type:"danger",disabled:!0},"Danger"),o.createElement(t,{type:"sakura",disabled:!0},"Sakura")))}});case 9:case"end":return a.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxButton>Button</PxButton>
        <PxButton type="primary">Primary</PxButton>
        <PxButton type="success">Success</PxButton>
        <PxButton type="warning">Warning</PxButton>
        <PxButton type="danger">Danger</PxButton>
        <PxButton type="sakura">Sakura</PxButton>
      </p>
      <p>
        <PxButton disabled>Button</PxButton>
        <PxButton type="primary" disabled>Primary</PxButton>
        <PxButton type="success" disabled>Success</PxButton>
        <PxButton type="warning" disabled>Warning</PxButton>
        <PxButton type="danger" disabled>Danger</PxButton>
        <PxButton type="sakura" disabled>Sakura</PxButton>
      </p>
    </>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(z,2)),"@duheng1992/pixel-ui-react":P},renderOpts:{compile:function(){var T=B()(I()().mark(function o(){var c,t=arguments;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(977).then(e.bind(e,97977));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,t));case 3:case"end":return a.stop()}},o)}));function C(){return T.apply(this,arguments)}return C}()}},"docs-components-button-demo-2":{component:z.memo(z.lazy(B()(I()().mark(function T(){var C,o,c,t,d;return I()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return C=h.sent,o=C.default,h.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return c=h.sent,t=c.PxButton,d=c.PxIcon,h.abrupt("return",{default:function(){return o.createElement("div",null,o.createElement(t,{type:"primary",icon:"edit"}),o.createElement(t,{type:"primary",icon:"share"}),o.createElement(t,{type:"primary",icon:"trash"}),o.createElement(t,{type:"primary",icon:"search"},"Search"),o.createElement(t,{type:"primary"},"Upload",o.createElement(d,{icon:"upload-alt-solid",style:{marginLeft:"8px"},color:"#fff"})))}});case 10:case"end":return h.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxButton, PxIcon } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxButton type="primary" icon="edit" />
      <PxButton type="primary" icon="share" />
      <PxButton type="primary" icon="trash" />
      <PxButton type="primary" icon="search">Search</PxButton>
      <PxButton type="primary">
        Upload
        <PxIcon icon="upload-alt-solid" style={{ marginLeft: '8px' }} color="#fff" />
      </PxButton>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(z,2)),"@duheng1992/pixel-ui-react":P},renderOpts:{compile:function(){var T=B()(I()().mark(function o(){var c,t=arguments;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(977).then(e.bind(e,97977));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,t));case 3:case"end":return a.stop()}},o)}));function C(){return T.apply(this,arguments)}return C}()}},"docs-components-button-demo-3":{component:z.memo(z.lazy(B()(I()().mark(function T(){var C,o,c,t,d;return I()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return C=h.sent,o=C.default,h.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return c=h.sent,t=c.PxButtonGroup,d=c.PxButton,h.abrupt("return",{default:function(){return o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement(t,{type:"primary",round:!0},o.createElement(d,null,"Button1"),o.createElement(d,null,"Button2"))),o.createElement("p",null,o.createElement(t,{type:"success",round:!0},o.createElement(d,null,"Button1"),o.createElement(d,null,"Button2"),o.createElement(d,null,"Button3"))),o.createElement("p",null,o.createElement(t,{type:"warning",round:!0},o.createElement(d,null,"Button1"),o.createElement(d,null,"Button2"),o.createElement(d,null,"Button3"),o.createElement(d,null,"Button4"))),o.createElement("p",null,o.createElement(t,{type:"danger"},o.createElement(d,{type:"primary",icon:"edit",round:!0}),o.createElement(d,{type:"primary",icon:"share"}),o.createElement(d,{type:"primary",icon:"trash",round:!0}))),o.createElement("p",null,o.createElement(t,{type:"sakura"},o.createElement(d,{type:"primary",icon:"edit",round:!0}),o.createElement(d,{type:"primary",icon:"share"}),o.createElement(d,{type:"primary",icon:"trash",round:!0}))))}});case 10:case"end":return h.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxButtonGroup, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxButtonGroup type="primary" round>
          <PxButton>Button1</PxButton>
          <PxButton>Button2</PxButton>
        </PxButtonGroup>
      </p>
      <p>
        <PxButtonGroup type="success" round>
          <PxButton>Button1</PxButton>
          <PxButton>Button2</PxButton>
          <PxButton>Button3</PxButton>
        </PxButtonGroup>
      </p>
      <p>
        <PxButtonGroup type="warning" round>
          <PxButton>Button1</PxButton>
          <PxButton>Button2</PxButton>
          <PxButton>Button3</PxButton>
          <PxButton>Button4</PxButton>
        </PxButtonGroup>
      </p>
      <p>
        <PxButtonGroup type="danger">
          <PxButton type="primary" icon="edit" round />
          <PxButton type="primary" icon="share" />
          <PxButton type="primary" icon="trash" round />
        </PxButtonGroup>
      </p>
      <p>
        <PxButtonGroup type="sakura">
          <PxButton type="primary" icon="edit" round />
          <PxButton type="primary" icon="share" />
          <PxButton type="primary" icon="trash" round />
        </PxButtonGroup>
      </p>
    </>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(z,2)),"@duheng1992/pixel-ui-react":P},renderOpts:{compile:function(){var T=B()(I()().mark(function o(){var c,t=arguments;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(977).then(e.bind(e,97977));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,t));case 3:case"end":return a.stop()}},o)}));function C(){return T.apply(this,arguments)}return C}()}},"docs-components-button-demo-4":{component:z.memo(z.lazy(B()(I()().mark(function T(){var C,o,c,t;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return C=a.sent,o=C.default,a.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return c=a.sent,t=c.PxButton,a.abrupt("return",{default:function(){return o.createElement("div",null,o.createElement(t,{type:"primary",loading:!0},"Loading"),o.createElement(t,{type:"primary",loadingIcon:"circle-notch",loading:!0},"Loading"))}});case 9:case"end":return a.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxButton type="primary" loading>Loading</PxButton>
      <PxButton type="primary" loadingIcon="circle-notch" loading>
        Loading
      </PxButton>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(z,2)),"@duheng1992/pixel-ui-react":P},renderOpts:{compile:function(){var T=B()(I()().mark(function o(){var c,t=arguments;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(977).then(e.bind(e,97977));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,t));case 3:case"end":return a.stop()}},o)}));function C(){return T.apply(this,arguments)}return C}()}},"docs-components-button-demo-5":{component:z.memo(z.lazy(B()(I()().mark(function T(){var C,o,c,t;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return C=a.sent,o=C.default,a.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return c=a.sent,t=c.PxButton,a.abrupt("return",{default:function(){return o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement(t,{type:"primary",size:"large"},"817"),o.createElement(t,{type:"success",size:"large"},"817"),o.createElement(t,{type:"warning",size:"large"},"817"),o.createElement(t,{type:"danger",size:"large"},"817"),o.createElement(t,{type:"sakura",size:"large"},"817")),o.createElement("p",null,o.createElement(t,{type:"primary"},"817"),o.createElement(t,{type:"success"},"817"),o.createElement(t,{type:"warning"},"817"),o.createElement(t,{type:"danger"},"817"),o.createElement(t,{type:"sakura"},"817")),o.createElement("p",null,o.createElement(t,{type:"primary",size:"small"},"817"),o.createElement(t,{type:"success",size:"small"},"817"),o.createElement(t,{type:"warning",size:"small"},"817"),o.createElement(t,{type:"danger",size:"small"},"817"),o.createElement(t,{type:"sakura",size:"small"},"817")))}});case 9:case"end":return a.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxButton type="primary" size="large">817</PxButton>
        <PxButton type="success" size="large">817</PxButton>
        <PxButton type="warning" size="large">817</PxButton>
        <PxButton type="danger" size="large">817</PxButton>
        <PxButton type="sakura" size="large">817</PxButton>
      </p>
      <p>
        <PxButton type="primary">817</PxButton>
        <PxButton type="success">817</PxButton>
        <PxButton type="warning">817</PxButton>
        <PxButton type="danger">817</PxButton>
        <PxButton type="sakura">817</PxButton>
      </p>
      <p>
        <PxButton type="primary" size="small">817</PxButton>
        <PxButton type="success" size="small">817</PxButton>
        <PxButton type="warning" size="small">817</PxButton>
        <PxButton type="danger" size="small">817</PxButton>
        <PxButton type="sakura" size="small">817</PxButton>
      </p>
    </>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(z,2)),"@duheng1992/pixel-ui-react":P},renderOpts:{compile:function(){var T=B()(I()().mark(function o(){var c,t=arguments;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(977).then(e.bind(e,97977));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,t));case 3:case"end":return a.stop()}},o)}));function C(){return T.apply(this,arguments)}return C}()}},"docs-components-button-demo-6":{component:z.memo(z.lazy(B()(I()().mark(function T(){var C,o,c,t;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return C=a.sent,o=C.default,a.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return c=a.sent,t=c.PxButton,a.abrupt("return",{default:function(){return o.createElement("div",null,o.createElement(t,null,"button"),o.createElement(t,{tag:"div",role:"button",tabIndex:0},"div"),o.createElement(t,{type:"primary",tag:"a"},"a"))}});case 9:case"end":return a.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxButton>button</PxButton>
      <PxButton tag="div" role="button" tabIndex={0}>div</PxButton>
      <PxButton type="primary" tag="a">a</PxButton>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(z,2)),"@duheng1992/pixel-ui-react":P},renderOpts:{compile:function(){var T=B()(I()().mark(function o(){var c,t=arguments;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(977).then(e.bind(e,97977));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,t));case 3:case"end":return a.stop()}},o)}));function C(){return T.apply(this,arguments)}return C}()}},"docs-components-button-demo-7":{component:z.memo(z.lazy(B()(I()().mark(function T(){var C,o,c,t,d,a;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return C=i.sent,o=C.default,i.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return c=i.sent,t=c.PxButton,d=c.PxButtonGroup,a=c.PxText,i.abrupt("return",{default:function(){return o.createElement(o.Fragment,null,o.createElement(a,{size:"12"},"\u4F7F\u7528color\u5C5E\u6027\u81EA\u52A8\u8BA1\u7B97\u989C\u8272,\u53EF\u80FD\u51FA\u73B0\u8BA1\u7B97\u9519\u8BEF"),o.createElement("div",{style:{margin:"20px 0"}},o.createElement(t,{color:"#626aef"},"Button"),o.createElement(t,{color:"#626aef",disabled:!0},"Button"),o.createElement(t,{color:"#626aef",plain:!0},"Button"),o.createElement(d,{color:"#626aef",circle:!0},o.createElement(t,null,"Button1"),o.createElement(t,null,"Button2"))),o.createElement("div",{style:{margin:"20px 0"}},o.createElement(t,{color:"#dfee56"},"Button"),o.createElement(t,{color:"#dfee56",disabled:!0},"Button"),o.createElement(t,{color:"#dfee56",plain:!0},"Button"),o.createElement(d,{color:"#dfee56",round:!0},o.createElement(t,null,"Button1"),o.createElement(t,null,"Button2"))),o.createElement("div",{style:{margin:"20px 0"}},o.createElement(t,{color:"#fadbe0"},"Button"),o.createElement(t,{color:"#fadbe0",disabled:!0},"Button"),o.createElement(t,{color:"#fadbe0",plain:!0},"Button"),o.createElement(d,{color:"#fadbe0"},o.createElement(t,null,"Button1"),o.createElement(t,null,"Button2"))),o.createElement(a,{size:"12"},"\u76F4\u63A5\u4FEE\u6539paintWorklet\u53D8\u91CF"),o.createElement("div",{className:"paint",style:{margin:"20px 0"}},o.createElement(t,null,"Button"),o.createElement(d,null,o.createElement(t,null,"Button1"),o.createElement(t,null,"Button2"))),o.createElement("style",null,`
        .paint .px-button {
          --px-button-text-color: #554562;
          --px-border-color: #554562;
          --px-bg-color: #fadbe0;
          --px-bg-shadow-color: #eaadbd;
        }
      `))}});case 11:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxButton, PxButtonGroup, PxText } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <>
      <PxText size="12">\u4F7F\u7528color\u5C5E\u6027\u81EA\u52A8\u8BA1\u7B97\u989C\u8272,\u53EF\u80FD\u51FA\u73B0\u8BA1\u7B97\u9519\u8BEF</PxText>
      <div style={{ margin: '20px 0' }}>
        <PxButton color="#626aef">Button</PxButton>
        <PxButton color="#626aef" disabled>Button</PxButton>
        <PxButton color="#626aef" plain>Button</PxButton>
        <PxButtonGroup color="#626aef" circle>
          <PxButton>Button1</PxButton>
          <PxButton>Button2</PxButton>
        </PxButtonGroup>
      </div>
      <div style={{ margin: '20px 0' }}>
        <PxButton color="#dfee56">Button</PxButton>
        <PxButton color="#dfee56" disabled>Button</PxButton>
        <PxButton color="#dfee56" plain>Button</PxButton>
        <PxButtonGroup color="#dfee56" round>
          <PxButton>Button1</PxButton>
          <PxButton>Button2</PxButton>
        </PxButtonGroup>
      </div>
      <div style={{ margin: '20px 0' }}>
        <PxButton color="#fadbe0">Button</PxButton>
        <PxButton color="#fadbe0" disabled>Button</PxButton>
        <PxButton color="#fadbe0" plain>Button</PxButton>
        <PxButtonGroup color="#fadbe0">
          <PxButton>Button1</PxButton>
          <PxButton>Button2</PxButton>
        </PxButtonGroup>
      </div>
      <PxText size="12">\u76F4\u63A5\u4FEE\u6539paintWorklet\u53D8\u91CF</PxText>
      <div className="paint" style={{ margin: '20px 0' }}>
        <PxButton>Button</PxButton>
        <PxButtonGroup>
          <PxButton>Button1</PxButton>
          <PxButton>Button2</PxButton>
        </PxButtonGroup>
      </div>
      <style>{\`
        .paint .px-button {
          --px-button-text-color: #554562;
          --px-border-color: #554562;
          --px-bg-color: #fadbe0;
          --px-bg-shadow-color: #eaadbd;
        }
      \`}</style>
    </>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(z,2)),"@duheng1992/pixel-ui-react":P},renderOpts:{compile:function(){var T=B()(I()().mark(function o(){var c,t=arguments;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(977).then(e.bind(e,97977));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,t));case 3:case"end":return a.stop()}},o)}));function C(){return T.apply(this,arguments)}return C}()}},"docs-components-button-demo-8":{component:z.memo(z.lazy(B()(I()().mark(function T(){var C,o,c,t;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return C=a.sent,o=C.default,a.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return c=a.sent,t=c.PxButton,a.abrupt("return",{default:function(){var i=function(){console.log("btn click")};return o.createElement("p",null,o.createElement(t,{onClick:i}," with throttle"),o.createElement(t,{useThrottle:!1,onClick:i},"without throttle"))}});case 9:case"end":return a.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const handleBtnClick = () => {
    console.log('btn click');
  };

  return (
    <p>
      <PxButton onClick={handleBtnClick}> with throttle</PxButton>
      <PxButton useThrottle={false} onClick={handleBtnClick}>
        without throttle
      </PxButton>
    </p>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(z,2)),"@duheng1992/pixel-ui-react":P},renderOpts:{compile:function(){var T=B()(I()().mark(function o(){var c,t=arguments;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(977).then(e.bind(e,97977));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,t));case 3:case"end":return a.stop()}},o)}));function C(){return T.apply(this,arguments)}return C}()}},"docs-components-button-demo-9":{component:z.memo(z.lazy(B()(I()().mark(function T(){var C,o,c,t;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return C=a.sent,o=C.default,a.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return c=a.sent,t=c.PxButton,a.abrupt("return",{default:function(){return o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement(t,{chubby:!0},"Chubby"),o.createElement(t,{type:"primary",chubby:!0},"Primary"),o.createElement(t,{type:"success",chubby:!0},"Success")),o.createElement("p",null,o.createElement(t,{type:"warning",chubby:!0},"Warning"),o.createElement(t,{type:"danger",chubby:!0},"Danger"),o.createElement(t,{type:"sakura",chubby:!0},"Sakura")),o.createElement("p",null,o.createElement(t,{icon:"search",chubby:!0}),o.createElement(t,{type:"primary",icon:"edit-solid",chubby:!0}),o.createElement(t,{type:"success",icon:"check-solid",chubby:!0}),o.createElement(t,{type:"warning",icon:"star-solid",chubby:!0}),o.createElement(t,{type:"danger",icon:"trash-solid",chubby:!0}),o.createElement(t,{type:"sakura",icon:"tag-solid",chubby:!0})),o.createElement("hr",null),o.createElement("p",{className:"compare"},o.createElement(t,{round:!0},"Round"),o.createElement(t,{type:"primary",round:!0},"Primary"),o.createElement(t,{type:"success",round:!0},"Success")),o.createElement("p",{className:"compare"},o.createElement(t,{type:"warning",round:!0},"Warning"),o.createElement(t,{type:"danger",round:!0},"Danger"),o.createElement(t,{type:"sakura",round:!0},"Sakura")),o.createElement("p",{className:"compare"},o.createElement(t,{icon:"search",circle:!0}),o.createElement(t,{type:"primary",icon:"edit-solid",circle:!0}),o.createElement(t,{type:"success",icon:"check-solid",circle:!0}),o.createElement(t,{type:"warning",icon:"star-solid",circle:!0}),o.createElement(t,{type:"danger",icon:"trash-solid",circle:!0}),o.createElement(t,{type:"sakura",icon:"tag-solid",circle:!0})),o.createElement("style",null,`
        .compare .px-button {
          --px-button-size: 60px;
        }
      `))}});case 9:case"end":return a.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxButton chubby>Chubby</PxButton>
        <PxButton type="primary" chubby>Primary</PxButton>
        <PxButton type="success" chubby>Success</PxButton>
      </p>
      <p>
        <PxButton type="warning" chubby>Warning</PxButton>
        <PxButton type="danger" chubby>Danger</PxButton>
        <PxButton type="sakura" chubby>Sakura</PxButton>
      </p>
      <p>
        <PxButton icon="search" chubby />
        <PxButton type="primary" icon="edit-solid" chubby />
        <PxButton type="success" icon="check-solid" chubby />
        <PxButton type="warning" icon="star-solid" chubby />
        <PxButton type="danger" icon="trash-solid" chubby />
        <PxButton type="sakura" icon="tag-solid" chubby />
      </p>
      <hr />
      <p className="compare">
        <PxButton round>Round</PxButton>
        <PxButton type="primary" round>Primary</PxButton>
        <PxButton type="success" round>Success</PxButton>
      </p>
      <p className="compare">
        <PxButton type="warning" round>Warning</PxButton>
        <PxButton type="danger" round>Danger</PxButton>
        <PxButton type="sakura" round>Sakura</PxButton>
      </p>
      <p className="compare">
        <PxButton icon="search" circle />
        <PxButton type="primary" icon="edit-solid" circle />
        <PxButton type="success" icon="check-solid" circle />
        <PxButton type="warning" icon="star-solid" circle />
        <PxButton type="danger" icon="trash-solid" circle />
        <PxButton type="sakura" icon="tag-solid" circle />
      </p>
      <style>{\`
        .compare .px-button {
          --px-button-size: 60px;
        }
      \`}</style>
    </>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(z,2)),"@duheng1992/pixel-ui-react":P},renderOpts:{compile:function(){var T=B()(I()().mark(function o(){var c,t=arguments;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(977).then(e.bind(e,97977));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,t));case 3:case"end":return a.stop()}},o)}));function C(){return T.apply(this,arguments)}return C}()}}}},4646:function(oe,D,e){var m;e.r(D),e.d(D,{demos:function(){return C}});var ce=e(90819),I=e.n(ce),ge=e(45332),B=e.n(ge),z=e(89933),P=e.n(z),O=e(21077),T=e(85916),C={"docs-components-config-provider-demo-0":{component:O.memo(O.lazy(P()(I()().mark(function o(){var c,t,d,a,h,i,y;return I()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=_.sent,t=c.default,d=c.useState,_.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=_.sent,h=a.PxConfigProvider,i=a.PxButton,y=a.PxPopconfirm,_.abrupt("return",{default:function(){var V=d("en"),K=B()(V,2),Y=K[0],G=K[1],ne=["en","zh-CN","zh-TW","ja"],re=function(){var de=ne.indexOf(Y),pe=(de+1)%ne.length;G(ne[pe])};return t.createElement("div",{style:{display:"flex",alignItems:"center"}},t.createElement(i,{onClick:re,type:"success"},Y),t.createElement(h,{locale:Y},t.createElement(y,{title:"Are you sure to delete this item?"},t.createElement(i,null,"Delete"))))}});case 12:case"end":return _.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-config-provider-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useMemo } from 'react';
import { PxConfigProvider, PxButton, PxPopconfirm } from '@duheng1992/pixel-ui-react';

export default () => {
  const [language, setLanguage] = useState<'en' | 'zh-CN' | 'zh-TW' | 'ja'>('en');
  
  const languages: Array<'en' | 'zh-CN' | 'zh-TW' | 'ja'> = ['en', 'zh-CN', 'zh-TW', 'ja'];
  
  const changeLang = () => {
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <PxButton onClick={changeLang} type="success">
        {language}
      </PxButton>
      <PxConfigProvider locale={language}>
        <PxPopconfirm title="Are you sure to delete this item?">
          <PxButton>Delete</PxButton>
        </PxPopconfirm>
      </PxConfigProvider>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(I()().mark(function t(){var d,a=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}}}},49628:function(oe,D,e){var m;e.r(D),e.d(D,{demos:function(){return c}});var ce=e(73193),I=e.n(ce),ge=e(45332),B=e.n(ge),z=e(90819),P=e.n(z),O=e(89933),T=e.n(O),C=e(21077),o=e(85916),c={"docs-components-icon-demo-0":{component:C.memo(C.lazy(T()(P()().mark(function t(){var d,a,h,i;return P()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return d=f.sent,a=d.default,f.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return h=f.sent,i=h.PxIcon,f.abrupt("return",{default:function(){return a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement(i,{icon:"gaming",style:{marginRight:"10px"}}),a.createElement(i,{icon:"github",type:"primary",style:{marginRight:"10px"}}),a.createElement(i,{icon:"management",type:"success",style:{marginRight:"10px"}}),a.createElement(i,{icon:"plane",type:"warning",style:{marginRight:"10px"}}),a.createElement(i,{icon:"translate",type:"danger",style:{marginRight:"10px"}}),a.createElement(i,{icon:"tag-solid",type:"sakura",style:{marginRight:"10px"}})),a.createElement("p",null,a.createElement(i,{icon:"gaming",size:"35",style:{marginRight:"10px"}}),a.createElement(i,{icon:"github",type:"primary",size:"35",style:{marginRight:"10px"}}),a.createElement(i,{icon:"management",type:"success",size:"35",style:{marginRight:"10px"}}),a.createElement(i,{icon:"plane",type:"warning",size:"35",style:{marginRight:"10px"}}),a.createElement(i,{icon:"translate",type:"danger",size:"35",style:{marginRight:"10px"}}),a.createElement(i,{icon:"tag-solid",type:"sakura",size:"35",style:{marginRight:"10px"}})),a.createElement("p",null,a.createElement(i,{icon:"gaming",size:"20",color:"red",style:{marginRight:"10px"}}),a.createElement(i,{icon:"github",size:"20",color:"#ff4785",style:{marginRight:"10px"}}),a.createElement(i,{icon:"management",size:"20",color:"rgb(0,212,255)",style:{marginRight:"10px"}}),a.createElement(i,{icon:"plane",size:"20",color:"hsl(265, 100%, 50%)",style:{marginRight:"10px"}}),a.createElement(i,{icon:"translate",size:"20",color:"hwb(38 0% 0%)",style:{marginRight:"10px"}})))}});case 9:case"end":return f.stop()}},t)})))),asset:{type:"BLOCK",id:"docs-components-icon-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxIcon } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxIcon icon="gaming" style={{ marginRight: '10px' }} />
        <PxIcon icon="github" type="primary" style={{ marginRight: '10px' }} />
        <PxIcon icon="management" type="success" style={{ marginRight: '10px' }} />
        <PxIcon icon="plane" type="warning" style={{ marginRight: '10px' }} />
        <PxIcon icon="translate" type="danger" style={{ marginRight: '10px' }} />
        <PxIcon icon="tag-solid" type="sakura" style={{ marginRight: '10px' }} />
      </p>
      <p>
        <PxIcon icon="gaming" size="35" style={{ marginRight: '10px' }} />
        <PxIcon icon="github" type="primary" size="35" style={{ marginRight: '10px' }} />
        <PxIcon icon="management" type="success" size="35" style={{ marginRight: '10px' }} />
        <PxIcon icon="plane" type="warning" size="35" style={{ marginRight: '10px' }} />
        <PxIcon icon="translate" type="danger" size="35" style={{ marginRight: '10px' }} />
        <PxIcon icon="tag-solid" type="sakura" size="35" style={{ marginRight: '10px' }} />
      </p>
      <p>
        <PxIcon icon="gaming" size="20" color="red" style={{ marginRight: '10px' }} />
        <PxIcon icon="github" size="20" color="#ff4785" style={{ marginRight: '10px' }} />
        <PxIcon icon="management" size="20" color="rgb(0,212,255)" style={{ marginRight: '10px' }} />
        <PxIcon icon="plane" size="20" color="hsl(265, 100%, 50%)" style={{ marginRight: '10px' }} />
        <PxIcon icon="translate" size="20" color="hwb(38 0% 0%)" style={{ marginRight: '10px' }} />
      </p>
    </>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(C,2)),"@duheng1992/pixel-ui-react":o},renderOpts:{compile:function(){var t=T()(P()().mark(function a(){var h,i=arguments;return P()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(977).then(e.bind(e,97977));case 2:return f.abrupt("return",(h=f.sent).default.apply(h,i));case 3:case"end":return f.stop()}},a)}));function d(){return t.apply(this,arguments)}return d}()}},"docs-components-icon-demo-1":{component:C.memo(C.lazy(T()(P()().mark(function t(){var d,a,h,i;return P()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return d=f.sent,a=d.default,f.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return h=f.sent,i=h.PxIcon,f.abrupt("return",{default:function(){return a.createElement("div",null,a.createElement(i,{icon:"face-thinking",flip:"horizontal",color:"orange",size:"35",style:{marginRight:"10px"}}),a.createElement(i,{icon:"face-thinking",flip:"vertical",color:"orange",size:"35",style:{marginRight:"10px"}}),a.createElement(i,{icon:"face-thinking",flip:"both",color:"orange",size:"35",style:{marginRight:"10px"}}),a.createElement(i,{icon:"face-thinking",rotation:"270",color:"orange",size:"35",style:{marginRight:"10px"}}))}});case 9:case"end":return f.stop()}},t)})))),asset:{type:"BLOCK",id:"docs-components-icon-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxIcon } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxIcon
        icon="face-thinking"
        flip="horizontal"
        color="orange"
        size="35"
        style={{ marginRight: '10px' }}
      />
      <PxIcon
        icon="face-thinking"
        flip="vertical"
        color="orange"
        size="35"
        style={{ marginRight: '10px' }}
      />
      <PxIcon
        icon="face-thinking"
        flip="both"
        color="orange"
        size="35"
        style={{ marginRight: '10px' }}
      />
      <PxIcon
        icon="face-thinking"
        rotation="270"
        color="orange"
        size="35"
        style={{ marginRight: '10px' }}
      />
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(C,2)),"@duheng1992/pixel-ui-react":o},renderOpts:{compile:function(){var t=T()(P()().mark(function a(){var h,i=arguments;return P()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(977).then(e.bind(e,97977));case 2:return f.abrupt("return",(h=f.sent).default.apply(h,i));case 3:case"end":return f.stop()}},a)}));function d(){return t.apply(this,arguments)}return d}()}},"docs-components-icon-demo-2":{component:C.memo(C.lazy(T()(P()().mark(function t(){var d,a,h,i;return P()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return d=f.sent,a=d.default,f.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return h=f.sent,i=h.PxIcon,f.abrupt("return",{default:function(){return a.createElement("div",null,a.createElement(i,{icon:"startups",spin:!0,color:"green",size:"35",style:{marginRight:"10px"}}),a.createElement(i,{icon:"startups",bounce:!0,color:"green",size:"35",style:{marginRight:"10px"}}),a.createElement(i,{icon:"startups",shake:!0,color:"green",size:"35",style:{marginRight:"10px"}}),a.createElement(i,{icon:"startups",beat:!0,color:"green",size:"35",style:{marginRight:"10px"}}))}});case 9:case"end":return f.stop()}},t)})))),asset:{type:"BLOCK",id:"docs-components-icon-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxIcon } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxIcon icon="startups" spin color="green" size="35" style={{ marginRight: '10px' }} />
      <PxIcon icon="startups" bounce color="green" size="35" style={{ marginRight: '10px' }} />
      <PxIcon icon="startups" shake color="green" size="35" style={{ marginRight: '10px' }} />
      <PxIcon icon="startups" beat color="green" size="35" style={{ marginRight: '10px' }} />
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(C,2)),"@duheng1992/pixel-ui-react":o},renderOpts:{compile:function(){var t=T()(P()().mark(function a(){var h,i=arguments;return P()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(977).then(e.bind(e,97977));case 2:return f.abrupt("return",(h=f.sent).default.apply(h,i));case 3:case"end":return f.stop()}},a)}));function d(){return t.apply(this,arguments)}return d}()}},"docs-components-icon-demo-3":{component:C.memo(C.lazy(T()(P()().mark(function t(){var d,a,h,i,y,f;return P()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return d=U.sent,a=d.default,U.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return h=U.sent,i=h.PxInput,y=h.PxIcon,f={categories:[{name:"Brands",items:["android","angellist","apple","behance","bloomberg","bluesky","crunchbase","digg","discord","discourse","facebook-round","facebook-square","figma","giphy","github","golden","google-news","google","hackernoon","huggingface","imgur","instagram","ios","kaggle","linkedin","mastodon","minds","newsbreak","npm","pinterest","podcasts","product-hunt","reddit","rss","steam","threads","tiktok","twitch","twitter","unsplash","viewblocks","wikipedia","x","youtube"]},{name:"Purcats",items:["business","cloud","cybersecurity","data-science","finance","futurism","gaming","hackernoon-purcat","life-hacking","machine-learning","management","media","product-management","programming","remote","science","society","startups","tech-companies","tech-stories","technology","web3","writing"]},{name:"Regular",items:["ad","analytics","angle-down","angle-left","angle-right","angle-up","arrow-alt-circle-down","arrow-alt-circle-left","arrow-alt-circle-right","arrow-alt-circle-up","arrow-circle-down","arrow-circle-left","arrow-circle-right","arrow-circle-up","arrow-down","arrow-left","arrow-right","arrow-up","at","badge-check","bank","bars","bell-exclaimation","bell-mute","bell","bold","bolt","book-heart","bookmark","box-usd","brightness-high","brightness-low","bullet-list","bullhorn","calender","cc","chart-line","chart-network","check-box","check-circle","check-list","check","chevron-down","chevron-up","circle-notch","clipboard","clock","cloud-download-alt","cloud-upload","code","cog","comment-dots","comment-quote","comment","comments","copy","credit-card","crown","divider","download-alt","download","edit","ellipses-horizontal-circle","ellipses-horizontal","ellipses-vertical-circle","ellipses-vertical","envelope","exclaimation","exclamation-triangle","expand","external-link","eye-cross","eye","face-thinking","file-import","filter-alt-circle","filter","fire","flag-checkered","flag","folder-open","folder","globe-americas","globe","grid","h1","h2","h3","headphones","heart","highlight","hockey-mask","home","image","info-circle","italics","lightbulb","link","location-pin","lock-alt","lock-open","lock","login","logout","message-dots","message","minus","moon","music","newspaper","numbered-list","octagon-check","octagon-times","page-break","paperclip","paragraph","pause","pen-nib","pen","pencil-ruler","pencil","people-carry","phone-ringing-high","phone-ringing-low","plane-departure","plane","play","playlist","plus","print","pro","question","quote-left","quote-right","receipt","refresh","retro-camera","robot","save","search","seedlings","share","shop","shopping-cart","shuffle","sort","sound-mute","sound-on","spinner-third","spinner","star-crescent","star","strike-through","sun","table","tag","themes","thumbsdown","thumbsup","thumbtack","times-circle","times","translate","trash-alt","trash","trending","trophy","underline","unlock-alt","unlock","upload-alt","upload","user-check","user-headset","user","users-crown","users","vote-yeah","wallet","window-close"]},{name:"Solid",items:["ad-solid","analytics-solid","angle-down-solid","angle-left-solid","angle-right-solid","angle-up-solid","arrow-alt-circle-down-solid","arrow-alt-circle-left-solid","arrow-alt-circle-right-solid","arrow-alt-circle-up-solid","arrow-circle-down-solid","arrow-circle-left-solid","arrow-circle-right-solid","arrow-circle-up-solid","arrow-down-solid","arrow-left-solid","arrow-right-solid","arrow-up-solid","at-solid","badge-check-solid","bank-solid","bars-solid","bell-exclaimation-solid","bell-mute-solid","bell-solid","bold-solid","bolt-solid","book-heart-solid","bookmark-solid","box-usd-solid","brightness-high-solid","brightness-low-solid","bullet-list-solid","bullhorn-solid","calender-solid","cc-solid","chart-line-solid","chart-network-solid","check-box-solid","check-circle-solid","check-list-solid","check-solid","chevron-down-solid","chevron-up-solid","circle-notch-solid","clipboard-solid","clock-solid","cloud-download-solid","cloud-upload-solid","code-solid","cog-solid","comment-dots-solid","comment-quote-solid","comment-solid","comments-solid","copy-solid","credit-card-solid","crown-solid","divider-solid","download-alt-solid","download-solid","edit-solid","ellipses-horizontal-circle-solid","ellipses-horizontal-solid","ellipses-vertical-circle-solid","ellipses-vertical-solid","envelope-solid","exclaimation-solid","exclamation-triangle-solid","expand-solid","external-link-solid","eye-cross-solid","eye-solid","face-thinking-solid","file-import-solid","filter-alt-circle-solid","filter-solid","fire-solid","flag-checkered-solid","flag-solid","folder-open-solid","folder-solid","globe-americas-solid","globe-solid","grid-solid","heading-1-solid","heading-2-solid","heading-3-solid","headphones-solid","heart-solid","highlight-solid","hockey-mask-solid","home-solid","image-solid","info-circle-solid","italics-solid","lightbulb-solid","link-solid","location-pin-solid","lock-alt-solid","lock-open-solid","lock-solid","login-solid","logout-solid","message-dots-solid","message-solid","minus-solid","moon-solid","music-solid","newspaper-solid","numbered-list-solid","octagon-check-solid","octagon-times-solid","page-break-solid","paperclip-solid","paragraph-solid","pause-solid","pen-nib-solid","pen-solid","pencil-ruler-solid","pencil-solid","people-carry-solid","phone-ringing-high-solid","phone-ringing-low-solid","plane-departure-solid","plane-solid","play-solid","playlist-solid","plus-solid","print-solid","pro-solid","question-solid","quote-left-solid","quote-right-solid","receipt-solid","refresh-solid","retro-camera-solid","robot-solid","save-solid","search-solid","seedlings-solid","share-solid","shop-solid","shopping-cart-solid","shuffle-solid","sort-solid","sound-mute-solid","sound-on-solid","spinner-solid","spinner-third-solid","star-crescent-solid","star-solid","strike-through-solid","sun-solid","table-solid","tag-solid","themes-solid","thumbsdown-solid","thumbsup-solid","thumbtack-solid","times-circle-solid","times-solid","translate-solid","trash-alt-solid","trash-solid","trending-solid","trophy-solid","underline-solid","unlock-alt-solid","unlock-solid","upload-alt-solid","upload-solid","user-check-solid","user-headset-solid","user-solid","users-crown-solid","users-solid","vote-yeah-solid","wallet-solid","window-close-solid"]}]},U.abrupt("return",{default:function(){var K=a.useState(""),Y=B()(K,2),G=Y[0],ne=Y[1],re=a.useMemo(function(){return f.categories.map(function(de){var pe=de.items.filter(function(me){return me.toLowerCase().includes(G.toLowerCase())});return I()(I()({},de),{},{items:pe})}).filter(function(de){return de.items.length>0})},[G]),Pe=function(){var de=T()(P()().mark(function pe(me){return P()().wrap(function(be){for(;;)switch(be.prev=be.next){case 0:return be.prev=0,be.next=3,navigator.clipboard.writeText(me);case 3:console.log("\u5DF2\u590D\u5236\uFF1A".concat(me)),be.next=9;break;case 6:be.prev=6,be.t0=be.catch(0),console.error("\u590D\u5236\u5931\u8D25",be.t0);case 9:case"end":return be.stop()}},pe,null,[[0,6]])}));return function(me){return de.apply(this,arguments)}}();return a.createElement("div",null,a.createElement(i,{value:G,onChange:function(pe){return ne(pe)},placeholder:"\u641C\u7D22\u56FE\u6807\u540D\u79F0",style:{width:"100%",padding:"8px",fontSize:"16px",marginBottom:"16px"},prefix:a.createElement(y,{icon:"search"})}),re.map(function(de){return a.createElement("div",{key:de.name,style:{marginTop:"24px"}},a.createElement("h3",{style:{background:"linear-gradient(10deg, #bd34fe 5%, #e43498 15%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"20px"}},de.name),a.createElement("ul",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:"12px",margin:0,padding:0,listStyle:"none"}},de.items.map(function(pe){return a.createElement("li",{key:pe,onClick:function(){return Pe(pe)},className:"icon-item",style:{height:"80px",display:"flex",flexDirection:"column",padding:"10px",textAlign:"center",cursor:"pointer",transition:"all 0.3s"},onMouseEnter:function(Me){Me.currentTarget.style.backgroundColor="#ecf5ff"},onMouseLeave:function(Me){Me.currentTarget.style.backgroundColor="transparent"}},a.createElement(y,{size:32,icon:pe,color:"var(--px-text-color-sakura)"}),a.createElement("div",{style:{fontSize:"12px",marginTop:"6px",flex:1,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",wordBreak:"break-word"}},pe))})))}),a.createElement("style",null,`
        .icon-item {
          background-image: paint(pixelbox);
          --px-border: 3px;
          --px-border-t: 3px;
          --px-border-r: 3px;
          --px-border-b: 3px;
          --px-border-l: 3px;
          --px-border-radius: 2px;
          --px-border-radius-lt: 2px;
          --px-border-radius-rt: 2px;
          --px-border-radius-lb: 2px;
          --px-border-radius-rb: 2px;
          --px-bg-color: transparent;
          --px-border-color: var(--px-text-color-sakura);
          --px-bg-shadow-border: 0;
          --px-bg-shadow-color: transparent;
        }
        .icon-item:hover .px-icon {
          color: var(--px-color-primary) !important;
        }
      `))}});case 11:case"end":return U.stop()}},t)})))),asset:{type:"BLOCK",id:"docs-components-icon-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxInput, PxIcon } from '@duheng1992/pixel-ui-react';

const IconList = {
  "categories": [
    {
      "name": "Brands",
      "items": [
        "android",
        "angellist",
        "apple",
        "behance",
        "bloomberg",
        "bluesky",
        "crunchbase",
        "digg",
        "discord",
        "discourse",
        "facebook-round",
        "facebook-square",
        "figma",
        "giphy",
        "github",
        "golden",
        "google-news",
        "google",
        "hackernoon",
        "huggingface",
        "imgur",
        "instagram",
        "ios",
        "kaggle",
        "linkedin",
        "mastodon",
        "minds",
        "newsbreak",
        "npm",
        "pinterest",
        "podcasts",
        "product-hunt",
        "reddit",
        "rss",
        "steam",
        "threads",
        "tiktok",
        "twitch",
        "twitter",
        "unsplash",
        "viewblocks",
        "wikipedia",
        "x",
        "youtube"
      ]
    },
    {
      "name": "Purcats",
      "items": [
        "business",
        "cloud",
        "cybersecurity",
        "data-science",
        "finance",
        "futurism",
        "gaming",
        "hackernoon-purcat",
        "life-hacking",
        "machine-learning",
        "management",
        "media",
        "product-management",
        "programming",
        "remote",
        "science",
        "society",
        "startups",
        "tech-companies",
        "tech-stories",
        "technology",
        "web3",
        "writing"
      ]
    },
    {
      "name": "Regular",
      "items": [
        "ad",
        "analytics",
        "angle-down",
        "angle-left",
        "angle-right",
        "angle-up",
        "arrow-alt-circle-down",
        "arrow-alt-circle-left",
        "arrow-alt-circle-right",
        "arrow-alt-circle-up",
        "arrow-circle-down",
        "arrow-circle-left",
        "arrow-circle-right",
        "arrow-circle-up",
        "arrow-down",
        "arrow-left",
        "arrow-right",
        "arrow-up",
        "at",
        "badge-check",
        "bank",
        "bars",
        "bell-exclaimation",
        "bell-mute",
        "bell",
        "bold",
        "bolt",
        "book-heart",
        "bookmark",
        "box-usd",
        "brightness-high",
        "brightness-low",
        "bullet-list",
        "bullhorn",
        "calender",
        "cc",
        "chart-line",
        "chart-network",
        "check-box",
        "check-circle",
        "check-list",
        "check",
        "chevron-down",
        "chevron-up",
        "circle-notch",
        "clipboard",
        "clock",
        "cloud-download-alt",
        "cloud-upload",
        "code",
        "cog",
        "comment-dots",
        "comment-quote",
        "comment",
        "comments",
        "copy",
        "credit-card",
        "crown",
        "divider",
        "download-alt",
        "download",
        "edit",
        "ellipses-horizontal-circle",
        "ellipses-horizontal",
        "ellipses-vertical-circle",
        "ellipses-vertical",
        "envelope",
        "exclaimation",
        "exclamation-triangle",
        "expand",
        "external-link",
        "eye-cross",
        "eye",
        "face-thinking",
        "file-import",
        "filter-alt-circle",
        "filter",
        "fire",
        "flag-checkered",
        "flag",
        "folder-open",
        "folder",
        "globe-americas",
        "globe",
        "grid",
        "h1",
        "h2",
        "h3",
        "headphones",
        "heart",
        "highlight",
        "hockey-mask",
        "home",
        "image",
        "info-circle",
        "italics",
        "lightbulb",
        "link",
        "location-pin",
        "lock-alt",
        "lock-open",
        "lock",
        "login",
        "logout",
        "message-dots",
        "message",
        "minus",
        "moon",
        "music",
        "newspaper",
        "numbered-list",
        "octagon-check",
        "octagon-times",
        "page-break",
        "paperclip",
        "paragraph",
        "pause",
        "pen-nib",
        "pen",
        "pencil-ruler",
        "pencil",
        "people-carry",
        "phone-ringing-high",
        "phone-ringing-low",
        "plane-departure",
        "plane",
        "play",
        "playlist",
        "plus",
        "print",
        "pro",
        "question",
        "quote-left",
        "quote-right",
        "receipt",
        "refresh",
        "retro-camera",
        "robot",
        "save",
        "search",
        "seedlings",
        "share",
        "shop",
        "shopping-cart",
        "shuffle",
        "sort",
        "sound-mute",
        "sound-on",
        "spinner-third",
        "spinner",
        "star-crescent",
        "star",
        "strike-through",
        "sun",
        "table",
        "tag",
        "themes",
        "thumbsdown",
        "thumbsup",
        "thumbtack",
        "times-circle",
        "times",
        "translate",
        "trash-alt",
        "trash",
        "trending",
        "trophy",
        "underline",
        "unlock-alt",
        "unlock",
        "upload-alt",
        "upload",
        "user-check",
        "user-headset",
        "user",
        "users-crown",
        "users",
        "vote-yeah",
        "wallet",
        "window-close"
      ]
    },
    {
      "name": "Solid",
      "items": [
        "ad-solid",
        "analytics-solid",
        "angle-down-solid",
        "angle-left-solid",
        "angle-right-solid",
        "angle-up-solid",
        "arrow-alt-circle-down-solid",
        "arrow-alt-circle-left-solid",
        "arrow-alt-circle-right-solid",
        "arrow-alt-circle-up-solid",
        "arrow-circle-down-solid",
        "arrow-circle-left-solid",
        "arrow-circle-right-solid",
        "arrow-circle-up-solid",
        "arrow-down-solid",
        "arrow-left-solid",
        "arrow-right-solid",
        "arrow-up-solid",
        "at-solid",
        "badge-check-solid",
        "bank-solid",
        "bars-solid",
        "bell-exclaimation-solid",
        "bell-mute-solid",
        "bell-solid",
        "bold-solid",
        "bolt-solid",
        "book-heart-solid",
        "bookmark-solid",
        "box-usd-solid",
        "brightness-high-solid",
        "brightness-low-solid",
        "bullet-list-solid",
        "bullhorn-solid",
        "calender-solid",
        "cc-solid",
        "chart-line-solid",
        "chart-network-solid",
        "check-box-solid",
        "check-circle-solid",
        "check-list-solid",
        "check-solid",
        "chevron-down-solid",
        "chevron-up-solid",
        "circle-notch-solid",
        "clipboard-solid",
        "clock-solid",
        "cloud-download-solid",
        "cloud-upload-solid",
        "code-solid",
        "cog-solid",
        "comment-dots-solid",
        "comment-quote-solid",
        "comment-solid",
        "comments-solid",
        "copy-solid",
        "credit-card-solid",
        "crown-solid",
        "divider-solid",
        "download-alt-solid",
        "download-solid",
        "edit-solid",
        "ellipses-horizontal-circle-solid",
        "ellipses-horizontal-solid",
        "ellipses-vertical-circle-solid",
        "ellipses-vertical-solid",
        "envelope-solid",
        "exclaimation-solid",
        "exclamation-triangle-solid",
        "expand-solid",
        "external-link-solid",
        "eye-cross-solid",
        "eye-solid",
        "face-thinking-solid",
        "file-import-solid",
        "filter-alt-circle-solid",
        "filter-solid",
        "fire-solid",
        "flag-checkered-solid",
        "flag-solid",
        "folder-open-solid",
        "folder-solid",
        "globe-americas-solid",
        "globe-solid",
        "grid-solid",
        "heading-1-solid",
        "heading-2-solid",
        "heading-3-solid",
        "headphones-solid",
        "heart-solid",
        "highlight-solid",
        "hockey-mask-solid",
        "home-solid",
        "image-solid",
        "info-circle-solid",
        "italics-solid",
        "lightbulb-solid",
        "link-solid",
        "location-pin-solid",
        "lock-alt-solid",
        "lock-open-solid",
        "lock-solid",
        "login-solid",
        "logout-solid",
        "message-dots-solid",
        "message-solid",
        "minus-solid",
        "moon-solid",
        "music-solid",
        "newspaper-solid",
        "numbered-list-solid",
        "octagon-check-solid",
        "octagon-times-solid",
        "page-break-solid",
        "paperclip-solid",
        "paragraph-solid",
        "pause-solid",
        "pen-nib-solid",
        "pen-solid",
        "pencil-ruler-solid",
        "pencil-solid",
        "people-carry-solid",
        "phone-ringing-high-solid",
        "phone-ringing-low-solid",
        "plane-departure-solid",
        "plane-solid",
        "play-solid",
        "playlist-solid",
        "plus-solid",
        "print-solid",
        "pro-solid",
        "question-solid",
        "quote-left-solid",
        "quote-right-solid",
        "receipt-solid",
        "refresh-solid",
        "retro-camera-solid",
        "robot-solid",
        "save-solid",
        "search-solid",
        "seedlings-solid",
        "share-solid",
        "shop-solid",
        "shopping-cart-solid",
        "shuffle-solid",
        "sort-solid",
        "sound-mute-solid",
        "sound-on-solid",
        "spinner-solid",
        "spinner-third-solid",
        "star-crescent-solid",
        "star-solid",
        "strike-through-solid",
        "sun-solid",
        "table-solid",
        "tag-solid",
        "themes-solid",
        "thumbsdown-solid",
        "thumbsup-solid",
        "thumbtack-solid",
        "times-circle-solid",
        "times-solid",
        "translate-solid",
        "trash-alt-solid",
        "trash-solid",
        "trending-solid",
        "trophy-solid",
        "underline-solid",
        "unlock-alt-solid",
        "unlock-solid",
        "upload-alt-solid",
        "upload-solid",
        "user-check-solid",
        "user-headset-solid",
        "user-solid",
        "users-crown-solid",
        "users-solid",
        "vote-yeah-solid",
        "wallet-solid",
        "window-close-solid"
      ]
    }
  ]
};

export default () => {
  const [query, setQuery] = React.useState('');
  
  const filteredCategories = React.useMemo(() => {
    return IconList.categories
      .map((category) => {
        const items = category.items.filter((icon) =>
          icon.toLowerCase().includes(query.toLowerCase())
        );
        return { ...category, items };
      })
      .filter((category) => category.items.length > 0);
  }, [query]);

  const handleCopy = async (iconName: string) => {
    try {
      await navigator.clipboard.writeText(iconName);
      // \u53EF\u4EE5\u5728\u8FD9\u91CC\u6DFB\u52A0\u6210\u529F\u63D0\u793A
      console.log(\`\u5DF2\u590D\u5236\uFF1A\${iconName}\`);
    } catch (err) {
      console.error('\u590D\u5236\u5931\u8D25', err);
    }
  };

  return (
    <div>
      <PxInput
        value={query}
        onChange={(value) => setQuery(value)}
        placeholder="\u641C\u7D22\u56FE\u6807\u540D\u79F0"
        style={{ width: '100%', padding: '8px', fontSize: '16px', marginBottom: '16px' }}
        prefix={<PxIcon icon="search" />}
      />

      {filteredCategories.map((category) => (
        <div key={category.name} style={{ marginTop: '24px' }}>
          <h3
            style={{
              background: 'linear-gradient(10deg, #bd34fe 5%, #e43498 15%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '20px',
            }}
          >
            {category.name}
          </h3>
          <ul
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
              gap: '12px',
              margin: 0,
              padding: 0,
              listStyle: 'none',
            }}
          >
            {category.items.map((icon) => (
              <li
                key={icon}
                onClick={() => handleCopy(icon)}
                className="icon-item"
                style={{
                  height: '80px',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '10px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ecf5ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <PxIcon
                  size={32}
                  icon={icon}
                  color="var(--px-text-color-sakura)"
                />
                <div
                  style={{
                    fontSize: '12px',
                    marginTop: '6px',
                    flex: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    wordBreak: 'break-word',
                  }}
                >
                  {icon}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <style>{\`
        .icon-item {
          background-image: paint(pixelbox);
          --px-border: 3px;
          --px-border-t: 3px;
          --px-border-r: 3px;
          --px-border-b: 3px;
          --px-border-l: 3px;
          --px-border-radius: 2px;
          --px-border-radius-lt: 2px;
          --px-border-radius-rt: 2px;
          --px-border-radius-lb: 2px;
          --px-border-radius-rb: 2px;
          --px-bg-color: transparent;
          --px-border-color: var(--px-text-color-sakura);
          --px-bg-shadow-border: 0;
          --px-bg-shadow-color: transparent;
        }
        .icon-item:hover .px-icon {
          color: var(--px-color-primary) !important;
        }
      \`}</style>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(C,2)),"@duheng1992/pixel-ui-react":o},renderOpts:{compile:function(){var t=T()(P()().mark(function a(){var h,i=arguments;return P()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(977).then(e.bind(e,97977));case 2:return f.abrupt("return",(h=f.sent).default.apply(h,i));case 3:case"end":return f.stop()}},a)}));function d(){return t.apply(this,arguments)}return d}()}}}},3970:function(oe,D,e){var m;e.r(D),e.d(D,{demos:function(){return C}});var ce=e(90819),I=e.n(ce),ge=e(45332),B=e.n(ge),z=e(89933),P=e.n(z),O=e(21077),T=e(85916),C={"docs-components-input-demo-0":{component:O.memo(O.lazy(P()(I()().mark(function o(){var c,t,d,a,h;return I()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=y.sent,t=c.default,d=c.useState,y.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=y.sent,h=a.PxInput,y.abrupt("return",{default:function(){var _=d(""),U=B()(_,2),V=U[0],K=U[1];return t.createElement(h,{value:V,onChange:K,style:{width:"240px"},placeholder:"Please input"})}});case 10:case"end":return y.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-input-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxInput } from '@duheng1992/pixel-ui-react';

export default () => {
  const [input, setInput] = useState('');

  return (
    <PxInput
      value={input}
      onChange={setInput}
      style={{ width: '240px' }}
      placeholder="Please input"
    />
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(I()().mark(function t(){var d,a=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-input-demo-1":{component:O.memo(O.lazy(P()(I()().mark(function o(){var c,t,d,a,h;return I()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=y.sent,t=c.default,d=c.useState,y.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=y.sent,h=a.PxInput,y.abrupt("return",{default:function(){var _=d(""),U=B()(_,2),V=U[0],K=U[1];return t.createElement(h,{value:V,onChange:K,style:{width:"240px"},disabled:!0,placeholder:"Please input"})}});case 10:case"end":return y.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-input-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxInput } from '@duheng1992/pixel-ui-react';

export default () => {
  const [input, setInput] = useState('');

  return (
    <PxInput
      value={input}
      onChange={setInput}
      style={{ width: '240px' }}
      disabled
      placeholder="Please input"
    />
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(I()().mark(function t(){var d,a=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-input-demo-2":{component:O.memo(O.lazy(P()(I()().mark(function o(){var c,t,d,a,h;return I()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=y.sent,t=c.default,d=c.useState,y.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=y.sent,h=a.PxInput,y.abrupt("return",{default:function(){var _=d(""),U=B()(_,2),V=U[0],K=U[1];return t.createElement(h,{value:V,onChange:K,style:{width:"240px"},placeholder:"Please input",clearable:!0})}});case 10:case"end":return y.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-input-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxInput } from '@duheng1992/pixel-ui-react';

export default () => {
  const [input, setInput] = useState('');

  return (
    <PxInput
      value={input}
      onChange={setInput}
      style={{ width: '240px' }}
      placeholder="Please input"
      clearable
    />
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(I()().mark(function t(){var d,a=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-input-demo-3":{component:O.memo(O.lazy(P()(I()().mark(function o(){var c,t,d,a,h;return I()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=y.sent,t=c.default,d=c.useState,y.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=y.sent,h=a.PxInput,y.abrupt("return",{default:function(){var _=d(""),U=B()(_,2),V=U[0],K=U[1];return t.createElement(h,{value:V,onChange:K,type:"password",placeholder:"Please input password",showPassword:!0})}});case 10:case"end":return y.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-input-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxInput } from '@duheng1992/pixel-ui-react';

export default () => {
  const [input, setInput] = useState('');

  return (
    <PxInput
      value={input}
      onChange={setInput}
      type="password"
      placeholder="Please input password"
      showPassword
    />
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(I()().mark(function t(){var d,a=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-input-demo-4":{component:O.memo(O.lazy(P()(I()().mark(function o(){var c,t,d,a,h,i,y;return I()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=_.sent,t=c.default,d=c.useState,_.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=_.sent,h=a.PxInput,i=a.PxIcon,y=a.PxText,_.abrupt("return",{default:function(){var V=d(""),K=B()(V,2),Y=K[0],G=K[1],ne=d(""),re=B()(ne,2),Pe=re[0],de=re[1];return t.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},t.createElement(y,{size:12},"Using Props"),t.createElement(h,{value:Y,onChange:G,style:{width:"240px"},placeholder:"Pick a date",suffix:t.createElement(i,{icon:"calender-solid"})}),t.createElement(h,{value:Pe,onChange:de,style:{width:"240px"},placeholder:"Type something",prefix:t.createElement(i,{icon:"search"})}))}});case 12:case"end":return _.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-input-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxInput, PxIcon, PxText } from '@duheng1992/pixel-ui-react';

export default () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <PxText size={12}>Using Props</PxText>
      <PxInput
        value={input1}
        onChange={setInput1}
        style={{ width: '240px' }}
        placeholder="Pick a date"
        suffix={<PxIcon icon="calender-solid" />}
      />
      <PxInput
        value={input2}
        onChange={setInput2}
        style={{ width: '240px' }}
        placeholder="Type something"
        prefix={<PxIcon icon="search" />}
      />
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(I()().mark(function t(){var d,a=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-input-demo-5":{component:O.memo(O.lazy(P()(I()().mark(function o(){var c,t,d,a,h;return I()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=y.sent,t=c.default,d=c.useState,y.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=y.sent,h=a.PxInput,y.abrupt("return",{default:function(){var _=d(""),U=B()(_,2),V=U[0],K=U[1];return t.createElement(h,{value:V,onChange:K,style:{width:"240px"},rows:2,type:"textarea",placeholder:"Please input"})}});case 10:case"end":return y.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-input-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxInput } from '@duheng1992/pixel-ui-react';

export default () => {
  const [textarea, setTextarea] = useState('');

  return (
    <PxInput
      value={textarea}
      onChange={setTextarea}
      style={{ width: '240px' }}
      rows={2}
      type="textarea"
      placeholder="Please input"
    />
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(I()().mark(function t(){var d,a=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-input-demo-6":{component:O.memo(O.lazy(P()(I()().mark(function o(){var c,t,d,a,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=f.sent,t=c.default,d=c.useState,f.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=f.sent,h=a.PxInput,i=a.PxButton,f.abrupt("return",{default:function(){var U=d(""),V=B()(U,2),K=V[0],Y=V[1],G=d(""),ne=B()(G,2),re=ne[0],Pe=ne[1];return t.createElement("div",null,t.createElement("div",null,t.createElement(h,{value:K,onChange:Y,style:{maxWidth:"600px"},placeholder:"Please input",prepend:"Http://"})),t.createElement("div",{style:{marginTop:"16px"}},t.createElement(h,{value:re,onChange:Pe,style:{maxWidth:"600px"},placeholder:"Please input",append:".com"})),t.createElement("div",{style:{marginTop:"16px"}},t.createElement(h,{value:K,onChange:Y,style:{maxWidth:"600px"},placeholder:"Please input",append:t.createElement(i,{icon:"search"})}),t.createElement("style",null,`
          .px-input__append {
            margin: 0;
            padding: 0;
          }
        `)),t.createElement("div",{style:{marginTop:"16px"}},t.createElement(h,{value:K,onChange:Y,style:{maxWidth:"600px"},placeholder:"Please input",prepend:t.createElement(i,{icon:"search"})}),t.createElement("style",null,`
          .px-input__prepend {
            margin: 0;
            padding: 0;
          }
        `)))}});case 11:case"end":return f.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-input-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxInput, PxButton, PxIcon } from '@duheng1992/pixel-ui-react';

export default () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  return (
    <div>
      <div>
        <PxInput
          value={input1}
          onChange={setInput1}
          style={{ maxWidth: '600px' }}
          placeholder="Please input"
          prepend="Http://"
        />
      </div>
      <div style={{ marginTop: '16px' }}>
        <PxInput
          value={input2}
          onChange={setInput2}
          style={{ maxWidth: '600px' }}
          placeholder="Please input"
          append=".com"
        />
      </div>
      <div style={{ marginTop: '16px' }}>
        <PxInput
          value={input1}
          onChange={setInput1}
          style={{ maxWidth: '600px' }}
          placeholder="Please input"
          append={<PxButton icon="search" />}
        />
        <style>{\`
          .px-input__append {
            margin: 0;
            padding: 0;
          }
        \`}</style>
      </div>
      <div style={{ marginTop: '16px' }}>
        <PxInput
          value={input1}
          onChange={setInput1}
          style={{ maxWidth: '600px' }}
          placeholder="Please input"
          prepend={<PxButton icon="search" />}
        />
        <style>{\`
          .px-input__prepend {
            margin: 0;
            padding: 0;
          }
        \`}</style>
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(I()().mark(function t(){var d,a=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-input-demo-7":{component:O.memo(O.lazy(P()(I()().mark(function o(){var c,t,d,a,h;return I()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=y.sent,t=c.default,d=c.useState,y.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=y.sent,h=a.PxInput,y.abrupt("return",{default:function(){var _=d(""),U=B()(_,2),V=U[0],K=U[1],Y=d(""),G=B()(Y,2),ne=G[0],re=G[1],Pe=d(""),de=B()(Pe,2),pe=de[0],me=de[1];return t.createElement(t.Fragment,null,t.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"}},t.createElement(h,{value:V,onChange:K,style:{width:"240px"},size:"large",placeholder:"Please Input"}),t.createElement(h,{value:ne,onChange:re,style:{width:"240px"},placeholder:"Please Input"}),t.createElement(h,{value:pe,onChange:me,style:{width:"240px"},size:"small",placeholder:"Please Input"})),t.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"}},t.createElement(h,{value:V,onChange:K,style:{width:"240px"},size:"large",placeholder:"Please Input"}),t.createElement(h,{value:ne,onChange:re,style:{width:"240px"},placeholder:"Please Input"}),t.createElement(h,{value:pe,onChange:me,style:{width:"240px"},size:"small",placeholder:"Please Input"})),t.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px"}},t.createElement(h,{value:V,onChange:K,style:{width:"240px"},size:"large",placeholder:"Please Input"}),t.createElement(h,{value:ne,onChange:re,style:{width:"240px"},placeholder:"Please Input"}),t.createElement(h,{value:pe,onChange:me,style:{width:"240px"},size:"small",placeholder:"Please Input"})))}});case 10:case"end":return y.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-input-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxInput } from '@duheng1992/pixel-ui-react';

export default () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <PxInput
          value={input1}
          onChange={setInput1}
          style={{ width: '240px' }}
          size="large"
          placeholder="Please Input"
        />
        <PxInput
          value={input2}
          onChange={setInput2}
          style={{ width: '240px' }}
          placeholder="Please Input"
        />
        <PxInput
          value={input3}
          onChange={setInput3}
          style={{ width: '240px' }}
          size="small"
          placeholder="Please Input"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <PxInput
          value={input1}
          onChange={setInput1}
          style={{ width: '240px' }}
          size="large"
          placeholder="Please Input"
        />
        <PxInput
          value={input2}
          onChange={setInput2}
          style={{ width: '240px' }}
          placeholder="Please Input"
        />
        <PxInput
          value={input3}
          onChange={setInput3}
          style={{ width: '240px' }}
          size="small"
          placeholder="Please Input"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <PxInput
          value={input1}
          onChange={setInput1}
          style={{ width: '240px' }}
          size="large"
          placeholder="Please Input"
        />
        <PxInput
          value={input2}
          onChange={setInput2}
          style={{ width: '240px' }}
          placeholder="Please Input"
        />
        <PxInput
          value={input3}
          onChange={setInput3}
          style={{ width: '240px' }}
          size="small"
          placeholder="Please Input"
        />
      </div>
    </>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(I()().mark(function t(){var d,a=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}}}},37248:function(oe,D,e){var m;e.r(D),e.d(D,{demos:function(){return C}});var ce=e(90819),I=e.n(ce),ge=e(45332),B=e.n(ge),z=e(89933),P=e.n(z),O=e(21077),T=e(85916),C={"docs-components-overlay-demo-0":{component:O.memo(O.lazy(P()(I()().mark(function o(){var c,t,d,a,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=f.sent,t=c.default,d=c.useState,f.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=f.sent,h=a.PxOverlay,i=a.PxButton,f.abrupt("return",{default:function(){var U=d(!1),V=B()(U,2),K=V[0],Y=V[1],G=function(){Y(!0)},ne=function(){Y(!1)};return t.createElement("div",{style:{height:"400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#ebe6e0"}},t.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},t.createElement(i,{onClick:G},"Button"),t.createElement(i,{onClick:G,type:"primary"},"Primary"),t.createElement(i,{onClick:G,type:"success"},"Success"),t.createElement(i,{onClick:G,type:"warning"},"Warning"),t.createElement(i,{onClick:G,type:"danger"},"Danger"),t.createElement(i,{onClick:G,type:"sakura"},"Sakura")),t.createElement(h,{overlayClass:"f-c",open:K,setOpen:Y},t.createElement(i,{onClick:ne},"Close")))}});case 11:case"end":return f.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-overlay-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxOverlay, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ebe6e0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <PxButton onClick={handleOpen}>Button</PxButton>
        <PxButton onClick={handleOpen} type="primary">Primary</PxButton>
        <PxButton onClick={handleOpen} type="success">Success</PxButton>
        <PxButton onClick={handleOpen} type="warning">Warning</PxButton>
        <PxButton onClick={handleOpen} type="danger">Danger</PxButton>
        <PxButton onClick={handleOpen} type="sakura">Sakura</PxButton>
      </div>
      <PxOverlay overlayClass="f-c" open={visible} setOpen={setVisible}>
        <PxButton onClick={handleClose}>Close</PxButton>
      </PxOverlay>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(I()().mark(function t(){var d,a=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-overlay-demo-1":{component:O.memo(O.lazy(P()(I()().mark(function o(){var c,t,d,a,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=f.sent,t=c.default,d=c.useState,f.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=f.sent,h=a.PxOverlay,i=a.PxButton,f.abrupt("return",{default:function(){var U=d(!1),V=B()(U,2),K=V[0],Y=V[1],G=function(){Y(!0)},ne=function(){Y(!1)};return t.createElement("div",{style:{height:"400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#ebe6e0"}},t.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},t.createElement(i,{onClick:G},"Button"),t.createElement(i,{onClick:G,type:"primary"},"Primary"),t.createElement(i,{onClick:G,type:"success"},"Success"),t.createElement(i,{onClick:G,type:"warning"},"Warning"),t.createElement(i,{onClick:G,type:"danger"},"Danger"),t.createElement(i,{onClick:G,type:"sakura"},"Sakura")),K&&t.createElement(h,{open:K,setOpen:Y,overlayClass:"f-c",color:"rgba(255, 119, 7, 0.4)"},t.createElement(i,{onClick:ne},"Close")))}});case 11:case"end":return f.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-overlay-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxOverlay, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ebe6e0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <PxButton onClick={handleOpen}>Button</PxButton>
        <PxButton onClick={handleOpen} type="primary">Primary</PxButton>
        <PxButton onClick={handleOpen} type="success">Success</PxButton>
        <PxButton onClick={handleOpen} type="warning">Warning</PxButton>
        <PxButton onClick={handleOpen} type="danger">Danger</PxButton>
        <PxButton onClick={handleOpen} type="sakura">Sakura</PxButton>
      </div>
      {visible && (
        <PxOverlay
          open={visible}
          setOpen={setVisible}
          overlayClass="f-c"
          color="rgba(255, 119, 7, 0.4)"
        >
          <PxButton onClick={handleClose}>Close</PxButton>
        </PxOverlay>
      )}
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(I()().mark(function t(){var d,a=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-overlay-demo-2":{component:O.memo(O.lazy(P()(I()().mark(function o(){var c,t,d,a,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=f.sent,t=c.default,d=c.useState,f.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=f.sent,h=a.PxOverlay,i=a.PxButton,f.abrupt("return",{default:function(){var U=d(!1),V=B()(U,2),K=V[0],Y=V[1],G=function(){Y(!0)},ne=function(){Y(!1)};return t.createElement("div",{style:{height:"400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#ebe6e0"}},t.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},t.createElement(i,{onClick:G},"Button"),t.createElement(i,{onClick:G,type:"primary"},"Primary"),t.createElement(i,{onClick:G,type:"success"},"Success"),t.createElement(i,{onClick:G,type:"warning"},"Warning"),t.createElement(i,{onClick:G,type:"danger"},"Danger"),t.createElement(i,{onClick:G,type:"sakura"},"Sakura")),K&&t.createElement(h,{open:K,setOpen:Y,grid:!0,overlayClass:"f-c"},t.createElement(i,{onClick:ne},"Close")))}});case 11:case"end":return f.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-overlay-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxOverlay, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ebe6e0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <PxButton onClick={handleOpen}>Button</PxButton>
        <PxButton onClick={handleOpen} type="primary">Primary</PxButton>
        <PxButton onClick={handleOpen} type="success">Success</PxButton>
        <PxButton onClick={handleOpen} type="warning">Warning</PxButton>
        <PxButton onClick={handleOpen} type="danger">Danger</PxButton>
        <PxButton onClick={handleOpen} type="sakura">Sakura</PxButton>
      </div>
      {visible && (
        <PxOverlay open={visible} setOpen={setVisible} grid overlayClass="f-c">
          <PxButton onClick={handleClose}>Close</PxButton>
        </PxOverlay>
      )}
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(I()().mark(function t(){var d,a=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-overlay-demo-3":{component:O.memo(O.lazy(P()(I()().mark(function o(){var c,t,d,a,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=f.sent,t=c.default,d=c.useState,f.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=f.sent,h=a.PxOverlay,i=a.PxButton,f.abrupt("return",{default:function(){var U=d(!1),V=B()(U,2),K=V[0],Y=V[1],G=function(){Y(!0)},ne=function(){Y(!1)};return t.createElement("div",{style:{height:"400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#ebe6e0"}},t.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},t.createElement(i,{onClick:G},"Button"),t.createElement(i,{onClick:G,type:"primary"},"Primary"),t.createElement(i,{onClick:G,type:"success"},"Success"),t.createElement(i,{onClick:G,type:"warning"},"Warning"),t.createElement(i,{onClick:G,type:"danger"},"Danger"),t.createElement(i,{onClick:G,type:"sakura"},"Sakura")),t.createElement(h,{open:K,setOpen:Y,overlayClass:"f-c"},t.createElement(i,{onClick:ne},"Close")))}});case 11:case"end":return f.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-overlay-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxOverlay, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ebe6e0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <PxButton onClick={handleOpen}>Button</PxButton>
        <PxButton onClick={handleOpen} type="primary">Primary</PxButton>
        <PxButton onClick={handleOpen} type="success">Success</PxButton>
        <PxButton onClick={handleOpen} type="warning">Warning</PxButton>
        <PxButton onClick={handleOpen} type="danger">Danger</PxButton>
        <PxButton onClick={handleOpen} type="sakura">Sakura</PxButton>
      </div>
      <PxOverlay open={visible} setOpen={setVisible} overlayClass="f-c">
        <PxButton onClick={handleClose}>Close</PxButton>
      </PxOverlay>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(I()().mark(function t(){var d,a=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-overlay-demo-4":{component:O.memo(O.lazy(P()(I()().mark(function o(){var c,t,d,a,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=f.sent,t=c.default,d=c.useState,f.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=f.sent,h=a.PxOverlay,i=a.PxButton,f.abrupt("return",{default:function(){var U=d(!1),V=B()(U,2),K=V[0],Y=V[1],G=d(!1),ne=B()(G,2),re=ne[0],Pe=ne[1],de=function(Me){Pe(Me),Y(!0)},pe=function(){Y(!1)};return t.createElement("div",{style:{height:"400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#ebe6e0"}},t.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},t.createElement(i,{onClick:function(){return de(!1)}},"\u6253\u5F00\u906E\u7F69\uFF08\u5141\u8BB8\u6EDA\u52A8\uFF09"),t.createElement(i,{onClick:function(){return de(!0)},type:"primary"},"\u6253\u5F00\u906E\u7F69\uFF08\u9501\u5B9A\u6EDA\u52A8\uFF09")),t.createElement(h,{open:K,setOpen:Y,overlayClass:"f-c",lockScroll:re},t.createElement("div",{style:{padding:"20px",backgroundColor:"#fff",borderRadius:"4px"}},t.createElement(i,{onClick:pe,style:{marginBottom:"20px"}},"Close"),t.createElement("div",{style:{padding:"20px"}},t.createElement("p",null,"\u5F53 lockScroll \u4E3A false \u65F6\uFF0C\u5373\u4F7F\u906E\u7F69\u5C42\u6253\u5F00\uFF0C\u9875\u9762\u4ECD\u7136\u53EF\u4EE5\u6EDA\u52A8\u3002")))))}});case 11:case"end":return f.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-overlay-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxOverlay, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);
  const [lockScroll, setLockScroll] = useState(false);

  const handleOpen = (withScroll) => {
    setLockScroll(withScroll);
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ebe6e0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <PxButton onClick={() => handleOpen(false)}>\u6253\u5F00\u906E\u7F69\uFF08\u5141\u8BB8\u6EDA\u52A8\uFF09</PxButton>
        <PxButton onClick={() => handleOpen(true)} type="primary">\u6253\u5F00\u906E\u7F69\uFF08\u9501\u5B9A\u6EDA\u52A8\uFF09</PxButton>
      </div>
      <PxOverlay 
        open={visible} 
        setOpen={setVisible}
        overlayClass="f-c"
        lockScroll={lockScroll}
      >
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '4px' }}>
          <PxButton onClick={handleClose} style={{ marginBottom: '20px' }}>Close</PxButton>
          <div style={{ padding: '20px' }}>
            <p>\u5F53 lockScroll \u4E3A false \u65F6\uFF0C\u5373\u4F7F\u906E\u7F69\u5C42\u6253\u5F00\uFF0C\u9875\u9762\u4ECD\u7136\u53EF\u4EE5\u6EDA\u52A8\u3002</p>
          </div>
        </div>
      </PxOverlay>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(I()().mark(function t(){var d,a=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-overlay-demo-5":{component:O.memo(O.lazy(P()(I()().mark(function o(){var c,t,d,a,h,i;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=f.sent,t=c.default,d=c.useState,f.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=f.sent,h=a.PxOverlay,i=a.PxButton,f.abrupt("return",{default:function(){var U=d(!1),V=B()(U,2),K=V[0],Y=V[1],G=function(){Y(!0)},ne=function(){Y(!1)};return t.createElement("div",{style:{height:"400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#ebe6e0"}},t.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},t.createElement(i,{onClick:G},"\u6253\u5F00\u906E\u7F69\uFF08\u70B9\u51FB\u906E\u7F69\u5173\u95ED\uFF09")),t.createElement(h,{open:K,setOpen:Y,overlayClass:"f-c",backdropClose:!0},t.createElement("div",{onClick:function(Pe){return Pe.stopPropagation()},style:{padding:"20px",backgroundColor:"#fff",borderRadius:"4px"}},t.createElement("p",{style:{marginBottom:"20px"}},"\u70B9\u51FB\u906E\u7F69\u5C42\u80CC\u666F\u53EF\u4EE5\u5173\u95ED"),t.createElement(i,{onClick:ne},"\u6216\u8005\u70B9\u51FB\u6309\u94AE\u5173\u95ED"))))}});case 11:case"end":return f.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-overlay-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxOverlay, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ebe6e0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <PxButton onClick={handleOpen}>\u6253\u5F00\u906E\u7F69\uFF08\u70B9\u51FB\u906E\u7F69\u5173\u95ED\uFF09</PxButton>
      </div>
      <PxOverlay 
        open={visible} 
        setOpen={setVisible}
        overlayClass="f-c"
        backdropClose
      >
        <div onClick={e => e.stopPropagation()} style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '4px' }}>
          <p style={{ marginBottom: '20px' }}>\u70B9\u51FB\u906E\u7F69\u5C42\u80CC\u666F\u53EF\u4EE5\u5173\u95ED</p>
          <PxButton onClick={handleClose}>\u6216\u8005\u70B9\u51FB\u6309\u94AE\u5173\u95ED</PxButton>
        </div>
      </PxOverlay>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(I()().mark(function t(){var d,a=arguments;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}}}},33304:function(oe,D,e){var m;e.r(D),e.d(D,{demos:function(){return C}});var ce=e(45332),I=e.n(ce),ge=e(90819),B=e.n(ge),z=e(89933),P=e.n(z),O=e(21077),T=e(85916),C={"docs-components-popconfirm-demo-0":{component:O.memo(O.lazy(P()(B()().mark(function o(){var c,t,d,a,h;return B()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=y.sent,t=c.default,y.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return d=y.sent,a=d.PxPopconfirm,h=d.PxButton,y.abrupt("return",{default:function(){return t.createElement("div",{className:"popconfirm-base-box"},t.createElement("div",{className:"row center"},t.createElement(a,{className:"box-item",title:"Top Left",placement:"top-start"},t.createElement(h,null,"top-start")),t.createElement(a,{className:"box-item",title:"Top Center",placement:"top"},t.createElement(h,null,"top")),t.createElement(a,{className:"box-item",title:"Top Right",placement:"top-end"},t.createElement(h,null,"top-end"))),t.createElement("div",{className:"row"},t.createElement(a,{className:"box-item",title:"Left Top",placement:"left-start"},t.createElement(h,null,"left-start")),t.createElement(a,{className:"box-item",title:"Right Top",placement:"right-start"},t.createElement(h,null,"right-start"))),t.createElement("div",{className:"row"},t.createElement(a,{className:"box-item",title:"Left Center",placement:"left"},t.createElement(h,{style:{marginTop:"12px",marginBottom:"12px"}},"left")),t.createElement(a,{className:"box-item",title:"Right Center",placement:"right"},t.createElement(h,null,"right"))),t.createElement("div",{className:"row"},t.createElement(a,{className:"box-item",title:"Left Bottom",placement:"left-end"},t.createElement(h,null,"left-end")),t.createElement(a,{className:"box-item",title:"Right Bottom",placement:"right-end"},t.createElement(h,null,"right-end"))),t.createElement("div",{className:"row center"},t.createElement(a,{className:"box-item",title:"Bottom Left",placement:"bottom-start"},t.createElement(h,null,"bottom-start")),t.createElement(a,{className:"box-item",title:"Bottom Center",placement:"bottom"},t.createElement(h,null,"bottom")),t.createElement(a,{className:"box-item",title:"Bottom Right",placement:"bottom-end"},t.createElement(h,null,"bottom-end"))),t.createElement("style",null,`
        .popconfirm-base-box {
          padding: 0 100px;
        }
        .popconfirm-base-box .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .popconfirm-base-box .center {
          justify-content: center;
        }
        .popconfirm-base-box .box-item {
          margin-top: 10px;
        }
      `))}});case 10:case"end":return y.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-popconfirm-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxPopconfirm, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div className="popconfirm-base-box">
      <div className="row center">
        <PxPopconfirm
          className="box-item"
          title="Top Left"
          placement="top-start"
        >
          <PxButton>top-start</PxButton>
        </PxPopconfirm>
        <PxPopconfirm
          className="box-item"
          title="Top Center"
          placement="top"
        >
          <PxButton>top</PxButton>
        </PxPopconfirm>
        <PxPopconfirm
          className="box-item"
          title="Top Right"
          placement="top-end"
        >
          <PxButton>top-end</PxButton>
        </PxPopconfirm>
      </div>
      <div className="row">
        <PxPopconfirm
          className="box-item"
          title="Left Top"
          placement="left-start"
        >
          <PxButton>left-start</PxButton>
        </PxPopconfirm>
        <PxPopconfirm
          className="box-item"
          title="Right Top"
          placement="right-start"
        >
          <PxButton>right-start</PxButton>
        </PxPopconfirm>
      </div>
      <div className="row">
        <PxPopconfirm
          className="box-item"
          title="Left Center"
          placement="left"
        >
          <PxButton style={{ marginTop: '12px', marginBottom: '12px' }}>left</PxButton>
        </PxPopconfirm>
        <PxPopconfirm
          className="box-item"
          title="Right Center"
          placement="right"
        >
          <PxButton>right</PxButton>
        </PxPopconfirm>
      </div>
      <div className="row">
        <PxPopconfirm
          className="box-item"
          title="Left Bottom"
          placement="left-end"
        >
          <PxButton>left-end</PxButton>
        </PxPopconfirm>
        <PxPopconfirm
          className="box-item"
          title="Right Bottom"
          placement="right-end"
        >
          <PxButton>right-end</PxButton>
        </PxPopconfirm>
      </div>
      <div className="row center">
        <PxPopconfirm
          className="box-item"
          title="Bottom Left"
          placement="bottom-start"
        >
          <PxButton>bottom-start</PxButton>
        </PxPopconfirm>
        <PxPopconfirm
          className="box-item"
          title="Bottom Center"
          placement="bottom"
        >
          <PxButton>bottom</PxButton>
        </PxPopconfirm>
        <PxPopconfirm
          className="box-item"
          title="Bottom Right"
          placement="bottom-end"
        >
          <PxButton>bottom-end</PxButton>
        </PxPopconfirm>
      </div>
      <style>{\`
        .popconfirm-base-box {
          padding: 0 100px;
        }
        .popconfirm-base-box .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .popconfirm-base-box .center {
          justify-content: center;
        }
        .popconfirm-base-box .box-item {
          margin-top: 10px;
        }
      \`}</style>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(B()().mark(function t(){var d,a=arguments;return B()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-popconfirm-demo-1":{component:O.memo(O.lazy(P()(B()().mark(function o(){var c,t,d,a,h;return B()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=y.sent,t=c.default,y.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return d=y.sent,a=d.PxPopconfirm,h=d.PxButton,y.abrupt("return",{default:function(){return t.createElement(a,{title:"Are you sure to delete this?"},t.createElement(h,null,"Delete"))}});case 10:case"end":return y.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-popconfirm-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxPopconfirm, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <PxPopconfirm title="Are you sure to delete this?">
      <PxButton>Delete</PxButton>
    </PxPopconfirm>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(B()().mark(function t(){var d,a=arguments;return B()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-popconfirm-demo-2":{component:O.memo(O.lazy(P()(B()().mark(function o(){var c,t,d,a,h,i;return B()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=f.sent,t=c.default,d=c.useState,f.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=f.sent,h=a.PxPopconfirm,i=a.PxButton,f.abrupt("return",{default:function(){var U=d(!1),V=I()(U,2),K=V[0],Y=V[1],G=function(){Y(!0)},ne=function(){Y(!1)};return t.createElement(h,{width:"220",icon:"info-circle-solid",iconColor:"#626AEF",title:"Are you sure to delete this?",onCancel:G,actions:t.createElement(t.Fragment,null,t.createElement(i,{size:"small",onClick:G},"No!"),t.createElement(i,{type:"danger",size:"small",disabled:!K,onClick:ne},"Yes?"))},t.createElement(i,null,"Delete"))}});case 11:case"end":return f.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-popconfirm-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxPopconfirm, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [clicked, setClicked] = useState(false);

  const handleCancel = () => {
    setClicked(true);
  };

  const handleConfirm = () => {
    setClicked(false);
  };

  return (
    <PxPopconfirm
      width="220"
      icon="info-circle-solid"
      iconColor="#626AEF"
      title="Are you sure to delete this?"
      onCancel={handleCancel}
      actions={
        <>
          <PxButton size="small" onClick={handleCancel}>No!</PxButton>
          <PxButton
            type="danger"
            size="small"
            disabled={!clicked}
            onClick={handleConfirm}
          >
            Yes?
          </PxButton>
        </>
      }
    >
      <PxButton>Delete</PxButton>
    </PxPopconfirm>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(B()().mark(function t(){var d,a=arguments;return B()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-popconfirm-demo-3":{component:O.memo(O.lazy(P()(B()().mark(function o(){var c,t,d,a,h;return B()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=y.sent,t=c.default,y.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return d=y.sent,a=d.PxPopconfirm,h=d.PxButton,y.abrupt("return",{default:function(){var _=function(){console.log("confirm!")},U=function(){console.log("cancel!")};return t.createElement(a,{confirmButtonText:"\u563B\u563B",cancelButtonText:"No\u55B5",confirmButtonType:"sakura",cancelButtonType:"warning",icon:"info-circle-solid",iconColor:"#626AEF",title:"Are you sure to delete this?",onConfirm:_,onCancel:U},t.createElement(h,null,"Delete"))}});case 10:case"end":return y.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-popconfirm-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxPopconfirm, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const confirmEvent = () => {
    console.log('confirm!');
  };

  const cancelEvent = () => {
    console.log('cancel!');
  };

  return (
    <PxPopconfirm
      confirmButtonText="\u563B\u563B"
      cancelButtonText="No\u55B5"
      confirmButtonType="sakura"
      cancelButtonType="warning"
      icon="info-circle-solid"
      iconColor="#626AEF"
      title="Are you sure to delete this?"
      onConfirm={confirmEvent}
      onCancel={cancelEvent}
    >
      <PxButton>Delete</PxButton>
    </PxPopconfirm>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(B()().mark(function t(){var d,a=arguments;return B()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}}}},70765:function(oe,D,e){var m;e.r(D),e.d(D,{demos:function(){return O}});var ce=e(90819),I=e.n(ce),ge=e(89933),B=e.n(ge),z=e(21077),P=e(85916),O={"docs-components-text-demo-0":{component:z.memo(z.lazy(B()(I()().mark(function T(){var C,o,c,t;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return C=a.sent,o=C.default,a.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return c=a.sent,t=c.PxText,a.abrupt("return",{default:function(){return o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement(t,{style:{marginRight:"10px"}},"Default"),o.createElement(t,{style:{marginRight:"10px"},type:"primary"},"Primary"),o.createElement(t,{style:{marginRight:"10px"},type:"success"},"Success"),o.createElement(t,{style:{marginRight:"10px"},type:"warning"},"Warning"),o.createElement(t,{style:{marginRight:"10px"},type:"danger"},"Danger"),o.createElement(t,{style:{marginRight:"10px"},type:"sakura"},"Sakura")),o.createElement("p",null,o.createElement(t,{style:{marginRight:"10px"},bold:!0},"\u8FD9"),o.createElement(t,{style:{marginRight:"10px"},bold:!0,type:"primary"},"\u4E2A"),o.createElement(t,{style:{marginRight:"10px"},bold:!0,type:"success"},"\u662F"),o.createElement(t,{style:{marginRight:"10px"},bold:!0,type:"warning"},"\u7C97"),o.createElement(t,{style:{marginRight:"10px"},bold:!0,type:"danger"},"\u4F53"),o.createElement(t,{style:{marginRight:"10px"},bold:!0,type:"sakura"},"\u55B5")))}});case 9:case"end":return a.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-components-text-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxText } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxText style={{ marginRight: '10px' }}>Default</PxText>
        <PxText style={{ marginRight: '10px' }} type="primary">Primary</PxText>
        <PxText style={{ marginRight: '10px' }} type="success">Success</PxText>
        <PxText style={{ marginRight: '10px' }} type="warning">Warning</PxText>
        <PxText style={{ marginRight: '10px' }} type="danger">Danger</PxText>
        <PxText style={{ marginRight: '10px' }} type="sakura">Sakura</PxText>
      </p>
      <p>
        <PxText style={{ marginRight: '10px' }} bold>\u8FD9</PxText>
        <PxText style={{ marginRight: '10px' }} bold type="primary">\u4E2A</PxText>
        <PxText style={{ marginRight: '10px' }} bold type="success">\u662F</PxText>
        <PxText style={{ marginRight: '10px' }} bold type="warning">\u7C97</PxText>
        <PxText style={{ marginRight: '10px' }} bold type="danger">\u4F53</PxText>
        <PxText style={{ marginRight: '10px' }} bold type="sakura">\u55B5</PxText>
      </p>
    </>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(z,2)),"@duheng1992/pixel-ui-react":P},renderOpts:{compile:function(){var T=B()(I()().mark(function o(){var c,t=arguments;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(977).then(e.bind(e,97977));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,t));case 3:case"end":return a.stop()}},o)}));function C(){return T.apply(this,arguments)}return C}()}},"docs-components-text-demo-1":{component:z.memo(z.lazy(B()(I()().mark(function T(){var C,o,c,t;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return C=a.sent,o=C.default,a.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return c=a.sent,t=c.PxText,a.abrupt("return",{default:function(){return o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement(t,{style:{marginRight:"10px"},size:12},"Default"),o.createElement(t,{style:{marginRight:"10px"},size:16,type:"primary"},"Primary"),o.createElement(t,{style:{marginRight:"10px"},size:20,type:"success"},"Success")),o.createElement("p",null,o.createElement(t,{style:{marginRight:"10px"},size:24,type:"warning"},"Warning"),o.createElement(t,{style:{marginRight:"10px"},size:28,type:"danger"},"Danger"),o.createElement(t,{style:{marginRight:"10px"},size:28,type:"sakura"},"Sakura")))}});case 9:case"end":return a.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-components-text-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxText } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxText style={{ marginRight: '10px' }} size={12}>Default</PxText>
        <PxText style={{ marginRight: '10px' }} size={16} type="primary">Primary</PxText>
        <PxText style={{ marginRight: '10px' }} size={20} type="success">Success</PxText>
      </p>
      <p>
        <PxText style={{ marginRight: '10px' }} size={24} type="warning">Warning</PxText>
        <PxText style={{ marginRight: '10px' }} size={28} type="danger">Danger</PxText>
        <PxText style={{ marginRight: '10px' }} size={28} type="sakura">Sakura</PxText>
      </p>
    </>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(z,2)),"@duheng1992/pixel-ui-react":P},renderOpts:{compile:function(){var T=B()(I()().mark(function o(){var c,t=arguments;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(977).then(e.bind(e,97977));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,t));case 3:case"end":return a.stop()}},o)}));function C(){return T.apply(this,arguments)}return C}()}},"docs-components-text-demo-2":{component:z.memo(z.lazy(B()(I()().mark(function T(){var C,o,c,t;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return C=a.sent,o=C.default,a.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return c=a.sent,t=c.PxText,a.abrupt("return",{default:function(){return o.createElement("div",null,o.createElement(t,{style:{marginRight:"10px"},color:"green"},"Text"),o.createElement(t,{style:{marginRight:"10px"},color:"#ff4785"},"Text"),o.createElement(t,{style:{marginRight:"10px"},color:"rgb(0,212,255)"},"Text"),o.createElement(t,{style:{marginRight:"10px"},color:"hsl(265, 100%, 50%)"},"Text"),o.createElement(t,{style:{marginRight:"10px"},color:"hwb(38 0% 0%)"},"Text"))}});case 9:case"end":return a.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-components-text-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxText } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxText style={{ marginRight: '10px' }} color="green">Text</PxText>
      <PxText style={{ marginRight: '10px' }} color="#ff4785">Text</PxText>
      <PxText style={{ marginRight: '10px' }} color="rgb(0,212,255)">Text</PxText>
      <PxText style={{ marginRight: '10px' }} color="hsl(265, 100%, 50%)">Text</PxText>
      <PxText style={{ marginRight: '10px' }} color="hwb(38 0% 0%)">Text</PxText>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(z,2)),"@duheng1992/pixel-ui-react":P},renderOpts:{compile:function(){var T=B()(I()().mark(function o(){var c,t=arguments;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(977).then(e.bind(e,97977));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,t));case 3:case"end":return a.stop()}},o)}));function C(){return T.apply(this,arguments)}return C}()}},"docs-components-text-demo-3":{component:z.memo(z.lazy(B()(I()().mark(function T(){var C,o,c,t;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return C=a.sent,o=C.default,a.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return c=a.sent,t=c.PxText,a.abrupt("return",{default:function(){return o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement(t,{align:"left",style:{display:"block",width:"100%"}},"align-left")),o.createElement("p",null,o.createElement(t,{align:"center",style:{display:"block",width:"100%"}},"align-center")),o.createElement("p",null,o.createElement(t,{align:"right",style:{display:"block",width:"100%"}},"align-right")),o.createElement("p",null,o.createElement(t,null,"\u6587\u672C\u6587\u672C"),o.createElement("br",null),o.createElement(t,{compact:!0},"\u6587\u672C\u6587\u672C"),o.createElement("br",null),o.createElement(t,null,"\u6587\u672C\u6587\u672C")))}});case 9:case"end":return a.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-components-text-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxText } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxText align="left" style={{ display: 'block', width: '100%' }}>align-left</PxText>
      </p>
      <p>
        <PxText align="center" style={{ display: 'block', width: '100%' }}>align-center</PxText>
      </p>
      <p>
        <PxText align="right" style={{ display: 'block', width: '100%' }}>align-right</PxText>
      </p>
      <p>
        <PxText>\u6587\u672C\u6587\u672C</PxText>
        <br />
        <PxText compact>\u6587\u672C\u6587\u672C</PxText>
        <br />
        <PxText>\u6587\u672C\u6587\u672C</PxText>
      </p>
    </>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(z,2)),"@duheng1992/pixel-ui-react":P},renderOpts:{compile:function(){var T=B()(I()().mark(function o(){var c,t=arguments;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(977).then(e.bind(e,97977));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,t));case 3:case"end":return a.stop()}},o)}));function C(){return T.apply(this,arguments)}return C}()}},"docs-components-text-demo-4":{component:z.memo(z.lazy(B()(I()().mark(function T(){var C,o,c,t;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return C=a.sent,o=C.default,a.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return c=a.sent,t=c.PxText,a.abrupt("return",{default:function(){return o.createElement("div",null,o.createElement(t,null,"span"),o.createElement(t,{tag:"div"},"div"),o.createElement(t,{tag:"a"},"a"))}});case 9:case"end":return a.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-components-text-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxText } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxText>span</PxText>
      <PxText tag="div">div</PxText>
      <PxText tag="a">a</PxText>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(z,2)),"@duheng1992/pixel-ui-react":P},renderOpts:{compile:function(){var T=B()(I()().mark(function o(){var c,t=arguments;return I()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(977).then(e.bind(e,97977));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,t));case 3:case"end":return a.stop()}},o)}));function C(){return T.apply(this,arguments)}return C}()}}}},23814:function(oe,D,e){var m;e.r(D),e.d(D,{demos:function(){return C}});var ce=e(45332),I=e.n(ce),ge=e(90819),B=e.n(ge),z=e(89933),P=e.n(z),O=e(21077),T=e(85916),C={"docs-components-tooltip-demo-0":{component:O.memo(O.lazy(P()(B()().mark(function o(){var c,t,d,a,h;return B()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=y.sent,t=c.default,y.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return d=y.sent,a=d.PxTooltip,h=d.PxButton,y.abrupt("return",{default:function(){return t.createElement("div",{className:"tooltip-base-box"},t.createElement("div",{className:"row center"},t.createElement(a,{className:"box-item",content:"Top Left",placement:"top-start"},t.createElement(h,null,"top-start")),t.createElement(a,{className:"box-item",content:"Top Center",placement:"top"},t.createElement(h,null,"top")),t.createElement(a,{className:"box-item",content:"Top Right",placement:"top-end"},t.createElement(h,null,"top-end"))),t.createElement("div",{className:"row"},t.createElement(a,{className:"box-item",content:"Left Top",placement:"left-start"},t.createElement(h,null,"left-start")),t.createElement(a,{className:"box-item",content:"Right Top",placement:"right-start"},t.createElement(h,null,"right-start"))),t.createElement("div",{className:"row"},t.createElement(a,{className:"box-item",content:"Left Center",placement:"left"},t.createElement(h,{style:{marginTop:"12px",marginBottom:"12px"}},"left")),t.createElement(a,{className:"box-item",content:"Right Center",placement:"right"},t.createElement(h,null,"right"))),t.createElement("div",{className:"row"},t.createElement(a,{className:"box-item",content:"Left Bottom",placement:"left-end"},t.createElement(h,null,"left-end")),t.createElement(a,{className:"box-item",content:"Right Bottom",placement:"right-end"},t.createElement(h,null,"right-end"))),t.createElement("div",{className:"row center"},t.createElement(a,{className:"box-item",content:"Bottom Left",placement:"bottom-start"},t.createElement(h,null,"bottom-start")),t.createElement(a,{className:"box-item",content:"Bottom Center",placement:"bottom"},t.createElement(h,null,"bottom")),t.createElement(a,{className:"box-item",content:"Bottom Right",placement:"bottom-end"},t.createElement(h,null,"bottom-end"))),t.createElement("style",null,`
        .tooltip-base-box {
          padding: 0 120px;
        }
        .tooltip-base-box .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .tooltip-base-box .center {
          justify-content: center;
        }
        .tooltip-base-box .box-item {
          margin-top: 10px;
        }
      `))}});case 10:case"end":return y.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-tooltip-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxTooltip, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div className="tooltip-base-box">
      <div className="row center">
        <PxTooltip
          className="box-item"
          content="Top Left"
          placement="top-start"
        >
          <PxButton>top-start</PxButton>
        </PxTooltip>
        <PxTooltip
          className="box-item"
          content="Top Center"
          placement="top"
        >
          <PxButton>top</PxButton>
        </PxTooltip>
        <PxTooltip
          className="box-item"
          content="Top Right"
          placement="top-end"
        >
          <PxButton>top-end</PxButton>
        </PxTooltip>
      </div>
      <div className="row">
        <PxTooltip
          className="box-item"
          content="Left Top"
          placement="left-start"
        >
          <PxButton>left-start</PxButton>
        </PxTooltip>
        <PxTooltip
          className="box-item"
          content="Right Top"
          placement="right-start"
        >
          <PxButton>right-start</PxButton>
        </PxTooltip>
      </div>
      <div className="row">
        <PxTooltip
          className="box-item"
          content="Left Center"
          placement="left"
        >
          <PxButton style={{ marginTop: '12px', marginBottom: '12px' }}>left</PxButton>
        </PxTooltip>
        <PxTooltip
          className="box-item"
          content="Right Center"
          placement="right"
        >
          <PxButton>right</PxButton>
        </PxTooltip>
      </div>
      <div className="row">
        <PxTooltip
          className="box-item"
          content="Left Bottom"
          placement="left-end"
        >
          <PxButton>left-end</PxButton>
        </PxTooltip>
        <PxTooltip
          className="box-item"
          content="Right Bottom"
          placement="right-end"
        >
          <PxButton>right-end</PxButton>
        </PxTooltip>
      </div>
      <div className="row center">
        <PxTooltip
          className="box-item"
          content="Bottom Left"
          placement="bottom-start"
        >
          <PxButton>bottom-start</PxButton>
        </PxTooltip>
        <PxTooltip
          className="box-item"
          content="Bottom Center"
          placement="bottom"
        >
          <PxButton>bottom</PxButton>
        </PxTooltip>
        <PxTooltip
          className="box-item"
          content="Bottom Right"
          placement="bottom-end"
        >
          <PxButton>bottom-end</PxButton>
        </PxTooltip>
      </div>
      <style>{\`
        .tooltip-base-box {
          padding: 0 120px;
        }
        .tooltip-base-box .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .tooltip-base-box .center {
          justify-content: center;
        }
        .tooltip-base-box .box-item {
          margin-top: 10px;
        }
      \`}</style>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(B()().mark(function t(){var d,a=arguments;return B()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-tooltip-demo-1":{component:O.memo(O.lazy(P()(B()().mark(function o(){var c,t,d,a,h;return B()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=y.sent,t=c.default,y.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return d=y.sent,a=d.PxTooltip,h=d.PxButton,y.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(a,{content:"hover trigger"},t.createElement(h,null,"hover")),t.createElement(a,{trigger:"click",content:"click trigger"},t.createElement(h,null,"click")),t.createElement(a,{trigger:"contextmenu",content:"contextmenu trigger"},t.createElement(h,null,"contextmenu")))}});case 10:case"end":return y.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-tooltip-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxTooltip, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxTooltip content="hover trigger">
        <PxButton>hover</PxButton>
      </PxTooltip>
      <PxTooltip trigger="click" content="click trigger">
        <PxButton>click</PxButton>
      </PxTooltip>
      <PxTooltip trigger="contextmenu" content="contextmenu trigger">
        <PxButton>contextmenu</PxButton>
      </PxTooltip>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(B()().mark(function t(){var d,a=arguments;return B()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-tooltip-demo-2":{component:O.memo(O.lazy(P()(B()().mark(function o(){var c,t,d,a,h;return B()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=y.sent,t=c.default,y.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return d=y.sent,a=d.PxTooltip,h=d.PxButton,y.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(a,{content:"light theme"},t.createElement(h,null,"Light")),t.createElement(a,{content:"dark theme",effect:"dark"},t.createElement(h,null,"Dark")))}});case 10:case"end":return y.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-tooltip-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxTooltip, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxTooltip content="light theme">
        <PxButton>Light</PxButton>
      </PxTooltip>
      <PxTooltip content="dark theme" effect="dark">
        <PxButton>Dark</PxButton>
      </PxTooltip>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(B()().mark(function t(){var d,a=arguments;return B()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-tooltip-demo-3":{component:O.memo(O.lazy(P()(B()().mark(function o(){var c,t,d,a,h,i;return B()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=f.sent,t=c.default,f.next=6,Promise.resolve().then(e.bind(e,85916));case 6:return d=f.sent,a=d.PxTooltip,h=d.PxButton,i=d.PxText,f.abrupt("return",{default:function(){return t.createElement(a,{placement:"top",content:t.createElement(t.Fragment,null,t.createElement(i,{tag:"div",color:"#9fe597"},"multiple lines"),t.createElement(i,{tag:"div",color:"#cce581"},"second line"))},t.createElement(h,null,"Top center"))}});case 11:case"end":return f.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-tooltip-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { PxTooltip, PxButton, PxText } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <PxTooltip
      placement="top"
      content={
        <>
          <PxText tag="div" color="#9fe597">multiple lines</PxText>
          <PxText tag="div" color="#cce581">second line</PxText>
        </>
      }
    >
      <PxButton>Top center</PxButton>
    </PxTooltip>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(B()().mark(function t(){var d,a=arguments;return B()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-tooltip-demo-4":{component:O.memo(O.lazy(P()(B()().mark(function o(){var c,t,d,a,h,i;return B()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=f.sent,t=c.default,d=c.useState,f.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=f.sent,h=a.PxTooltip,i=a.PxButton,f.abrupt("return",{default:function(){var U=d(!1),V=I()(U,2),K=V[0],Y=V[1];return t.createElement(h,{disabled:K,content:"click to close tooltip function",placement:"bottom"},t.createElement(i,{onClick:function(){return Y(!K)}},"click to ",K?"active":"close"," tooltip function"))}});case 11:case"end":return f.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-tooltip-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxTooltip, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <PxTooltip
      disabled={disabled}
      content="click to close tooltip function"
      placement="bottom"
    >
      <PxButton onClick={() => setDisabled(!disabled)}>
        click to {disabled ? 'active' : 'close'} tooltip function
      </PxButton>
    </PxTooltip>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(B()().mark(function t(){var d,a=arguments;return B()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-tooltip-demo-5":{component:O.memo(O.lazy(P()(B()().mark(function o(){var c,t,d,a,h,i;return B()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=f.sent,t=c.default,d=c.useRef,f.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=f.sent,h=a.PxTooltip,i=a.PxButton,f.abrupt("return",{default:function(){var U=d(null);return t.createElement(t.Fragment,null,t.createElement(h,{content:"Bottom center",placement:"bottom",trigger:"hover",virtualTriggering:!0,virtualRef:U}),t.createElement("div",{ref:U,style:{display:"inline-block"}},t.createElement(i,null,"virtual trigger")))}});case 11:case"end":return f.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-tooltip-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { PxTooltip, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const virtualTrigger = useRef<HTMLButtonElement>(null);

  return (
    <>
      <PxTooltip
        content="Bottom center"
        placement="bottom"
        trigger="hover"
        virtualTriggering
        virtualRef={virtualTrigger}
      />
      <div ref={virtualTrigger} style={{ display: 'inline-block' }}>
        <PxButton>virtual trigger</PxButton>
      </div>
    </>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(B()().mark(function t(){var d,a=arguments;return B()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-components-tooltip-demo-6":{component:O.memo(O.lazy(P()(B()().mark(function o(){var c,t,d,a,h,i;return B()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,21077,19));case 2:return c=f.sent,t=c.default,d=c.useState,f.next=7,Promise.resolve().then(e.bind(e,85916));case 7:return a=f.sent,h=a.PxTooltip,i=a.PxButton,f.abrupt("return",{default:function(){var U=d(!1),V=I()(U,2),K=V[0],Y=V[1],G=function(){Y(!0)},ne=function(){Y(!1)};return t.createElement("div",null,t.createElement(h,{visible:K,content:"\u624B\u52A8\u63A7\u5236\u7684\u63D0\u793A",placement:"top"},t.createElement(i,null,"\u624B\u52A8\u63A7\u5236\u63D0\u793A")),t.createElement("div",{style:{display:"flex",gap:"10px",marginTop:"20px"}},t.createElement(i,{onClick:G},"\u663E\u793A"),t.createElement(i,{onClick:ne},"\u9690\u85CF")))}});case 11:case"end":return f.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-tooltip-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { PxTooltip, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  return (
    <div>
      <PxTooltip visible={visible} content="\u624B\u52A8\u63A7\u5236\u7684\u63D0\u793A" placement="top">
        <PxButton>\u624B\u52A8\u63A7\u5236\u63D0\u793A</PxButton>
      </PxTooltip>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <PxButton onClick={open}>\u663E\u793A</PxButton>
        <PxButton onClick={close}>\u9690\u85CF</PxButton>
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"19.2.0"},"@duheng1992/pixel-ui-react":{type:"NPM",value:"1.0.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(O,2)),"@duheng1992/pixel-ui-react":T},renderOpts:{compile:function(){var o=P()(B()().mark(function t(){var d,a=arguments;return B()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(977).then(e.bind(e,97977));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,a));case 3:case"end":return i.stop()}},t)}));function c(){return o.apply(this,arguments)}return c}()}}}},54685:function(oe,D,e){e.r(D),e.d(D,{demos:function(){return ce}});var m=e(21077),ce={}},22184:function(oe,D,e){e.r(D),e.d(D,{texts:function(){return m}});const m=[{value:"\u5E38\u7528\u7684\u64CD\u4F5C\u6309\u94AE\u3002",paraId:0,tocIndex:0},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:1},{value:"type",paraId:1,tocIndex:1},{value:"\u3001",paraId:1,tocIndex:1},{value:"plain",paraId:1,tocIndex:1},{value:"\u3001",paraId:1,tocIndex:1},{value:"round",paraId:1,tocIndex:1},{value:" \u548C ",paraId:1,tocIndex:1},{value:"circle",paraId:1,tocIndex:1},{value:" \u6765\u5B9A\u4E49\u6309\u94AE\u7684\u6837\u5F0F\u3002",paraId:1,tocIndex:1},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:2,tocIndex:2},{value:"disabled",paraId:2,tocIndex:2},{value:" \u5C5E\u6027\u6765\u5B9A\u4E49\u6309\u94AE\u662F\u5426\u88AB\u7981\u7528\u3002",paraId:2,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:3},{value:"icon",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u6765\u5B9A\u4E49\u6309\u94AE\u7684\u56FE\u6807\u3002",paraId:3,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:4},{value:"<PxButtonGroup>",paraId:4,tocIndex:4},{value:" \u5BF9\u591A\u4E2A\u6309\u94AE\u5206\u7EC4\u3002",paraId:4,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:5},{value:"loading",paraId:5,tocIndex:5},{value:" \u5C5E\u6027\u6765\u5B9A\u4E49\u6309\u94AE\u7684\u52A0\u8F7D\u72B6\u6001\u3002",paraId:5,tocIndex:5},{value:"\u60A8\u53EF\u4EE5\u4F7F\u7528 ",paraId:6},{value:"loadingIcon",paraId:6},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u60A8\u7684 loading \u56FE\u6807",paraId:6},{value:"\u4F7F\u7528 ",paraId:7,tocIndex:6},{value:"size",paraId:7,tocIndex:6},{value:" \u5C5E\u6027\u6765\u5B9A\u4E49\u6309\u94AE\u7684\u5C3A\u5BF8\u3002",paraId:7,tocIndex:6},{value:"\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5143\u7D20\u6807\u7B7E\u3002\u4F8B\u5982, \u6309\u94AE, div, \u8DEF\u7531\u94FE\u63A5, nuxt \u94FE\u63A5\u3002",paraId:8,tocIndex:7},{value:"\u60A8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6309\u94AE\u7684\u989C\u8272\u3002\u7EC4\u4EF6\u5E93\u5C06\u81EA\u52A8\u8BA1\u7B97\u6309\u94AE\u5404\u72B6\u6001\u7684\u989C\u8272\u3002",paraId:9,tocIndex:8},{value:"\u7531\u4E8E\u6280\u672F\u529B\u95EE\u9898, \u8BF7\u52FF\u5BF9\u6B64\u529F\u80FD\u62B1\u6709\u592A\u9AD8\u671F\u671B, \u5982\u679C\u5E0C\u671B\u5B9E\u73B0\u81EA\u5B9A\u4E49\u4E3B\u9898, \u66F4\u52A0\u63A8\u8350\u76F4\u63A5\u4FEE\u6539 ",paraId:10},{value:"@property",paraId:10},{value:" \u5C5E\u6027, \u8BE6\u60C5\u89C1\u4E0B\u8FF0",paraId:10},{value:"\u53EF\u4EE5\u901A\u8FC7 ",paraId:11,tocIndex:9},{value:"useThrottle",paraId:11,tocIndex:9},{value:" \u5C5E\u6027\u6765\u5B9A\u4E49\u6309\u94AE\u662F\u5426\u4F7F\u7528\u8282\u6D41\u6A21\u5F0F \u9ED8\u8BA4\u4E3A true\u3002",paraId:11,tocIndex:9},{value:"\u5BF9 ",paraId:12,tocIndex:10},{value:"pixelbox.worklet",paraId:12,tocIndex:10},{value:" \u8FDB\u884C\u4FEE\u6539, \u652F\u6301\u4E00\u79CD\u65B0\u7684\u5706\u89D2\u6837\u5F0F, \u540C\u65F6\u9650\u5B9A\u5706\u89D2\u79CD\u7C7B\u4E3A 3 \u79CD, \u901A\u8FC7\u4FEE\u6539 ",paraId:12,tocIndex:10},{value:"--px-border-radius",paraId:12,tocIndex:10},{value:" \u503C\u63A7\u5236, \u5F53\u524D\u5C55\u793A\u503C\u5927\u4E8E 3 \u7684\u60C5\u51B5, \u63D0\u4F9B\u5C5E\u6027 ",paraId:12,tocIndex:10},{value:"chubby",paraId:12,tocIndex:10},{value:" \u63A7\u5236",paraId:12,tocIndex:10},{value:"\u7531\u4E8E\u7B97\u6CD5\u4E0D\u591F\u5B8C\u5584, \u666E\u9002\u6027\u4E0D\u9AD8, \u63D0\u4F9B\u5C5E\u6027 ",paraId:13},{value:"chubby",paraId:13},{value:" \u9650\u5236\u6837\u5F0F\u57FA\u7840\u6A21\u677F, \u8BE5\u5706\u89D2\u6837\u5F0F\u5BF9 ",paraId:13},{value:"--px-border",paraId:13},{value:", ",paraId:13},{value:"--px-border-[position]",paraId:13},{value:", ",paraId:13},{value:"--px-border-radius-[postion]",paraId:13},{value:", ",paraId:13},{value:"--px-bg-shadow-border",paraId:13},{value:", \u5143\u7D20\u5BBD\u9AD8\u90FD\u6709\u4E00\u5B9A\u8981\u6C42, \u8BF7\u5408\u7406\u4F7F\u7528",paraId:13}]},90532:function(oe,D,e){e.r(D),e.d(D,{texts:function(){return m}});const m=[{value:"Config Provider \u88AB\u7528\u6765\u63D0\u4F9B\u5168\u5C40\u7684\u914D\u7F6E\u9009\u9879, \u8BA9\u4F60\u7684\u914D\u7F6E\u80FD\u591F\u5728\u5168\u5C40\u90FD\u80FD\u591F\u88AB\u8BBF\u95EE\u5230\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 Config Provider \u6765\u914D\u7F6E\u591A\u8BED\u8A00, \u8BA9\u4F60\u7684\u5E94\u7528\u53EF\u4EE5\u968F\u65F6\u5207\u6362\u8BED\u8A00\u3002",paraId:1,tocIndex:1},{value:"\u8BED\u8A00\u5305\u6587\u4EF6\u5B58\u653E\u5728 ",paraId:2,tocIndex:1},{value:"packages/locale/lang",paraId:2,tocIndex:1},{value:" \u76EE\u5F55\u4E0B, \u9ED8\u8BA4\u8BED\u8A00\u4E3A ",paraId:2,tocIndex:1},{value:"en",paraId:2,tocIndex:1},{value:", \u5F53\u524D\u652F\u6301\u7684\u8BED\u8A00\u5305\u6709",paraId:2,tocIndex:1},{value:"en",paraId:2,tocIndex:1},{value:"\u3001",paraId:2,tocIndex:1},{value:"zh-CN",paraId:2,tocIndex:1},{value:"\u3001",paraId:2,tocIndex:1},{value:"zh-TW",paraId:2,tocIndex:1},{value:"\u3001",paraId:2,tocIndex:1},{value:"ja",paraId:2,tocIndex:1},{value:"Config Provider \u8FD8\u652F\u6301\u62D3\u5C55\u7FFB\u8BD1\u6587\u672C\u5BF9\u8C61, \u901A\u8FC7\u914D\u7F6E\u4E00\u4E2A\u7C7B\u578B\u4E3A ",paraId:3},{value:"Record<string, string>",paraId:3},{value:" \u7684\u5C5E\u6027 ",paraId:3},{value:"extendsI18nMsg",paraId:3},{value:" \u5B9E\u73B0, \u5177\u4F53\u683C\u5F0F\u53C2\u8003\u8BED\u8A00\u5305\u6587\u4EF6\u89E3\u6784",paraId:3},{value:"\u5728\u672C\u8282\u4E2D, \u60A8\u53EF\u4EE5\u5B66\u4E60\u5982\u4F55\u4F7F\u7528 Config Provider \u6765\u63D0\u4F9B\u5B9E\u9A8C\u6027\u529F\u80FD\u3002 \u73B0\u5728, \u6211\u4EEC\u8FD8\u6CA1\u6709\u6DFB\u52A0\u4EFB\u4F55\u5B9E\u9A8C\u6027\u529F\u80FD, \u4F46\u5728\u672A\u6765\u7684\u89C4\u5212\u4E2D, \u6211\u4EEC\u5C06\u6DFB\u52A0\u4E00\u4E9B\u5B9E\u9A8C\u6027\u529F\u80FD\u3002 \u60A8\u53EF\u4EE5\u4F7F\u7528\u6B64\u914D\u7F6E\u6765\u7BA1\u7406\u8FD9\u4E9B\u529F\u80FD\u3002",paraId:4}]},65005:function(oe,D,e){e.r(D),e.d(D,{texts:function(){return m}});const m=[{value:"PixelUI \u7EC4\u4EF6\u5E93\u7684\u56FE\u6807\u96C6\u5408\u6765\u81EA ",paraId:0,tocIndex:0},{value:"pixel-icon-library",paraId:0,tocIndex:0},{value:". \u63D0\u4F9B 400+ \u72EC\u7279\u7684\u50CF\u7D20\u5316\u77E2\u91CF\u56FE\u6807, \u4E14\u5404\u81EA\u62E5\u6709 4 \u79CD\u53D8\u4F53",paraId:0,tocIndex:0},{value:"\u5982\u679C\u4F60\u60F3\u50CF\u7528\u4F8B\u4E00\u6837",paraId:1,tocIndex:1},{value:"\u76F4\u63A5\u4F7F\u7528",paraId:1,tocIndex:1},{value:", \u4F60\u9700\u8981\u5168\u5C40\u5F15\u5165\u7B2C\u4E09\u65B9\u56FE\u6807\u5E93, \u624D\u80FD\u5728\u9879\u76EE\u91CC\u76F4\u63A5\u4F7F\u7528\u3002",paraId:1,tocIndex:1},{value:"\u65B9\u4FBF\u4F7F\u7528, \u5DF2\u5C06 pixel-icon-library \u96C6\u6210\u5230 PixelUI \u7EC4\u4EF6\u5E93\u91CC, \u4F60\u53EF\u4EE5\u4E0D\u7528\u5F15\u5165\u7B2C\u4E09\u65B9\u56FE\u6807\u5E93\u53CA\u5176\u6837\u5F0F\u3002",paraId:2},{value:"\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668",paraId:3,tocIndex:3},{value:`$ npm install @hackernoon/pixel-icon-library
`,paraId:4},{value:`$ yarn add @hackernoon/pixel-icon-library
`,paraId:5},{value:`$ pnpm install @hackernoon/pixel-icon-library
`,paraId:6},{value:`$ bun add @hackernoon/pixel-icon-library
`,paraId:7},{value:`$ \u522B\u7528 deno, \u4F1A\u53D8\u5F97\u4E0D\u5E78
`,paraId:8},{value:`import '@hackernoon/pixel-icon-library/fonts/iconfont.css'
`,paraId:9,tocIndex:4},{value:"\u67E5\u9605 ",paraId:10,tocIndex:5},{value:"\u56FE\u6807\u5E93",paraId:10,tocIndex:5},{value:" icon \u540D\u79F0, \u901A\u8FC7 ",paraId:10,tocIndex:5},{value:"icon",paraId:10,tocIndex:5},{value:" \u5C5E\u6027\u4F20\u5165\u5373\u53EF, \u4F7F\u7528 ",paraId:10,tocIndex:5},{value:"type",paraId:10,tocIndex:5},{value:"\u3001",paraId:10,tocIndex:5},{value:"color",paraId:10,tocIndex:5},{value:"\u3001",paraId:10,tocIndex:5},{value:"size",paraId:10,tocIndex:5},{value:" \u4FEE\u6539\u56FE\u6807\u6837\u5F0F",paraId:10,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:11,tocIndex:6},{value:"flip",paraId:11,tocIndex:6},{value:" \u548C ",paraId:11,tocIndex:6},{value:"rotation",paraId:11,tocIndex:6},{value:" \u5C5E\u6027\u63A7\u5236\u56FE\u6807\u7FFB\u8F6C",paraId:11,tocIndex:6},{value:"\u901A\u8FC7 ",paraId:12,tocIndex:7},{value:"spin",paraId:12,tocIndex:7},{value:"\u3001",paraId:12,tocIndex:7},{value:"bounce",paraId:12,tocIndex:7},{value:"\u3001",paraId:12,tocIndex:7},{value:"shake",paraId:12,tocIndex:7},{value:"\u3001",paraId:12,tocIndex:7},{value:"beat",paraId:12,tocIndex:7},{value:" \u5C5E\u6027\u63A7\u5236\u56FE\u6807\u52A8\u753B",paraId:12,tocIndex:7}]},96056:function(oe,D,e){e.r(D),e.d(D,{texts:function(){return m}});const m=[{value:"\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u5B57\u7B26",paraId:0,tocIndex:0},{value:"Input \u4E3A\u53D7\u63A7\u7EC4\u4EF6, \u5B83 ",paraId:1,tocIndex:0},{value:"\u603B\u4F1A\u663E\u793A React \u7ED1\u5B9A\u503C",paraId:1,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:"\u5728\u6B63\u5E38\u60C5\u51B5\u4E0B, ",paraId:2,tocIndex:0},{value:"input",paraId:2,tocIndex:0},{value:" \u7684\u8F93\u5165\u4E8B\u4EF6\u5E94\u8BE5\u88AB\u6B63\u5E38\u54CD\u5E94\u3002\u5B83\u7684\u5904\u7406\u7A0B\u5E8F\u5E94\u8BE5\u66F4\u65B0\u7EC4\u4EF6\u7684\u7ED1\u5B9A\u503C (\u6216\u4F7F\u7528 ",paraId:2,tocIndex:0},{value:"value",paraId:2,tocIndex:0},{value:" \u548C ",paraId:2,tocIndex:0},{value:"onChange",paraId:2,tocIndex:0},{value:")\u3002\u5426\u5219, \u8F93\u5165\u6846\u7684\u503C\u5C06\u4E0D\u4F1A\u6539\u53D8\u3002",paraId:2,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:2},{value:"disabled",paraId:3,tocIndex:2},{value:" \u5C5E\u6027\u8BBE\u7F6E\u7981\u7528\u72B6\u6001",paraId:3,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:3},{value:"clearable",paraId:4,tocIndex:3},{value:" \u5C5E\u6027\u5373\u53EF\u5F97\u5230\u4E00\u4E2A\u53EF\u4E00\u952E\u6E05\u7A7A\u7684\u8F93\u5165\u6846",paraId:4,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:4},{value:"showPassword",paraId:5,tocIndex:4},{value:" \u5C5E\u6027\u5373\u53EF\u5F97\u5230\u4E00\u4E2A\u53EF\u5207\u6362\u663E\u793A\u9690\u85CF\u7684\u5BC6\u7801\u6846",paraId:5,tocIndex:4},{value:"\u5E26\u6709\u56FE\u6807\u6807\u8BB0\u8F93\u5165\u7C7B\u578B",paraId:6,tocIndex:5},{value:"\u8981\u5728\u8F93\u5165\u6846\u4E2D\u6DFB\u52A0\u56FE\u6807, \u53EF\u901A\u8FC7 ",paraId:7,tocIndex:5},{value:"prefix",paraId:7,tocIndex:5},{value:" \u548C ",paraId:7,tocIndex:5},{value:"suffix",paraId:7,tocIndex:5},{value:" \u5C5E\u6027\u6765\u5B9E\u73B0\u3002",paraId:7,tocIndex:5},{value:"\u7528\u4E8E\u8F93\u5165\u591A\u884C\u6587\u672C\u4FE1\u606F\u53EF\u7F29\u653E\u7684\u8F93\u5165\u6846\u3002\u6DFB\u52A0 ",paraId:8,tocIndex:6},{value:'type="textarea"',paraId:8,tocIndex:6},{value:" \u5C5E\u6027\u6765\u5C06 ",paraId:8,tocIndex:6},{value:"input",paraId:8,tocIndex:6},{value:" \u5143\u7D20\u8F6C\u6362\u4E3A\u539F\u751F\u7684 ",paraId:8,tocIndex:6},{value:"textarea",paraId:8,tocIndex:6},{value:" \u5143\u7D20\u3002",paraId:8,tocIndex:6},{value:"\u6587\u672C\u57DF\u9AD8\u5EA6\u53EF\u901A\u8FC7 ",paraId:9,tocIndex:6},{value:"rows",paraId:9,tocIndex:6},{value:" \u5C5E\u6027\u63A7\u5236",paraId:9,tocIndex:6},{value:"\u53EF\u4EE5\u5728\u8F93\u5165\u6846\u4E2D\u524D\u7F6E\u6216\u540E\u7F6E\u4E00\u4E2A\u5143\u7D20, \u901A\u5E38\u662F\u6807\u7B7E\u6216\u6309\u94AE\u3002",paraId:10,tocIndex:7},{value:"\u53EF\u901A\u8FC7 ",paraId:11,tocIndex:7},{value:"prepend",paraId:11,tocIndex:7},{value:" \u548C ",paraId:11,tocIndex:7},{value:"append",paraId:11,tocIndex:7},{value:" \u5C5E\u6027\u6765\u6307\u5B9A\u5728 Input \u4E2D\u5206\u53D1\u7684\u524D\u7F6E\u6216\u8005\u540E\u7F6E\u7684\u5185\u5BB9\u3002",paraId:11,tocIndex:7},{value:"\u5F85 ",paraId:12},{value:"PxSelect",paraId:12},{value:" \u7EC4\u4EF6\u5F00\u53D1\u5B8C\u6210\u540E\u8865\u5145\u5B8C\u6574\u793A\u4F8B",paraId:12},{value:"\u901A\u8FC7 ",paraId:13,tocIndex:8},{value:"size",paraId:13,tocIndex:8},{value:" \u5C5E\u6027\u8BBE\u7F6E Input \u7684\u5C3A\u5BF8\u3002",paraId:13,tocIndex:8},{value:"\u901A\u8FC7 ref \u53EF\u4EE5\u8BBF\u95EE\u5230\u4EE5\u4E0B\u65B9\u6CD5\uFF1A",paraId:14,tocIndex:11},{value:"\u65B9\u6CD5\u540D",paraId:15,tocIndex:11},{value:"\u8BF4\u660E",paraId:15,tocIndex:11},{value:"\u7C7B\u578B",paraId:15,tocIndex:11},{value:"focus",paraId:15,tocIndex:11},{value:"\u4F7F\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9",paraId:15,tocIndex:11},{value:"() => void",paraId:15,tocIndex:11},{value:"blur",paraId:15,tocIndex:11},{value:"\u4F7F\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9",paraId:15,tocIndex:11},{value:"() => void",paraId:15,tocIndex:11},{value:"select",paraId:15,tocIndex:11},{value:"\u9009\u4E2D\u8F93\u5165\u6846\u4E2D\u7684\u6587\u672C",paraId:15,tocIndex:11},{value:"() => void",paraId:15,tocIndex:11},{value:"clear",paraId:15,tocIndex:11},{value:"\u6E05\u7A7A\u8F93\u5165\u6846\u5185\u5BB9",paraId:15,tocIndex:11},{value:"(event: React.MouseEvent<HTMLElement>) => void",paraId:15,tocIndex:11}]},28232:function(oe,D,e){e.r(D),e.d(D,{texts:function(){return m}});const m=[{value:"\u5411\u6307\u5B9A\u5143\u7D20\u6DFB\u52A0\u906E\u7F69\u5C42, \u5E38\u7528\u4E8E\u6A21\u6001\u6846\u3001\u62BD\u5C49\u7B49\u7EC4\u4EF6\u80CC\u666F\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:1},{value:"mask",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u63A7\u5236\u906E\u7F69\u5C42",paraId:1,tocIndex:1},{value:"\u6837\u5F0F\u4E0A\u7684",paraId:1,tocIndex:1},{value:"\u663E\u793A\u9690\u85CF, \u901A\u8FC7 ",paraId:1,tocIndex:1},{value:"zIndex",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u8BBE\u7F6E\u906E\u7F69\u5C42\u5C42\u7EA7",paraId:1,tocIndex:1},{value:"\u8BBE\u7F6E\u5728 ",paraId:2,tocIndex:1},{value:"PxOverlay",paraId:2,tocIndex:1},{value:" \u4E0A\u7684 ",paraId:2,tocIndex:1},{value:"attrs",paraId:2,tocIndex:1},{value:" \u4F1A\u88AB\u62E6\u622A, \u81EA\u5B9A\u4E49\u7C7B\u540D\u5217\u8868\u53EF\u901A\u8FC7 ",paraId:2,tocIndex:1},{value:"overlayClass",paraId:2,tocIndex:1},{value:" \u6DFB\u52A0",paraId:2,tocIndex:1},{value:"mask",paraId:3},{value:" \u5C5E\u6027\u4EC5\u63A7\u5236",paraId:3},{value:"\u906E\u7F69\u5C42\u663E\u793A",paraId:3},{value:", \u4EC5\u5C5E\u4E8E\u6837\u5F0F\u4E0A\u7684\u533A\u5206, \u5BF9\u4E8E\u63D2\u69FD\u5185\u5BB9\u4E0D\u505A\u5904\u7406",paraId:3},{value:"\u9875\u9762\u6EDA\u52A8\u7684\u9501\u5B9A\u4E0E ",paraId:4},{value:"PxOverlay",paraId:4},{value:" \u5378\u8F7D\u6302\u8F7D\u5173\u8054, \u5EFA\u8BAE\u4F7F\u7528\u6761\u4EF6\u6E32\u67D3\u63A7\u5236\u5B9E\u4F8B\u521B\u5EFA\u9500\u6BC1",paraId:4},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:2},{value:"color",paraId:5,tocIndex:2},{value:" \u8BBE\u7F6E\u9ED8\u8BA4\u906E\u7F69\u5C42\u989C\u8272",paraId:5,tocIndex:2},{value:"grid",paraId:6,tocIndex:2},{value:", ",paraId:6,tocIndex:2},{value:"preset",paraId:6,tocIndex:2},{value:" \u7B49\u9884\u8BBE\u88C5\u9970\u6027\u906E\u7F69\u5C42\u4F18\u5148\u7EA7\u9AD8\u4E8E ",paraId:6,tocIndex:2},{value:"color",paraId:6,tocIndex:2},{value:" \u81EA\u5B9A\u4E49\u989C\u8272",paraId:6,tocIndex:2},{value:"\u5176\u989C\u8272\u901A\u8FC7 ",paraId:7,tocIndex:2},{value:"--px-grid-color-1",paraId:7,tocIndex:2},{value:" \u7B49\u5C5E\u6027\u4FEE\u6539",paraId:7,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:3},{value:"grid",paraId:8,tocIndex:3},{value:" \u5C5E\u6027\u8BBE\u7F6E\u7F51\u683C\u80CC\u666F",paraId:8,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:9,tocIndex:4},{value:"preset1",paraId:9,tocIndex:4},{value:" \u9884\u8BBE\u7F51\u683C\u80CC\u666F-1, \u540C\u65F6\u53EF\u901A\u8FC7 ",paraId:9,tocIndex:4},{value:"matte",paraId:9,tocIndex:4},{value:" \u5C5E\u6027\u8BBE\u7F6E\u906E\u7F69\u5C42 ",paraId:9,tocIndex:4},{value:"\u54D1\u5149",paraId:9,tocIndex:4},{value:" \u6548\u679C",paraId:9,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:10,tocIndex:5},{value:"lockScroll",paraId:10,tocIndex:5},{value:" \u5C5E\u6027\u63A7\u5236\u662F\u5426\u9501\u5B9A\u9875\u9762\u6EDA\u52A8, \u9ED8\u8BA4\u4E3A ",paraId:10,tocIndex:5},{value:"true",paraId:10,tocIndex:5},{value:"\u3002\u8BBE\u7F6E\u4E3A ",paraId:10,tocIndex:5},{value:"false",paraId:10,tocIndex:5},{value:" \u65F6, \u906E\u7F69\u5C42\u6253\u5F00\u65F6\u9875\u9762\u4ECD\u53EF\u6EDA\u52A8",paraId:10,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:11,tocIndex:6},{value:"backdropClose",paraId:11,tocIndex:6},{value:" \u5C5E\u6027\u63A7\u5236\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u5173\u95ED, \u9ED8\u8BA4\u4E3A ",paraId:11,tocIndex:6},{value:"false",paraId:11,tocIndex:6},{value:"\u3002\u8BBE\u7F6E\u4E3A ",paraId:11,tocIndex:6},{value:"true",paraId:11,tocIndex:6},{value:" \u65F6, \u70B9\u51FB\u906E\u7F69\u5C42\u80CC\u666F\u53EF\u4EE5\u5173\u95ED\u906E\u7F69",paraId:11,tocIndex:6}]},30207:function(oe,D,e){e.r(D),e.d(D,{texts:function(){return m}});const m=[{value:"\u70B9\u51FB\u67D0\u4E2A\u5143\u7D20\u5F39\u51FA\u4E00\u4E2A\u7B80\u5355\u7684\u6C14\u6CE1\u786E\u8BA4\u6846",paraId:0,tocIndex:0},{value:"Popconfirm \u63D0\u4F9B\u4E86 9 \u79CD\u5C55\u793A\u4F4D\u7F6E",paraId:1,tocIndex:1},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:1},{value:"title",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u6765\u8BBE\u7F6E\u70B9\u51FB\u53C2\u8003\u5143\u7D20\u65F6\u663E\u793A\u7684\u4FE1\u606F, \u7531 ",paraId:2,tocIndex:1},{value:"placement",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u6765\u51B3\u5B9A\u5C55\u793A\u7684\u65B9\u5411: ",paraId:2,tocIndex:1},{value:"[\u65B9\u5411]-[\u5BF9\u9F50\u4F4D\u7F6E]",paraId:2,tocIndex:1},{value:"; \u56DB\u4E2A\u65B9\u5411: ",paraId:2,tocIndex:1},{value:"top",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"bottom",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"left",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"right",paraId:2,tocIndex:1},{value:"; \u4E09\u79CD\u5BF9\u9F50\u4F4D\u7F6E: ",paraId:2,tocIndex:1},{value:"start",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"end",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"null",paraId:2,tocIndex:1},{value:", \u9ED8\u8BA4\u4E3A null\u3002 \u5982 ",paraId:2,tocIndex:1},{value:'placement="left-end"',paraId:2,tocIndex:1},{value:", \u5219\u6C14\u6CE1\u786E\u8BA4\u6846\u51FA\u73B0\u5728\u76EE\u6807\u5143\u7D20\u5DE6\u4FA7, \u4E14\u6C14\u6CE1\u786E\u8BA4\u6846\u7684\u5E95\u90E8\u4E0E\u76EE\u6807\u5143\u7D20\u5E95\u90E8\u5BF9\u9F50\u3002",paraId:2,tocIndex:1},{value:"Popconfirm \u5C5E\u6027\u540C Tooltip \u7C7B\u4F3C, \u662F\u57FA\u4E8E Tooltip \u5C01\u88C5\u7684\u62D3\u5C55",paraId:3,tocIndex:2},{value:"\u5728 Popconfirm \u4E2D, \u53EA\u6709 ",paraId:4,tocIndex:2},{value:"title",paraId:4,tocIndex:2},{value:" \u53EF\u7528, ",paraId:4,tocIndex:2},{value:"content",paraId:4,tocIndex:2},{value:" \u5C5E\u6027\u65E0\u6548\u3002",paraId:4,tocIndex:2},{value:"\u53EF\u4EE5\u5728 Popconfirm \u4E2D\u81EA\u5B9A\u4E49\u5185\u5BB9",paraId:5,tocIndex:3},{value:"\u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u4E8B\u4EF6",paraId:6,tocIndex:4}]},37145:function(oe,D,e){e.r(D),e.d(D,{texts:function(){return m}});const m=[{value:"\u6587\u672C\u7684\u5E38\u89C1\u64CD\u4F5C",paraId:0,tocIndex:0},{value:"\u7528 ",paraId:1,tocIndex:1},{value:"type",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u8BBE\u7F6E Text \u7C7B\u578B, ",paraId:1,tocIndex:1},{value:"bold",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u8BBE\u7F6E",paraId:1,tocIndex:1},{value:"\u7C97\u4F53",paraId:1,tocIndex:1},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:2},{value:"size",paraId:2,tocIndex:2},{value:" \u5C5E\u6027\u8BBE\u7F6E Text \u5C3A\u5BF8, \u9ED8\u8BA4\u5927\u5C0F\u4E3A ",paraId:2,tocIndex:2},{value:"14px",paraId:2,tocIndex:2},{value:", \u4F20\u5165\u503C\u9ED8\u8BA4\u4E3A ",paraId:2,tocIndex:2},{value:"px",paraId:2,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:3},{value:"color",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u8BBE\u7F6E Text \u989C\u8272",paraId:3,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:4},{value:"align",paraId:4,tocIndex:4},{value:" \u5C5E\u6027\u8BBE\u7F6E Text \u5BF9\u9F50\u65B9\u5F0F, \u53EF\u9009\u503C\u4E3A ",paraId:4,tocIndex:4},{value:"left",paraId:4,tocIndex:4},{value:", ",paraId:4,tocIndex:4},{value:"center",paraId:4,tocIndex:4},{value:", ",paraId:4,tocIndex:4},{value:"right",paraId:4,tocIndex:4},{value:", \u4F7F\u7528 ",paraId:4,tocIndex:4},{value:"compact",paraId:4,tocIndex:4},{value:" \u5C5E\u6027\u8BBE\u7F6E Text \u662F\u5426\u7D27\u51D1",paraId:4,tocIndex:4},{value:"\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5143\u7D20\u6807\u7B7E\u3002\u4F8B\u5982, \u6309\u94AE, div, \u8DEF\u7531\u94FE\u63A5, nuxt \u94FE\u63A5\u3002",paraId:5,tocIndex:5}]},46116:function(oe,D,e){e.r(D),e.d(D,{texts:function(){return m}});const m=[{value:"\u5E38\u7528\u4E8E\u5C55\u793A\u9F20\u6807 hover \u65F6\u7684\u63D0\u793A\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:"\u5728\u8FD9\u91CC\u63D0\u4F9B\u4E86 9 \u79CD\u4E0D\u540C\u65B9\u5411\u7684\u5C55\u793A\u65B9\u5F0F, \u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u5B8C\u6574\u793A\u4F8B\u6765\u7406\u89E3, \u9009\u62E9\u9700\u8981\u7684\u6548\u679C\u3002",paraId:1,tocIndex:1},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:1},{value:"content",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u6765\u51B3\u5B9A ",paraId:2,tocIndex:1},{value:"hover",paraId:2,tocIndex:1},{value:" \u65F6\u7684\u63D0\u793A\u4FE1\u606F\u3002 \u7531 ",paraId:2,tocIndex:1},{value:"placement",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u6765\u51B3\u5B9A\u5C55\u793A\u7684\u65B9\u5411: ",paraId:2,tocIndex:1},{value:"[\u65B9\u5411]-[\u5BF9\u9F50\u4F4D\u7F6E]",paraId:2,tocIndex:1},{value:"; \u56DB\u4E2A\u65B9\u5411: ",paraId:2,tocIndex:1},{value:"top",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"bottom",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"left",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"right",paraId:2,tocIndex:1},{value:"; \u4E09\u79CD\u5BF9\u9F50\u4F4D\u7F6E: ",paraId:2,tocIndex:1},{value:"start",paraId:2,tocIndex:1},{value:", ",paraId:2,tocIndex:1},{value:"end",paraId:2,tocIndex:1},{value:", \u9ED8\u8BA4\u4E3A\u7A7A\u3002 \u5982 ",paraId:2,tocIndex:1},{value:'placement="left-end"',paraId:2,tocIndex:1},{value:", \u5219\u63D0\u793A\u4FE1\u606F\u51FA\u73B0\u5728\u76EE\u6807\u5143\u7D20\u5DE6\u4FA7, \u4E14\u63D0\u793A\u4FE1\u606F\u7684\u5E95\u90E8\u4E0E\u76EE\u6807\u5143\u7D20\u5E95\u90E8\u5BF9\u9F50\u3002",paraId:2,tocIndex:1},{value:"Tooltip \u9ED8\u8BA4\u662F ",paraId:3,tocIndex:2},{value:"hover",paraId:3,tocIndex:2},{value:" \u89E6\u53D1, \u4E5F\u53EF\u4EE5\u901A\u8FC7 ",paraId:3,tocIndex:2},{value:"trigger",paraId:3,tocIndex:2},{value:" \u5C5E\u6027\u6765\u8BBE\u7F6E\u89E6\u53D1\u65B9\u5F0F: ",paraId:3,tocIndex:2},{value:"hover",paraId:3,tocIndex:2},{value:", ",paraId:3,tocIndex:2},{value:"click",paraId:3,tocIndex:2},{value:", ",paraId:3,tocIndex:2},{value:"contextmenu",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"Tooltip \u7EC4\u4EF6\u5185\u7F6E\u4E86\u4E24\u4E2A\u4E3B\u9898: ",paraId:4,tocIndex:3},{value:"light",paraId:4,tocIndex:3},{value:" \u548C ",paraId:4,tocIndex:3},{value:"dark",paraId:4,tocIndex:3},{value:"\u3002",paraId:4,tocIndex:3},{value:"\u8981\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E3B\u9898, \u60A8\u5FC5\u987B\u77E5\u9053\u60A8\u7684\u5DE5\u5177\u63D0\u793A\u5728\u54EA\u91CC\u6E32\u67D3, \u5982\u679C\u60A8\u7684\u5DE5\u5177\u63D0\u793A\u88AB\u5448\u73B0\u4E3A\u6839\u5143\u7D20, \u60A8\u5C06\u9700\u8981\u5168\u5C40\u8BBE\u7F6Ecss\u89C4\u5219\u3002",paraId:5,tocIndex:3},{value:"\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u4E3B\u9898\u65F6, \u9700\u8981\u540C\u65F6\u4FEE\u6539\u5F39\u51FA\u7BAD\u5934\u548C\u5185\u5BB9\u6837\u5F0F, \u5177\u4F53\u8BBE\u7F6E\u89C1\u4E0B\u65B9 demo-preview",paraId:6,tocIndex:3},{value:"\u7531\u4E8E\u7EC4\u4EF6\u5E93\u7956\u5B97\u4E4B\u6CD5\u57FA\u4E8E ",paraId:7,tocIndex:3},{value:"css houdini paintWorklet",paraId:7,tocIndex:3},{value:", \u50CF\u7D20\u76D2\u5B50\u5927\u90E8\u5206\u57FA\u4E8E ",paraId:7,tocIndex:3},{value:"pixelbox",paraId:7,tocIndex:3},{value:" \u6E32\u67D3, \u5F53\u524D\u4EC5\u63D0\u4F9B\u7EAF\u8272\u4E3B\u9898, \u5982\u679C\u5E0C\u671B\u6E32\u67D3\u7EBF\u6027\u6E10\u53D8, \u7B49\u5F85\u540E\u7EED\u5347\u7EA7",paraId:7,tocIndex:3},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:8,tocIndex:3},{value:"effect",paraId:8,tocIndex:3},{value:" \u6765\u4FEE\u6539\u4E3B\u9898, \u9ED8\u8BA4\u4E3A ",paraId:8,tocIndex:3},{value:"light",paraId:8,tocIndex:3},{value:"\u3002",paraId:8,tocIndex:3},{value:"\u5C55\u793A\u591A\u884C\u6587\u672C\u6216\u8005\u662F\u8BBE\u7F6E\u6587\u672C\u5185\u5BB9\u7684\u683C\u5F0F",paraId:9,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:10,tocIndex:4},{value:"content",paraId:10,tocIndex:4},{value:" \u5C5E\u6027\u4F20\u5165 React \u8282\u70B9\u6765\u5C55\u793A\u590D\u6742\u5185\u5BB9\u3002",paraId:10,tocIndex:4},{value:"\u9664\u4E86\u8FD9\u4E9B\u57FA\u672C\u8BBE\u7F6E\u5916, \u8FD8\u6709\u4E00\u4E9B\u5C5E\u6027\u53EF\u4EE5\u8BA9\u4F7F\u7528\u8005\u66F4\u597D\u7684\u5B9A\u5236\u81EA\u5DF1\u7684\u6548\u679C:",paraId:11,tocIndex:5},{value:"\u5982\u679C\u9700\u8981\u5173\u95ED ",paraId:12,tocIndex:5},{value:"tooltip",paraId:12,tocIndex:5},{value:" \u529F\u80FD, \u53EF\u4EE5\u4F7F\u7528 ",paraId:12,tocIndex:5},{value:"disabled",paraId:12,tocIndex:5},{value:" \u5C5E\u6027",paraId:12,tocIndex:5},{value:"Tooltip \u662F\u4E00\u4E2A\u57FA\u4E8E ",paraId:13,tocIndex:5},{value:"popperjs",paraId:13,tocIndex:5},{value:" \u4E8C\u6B21\u5C01\u88C5\u7684\u6269\u5C55, \u53EF\u4EE5\u901A\u8FC7 ",paraId:13,tocIndex:5},{value:"popperOptions",paraId:13,tocIndex:5},{value:" \u5C5E\u6027\u6765\u5B9A\u5236 popperjs \u7684\u914D\u7F6E\u3002",paraId:13,tocIndex:5},{value:"\u6709\u65F6\u5019\u6211\u4EEC\u60F3\u628A tooltip \u7684\u89E6\u53D1\u5143\u7D20\u653E\u5728\u522B\u7684\u5730\u65B9, \u800C\u4E0D\u9700\u8981\u5199\u5728\u4E00\u8D77, \u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528\u865A\u62DF\u89E6\u53D1\u3002",paraId:14,tocIndex:6},{value:"\u901A\u8FC7 ",paraId:15,tocIndex:7},{value:"visible",paraId:15,tocIndex:7},{value:" \u5C5E\u6027, \u53EF\u4EE5\u8BBE\u7F6E ",paraId:15,tocIndex:7},{value:"tooltip",paraId:15,tocIndex:7},{value:" \u7684\u89E6\u53D1\u6A21\u5F0F\u4E3A\u624B\u52A8\u6A21\u5F0F, \u901A\u8FC7\u63A7\u5236 ",paraId:15,tocIndex:7},{value:"visible",paraId:15,tocIndex:7},{value:" \u5C5E\u6027\u6765\u63A7\u5236\u663E\u793A\u548C\u9690\u85CF\u3002",paraId:15,tocIndex:7}]},46735:function(oe,D,e){e.r(D),e.d(D,{texts:function(){return m}});const m=[{value:"\u4E00\u4E2A\u57FA\u4E8E React + TypeScript + CSS Houdini \u7684\u50CF\u7D20\u98CE\u683C\u7EC4\u4EF6\u5E93\uFF0C\u652F\u6301\u590D\u53E4\u50CF\u7D20\u6837\u5F0F\u6E32\u67D3\u3001\u81EA\u5B9A\u4E49\u50CF\u7D20\u5B57\u4F53\u548C\u50CF\u7D20\u8FB9\u6846\uFF0C\u81F4\u529B\u4E8E\u6253\u9020\u72EC\u7279\u7684 Web UI \u4F53\u9A8C\u3002",paraId:0,tocIndex:0},{value:`$ npm i @duheng1992/pixel-ui-react --save
`,paraId:1},{value:`$ yarn add @duheng1992/pixel-ui-react
`,paraId:2},{value:`$ pnpm add @duheng1992/pixel-ui-react
`,paraId:3},{value:`$ bun add @duheng1992/pixel-ui-react
`,paraId:4},{value:`$ \u522B\u7528 deno, \u4F1A\u53D8\u5F97\u4E0D\u5E78
`,paraId:5},{value:`// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from '@duheng1992/pixel-ui-react';
import '@duheng1992/pixel-ui-react/dist/index.css';
import 'virtual:uno.css' // \u53EF\u9009\uFF1A\u82E5\u8981\u4F7F\u7528\uFF0C\u9700\u989D\u5916\u5B89\u88C5 uno.css

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider locale="zh-CN">
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
`,paraId:6,tocIndex:3},{value:`// App.tsx
import { PxButton } from '@duheng1992/pixel-ui-react';

export default function App() {
  return <PxButton>START</PxButton>;
}
`,paraId:7,tocIndex:3},{value:"Pixel-UI \u63D0\u4F9B\u4E86 ESModule \u6784\u5EFA, \u652F\u6301 TreeShaking, \u63A8\u8350\u6309\u9700\u5F15\u5165\u4EE5\u51CF\u5C11\u6253\u5305\u4F53\u79EF\u3002",paraId:8,tocIndex:4},{value:`import { PxButton } from '@duheng1992/pixel-ui-react';

export default function App() {
  return <PxButton>START</PxButton>;
}
`,paraId:9,tocIndex:4},{value:"\u5B9E\u9A8C\u6027",paraId:10},{value:": ",paraId:10},{value:"CSS.paintWorklet",paraId:10},{value:" \u9759\u6001\u5C5E\u6027\u662F\u4E00\u9879",paraId:10},{value:"\u5B9E\u9A8C\u6027\u6280\u672F",paraId:10},{value:", \u5728\u5C06\u5176\u7528\u4E8E\u751F\u4EA7\u4E4B\u524D, \u8BF7\u4ED4\u7EC6\u68C0\u67E5",paraId:10},{value:"\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u8868\u683C",paraId:10},{value:"\u5B89\u5168\u4E0A\u4E0B\u6587",paraId:11},{value:": \u6B64\u9879\u529F\u80FD\u4EC5\u5728\u4E00\u4E9B\u652F\u6301\u7684\u6D4F\u89C8\u5668\u7684\u5B89\u5168\u4E0A\u4E0B\u6587 (HTTPS\u3001localhost) \u4E2D\u53EF\u7528\u3002",paraId:11},{value:`import { PxCard } from '@duheng1992/pixel-ui-react';

export default function App() {
  return (
    <PxCard style={{ width: 300 }}>
      <p>Welcome to PixelUI</p>
    </PxCard>
  )
}
`,paraId:12,tocIndex:5},{value:"\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5",paraId:13},{value:"\u{1F9E9} ",paraId:14,tocIndex:6},{value:"\u50CF\u7D20\u98CE\u683C\u6E32\u67D3",paraId:14,tocIndex:6},{value:"\uFF1A\u57FA\u4E8E CSS Houdini Paint Worklet \u5B9E\u73B0\u50CF\u7D20\u8FB9\u6846\u3001\u9634\u5F71\u7B49\u590D\u53E4\u89C6\u89C9\u6548\u679C\u3002",paraId:14,tocIndex:6},{value:"\u{1F4A1} ",paraId:14,tocIndex:6},{value:"\u9AD8\u5EA6\u53EF\u914D\u7F6E",paraId:14,tocIndex:6},{value:"\uFF1A\u652F\u6301\u901A\u8FC7 CSS \u81EA\u5B9A\u4E49\u5C5E\u6027\u8C03\u6574\u50CF\u7D20\u5927\u5C0F\u3001\u989C\u8272\u3001\u5706\u89D2\u7B49\u53C2\u6570\u3002",paraId:14,tocIndex:6},{value:"\u{1F3AE} ",paraId:14,tocIndex:6},{value:"\u5185\u7F6E\u50CF\u7D20\u5B57\u4F53",paraId:14,tocIndex:6},{value:"\uFF1A\u5185\u7F6E\u590D\u53E4\u50CF\u7D20\u98CE\u5B57\u4F53\uFF0C\u517C\u5BB9\u591A\u8BED\u8A00\u6E32\u67D3\uFF0C\u4E5F\u652F\u6301\u81EA\u5B9A\u4E49\u6CE8\u518C\u5B57\u4F53\u3002",paraId:14,tocIndex:6},{value:"\u{1F4E6} ",paraId:14,tocIndex:6},{value:"\u652F\u6301\u5168\u91CF\u4E0E\u6309\u9700\u5F15\u5165",paraId:14,tocIndex:6},{value:"\uFF1A\u5177\u5907\u826F\u597D Tree Shaking \u652F\u6301\uFF0C\u9002\u7528\u4E8E\u5927\u578B\u9879\u76EE\u7CBE\u7EC6\u5F15\u5165\u3002",paraId:14,tocIndex:6},{value:"\u{1F9EA} ",paraId:14,tocIndex:6},{value:"Vitest \u6D4B\u8BD5\u9A71\u52A8\u5F00\u53D1",paraId:14,tocIndex:6},{value:"\uFF1A\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u5177\u5907\u9AD8\u8986\u76D6\u7387\u6D4B\u8BD5\uFF0C\u786E\u4FDD\u7A33\u5B9A\u6027\u3002",paraId:14,tocIndex:6},{value:"\u{1F4D6} ",paraId:14,tocIndex:6},{value:"dumi \u6587\u6863\u7CFB\u7EDF",paraId:14,tocIndex:6},{value:"\uFF1A\u65E2\u6709 API \u8BF4\u660E\uFF0C\u4E5F\u6709\u4EA4\u4E92\u793A\u4F8B\uFF0C\u5B66\u4E60\u66F2\u7EBF\u4F4E\u3002",paraId:14,tocIndex:6},{value:"\u{1F6E0} ",paraId:14,tocIndex:6},{value:"Monorepo \u67B6\u6784",paraId:14,tocIndex:6},{value:"\uFF1A\u5206\u5305\u6784\u5EFA\u6E05\u6670\u72EC\u7ACB\uFF0C\u4FBF\u4E8E\u6269\u5C55\u3001\u7EF4\u62A4\u4E0E\u7BA1\u7406\u3002",paraId:14,tocIndex:6},{value:"\u2699\uFE0F ",paraId:14,tocIndex:6},{value:"CI/CD \u81EA\u52A8\u5316\u90E8\u7F72",paraId:14,tocIndex:6},{value:"\uFF1A\u7ED3\u5408 GitHub Actions \u5B9E\u73B0\u53D1\u5E03\u6D41\u7A0B\u81EA\u52A8\u5316\u3002",paraId:14,tocIndex:6},{value:"\u{1F916} ",paraId:14,tocIndex:6},{value:"AI \u8F85\u52A9\u8BBE\u8BA1\u4E0E\u6784\u5EFA",paraId:14,tocIndex:6},{value:"\uFF1A\u7ED3\u5408 AI \u52A9\u624B\u5B8C\u6210\u90E8\u5206\u8BBE\u8BA1\u4E0E\u5DE5\u7A0B\u6D41\u7A0B\uFF0C\u63D0\u5347\u6548\u7387\u3002",paraId:14,tocIndex:6}]},85916:function(oe,D,e){e.r(D),e.d(D,{PxButton:function(){return _t},PxButtonGroup:function(){return Ea},PxConfigProvider:function(){return za},PxIcon:function(){return De},PxInput:function(){return ka},PxOverlay:function(){return Ba},PxPopconfirm:function(){return Fa},PxText:function(){return da},PxTooltip:function(){return lr},buttonNativeTypes:function(){return Ia},buttonSizes:function(){return ba},buttonTypes:function(){return Pa},effectTypes:function(){return Ma},en:function(){return Ht},iconTypes:function(){return va},inputSizes:function(){return Ca},ja:function(){return ur},registerPaintWorklets:function(){return mr},textAligns:function(){return ca},textTypes:function(){return ua},triggerTypes:function(){return Oa},zhCN:function(){return ir},zhTW:function(){return sr}});var m=e(21077),ce,I,ge={exports:{}},B={},z={};ge.exports=function(){if(ce)return B;ce=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function l(u,p,x){var g=null;if(x!==void 0&&(g=""+x),p.key!==void 0&&(g=""+p.key),"key"in p)for(var b in x={},p)b!=="key"&&(x[b]=p[b]);else x=p;return p=x.ref,{$$typeof:r,type:u,key:g,ref:p!==void 0?p:null,props:x}}return B.Fragment=n,B.jsx=l,B.jsxs=l,B}();var P=ge.exports,O=typeof global=="object"&&global&&global.Object===Object&&global,T=typeof self=="object"&&self&&self.Object===Object&&self,C=O||T||Function("return this")(),o=C.Symbol,c=Object.prototype,t=c.hasOwnProperty,d=c.toString,a=o?o.toStringTag:void 0,h=Object.prototype.toString,i=o?o.toStringTag:void 0;function y(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":i&&i in Object(r)?function(n){var l=t.call(n,a),u=n[a];try{n[a]=void 0;var p=!0}catch(g){}var x=d.call(n);return p&&(l?n[a]=u:delete n[a]),x}(r):function(n){return h.call(n)}(r)}function f(r){return r!=null&&typeof r=="object"}var _=Array.isArray,U=/\s/,V=/^\s+/;function K(r){var n=typeof r;return r!=null&&(n=="object"||n=="function")}var Y=/^[-+]0x[0-9a-f]+$/i,G=/^0b[01]+$/i,ne=/^0o[0-7]+$/i,re=parseInt;function Pe(r){if(typeof r=="number")return r;if(function(p){return typeof p=="symbol"||f(p)&&y(p)=="[object Symbol]"}(r))return NaN;if(K(r)){var n=typeof r.valueOf=="function"?r.valueOf():r;r=K(n)?n+"":n}if(typeof r!="string")return r===0?r:+r;var l;r=(l=r)?l.slice(0,function(p){for(var x=p.length;x--&&U.test(p.charAt(x)););return x}(l)+1).replace(V,""):l;var u=G.test(r);return u||ne.test(r)?re(r.slice(2),u?2:8):Y.test(r)?NaN:+r}var de=1/0;function pe(r){var n=function(u){return u?(u=Pe(u))===de||u===-1/0?17976931348623157e292*(u<0?-1:1):u==u?u:0:u===0?u:0}(r),l=n%1;return n==n?l?n-l:n:0}function me(r){return r}function Me(r){if(!K(r))return!1;var n=y(r);return n=="[object Function]"||n=="[object GeneratorFunction]"||n=="[object AsyncFunction]"||n=="[object Proxy]"}var be,Bt=C["__core-js_shared__"],Yt=(be=/[^.]+$/.exec(Bt&&Bt.keys&&Bt.keys.IE_PROTO||""))?"Symbol(src)_1."+be:"",yr=Function.prototype.toString,Pr=/^\[object .+?Constructor\]$/,Ir=Function.prototype,br=Object.prototype,Er=Ir.toString,Br=br.hasOwnProperty,Cr=RegExp("^"+Er.call(Br).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function it(r,n){var l=function(u,p){return u==null?void 0:u[p]}(r,n);return function(u){return!(!K(u)||(p=u,Yt&&Yt in p))&&(Me(u)?Cr:Pr).test(function(x){if(x!=null){try{return yr.call(x)}catch(g){}try{return x+""}catch(g){}}return""}(u));var p}(l)?l:void 0}var Qt=it(C,"WeakMap"),st=Qt&&new Qt,Xt=st?function(r,n){return st.set(r,n),r}:me,Zt=Object.create,ut=function(){function r(){}return function(n){if(!K(n))return{};if(Zt)return Zt(n);r.prototype=n;var l=new r;return r.prototype=void 0,l}}();function Xe(r){return function(){var n=arguments;switch(n.length){case 0:return new r;case 1:return new r(n[0]);case 2:return new r(n[0],n[1]);case 3:return new r(n[0],n[1],n[2]);case 4:return new r(n[0],n[1],n[2],n[3]);case 5:return new r(n[0],n[1],n[2],n[3],n[4]);case 6:return new r(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new r(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var l=ut(r.prototype),u=r.apply(l,n);return K(u)?u:l}}function Ct(r,n,l){switch(l.length){case 0:return r.call(n);case 1:return r.call(n,l[0]);case 2:return r.call(n,l[0],l[1]);case 3:return r.call(n,l[0],l[1],l[2])}return r.apply(n,l)}var kr=Math.max;function qt(r,n,l,u){for(var p=-1,x=r.length,g=l.length,b=-1,w=n.length,M=kr(x-g,0),k=Array(w+M),F=!u;++b<w;)k[b]=n[b];for(;++p<g;)(F||p<x)&&(k[l[p]]=r[p]);for(;M--;)k[b++]=r[p++];return k}var Tr=Math.max;function en(r,n,l,u){for(var p=-1,x=r.length,g=-1,b=l.length,w=-1,M=n.length,k=Tr(x-b,0),F=Array(k+M),$=!u;++p<k;)F[p]=r[p];for(var W=p;++w<M;)F[W+w]=n[w];for(;++g<b;)($||p<x)&&(F[W+l[g]]=r[p++]);return F}function kt(){}function Ve(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}Ve.prototype=ut(kt.prototype),Ve.prototype.constructor=Ve;var tn=st?function(r){return st.get(r)}:function(){},nn={},wr=Object.prototype.hasOwnProperty;function Ge(r,n){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=void 0}function Tt(r,n){var l=-1,u=r.length;for(n||(n=Array(u));++l<u;)n[l]=r[l];return n}Ge.prototype=ut(kt.prototype),Ge.prototype.constructor=Ge;var Or=Object.prototype.hasOwnProperty;function ct(r){if(f(r)&&!_(r)&&!(r instanceof Ve)){if(r instanceof Ge)return r;if(Or.call(r,"__wrapped__"))return function(n){if(n instanceof Ve)return n.clone();var l=new Ge(n.__wrapped__,n.__chain__);return l.__actions__=Tt(n.__actions__),l.__index__=n.__index__,l.__values__=n.__values__,l}(r)}return new Ge(r)}ct.prototype=kt.prototype,ct.prototype.constructor=ct;var Mr=Date.now;function rn(r){var n=0,l=0;return function(){var u=Mr(),p=16-(u-l);if(l=u,p>0){if(++n>=800)return arguments[0]}else n=0;return r.apply(void 0,arguments)}}var an=rn(Xt),Sr=/\{\n\/\* \[wrapped with (.+)\] \*/,Rr=/,? & /,$r=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,dt=function(){try{var r=it(Object,"defineProperty");return r({},"",{}),r}catch(n){}}(),Nr=dt?function(r,n){return dt(r,"toString",{configurable:!0,enumerable:!1,value:(l=n,function(){return l}),writable:!0});var l}:me,on=rn(Nr);function ln(r,n){for(var l=-1,u=r==null?0:r.length;++l<u&&n(r[l],l,r)!==!1;);return r}function Dr(r){return r!=r}var jr=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]];function sn(r,n,l){var u=n+"";return on(r,function(p,x){var g=x.length;if(!g)return p;var b=g-1;return x[b]=(g>1?"& ":"")+x[b],x=x.join(g>2?", ":" "),p.replace($r,`{
/* [wrapped with `+x+`] */
`)}(u,function(p,x){return ln(jr,function(g){var b="_."+g[0];x&g[1]&&!function(w,M){return!(w==null||!w.length)&&function(k,F){return F==F?function($,W){for(var H=-1,Q=$.length;++H<Q;)if($[H]===W)return H;return-1}(k,F):function($,W){for(var H=$.length,Q=-1;++Q<H;)if(W($[Q],Q,$))return Q;return-1}(k,Dr)}(w,M)>-1}(p,b)&&p.push(b)}),p.sort()}(function(p){var x=p.match(Sr);return x?x[1].split(Rr):[]}(u),l)))}function un(r,n,l,u,p,x,g,b,w,M){var k=8&n;n|=k?32:64,4&(n&=~(k?64:32))||(n&=-4);var F=[r,n,p,k?x:void 0,k?g:void 0,k?void 0:x,k?void 0:g,b,w,M],$=l.apply(void 0,F);return function(W){var H=function(j){for(var v=j.name+"",N=nn[v],S=wr.call(nn,v)?N.length:0;S--;){var E=N[S],J=E.func;if(J==null||J==j)return E.name}return v}(W),Q=ct[H];if(typeof Q!="function"||!(H in Ve.prototype))return!1;if(W===Q)return!0;var A=tn(Q);return!!A&&W===A[0]}(r)&&an($,F),$.placeholder=u,sn($,r,n)}function wt(r){return r.placeholder}var Lr=/^(?:0|[1-9]\d*)$/;function Ot(r,n){var l=typeof r;return!!(n=n==null?9007199254740991:n)&&(l=="number"||l!="symbol"&&Lr.test(r))&&r>-1&&r%1==0&&r<n}var Ar=Math.min,cn="__lodash_placeholder__";function Ze(r,n){for(var l=-1,u=r.length,p=0,x=[];++l<u;){var g=r[l];g!==n&&g!==cn||(r[l]=cn,x[p++]=l)}return x}function Mt(r,n,l,u,p,x,g,b,w,M){var k=128&n,F=1&n,$=2&n,W=24&n,H=512&n,Q=$?void 0:Xe(r);return function A(){for(var j=arguments.length,v=Array(j),N=j;N--;)v[N]=arguments[N];if(W)var S=wt(A),E=function(Z,ee){for(var ae=Z.length,q=0;ae--;)Z[ae]===ee&&++q;return q}(v,S);if(u&&(v=qt(v,u,p,W)),x&&(v=en(v,x,g,W)),j-=E,W&&j<M){var J=Ze(v,S);return un(r,n,Mt,A.placeholder,l,v,J,b,w,M-j)}var R=F?l:this,X=$?R[r]:r;return j=v.length,b?v=function(Z,ee){for(var ae=Z.length,q=Ar(ee.length,ae),ie=Tt(Z);q--;){var ue=ee[q];Z[q]=Ot(ue,ae)?ie[ue]:void 0}return Z}(v,b):H&&j>1&&v.reverse(),k&&w<j&&(v.length=w),this&&this!==C&&this instanceof A&&(X=Q||Xe(X)),X.apply(R,v)}}var dn="__lodash_placeholder__",zr=Math.min,pn=Math.max;function St(r,n,l){n=="__proto__"&&dt?dt(r,n,{configurable:!0,enumerable:!0,value:l,writable:!0}):r[n]=l}function pt(r,n){return r===n||r!=r&&n!=n}var Fr=Object.prototype.hasOwnProperty;function Wr(r,n,l){var u=r[n];Fr.call(r,n)&&pt(u,l)&&(l!==void 0||n in r)||St(r,n,l)}var mn=Math.max;function xn(r,n){return on(function(l,u,p){return u=mn(u===void 0?l.length-1:u,0),function(){for(var x=arguments,g=-1,b=mn(x.length-u,0),w=Array(b);++g<b;)w[g]=x[u+g];g=-1;for(var M=Array(u+1);++g<u;)M[g]=x[g];return M[u]=p(w),Ct(l,this,M)}}(r,n,me),r+"")}function hn(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=9007199254740991}function qe(r){return r!=null&&hn(r.length)&&!Me(r)}var Kr=Object.prototype;function Rt(r){var n=r&&r.constructor;return r===(typeof n=="function"&&n.prototype||Kr)}function fn(r){return f(r)&&y(r)=="[object Arguments]"}var gn=Object.prototype,Ur=gn.hasOwnProperty,_r=gn.propertyIsEnumerable,$t=fn(function(){return arguments}())?fn:function(r){return f(r)&&Ur.call(r,"callee")&&!_r.call(r,"callee")},vn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,yn=vn&&typeof module=="object"&&module&&!module.nodeType&&module,Pn=yn&&yn.exports===vn?C.Buffer:void 0,In=(Pn?Pn.isBuffer:void 0)||function(){return!1},se={};se["[object Float32Array]"]=se["[object Float64Array]"]=se["[object Int8Array]"]=se["[object Int16Array]"]=se["[object Int32Array]"]=se["[object Uint8Array]"]=se["[object Uint8ClampedArray]"]=se["[object Uint16Array]"]=se["[object Uint32Array]"]=!0,se["[object Arguments]"]=se["[object Array]"]=se["[object ArrayBuffer]"]=se["[object Boolean]"]=se["[object DataView]"]=se["[object Date]"]=se["[object Error]"]=se["[object Function]"]=se["[object Map]"]=se["[object Number]"]=se["[object Object]"]=se["[object RegExp]"]=se["[object Set]"]=se["[object String]"]=se["[object WeakMap]"]=!1;var bn,En=typeof exports=="object"&&exports&&!exports.nodeType&&exports,et=En&&typeof module=="object"&&module&&!module.nodeType&&module,Nt=et&&et.exports===En&&O.process,Bn=function(){try{return et&&et.require&&et.require("util").types||Nt&&Nt.binding&&Nt.binding("util")}catch(r){}}(),Cn=Bn&&Bn.isTypedArray,kn=Cn?(bn=Cn,function(r){return bn(r)}):function(r){return f(r)&&hn(r.length)&&!!se[y(r)]},Hr=Object.prototype.hasOwnProperty;function Tn(r,n){var l=_(r),u=!l&&$t(r),p=!l&&!u&&In(r),x=!l&&!u&&!p&&kn(r),g=l||u||p||x,b=g?function(k,F){for(var $=-1,W=Array(k);++$<k;)W[$]=F($);return W}(r.length,String):[],w=b.length;for(var M in r)!n&&!Hr.call(r,M)||g&&(M=="length"||p&&(M=="offset"||M=="parent")||x&&(M=="buffer"||M=="byteLength"||M=="byteOffset")||Ot(M,w))||b.push(M);return b}function wn(r,n){return function(l){return r(n(l))}}var Vr=wn(Object.keys,Object),Gr=Object.prototype.hasOwnProperty;function Jr(r){return qe(r)?Tn(r):function(n){if(!Rt(n))return Vr(n);var l=[];for(var u in Object(n))Gr.call(n,u)&&u!="constructor"&&l.push(u);return l}(r)}var Yr=Object.prototype.hasOwnProperty;function On(r){return qe(r)?Tn(r,!0):function(n){if(!K(n))return function(x){var g=[];if(x!=null)for(var b in Object(x))g.push(b);return g}(n);var l=Rt(n),u=[];for(var p in n)(p!="constructor"||!l&&Yr.call(n,p))&&u.push(p);return u}(r)}var tt=it(Object,"create"),Qr=Object.prototype.hasOwnProperty,Xr=Object.prototype.hasOwnProperty;function Ue(r){var n=-1,l=r==null?0:r.length;for(this.clear();++n<l;){var u=r[n];this.set(u[0],u[1])}}function mt(r,n){for(var l=r.length;l--;)if(pt(r[l][0],n))return l;return-1}Ue.prototype.clear=function(){this.__data__=tt?tt(null):{},this.size=0},Ue.prototype.delete=function(r){var n=this.has(r)&&delete this.__data__[r];return this.size-=n?1:0,n},Ue.prototype.get=function(r){var n=this.__data__;if(tt){var l=n[r];return l==="__lodash_hash_undefined__"?void 0:l}return Qr.call(n,r)?n[r]:void 0},Ue.prototype.has=function(r){var n=this.__data__;return tt?n[r]!==void 0:Xr.call(n,r)},Ue.prototype.set=function(r,n){var l=this.__data__;return this.size+=this.has(r)?0:1,l[r]=tt&&n===void 0?"__lodash_hash_undefined__":n,this};var Zr=Array.prototype.splice;function Ne(r){var n=-1,l=r==null?0:r.length;for(this.clear();++n<l;){var u=r[n];this.set(u[0],u[1])}}Ne.prototype.clear=function(){this.__data__=[],this.size=0},Ne.prototype.delete=function(r){var n=this.__data__,l=mt(n,r);return!(l<0||(l==n.length-1?n.pop():Zr.call(n,l,1),--this.size,0))},Ne.prototype.get=function(r){var n=this.__data__,l=mt(n,r);return l<0?void 0:n[l][1]},Ne.prototype.has=function(r){return mt(this.__data__,r)>-1},Ne.prototype.set=function(r,n){var l=this.__data__,u=mt(l,r);return u<0?(++this.size,l.push([r,n])):l[u][1]=n,this};var Mn=it(C,"Map");function xt(r,n){var l,u,p=r.__data__;return((u=typeof(l=n))=="string"||u=="number"||u=="symbol"||u=="boolean"?l!=="__proto__":l===null)?p[typeof n=="string"?"string":"hash"]:p.map}function Je(r){var n=-1,l=r==null?0:r.length;for(this.clear();++n<l;){var u=r[n];this.set(u[0],u[1])}}Je.prototype.clear=function(){this.size=0,this.__data__={hash:new Ue,map:new(Mn||Ne),string:new Ue}},Je.prototype.delete=function(r){var n=xt(this,r).delete(r);return this.size-=n?1:0,n},Je.prototype.get=function(r){return xt(this,r).get(r)},Je.prototype.has=function(r){return xt(this,r).has(r)},Je.prototype.set=function(r,n){var l=xt(this,r),u=l.size;return l.set(r,n),this.size+=l.size==u?0:1,this};var Sn=wn(Object.getPrototypeOf,Object),qr=Function.prototype,ea=Object.prototype,Rn=qr.toString,ta=ea.hasOwnProperty,na=Rn.call(Object);function $n(r){if(!f(r)||y(r)!="[object Object]")return!1;var n=Sn(r);if(n===null)return!0;var l=ta.call(n,"constructor")&&n.constructor;return typeof l=="function"&&l instanceof l&&Rn.call(l)==na}var ht=xn(function(r,n,l){var u=1;if(l.length){var p=Ze(l,wt(ht));u|=32}return function(x,g,b,w,M,k,F,$){var W=2&g;if(!W&&typeof x!="function")throw new TypeError("Expected a function");var H=w?w.length:0;if(H||(g&=-97,w=M=void 0),F=F===void 0?F:pn(pe(F),0),$=$===void 0?$:pe($),H-=M?M.length:0,64&g){var Q=w,A=M;w=M=void 0}var j=W?void 0:tn(x),v=[x,g,b,w,M,Q,A,void 0,F,$];if(j&&function(S,E){var J=S[1],R=E[1],X=J|R,Z=X<131,ee=R==128&&J==8||R==128&&J==256&&S[7].length<=E[8]||R==384&&E[7].length<=E[8]&&J==8;if(!Z&&!ee)return S;1&R&&(S[2]=E[2],X|=1&J?0:4);var ae=E[3];if(ae){var q=S[3];S[3]=q?qt(q,ae,E[4]):ae,S[4]=q?Ze(S[3],dn):E[4]}(ae=E[5])&&(q=S[5],S[5]=q?en(q,ae,E[6]):ae,S[6]=q?Ze(S[5],dn):E[6]),(ae=E[7])&&(S[7]=ae),128&R&&(S[8]=S[8]==null?E[8]:zr(S[8],E[8])),S[9]==null&&(S[9]=E[9]),S[0]=E[0],S[1]=X}(v,j),x=v[0],g=v[1],b=v[2],w=v[3],M=v[4],!($=v[9]=v[9]===void 0?W?0:x.length:pn(v[9]-H,0))&&24&g&&(g&=-25),g&&g!=1)N=g==8||g==16?function(S,E,J){var R=Xe(S);return function X(){for(var Z=arguments.length,ee=Array(Z),ae=Z,q=wt(X);ae--;)ee[ae]=arguments[ae];var ie=Z<3&&ee[0]!==q&&ee[Z-1]!==q?[]:Ze(ee,q);return(Z-=ie.length)<J?un(S,E,Mt,X.placeholder,void 0,ee,ie,void 0,void 0,J-Z):Ct(this&&this!==C&&this instanceof X?R:S,this,ee)}}(x,g,$):g!=32&&g!=33||M.length?Mt.apply(void 0,v):function(S,E,J,R){var X=1&E,Z=Xe(S);return function ee(){for(var ae=-1,q=arguments.length,ie=-1,ue=R.length,he=Array(ue+q),Ce=this&&this!==C&&this instanceof ee?Z:S;++ie<ue;)he[ie]=R[ie];for(;q--;)he[ie++]=arguments[++ae];return Ct(Ce,X?J:this,he)}}(x,g,b,w);else var N=function(S,E,J){var R=1&E,X=Xe(S);return function Z(){return(this&&this!==C&&this instanceof Z?X:S).apply(R?J:this,arguments)}}(x,g,b);return sn((j?Xt:an)(N,v),x,g)}(r,u,n,l,p)});function Ye(r){var n=this.__data__=new Ne(r);this.size=n.size}ht.placeholder={},Ye.prototype.clear=function(){this.__data__=new Ne,this.size=0},Ye.prototype.delete=function(r){var n=this.__data__,l=n.delete(r);return this.size=n.size,l},Ye.prototype.get=function(r){return this.__data__.get(r)},Ye.prototype.has=function(r){return this.__data__.has(r)},Ye.prototype.set=function(r,n){var l=this.__data__;if(l instanceof Ne){var u=l.__data__;if(!Mn||u.length<199)return u.push([r,n]),this.size=++l.size,this;l=this.__data__=new Je(u)}return l.set(r,n),this.size=l.size,this},typeof exports=="object"&&exports&&!exports.nodeType&&exports&&typeof module=="object"&&module&&!module.nodeType&&module;var Nn,Dn=C.Uint8Array,jn=function(r,n,l){for(var u=-1,p=Object(r),x=l(r),g=x.length;g--;){var b=x[++u];if(n(p[b],b,p)===!1)break}return r},ra=(Nn=function(r,n){return r&&jn(r,n,Jr)},function(r,n){if(r==null)return r;if(!qe(r))return Nn(r,n);for(var l=r.length,u=-1,p=Object(r);++u<l&&n(p[u],u,p)!==!1;);return r}),Dt=function(){return C.Date.now()},aa=Math.max,oa=Math.min;function jt(r,n,l){var u,p,x,g,b,w,M=0,k=!1,F=!1,$=!0;if(typeof r!="function")throw new TypeError("Expected a function");function W(v){var N=u,S=p;return u=p=void 0,M=v,g=r.apply(S,N)}function H(v){var N=v-w;return w===void 0||N>=n||N<0||F&&v-M>=x}function Q(){var v=Dt();if(H(v))return A(v);b=setTimeout(Q,function(N){var S=n-(N-w);return F?oa(S,x-(N-M)):S}(v))}function A(v){return b=void 0,$&&u?W(v):(u=p=void 0,g)}function j(){var v=Dt(),N=H(v);if(u=arguments,p=this,w=v,N){if(b===void 0)return function(S){return M=S,b=setTimeout(Q,n),k?W(S):g}(w);if(F)return clearTimeout(b),b=setTimeout(Q,n),W(w)}return b===void 0&&(b=setTimeout(Q,n)),g}return n=Pe(n)||0,K(l)&&(k=!!l.leading,x=(F="maxWait"in l)?aa(Pe(l.maxWait)||0,n):x,$="trailing"in l?!!l.trailing:$),j.cancel=function(){b!==void 0&&clearTimeout(b),M=0,u=w=p=b=void 0},j.flush=function(){return b===void 0?g:A(Dt())},j}function Lt(r,n,l){(l!==void 0&&!pt(r[n],l)||l===void 0&&!(n in r))&&St(r,n,l)}function At(r,n){if((n!=="constructor"||typeof r[n]!="function")&&n!="__proto__")return r[n]}function Ln(r,n,l,u,p){r!==n&&jn(n,function(x,g){if(p||(p=new Ye),K(x))(function(w,M,k,F,$,W,H){var Q,A,j,v,N=At(w,k),S=At(M,k),E=H.get(S);if(E)Lt(w,k,E);else{var J,R=W?W(N,S,k+"",w,M,H):void 0,X=R===void 0;if(X){var Z=_(S),ee=!Z&&In(S),ae=!Z&&!ee&&kn(S);R=S,Z||ee||ae?_(N)?R=N:f(J=N)&&qe(J)?R=Tt(N):ee?(X=!1,R=S.slice()):ae?(X=!1,j=new(A=(Q=S).buffer).constructor(A.byteLength),new Dn(j).set(new Dn(A)),v=j,R=new Q.constructor(v,Q.byteOffset,Q.length)):R=[]:$n(S)||$t(S)?(R=N,$t(N)?R=function(q){return function(ie,ue,he){var Ce=!he;he||(he={});for(var $e=-1,Oe=ue.length;++$e<Oe;){var ke=ue[$e],L=void 0;L===void 0&&(L=ie[ke]),Ce?St(he,ke,L):Wr(he,ke,L)}return he}(q,On(q))}(N):K(N)&&!Me(N)||(R=function(q){return typeof q.constructor!="function"||Rt(q)?{}:ut(Sn(q))}(S))):X=!1}X&&(H.set(S,R),$(R,S,F,W,H),H.delete(S)),Lt(w,k,R)}})(r,n,g,l,Ln,u,p);else{var b=u?u(At(r,g),x,g+"",r,n,p):void 0;b===void 0&&(b=x),Lt(r,g,b)}},On)}function An(r,n){var l;return(_(r)?ln:ra)(r,typeof(l=n)=="function"?l:me)}function zn(r){return typeof r=="string"||!_(r)&&f(r)&&y(r)=="[object String]"}function Fn(r){return f(r)&&r.nodeType===1&&!$n(r)}function la(r){return typeof r=="number"||f(r)&&y(r)=="[object Number]"}var zt,ia=(zt=function(r,n,l){Ln(r,n,l)},xn(function(r,n){var l=-1,u=n.length,p=u>1?n[u-1]:void 0,x=u>2?n[2]:void 0;for(p=zt.length>3&&typeof p=="function"?(u--,p):void 0,x&&function(b,w,M){if(!K(M))return!1;var k=typeof w;return!!(k=="number"?qe(M)&&Ot(w,M.length):k=="string"&&w in M)&&pt(M[w],b)}(n[0],n[1],x)&&(p=u<3?void 0:p,u=1),r=Object(r);++l<u;){var g=n[l];g&&zt(r,g,l)}return r}));function sa(r,n,l){var u=!0,p=!0;if(typeof r!="function")throw new TypeError("Expected a function");return K(l)&&(u="leading"in l?!!l.leading:u,p=!("trailing"in l)&&p),jt(r,n,{leading:u,maxWait:n,trailing:p})}const Ft={"px-text--base":"_px-text--base_q4sgd_1","px-text--primary":"_px-text--primary_q4sgd_4","px-text--success":"_px-text--success_q4sgd_7","px-text--warning":"_px-text--warning_q4sgd_10","px-text--danger":"_px-text--danger_q4sgd_13","px-text--sakura":"_px-text--sakura_q4sgd_16","is-compact":"_is-compact_q4sgd_19"},Wn=r=>{const{size:n=14,bold:l=!1,color:u,align:p,tag:x="span",compact:g=!1,type:b="base",style:w={},children:M}=r,k=x,F=(0,m.useMemo)(()=>Re({color:u!=null?u:void 0,fontSize:`${n}px`,fontWeight:l?"bold":void 0,textAlign:p!=null?p:void 0},w),[u,n,l,p,w]),$=["px-text",Ft["px-text"],b?Ft[`px-text--${b}`]:"",g?Ft["is-compact"]:""].filter(Boolean).join(" ");return P.jsx(k,{className:$,style:F,children:M})};Wn.displayName="PxText";const ua=["primary","success","warning","danger","base","sakura"],ca=["left","center","right"],da=(0,m.memo)(Wn);function ye(r,n){(function(u){return typeof u=="string"&&u.indexOf(".")!==-1&&parseFloat(u)===1})(r)&&(r="100%");const l=function(u){return typeof u=="string"&&u.indexOf("%")!==-1}(r);return r=n===360?r:Math.min(n,Math.max(0,parseFloat(r))),l&&(r=parseInt(String(r*n),10)/100),Math.abs(r-n)<1e-6?1:r=n===360?(r<0?r%n+n:r%n)/parseFloat(String(n)):r%n/parseFloat(String(n))}function ft(r){return Math.min(1,Math.max(0,r))}function Kn(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function gt(r){return Number(r)<=1?100*Number(r)+"%":r}function _e(r){return r.length===1?"0"+r:String(r)}function Un(r,n,l){r=ye(r,255),n=ye(n,255),l=ye(l,255);const u=Math.max(r,n,l),p=Math.min(r,n,l);let x=0,g=0;const b=(u+p)/2;if(u===p)g=0,x=0;else{const w=u-p;switch(g=b>.5?w/(2-u-p):w/(u+p),u){case r:x=(n-l)/w+(n<l?6:0);break;case n:x=(l-r)/w+2;break;case l:x=(r-n)/w+4}x/=6}return{h:x,s:g,l:b}}function Wt(r,n,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?r+6*l*(n-r):l<.5?n:l<2/3?r+(n-r)*(2/3-l)*6:r}function _n(r,n,l){r=ye(r,255),n=ye(n,255),l=ye(l,255);const u=Math.max(r,n,l),p=Math.min(r,n,l);let x=0;const g=u,b=u-p,w=u===0?0:b/u;if(u===p)x=0;else{switch(u){case r:x=(n-l)/b+(n<l?6:0);break;case n:x=(l-r)/b+2;break;case l:x=(r-n)/b+4}x/=6}return{h:x,s:w,v:g}}function Hn(r,n,l,u){const p=[_e(Math.round(r).toString(16)),_e(Math.round(n).toString(16)),_e(Math.round(l).toString(16))];return u&&p[0].startsWith(p[0].charAt(1))&&p[1].startsWith(p[1].charAt(1))&&p[2].startsWith(p[2].charAt(1))?p[0].charAt(0)+p[1].charAt(0)+p[2].charAt(0):p.join("")}function Vn(r,n,l){let u=1-r/255,p=1-n/255,x=1-l/255,g=Math.min(u,p,x);return g===1?(u=0,p=0,x=0):(u=(u-g)/(1-g)*100,p=(p-g)/(1-g)*100,x=(x-g)/(1-g)*100),g*=100,{c:Math.round(u),m:Math.round(p),y:Math.round(x),k:Math.round(g)}}function Gn(r){return Ee(r)/255}function Ee(r){return parseInt(r,16)}const Kt={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Ae="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",Ut="[\\s|\\(]+("+Ae+")[,|\\s]+("+Ae+")[,|\\s]+("+Ae+")\\s*\\)?",vt="[\\s|\\(]+("+Ae+")[,|\\s]+("+Ae+")[,|\\s]+("+Ae+")[,|\\s]+("+Ae+")\\s*\\)?",Te={CSS_UNIT:new RegExp(Ae),rgb:new RegExp("rgb"+Ut),rgba:new RegExp("rgba"+vt),hsl:new RegExp("hsl"+Ut),hsla:new RegExp("hsla"+vt),hsv:new RegExp("hsv"+Ut),hsva:new RegExp("hsva"+vt),cmyk:new RegExp("cmyk"+vt),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Be(r){return typeof r=="number"?!Number.isNaN(r):Te.CSS_UNIT.test(r)}class xe{constructor(n="",l={}){var p;if(n instanceof xe)return n;typeof n=="number"&&(n=function(x){return{r:x>>16,g:(65280&x)>>8,b:255&x}}(n)),this.originalInput=n;const u=function(x){let g={r:0,g:0,b:0},b=1,w=null,M=null,k=null,F=!1,$=!1;var W,H,Q;return typeof x=="string"&&(x=function(A){if((A=A.trim().toLowerCase()).length===0)return!1;let j=!1;if(Kt[A])A=Kt[A],j=!0;else if(A==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let v=Te.rgb.exec(A);return v?{r:v[1],g:v[2],b:v[3]}:(v=Te.rgba.exec(A),v?{r:v[1],g:v[2],b:v[3],a:v[4]}:(v=Te.hsl.exec(A),v?{h:v[1],s:v[2],l:v[3]}:(v=Te.hsla.exec(A),v?{h:v[1],s:v[2],l:v[3],a:v[4]}:(v=Te.hsv.exec(A),v?{h:v[1],s:v[2],v:v[3]}:(v=Te.hsva.exec(A),v?{h:v[1],s:v[2],v:v[3],a:v[4]}:(v=Te.cmyk.exec(A),v?{c:v[1],m:v[2],y:v[3],k:v[4]}:(v=Te.hex8.exec(A),v?{r:Ee(v[1]),g:Ee(v[2]),b:Ee(v[3]),a:Gn(v[4]),format:j?"name":"hex8"}:(v=Te.hex6.exec(A),v?{r:Ee(v[1]),g:Ee(v[2]),b:Ee(v[3]),format:j?"name":"hex"}:(v=Te.hex4.exec(A),v?{r:Ee(v[1]+v[1]),g:Ee(v[2]+v[2]),b:Ee(v[3]+v[3]),a:Gn(v[4]+v[4]),format:j?"name":"hex8"}:(v=Te.hex3.exec(A),!!v&&{r:Ee(v[1]+v[1]),g:Ee(v[2]+v[2]),b:Ee(v[3]+v[3]),format:j?"name":"hex"}))))))))))}(x)),typeof x=="object"&&(Be(x.r)&&Be(x.g)&&Be(x.b)?(W=x.r,H=x.g,Q=x.b,g={r:255*ye(W,255),g:255*ye(H,255),b:255*ye(Q,255)},F=!0,$=String(x.r).substr(-1)==="%"?"prgb":"rgb"):Be(x.h)&&Be(x.s)&&Be(x.v)?(w=gt(x.s),M=gt(x.v),g=function(A,j,v){A=6*ye(A,360),j=ye(j,100),v=ye(v,100);const N=Math.floor(A),S=A-N,E=v*(1-j),J=v*(1-S*j),R=v*(1-(1-S)*j),X=N%6;return{r:255*[v,J,E,E,R,v][X],g:255*[R,v,v,J,E,E][X],b:255*[E,E,R,v,v,J][X]}}(x.h,w,M),F=!0,$="hsv"):Be(x.h)&&Be(x.s)&&Be(x.l)?(w=gt(x.s),k=gt(x.l),g=function(A,j,v){let N,S,E;if(A=ye(A,360),j=ye(j,100),v=ye(v,100),j===0)S=v,E=v,N=v;else{const J=v<.5?v*(1+j):v+j-v*j,R=2*v-J;N=Wt(R,J,A+1/3),S=Wt(R,J,A),E=Wt(R,J,A-1/3)}return{r:255*N,g:255*S,b:255*E}}(x.h,w,k),F=!0,$="hsl"):Be(x.c)&&Be(x.m)&&Be(x.y)&&Be(x.k)&&(g=function(A,j,v,N){const S=N/100;return{r:255*(1-A/100)*(1-S),g:255*(1-j/100)*(1-S),b:255*(1-v/100)*(1-S)}}(x.c,x.m,x.y,x.k),F=!0,$="cmyk"),Object.prototype.hasOwnProperty.call(x,"a")&&(b=x.a)),b=Kn(b),{ok:F,format:x.format||$,r:Math.min(255,Math.max(g.r,0)),g:Math.min(255,Math.max(g.g,0)),b:Math.min(255,Math.max(g.b,0)),a:b}}(n);this.originalInput=n,this.r=u.r,this.g=u.g,this.b=u.b,this.a=u.a,this.roundA=Math.round(100*this.a)/100,this.format=(p=l.format)!=null?p:u.format,this.gradientType=l.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=u.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const n=this.toRgb();return(299*n.r+587*n.g+114*n.b)/1e3}getLuminance(){const n=this.toRgb();let l,u,p;const x=n.r/255,g=n.g/255,b=n.b/255;return l=x<=.03928?x/12.92:Math.pow((x+.055)/1.055,2.4),u=g<=.03928?g/12.92:Math.pow((g+.055)/1.055,2.4),p=b<=.03928?b/12.92:Math.pow((b+.055)/1.055,2.4),.2126*l+.7152*u+.0722*p}getAlpha(){return this.a}setAlpha(n){return this.a=Kn(n),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:n}=this.toHsl();return n===0}toHsv(){const n=_n(this.r,this.g,this.b);return{h:360*n.h,s:n.s,v:n.v,a:this.a}}toHsvString(){const n=_n(this.r,this.g,this.b),l=Math.round(360*n.h),u=Math.round(100*n.s),p=Math.round(100*n.v);return this.a===1?`hsv(${l}, ${u}%, ${p}%)`:`hsva(${l}, ${u}%, ${p}%, ${this.roundA})`}toHsl(){const n=Un(this.r,this.g,this.b);return{h:360*n.h,s:n.s,l:n.l,a:this.a}}toHslString(){const n=Un(this.r,this.g,this.b),l=Math.round(360*n.h),u=Math.round(100*n.s),p=Math.round(100*n.l);return this.a===1?`hsl(${l}, ${u}%, ${p}%)`:`hsla(${l}, ${u}%, ${p}%, ${this.roundA})`}toHex(n=!1){return Hn(this.r,this.g,this.b,n)}toHexString(n=!1){return"#"+this.toHex(n)}toHex8(n=!1){return function(l,u,p,x,g){const b=[_e(Math.round(l).toString(16)),_e(Math.round(u).toString(16)),_e(Math.round(p).toString(16)),_e((w=x,Math.round(255*parseFloat(w)).toString(16)))];var w;return g&&b[0].startsWith(b[0].charAt(1))&&b[1].startsWith(b[1].charAt(1))&&b[2].startsWith(b[2].charAt(1))&&b[3].startsWith(b[3].charAt(1))?b[0].charAt(0)+b[1].charAt(0)+b[2].charAt(0)+b[3].charAt(0):b.join("")}(this.r,this.g,this.b,this.a,n)}toHex8String(n=!1){return"#"+this.toHex8(n)}toHexShortString(n=!1){return this.a===1?this.toHexString(n):this.toHex8String(n)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const n=Math.round(this.r),l=Math.round(this.g),u=Math.round(this.b);return this.a===1?`rgb(${n}, ${l}, ${u})`:`rgba(${n}, ${l}, ${u}, ${this.roundA})`}toPercentageRgb(){const n=l=>`${Math.round(100*ye(l,255))}%`;return{r:n(this.r),g:n(this.g),b:n(this.b),a:this.a}}toPercentageRgbString(){const n=l=>Math.round(100*ye(l,255));return this.a===1?`rgb(${n(this.r)}%, ${n(this.g)}%, ${n(this.b)}%)`:`rgba(${n(this.r)}%, ${n(this.g)}%, ${n(this.b)}%, ${this.roundA})`}toCmyk(){return Re({},Vn(this.r,this.g,this.b))}toCmykString(){const{c:n,m:l,y:u,k:p}=Vn(this.r,this.g,this.b);return`cmyk(${n}, ${l}, ${u}, ${p})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const n="#"+Hn(this.r,this.g,this.b,!1);for(const[l,u]of Object.entries(Kt))if(n===u)return l;return!1}toString(n){const l=!!n;n=n!=null?n:this.format;let u=!1;const p=this.a<1&&this.a>=0;return l||!p||!n.startsWith("hex")&&n!=="name"?(n==="rgb"&&(u=this.toRgbString()),n==="prgb"&&(u=this.toPercentageRgbString()),n!=="hex"&&n!=="hex6"||(u=this.toHexString()),n==="hex3"&&(u=this.toHexString(!0)),n==="hex4"&&(u=this.toHex8String(!0)),n==="hex8"&&(u=this.toHex8String()),n==="name"&&(u=this.toName()),n==="hsl"&&(u=this.toHslString()),n==="hsv"&&(u=this.toHsvString()),n==="cmyk"&&(u=this.toCmykString()),u||this.toHexString()):n==="name"&&this.a===0?this.toName():this.toRgbString()}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new xe(this.toString())}lighten(n=10){const l=this.toHsl();return l.l+=n/100,l.l=ft(l.l),new xe(l)}brighten(n=10){const l=this.toRgb();return l.r=Math.max(0,Math.min(255,l.r-Math.round(-n/100*255))),l.g=Math.max(0,Math.min(255,l.g-Math.round(-n/100*255))),l.b=Math.max(0,Math.min(255,l.b-Math.round(-n/100*255))),new xe(l)}darken(n=10){const l=this.toHsl();return l.l-=n/100,l.l=ft(l.l),new xe(l)}tint(n=10){return this.mix("white",n)}shade(n=10){return this.mix("black",n)}desaturate(n=10){const l=this.toHsl();return l.s-=n/100,l.s=ft(l.s),new xe(l)}saturate(n=10){const l=this.toHsl();return l.s+=n/100,l.s=ft(l.s),new xe(l)}greyscale(){return this.desaturate(100)}spin(n){const l=this.toHsl(),u=(l.h+n)%360;return l.h=u<0?360+u:u,new xe(l)}mix(n,l=50){const u=this.toRgb(),p=new xe(n).toRgb(),x=l/100,g={r:(p.r-u.r)*x+u.r,g:(p.g-u.g)*x+u.g,b:(p.b-u.b)*x+u.b,a:(p.a-u.a)*x+u.a};return new xe(g)}analogous(n=6,l=30){const u=this.toHsl(),p=360/l,x=[this];for(u.h=(u.h-(p*n>>1)+720)%360;--n;)u.h=(u.h+p)%360,x.push(new xe(u));return x}complement(){const n=this.toHsl();return n.h=(n.h+180)%360,new xe(n)}monochromatic(n=6){const l=this.toHsv(),{h:u}=l,{s:p}=l;let{v:x}=l;const g=[],b=1/n;for(;n--;)g.push(new xe({h:u,s:p,v:x})),x=(x+b)%1;return g}splitcomplement(){const n=this.toHsl(),{h:l}=n;return[this,new xe({h:(l+72)%360,s:n.s,l:n.l}),new xe({h:(l+216)%360,s:n.s,l:n.l})]}onBackground(n){const l=this.toRgb(),u=new xe(n).toRgb(),p=l.a+u.a*(1-l.a);return new xe({r:(l.r*l.a+u.r*u.a*(1-l.a))/p,g:(l.g*l.a+u.g*u.a*(1-l.a))/p,b:(l.b*l.a+u.b*u.a*(1-l.a))/p,a:p})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(n){const l=this.toHsl(),{h:u}=l,p=[this],x=360/n;for(let g=1;g<n;g++)p.push(new xe({h:(u+g*x)%360,s:l.s,l:l.l}));return p}equals(n){const l=new xe(n);return this.format==="cmyk"||l.format==="cmyk"?this.toCmykString()===l.toCmykString():this.toRgbString()===l.toRgbString()}}function Ie(r){return`--px-${r}`}function pa(r,n){return(0,m.useMemo)(()=>{const l={},u=n||r.color;if(!u)return l;let p=u;const x=p.match(/var\((--[^)]+)\)/);x&&(p=getComputedStyle(document.documentElement).getPropertyValue(x[1]).trim());const g=new xe(p),b=g.clone().desaturate(12).darken(12).toHexString(),w=g.isDark()?"var(--px-color-white)":"var(--px-color-base)";if(r.plain)Object.assign(l,{[Ie("plain-bg-color")]:g.tint(90).toString(),[Ie("text-color")]:p,[Ie("plain-border-color")]:g.tint(50).toString(),[Ie("hover-bg-color")]:p,[Ie("hover-text-color")]:w,[Ie("plain-bg-shadow-color")]:b}),r.disabled&&(l[Ie("disabled-bg-color")]=g.tint(90).toString(),l[Ie("disabled-text-color")]=g.tint(50).toString());else{const M=g.clone().desaturate(3).darken(3).toHexString();Object.assign(l,{[Ie("bg-color")]:p,[Ie("text-color")]:w,[Ie("hover-bg-color")]:M,[Ie("hover-text-color")]:w,[Ie("bg-shadow-color")]:b})}return r.disabled&&Object.assign(l,{[Ie("disabled-bg-color")]:g.tint(50).toString(),[Ie("disabled-text-color")]:"var(--px-color-white)"}),l},[r.color,r.plain,r.disabled,n])}function Jn(r,n,l){const u=(0,m.useRef)(l);(0,m.useEffect)(()=>{u.current=l},[l]),(0,m.useEffect)(()=>{const p=r&&"current"in r?r.current:r;if(!p)return;const x=g=>u.current(g);return p.addEventListener(n,x),()=>{p.removeEventListener(n,x)}},[r,n])}const Yn={prefix:Math.floor(1e4*Math.random()),current:0},ma=(r="px")=>(0,m.useMemo)(()=>`${r}-${Yn.prefix}-${Yn.current++}`,[r]);function xa(r,{afterBlur:n,beforeBlur:l,afterFocus:u,onFocus:p,onBlur:x}={}){const g=(0,m.useRef)(null),[b,w]=(0,m.useState)(!1),M=(0,m.useCallback)($=>{b||(w(!0),p==null||p($),u==null||u())},[b,p,u]),k=(0,m.useCallback)($=>{var W;Me(l)&&l($)||$.relatedTarget&&((W=g.current)!=null&&W.contains($.relatedTarget))||(w(!1),x==null||x($),n==null||n())},[l,x,n]),F=(0,m.useCallback)(()=>{var $;($=r.current)==null||$.focus()},[r]);return Jn(g,"click",F),{wrapperRef:g,isFocused:b,handleFocus:M,handleBlur:k}}function ha(r,n){Jn(document,"click",l=>{r.current&&l.target&&(r.current.contains(l.target)||n(l))})}var yt=function(){return yt=Object.assign||function(r){for(var n,l=1,u=arguments.length;l<u;l++)for(var p in n=arguments[l])Object.prototype.hasOwnProperty.call(n,p)&&(r[p]=n[p]);return r},yt.apply(this,arguments)};typeof SuppressedError=="function"&&SuppressedError,yt(yt({},{formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:function(r){},onWarn:function(r){}}),{textComponent:m.Fragment});var Qn,Ja,le={},Ya={};(function(){if(Qn)return le;Qn=1;var r=typeof Symbol=="function"&&Symbol.for,n=r?Symbol.for("react.element"):60103,l=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,p=r?Symbol.for("react.strict_mode"):60108,x=r?Symbol.for("react.profiler"):60114,g=r?Symbol.for("react.provider"):60109,b=r?Symbol.for("react.context"):60110,w=r?Symbol.for("react.async_mode"):60111,M=r?Symbol.for("react.concurrent_mode"):60111,k=r?Symbol.for("react.forward_ref"):60112,F=r?Symbol.for("react.suspense"):60113,$=r?Symbol.for("react.suspense_list"):60120,W=r?Symbol.for("react.memo"):60115,H=r?Symbol.for("react.lazy"):60116,Q=r?Symbol.for("react.block"):60121,A=r?Symbol.for("react.fundamental"):60117,j=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function N(E){if(typeof E=="object"&&E!==null){var J=E.$$typeof;switch(J){case n:switch(E=E.type){case w:case M:case u:case x:case p:case F:return E;default:switch(E=E&&E.$$typeof){case b:case k:case H:case W:case g:return E;default:return J}}case l:return J}}}function S(E){return N(E)===M}le.AsyncMode=w,le.ConcurrentMode=M,le.ContextConsumer=b,le.ContextProvider=g,le.Element=n,le.ForwardRef=k,le.Fragment=u,le.Lazy=H,le.Memo=W,le.Portal=l,le.Profiler=x,le.StrictMode=p,le.Suspense=F,le.isAsyncMode=function(E){return S(E)||N(E)===w},le.isConcurrentMode=S,le.isContextConsumer=function(E){return N(E)===b},le.isContextProvider=function(E){return N(E)===g},le.isElement=function(E){return typeof E=="object"&&E!==null&&E.$$typeof===n},le.isForwardRef=function(E){return N(E)===k},le.isFragment=function(E){return N(E)===u},le.isLazy=function(E){return N(E)===H},le.isMemo=function(E){return N(E)===W},le.isPortal=function(E){return N(E)===l},le.isProfiler=function(E){return N(E)===x},le.isStrictMode=function(E){return N(E)===p},le.isSuspense=function(E){return N(E)===F},le.isValidElementType=function(E){return typeof E=="string"||typeof E=="function"||E===u||E===M||E===x||E===p||E===F||E===$||typeof E=="object"&&E!==null&&(E.$$typeof===H||E.$$typeof===W||E.$$typeof===g||E.$$typeof===b||E.$$typeof===k||E.$$typeof===A||E.$$typeof===j||E.$$typeof===v||E.$$typeof===Q)},le.typeOf=N})();var Xn,nt,Zn,Pt,fa=typeof window=="undefined"||window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?m.createContext(null):window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=m.createContext(null));(nt=Xn||(Xn={})).formatDate="FormattedDate",nt.formatTime="FormattedTime",nt.formatNumber="FormattedNumber",nt.formatList="FormattedList",nt.formatDisplayName="FormattedDisplayName",(Pt=Zn||(Zn={})).formatDate="FormattedDateParts",Pt.formatTime="FormattedTimeParts",Pt.formatNumber="FormattedNumberParts",Pt.formatList="FormattedListParts";const ga=()=>{const r=function(){var n=m.useContext(fa);return function(l){(function(u,p,x){if(x===void 0&&(x=Error),!u)throw new x("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")})(l)}(n),n}();return n=>r.formatMessage({id:n})},He={"px-icon":"_px-icon_8putt_1","px-icon--horizontal":"_px-icon--horizontal_8putt_14","px-icon--vertical":"_px-icon--vertical_8putt_18","px-icon--both":"_px-icon--both_8putt_22","is-spin":"_is-spin_8putt_37",spin:"_spin_8putt_1","is-bounce":"_is-bounce_8putt_61",bounce:"_bounce_8putt_1","is-shake":"_is-shake_8putt_94",shake:"_shake_8putt_1","is-beat":"_is-beat_8putt_110",beat:"_beat_8putt_1","px-icon--primary":"_px-icon--primary_8putt_115","px-icon--success":"_px-icon--success_8putt_119","px-icon--warning":"_px-icon--warning_8putt_123","px-icon--danger":"_px-icon--danger_8putt_127","px-icon--sakura":"_px-icon--sakura_8putt_131"},qn=r=>{const{icon:n,size:l=14,type:u,color:p,flip:x,rotation:g,spin:b,bounce:w,shake:M,beat:k,className:F,style:$,onClick:W,onMouseDown:H}=r,Q=(0,m.useMemo)(()=>Re({"--px-icon-color":p!=null?p:void 0,fontSize:`${l}px`,rotate:g?`${g}deg`:void 0},$||{}),[p,l,g,$]),A=[F,"px-icon","hn",n?`hn-${n}`:"",He["px-icon"],u?He[`px-icon--${u}`]:"",x?He[`px-icon--${x}`]:"",b?He["is-spin"]:"",w?He["is-bounce"]:"",M?He["is-shake"]:"",k?He["is-beat"]:""].filter(Boolean).join(" ");return P.jsx("i",{className:A,style:Q,role:"img",onClick:W?j=>W(j):void 0,onMouseDown:H?j=>H(j):void 0})};qn.displayName="PxIcon";const va=["primary","success","warning","danger","base","sakura"],De=(0,m.memo)(qn),er=(0,m.createContext)(null),we={"px-button":"_px-button_j1j8y_1","px-button--base":"_px-button--base_j1j8y_80","px-button--primary":"_px-button--primary_j1j8y_91","px-button--success":"_px-button--success_j1j8y_109","px-button--warning":"_px-button--warning_j1j8y_127","px-button--danger":"_px-button--danger_j1j8y_145","px-button--sakura":"_px-button--sakura_j1j8y_163","is-disabled":"_is-disabled_j1j8y_181","px-button--small":"_px-button--small_j1j8y_225","px-button--large":"_px-button--large_j1j8y_230","is-plain":"_is-plain_j1j8y_236","is-round":"_is-round_j1j8y_318","is-circle":"_is-circle_j1j8y_327","is-chubby":"_is-chubby_j1j8y_336","is-custom":"_is-custom_j1j8y_352","px-button-group":"_px-button-group_j1j8y_389"},tr=(0,m.forwardRef)((r,n)=>{const{id:l,size:u,type:p="base",plain:x,round:g,circle:b,chubby:w,loading:M,loadingIcon:k="spinner",disabled:F,icon:$,autoFocus:W,nativeType:H="button",tag:Q="button",useThrottle:A=!0,throttleDuration:j=500,color:v,onClick:N,className:S,style:E,children:J}=r,R=(0,m.useContext)(er),X=(0,m.useMemo)(()=>{var L,te;return(te=(L=R==null?void 0:R.size)!=null?L:u)!=null?te:"default"},[R==null?void 0:R.size,u]),Z=(0,m.useMemo)(()=>{var L,te;return(te=(L=R==null?void 0:R.type)!=null?L:p)!=null?te:""},[R==null?void 0:R.type,p]),ee=(0,m.useMemo)(()=>{var L,te;return(te=(L=R==null?void 0:R.disabled)!=null?L:F)!=null?te:!1},[R==null?void 0:R.disabled,F]),ae=(0,m.useMemo)(()=>{var L,te;return(te=(L=R==null?void 0:R.round)!=null?L:g)!=null?te:!1},[R==null?void 0:R.round,g]),q=(0,m.useMemo)(()=>{var L,te;return(te=(L=R==null?void 0:R.circle)!=null?L:b)!=null?te:!1},[R==null?void 0:R.circle,b]),ie=(0,m.useMemo)(()=>{var L;return(L=R==null?void 0:R.color)!=null?L:v},[R==null?void 0:R.color,v]),ue=(0,m.useMemo)(()=>({marginRight:J?"6px":"0px"}),[J]),he=pa(r,ie),Ce=Q,$e=[S,"px-button",we["px-button"],Z?we[`px-button--${Z}`]:"",X?we[`px-button--${X}`]:"",x?we["is-plain"]:"",ae?we["is-round"]:"",q?we["is-circle"]:"",w?we["is-chubby"]:"",ee?we["is-disabled"]:"",M?we["is-loading"]:"",ie?we["is-custom"]:""].filter(Boolean).join(" "),Oe=(0,m.useCallback)(L=>{N==null||N(L)},[N]),ke=(0,m.useMemo)(()=>sa(Oe,j,{trailing:!1}),[Oe,j]);return(0,m.useImperativeHandle)(n,()=>({disabled:ee,size:X,type:Z}),[]),Q==="button"?P.jsxs("button",{id:l,ref:n,className:$e,autoFocus:W,type:H,disabled:ee||M,style:Re(Re({},he),E||{}),role:"button",onClick:L=>A?ke(L):Oe(L),children:[M?P.jsx(De,{className:"loading-icon",spin:!0,icon:k,style:ue}):null,$&&!M?P.jsx(De,{icon:$,style:ue}):null,J?P.jsx("span",{children:J}):null]}):P.jsxs(Ce,{id:l,className:$e,style:Re(Re({},he),E||{}),role:"button",disabled:ee||M,onClick:L=>A?ke(L):Oe(L),children:[M?P.jsx(De,{className:"loading-icon",icon:k,style:ue}):null,$&&!M?P.jsx(De,{icon:$,style:ue}):null,J?P.jsx("span",{children:J}):null]})});tr.displayName="PxButton";const ya=(0,m.memo)(tr),nr=r=>{const{size:n,type:l="base",disabled:u,round:p,circle:x,color:g,children:b}=r,w={size:n,type:l,disabled:u,round:p,circle:x,color:g},M=["px-button-group",we["px-button-group"],l?we[`px-button-group--${l}`]:""].filter(Boolean).join(" ");return P.jsx(er.Provider,{value:w,children:P.jsx("div",{className:M,role:"button-group",children:b})})};nr.displayName="PxButtonGroup";const Pa=["primary","success","warning","danger","base","sakura"],Ia=["button","submit","reset"],ba=["large","default","small"],_t=ya,Ea=(0,m.memo)(nr),rt={"px-overlay":"_px-overlay_1ybru_1","is-transparent":"_is-transparent_1ybru_10","is-grid-basic":"_is-grid-basic_1ybru_14","is-matte":"_is-matte_1ybru_20","is-grid-preset-1":"_is-grid-preset-1_1ybru_26"},rr=r=>{const{open:n=!1,setOpen:l,backdropClose:u,mask:p=!0,zIndex:x=2e3,overlayClass:g,lockScroll:b=!0,color:w,grid:M,matte:k,preset1:F,className:$,children:W}=r,H=(0,m.useCallback)(N=>{N.stopPropagation(),N.preventDefault(),u&&(l==null||l(!1))},[u,l]),Q=[$,"px-overlay",rt["px-overlay"],...Array.isArray(g)?g:[g],M?rt["is-grid-basic"]:void 0,p?void 0:rt["is-transparent"],k?rt["is-matte"]:void 0,F?rt["is-grid-preset-1"]:void 0].filter(Boolean).join(" "),A=(0,m.useCallback)(()=>{document.body.style.overflow="hidden"},[]),j=(0,m.useCallback)(()=>{document.body.style.overflow=""},[]),v=(0,m.useCallback)(N=>{N?A():j()},[A,j]);return(0,m.useEffect)(()=>{n&&b&&v(b),!n&&b&&v(!1)},[n,b]),n?P.jsx("div",{className:Q,style:{zIndex:x,backgroundColor:w},onClick:H,children:W}):null};rr.displayName="PxOverlay";const Ba=(0,m.memo)(rr),ve={"px-input":"_px-input_1qao1_1","is-disabled":"_is-disabled_1qao1_60","px-input__inner":"_px-input__inner_1qao1_64","px-textarea__inner":"_px-textarea__inner_1qao1_71","is-focus":"_is-focus_1qao1_80","px-input--large":"_px-input--large_1qao1_85","px-input__wrapper":"_px-input__wrapper_1qao1_88","px-input--small":"_px-input--small_1qao1_96","px-input__prefix":"_px-input__prefix_1qao1_106","px-input__suffix":"_px-input__suffix_1qao1_106","px-input__prepend":"_px-input__prepend_1qao1_122","px-input__append":"_px-input__append_1qao1_122","px-input--textarea":"_px-input--textarea_1qao1_143","px-textarea__wrapper":"_px-textarea__wrapper_1qao1_150","px-icon":"_px-icon_1qao1_212","px-input__clear":"_px-input__clear_1qao1_219","px-input__password":"_px-input__password_1qao1_219"},ar=(0,m.forwardRef)((r,n)=>{const{id:l,value:u,type:p="text",rows:x,cols:g,wrap:b="soft",maxLength:w,minLength:M,size:k="default",disabled:F=!1,clearable:$=!1,showPassword:W=!1,placeholder:H,readonly:Q=!1,autocomplete:A="off",autofocus:j=!1,form:v,prefix:N,suffix:S,prepend:E,append:J,className:R,style:X,onChange:Z,onInput:ee,onFocus:ae,onBlur:q}=r,ie=ma(),[ue,he]=(0,m.useState)(u),[Ce,$e]=(0,m.useState)(!1),Oe=(0,m.useRef)(null),ke=(0,m.useRef)(null),L=(0,m.useMemo)(()=>Oe||ke,[Oe.current,ke.current]),{wrapperRef:te,isFocused:je,handleFocus:It,handleBlur:Qe}=xa(L,{onFocus:ae,onBlur:q,afterBlur(){}}),bt=(0,m.useCallback)(fe=>{he(fe.target.value),ee==null||ee(fe.target.value)},[ee]),lt=(0,m.useCallback)(fe=>{he(fe.target.value),ee==null||ee(fe.target.value)},[ee]),Le=(0,m.useCallback)(fe=>{Z==null||Z(fe.target.value)},[Z]),Et=(0,m.useMemo)(()=>$&&!!ue&&!F&&je,[$,ue,F,je]),ze=(0,m.useMemo)(()=>p==="password"&&W&&!F&&!!ue,[p,W,F,ue]),Fe=[R,"px-input",ve["px-input"],p?ve[`px-input--${p}`]:"",k?ve[`px-input--${k}`]:"",F?ve["is-disabled"]:"",E?ve["is-prepend"]:"",J?ve["is-append"]:"",N?ve["is-prefix"]:"",S?ve["is-suffix"]:"",je?ve["is-focus"]:""].filter(Boolean).join(" "),Se=["px-input__append",ve["px-input__append"]].filter(Boolean).join(" "),We=["px-input__prepend",ve["px-input__prepend"]].filter(Boolean).join(" "),Ke=(0,m.useCallback)(()=>{$e(!Ce)},[Ce,$e]),xr=(0,m.useCallback)(()=>{var fe;(fe=L.current)==null||fe.focus()},[L]),Wa=(0,m.useCallback)(()=>{var fe;(fe=L.current)==null||fe.blur()},[L]),Ka=(0,m.useCallback)(()=>{var fe;(fe=L.current)==null||fe.select()},[L]),hr=(0,m.useCallback)(fe=>{fe.preventDefault(),fe.stopPropagation(),he(""),Z==null||Z("")},[xr]);return(0,m.useImperativeHandle)(n,()=>({focus:xr,blur:Wa,select:Ka,clear:hr}),[]),(0,m.useEffect)(()=>{he(u)},[u]),P.jsx("div",{className:Fe,style:X,children:p!=="textarea"?P.jsxs(P.Fragment,{children:[E?P.jsx("div",{className:We,children:E}):null,P.jsxs("div",{className:ve["px-input__wrapper"],ref:te,children:[N?P.jsx("span",{className:ve["px-input__prefix"],children:N}):null,P.jsx("input",{className:ve["px-input__inner"],ref:Oe,id:l||ie,type:W?Ce?"text":"password":p,disabled:F,readOnly:Q,autoComplete:A,placeholder:H,autoFocus:j,form:v,value:ue,maxLength:w,minLength:M,onInput:bt,onChange:Le,onFocus:It,onBlur:Qe}),S||Et||ze?P.jsxs("span",{className:ve["px-input__suffix"],children:[S,Et&&P.jsx(De,{icon:"times-circle",className:ve["px-input__clear"],onClick:hr,onMouseDown:fe=>fe.preventDefault()}),ze&&Ce&&P.jsx(De,{icon:"eye",className:ve["px-input__password"],onClick:Ke}),ze&&!Ce&&P.jsx(De,{icon:"eye-cross",className:ve["px-input__password"],onClick:Ke})]}):null]}),J?P.jsx("div",{className:Se,children:J}):null]}):P.jsx(P.Fragment,{children:P.jsx("textarea",{className:ve["px-textarea__wrapper"],ref:ke,id:l||ie,disabled:F,readOnly:Q,autoComplete:A,placeholder:H,autoFocus:j,form:v,value:ue,maxLength:w,minLength:M,rows:x,cols:g,wrap:b,onInput:lt,onChange:Le,onFocus:It,onBlur:Qe})})})});ar.displayName="PxInput";const Ca=["small","default","large"],ka=(0,m.memo)(ar);var Ta=e(11864),wa=e(28042);const at={"px-tooltip":"_px-tooltip_1y6fh_1","px-tooltip__popper":"_px-tooltip__popper_1y6fh_17",arrow:"_arrow_1y6fh_43","is-light":"_is-light_1y6fh_100","is-dark":"_is-dark_1y6fh_106"},or=r=>{const{content:n,trigger:l="hover",placement:u="bottom",disabled:p=!1,visible:x,popperOptions:g={},effect:b="light",showTimeout:w=0,hideTimeout:M=200,virtualTriggering:k,virtualRef:F,onVisibleChange:$,children:W}=r,[H,Q]=(0,m.useState)(!1),A=(0,m.useRef)(null),j=(0,m.useRef)(null),v=(0,m.useRef)(null),N=(0,m.useMemo)(()=>Re({placement:u,modifiers:[{name:"offset",options:{offset:[0,9]}}]},g),[u,g]),S=(0,m.useMemo)(()=>l==="hover"?w:0,[l,w]),E=(0,m.useMemo)(()=>l==="hover"?M:0,[l,M]),J=(0,m.useCallback)(L=>{p||(Q(L),$==null||$(L))},[Q,p,$]),R=(0,m.useCallback)(()=>{var L,te;(L=v.current)==null||L.cancel(),(te=j.current)==null||te.call(j)},[]),X=(0,m.useCallback)(()=>{var L,te;(L=j.current)==null||L.cancel(),(te=v.current)==null||te.call(v)},[]),Z=(0,m.useCallback)(()=>{H?X():R()},[H,R,X]),ee=(0,m.useMemo)(()=>{if(p||x!==void 0)return{};switch(l){case"hover":return{onMouseEnter:R,onMouseLeave:X};case"click":return{onClick:Z};case"contextmenu":return{onContextMenu:L=>{L.preventDefault(),R()}};default:return{}}},[l,p,R,X,Z]),ae=(0,m.useMemo)(()=>{if(p||x!==void 0)return{};switch(l){case"hover":return{mouseenter:()=>R(),mouseleave:()=>X()};case"click":return{click:()=>Z()};case"contextmenu":return{contextmenu:L=>{L.preventDefault(),R()}};default:return{}}},[l,p,R,X,Z]),q=(0,m.useMemo)(()=>p||x!==void 0||l!=="hover"?{}:{onMouseEnter:R,onMouseLeave:X},[l,p,R,X]),ie=(0,m.useRef)(null),ue=(0,m.useRef)(null),he=(0,m.useRef)(null);ha(ie,()=>{l!=="hover"&&x===void 0&&H&&X()}),function(L,te,je,It){const Qe=(0,m.useRef)(new Map),bt=(0,m.useRef)({}),lt=(0,m.useRef)(null),[Le,Et]=(0,m.useState)(null),ze=(0,m.useCallback)(()=>{const Se=Le;Fn(Se)&&An(je,(We,Ke)=>{Qe.current.set(Ke,We),Se==null||Se.addEventListener(Ke,We)})},[Le,je]),Fe=(0,m.useCallback)(()=>{const Se=lt.current;Fn(Se)&&An(["mouseenter","mouseleave","click","contextmenu"],We=>{const Ke=Qe.current.get(We);Ke&&(Se==null||Se.removeEventListener(We,Ke),Qe.current.delete(We))})},[]);(0,m.useEffect)(()=>{if(!L.virtualTriggering)return;const Se=requestAnimationFrame(()=>{te!=null&&te.current&&te.current!==Le&&Et(te.current)});return()=>cancelAnimationFrame(Se)},[L.virtualTriggering,te]),(0,m.useEffect)(()=>{L.virtualTriggering&&Le!==lt.current&&(Fe(),ze(),lt.current=Le)},[L.virtualTriggering,Le,ze,Fe]),(0,m.useEffect)(()=>{L.virtualTriggering&&JSON.stringify(je)!==JSON.stringify(bt.current)&&(Fe(),ze(),bt.current=je)},[L.virtualTriggering,je,ze,Fe,It]),(0,m.useEffect)(()=>()=>{Fe()},[Fe])}(r,F,ae,X);const Ce=["px-tooltip",at["px-tooltip"]].filter(Boolean).join(" "),$e=["px-tooltip__popper",at["px-tooltip__popper"],at[`is-${b}`]].join(" "),Oe=["px-tooltip__trigger",at["px-tooltip__trigger"]].join(" ");(0,m.useEffect)(()=>(j.current&&j.current.cancel(),v.current&&v.current.cancel(),j.current=jt(ht(J,null,!0),S),v.current=jt(ht(J,null,!1),E),()=>{var L,te;(L=j.current)==null||L.cancel(),(te=v.current)==null||te.cancel()}),[S,E,J]);const ke=(0,m.useCallback)(()=>{var L;(L=A.current)==null||L.destroy(),A.current=null},[A]);return(0,m.useEffect)(()=>{if(H){const L=k?F==null?void 0:F.current:he.current;L&&ue.current&&(A.current?A.current.setOptions(N):A.current=(0,Ta.fi)(L,ue.current,N))}},[H,k,N]),(0,m.useEffect)(()=>{x!==void 0&&Q(!!x)},[x]),(0,m.useEffect)(()=>()=>{var L,te;ke(),(L=j.current)==null||L.cancel(),(te=v.current)==null||te.cancel()},[]),P.jsxs("div",{className:Ce,ref:ie,"data-testid":"px-tooltip",children:[!k&&P.jsx("div",Jt(Re({className:Oe,ref:he,"data-testid":"px-tooltip__trigger"},ee),{children:W})),P.jsx(wa.Z,{nodeRef:ue,in:H,timeout:200,unmountOnExit:!0,onExited:ke,classNames:"fade",children:P.jsxs("div",Jt(Re({className:$e,ref:ue,"data-testid":"px-tooltip__popper"},q),{children:[n,P.jsx("div",{className:at.arrow,"data-popper-arrow":!0})]}))})]})};or.displayName="PxTooltip";const Oa=["hover","click","contextmenu"],Ma=["dark","light","customized"],lr=(0,m.memo)(or);class Qa extends null{constructor(n){super(s(n)?n:n.message),this.name="PxUIError"}}const Sa=(r,n="px")=>r?la(r)||(l=>!!zn(l)&&!Number.isNaN(Number(l)))(r)?`${r}${n}`:zn(r)?r:void 0:"",Ht={"colorpicker.confirm":"OK","colorpicker.clear":"Clear","colorpicker.defaultLabel":"color picker","colorpicker.description":"current color is {color}. press enter to select a new color.","datepicker.now":"Now","datepicker.today":"Today","datepicker.cancel":"Cancel","datepicker.clear":"Clear","datepicker.confirm":"OK","datepicker.dateTablePrompt":"Use the arrow keys and enter to select the day of the month","datepicker.monthTablePrompt":"Use the arrow keys and enter to select the month","datepicker.yearTablePrompt":"Use the arrow keys and enter to select the year","datepicker.selectedDate":"Selected date","datepicker.selectDate":"Select date","datepicker.selectTime":"Select time","datepicker.startDate":"Start Date","datepicker.startTime":"Start Time","datepicker.endDate":"End Date","datepicker.endTime":"End Time","datepicker.prevYear":"Previous Year","datepicker.nextYear":"Next Year","datepicker.prevMonth":"Previous Month","datepicker.nextMonth":"Next Month","datepicker.year":"","datepicker.month1":"January","datepicker.month2":"February","datepicker.month3":"March","datepicker.month4":"April","datepicker.month5":"May","datepicker.month6":"June","datepicker.month7":"July","datepicker.month8":"August","datepicker.month9":"September","datepicker.month10":"October","datepicker.month11":"November","datepicker.month12":"December","datepicker.week":"week","datepicker.weeks.sun":"Sun","datepicker.weeks.mon":"Mon","datepicker.weeks.tue":"Tue","datepicker.weeks.wed":"Wed","datepicker.weeks.thu":"Thu","datepicker.weeks.fri":"Fri","datepicker.weeks.sat":"Sat","datepicker.weeksFull.sun":"Sunday","datepicker.weeksFull.mon":"Monday","datepicker.weeksFull.tue":"Tuesday","datepicker.weeksFull.wed":"Wednesday","datepicker.weeksFull.thu":"Thursday","datepicker.weeksFull.fri":"Friday","datepicker.weeksFull.sat":"Saturday","datepicker.months.jan":"Jan","datepicker.months.feb":"Feb","datepicker.months.mar":"Mar","datepicker.months.apr":"Apr","datepicker.months.may":"May","datepicker.months.jun":"Jun","datepicker.months.jul":"Jul","datepicker.months.aug":"Aug","datepicker.months.sep":"Sep","datepicker.months.oct":"Oct","datepicker.months.nov":"Nov","datepicker.months.dec":"Dec","inputNumber.decrease":"decrease number","inputNumber.increase":"increase number","select.loading":"Loading","select.noMatch":"No matching data","select.noData":"No data","select.placeholder":"Select","dropdown.toggleDropdown":"Toggle Dropdown","cascader.noMatch":"No matching data","cascader.loading":"Loading","cascader.placeholder":"Select","cascader.noData":"No data","pagination.goto":"Go to","pagination.pagesize":"/page","pagination.total":"Total {total}","pagination.pageClassifier":"","pagination.page":"Page","pagination.prev":"Go to previous page","pagination.next":"Go to next page","pagination.currentPage":"page {pager}","pagination.prevPages":"Previous {pager} pages","pagination.nextPages":"Next {pager} pages","pagination.deprecationWarning":"Deprecated usages detected, please refer to the el-pagination documentation for more details","dialog.close":"Close this dialog","drawer.close":"Close this dialog","messagebox.title":"Message","messagebox.confirm":"OK","messagebox.cancel":"Cancel","messagebox.error":"Illegal input","messagebox.close":"Close this dialog","upload.deleteTip":"press delete to remove","upload.delete":"Delete","upload.preview":"Preview","upload.continue":"Continue","slider.defaultLabel":"slider between {min} and {max}","slider.defaultRangeStartLabel":"pick start value","slider.defaultRangeEndLabel":"pick end value","table.emptyText":"No Data","table.confirmFilter":"Confirm","table.resetFilter":"Reset","table.clearFilter":"All","table.sumText":"Sum","tour.next":"Next","tour.previous":"Previous","tour.finish":"Finish","tree.emptyText":"No Data","transfer.noMatch":"No matching data","transfer.noData":"No data","transfer.titles":["List 1","List 2"],"transfer.filterPlaceholder":"Enter keyword","transfer.noCheckedFormat":"{total} items","transfer.hasCheckedFormat":"{checked}/{total} checked","image.error":"FAILED","pageHeader.title":"Back","popconfirm.confirmButtonText":"Yes","popconfirm.cancelButtonText":"No","carousel.leftArrow":"Carousel arrow left","carousel.rightArrow":"Carousel arrow right","carousel.indicator":"Carousel switch to index {index}"},ir={"colorpicker.confirm":"\u786E\u5B9A","colorpicker.clear":"\u6E05\u7A7A","datepicker.now":"\u6B64\u523B","datepicker.today":"\u4ECA\u5929","datepicker.cancel":"\u53D6\u6D88","datepicker.clear":"\u6E05\u7A7A","datepicker.confirm":"\u786E\u5B9A","datepicker.selectDate":"\u9009\u62E9\u65E5\u671F","datepicker.selectTime":"\u9009\u62E9\u65F6\u95F4","datepicker.startDate":"\u5F00\u59CB\u65E5\u671F","datepicker.startTime":"\u5F00\u59CB\u65F6\u95F4","datepicker.endDate":"\u7ED3\u675F\u65E5\u671F","datepicker.endTime":"\u7ED3\u675F\u65F6\u95F4","datepicker.prevYear":"\u524D\u4E00\u5E74","datepicker.nextYear":"\u540E\u4E00\u5E74","datepicker.prevMonth":"\u4E0A\u4E2A\u6708","datepicker.nextMonth":"\u4E0B\u4E2A\u6708","datepicker.year":"\u5E74","datepicker.month1":"1 \u6708","datepicker.month2":"2 \u6708","datepicker.month3":"3 \u6708","datepicker.month4":"4 \u6708","datepicker.month5":"5 \u6708","datepicker.month6":"6 \u6708","datepicker.month7":"7 \u6708","datepicker.month8":"8 \u6708","datepicker.month9":"9 \u6708","datepicker.month10":"10 \u6708","datepicker.month11":"11 \u6708","datepicker.month12":"12 \u6708","datepicker.weeks.sun":"\u65E5","datepicker.weeks.mon":"\u4E00","datepicker.weeks.tue":"\u4E8C","datepicker.weeks.wed":"\u4E09","datepicker.weeks.thu":"\u56DB","datepicker.weeks.fri":"\u4E94","datepicker.weeks.sat":"\u516D","datepicker.months.jan":"\u4E00\u6708","datepicker.months.feb":"\u4E8C\u6708","datepicker.months.mar":"\u4E09\u6708","datepicker.months.apr":"\u56DB\u6708","datepicker.months.may":"\u4E94\u6708","datepicker.months.jun":"\u516D\u6708","datepicker.months.jul":"\u4E03\u6708","datepicker.months.aug":"\u516B\u6708","datepicker.months.sep":"\u4E5D\u6708","datepicker.months.oct":"\u5341\u6708","datepicker.months.nov":"\u5341\u4E00\u6708","datepicker.months.dec":"\u5341\u4E8C\u6708","select.loading":"\u52A0\u8F7D\u4E2D","select.noMatch":"\u65E0\u5339\u914D\u6570\u636E","select.noData":"\u65E0\u6570\u636E","select.placeholder":"\u8BF7\u9009\u62E9","cascader.noMatch":"\u65E0\u5339\u914D\u6570\u636E","cascader.loading":"\u52A0\u8F7D\u4E2D","cascader.placeholder":"\u8BF7\u9009\u62E9","cascader.noData":"\u6682\u65E0\u6570\u636E","pagination.goto":"\u524D\u5F80","pagination.pagesize":"\u6761/\u9875","pagination.total":"\u5171 {total} \u6761","pagination.pageClassifier":"\u9875","pagination.page":"\u9875","pagination.prev":"\u4E0A\u4E00\u9875","pagination.next":"\u4E0B\u4E00\u9875","pagination.currentPage":"\u7B2C {pager} \u9875","pagination.prevPages":"\u5411\u524D {pager} \u9875","pagination.nextPages":"\u5411\u540E {pager} \u9875","pagination.deprecationWarning":"\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863","messagebox.title":"\u63D0\u793A","messagebox.confirm":"\u786E\u5B9A","messagebox.cancel":"\u53D6\u6D88","messagebox.error":"\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!","upload.deleteTip":"\u6309 delete \u952E\u53EF\u5220\u9664","upload.delete":"\u5220\u9664","upload.preview":"\u67E5\u770B\u56FE\u7247","upload.continue":"\u7EE7\u7EED\u4E0A\u4F20","table.emptyText":"\u6682\u65E0\u6570\u636E","table.confirmFilter":"\u7B5B\u9009","table.resetFilter":"\u91CD\u7F6E","table.clearFilter":"\u5168\u90E8","table.sumText":"\u5408\u8BA1","tour.next":"\u4E0B\u4E00\u6B65","tour.previous":"\u4E0A\u4E00\u6B65","tour.finish":"\u7ED3\u675F\u5BFC\u89C8","tree.emptyText":"\u6682\u65E0\u6570\u636E","transfer.noMatch":"\u65E0\u5339\u914D\u6570\u636E","transfer.noData":"\u65E0\u6570\u636E","transfer.titles":["\u5217\u8868 1","\u5217\u8868 2"],"transfer.filterPlaceholder":"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9","transfer.noCheckedFormat":"\u5171 {total} \u9879","transfer.hasCheckedFormat":"\u5DF2\u9009 {checked}/{total} \u9879","image.error":"\u52A0\u8F7D\u5931\u8D25","pageHeader.title":"\u8FD4\u56DE","popconfirm.confirmButtonText":"\u786E\u5B9A","popconfirm.cancelButtonText":"\u53D6\u6D88","carousel.leftArrow":"\u4E0A\u4E00\u5F20\u5E7B\u706F\u7247","carousel.rightArrow":"\u4E0B\u4E00\u5F20\u5E7B\u706F\u7247","carousel.indicator":"\u5E7B\u706F\u7247\u5207\u6362\u81F3\u7D22\u5F15 {index}"},sr={"colorpicker.confirm":"\u78BA\u8A8D","colorpicker.clear":"\u6E05\u7A7A","colorpicker.defaultLabel":"\u8272\u5F69\u9078\u64C7\u5668","colorpicker.description":"\u76EE\u524D\u8272\u5F69\u70BA {color}\u3002\u6309\u4E00\u4E0B Enter \u4EE5\u9078\u64C7\u65B0\u8272\u5F69\u3002","datepicker.now":"\u73FE\u5728","datepicker.today":"\u4ECA\u5929","datepicker.cancel":"\u53D6\u6D88","datepicker.clear":"\u6E05\u7A7A","datepicker.confirm":"\u78BA\u8A8D","datepicker.dateTablePrompt":"\u4F7F\u7528\u65B9\u5411\u9375\u8207 Enter \u9375\u4EE5\u9078\u64C7\u65E5\u671F","datepicker.monthTablePrompt":"\u4F7F\u7528\u65B9\u5411\u9375\u8207 Enter \u9375\u4EE5\u9078\u64C7\u6708\u4EFD","datepicker.yearTablePrompt":"\u4F7F\u7528\u65B9\u5411\u9375\u8207 Enter \u9375\u4EE5\u9078\u64C7\u5E74\u4EFD","datepicker.selectedDate":"\u5DF2\u9078\u65E5\u671F","datepicker.selectDate":"\u9078\u64C7\u65E5\u671F","datepicker.selectTime":"\u9078\u64C7\u6642\u9593","datepicker.startDate":"\u958B\u59CB\u65E5\u671F","datepicker.startTime":"\u958B\u59CB\u6642\u9593","datepicker.endDate":"\u7D50\u675F\u65E5\u671F","datepicker.endTime":"\u7D50\u675F\u6642\u9593","datepicker.prevYear":"\u524D\u4E00\u5E74","datepicker.nextYear":"\u5F8C\u4E00\u5E74","datepicker.prevMonth":"\u4E0A\u500B\u6708","datepicker.nextMonth":"\u4E0B\u500B\u6708","datepicker.year":"\u5E74","datepicker.month1":"1 \u6708","datepicker.month2":"2 \u6708","datepicker.month3":"3 \u6708","datepicker.month4":"4 \u6708","datepicker.month5":"5 \u6708","datepicker.month6":"6 \u6708","datepicker.month7":"7 \u6708","datepicker.month8":"8 \u6708","datepicker.month9":"9 \u6708","datepicker.month10":"10 \u6708","datepicker.month11":"11 \u6708","datepicker.month12":"12 \u6708","datepicker.weeks.sun":"\u65E5","datepicker.weeks.mon":"\u4E00","datepicker.weeks.tue":"\u4E8C","datepicker.weeks.wed":"\u4E09","datepicker.weeks.thu":"\u56DB","datepicker.weeks.fri":"\u4E94","datepicker.weeks.sat":"\u516D","datepicker.weeksFull.sun":"\u661F\u671F\u65E5","datepicker.weeksFull.mon":"\u661F\u671F\u4E00","datepicker.weeksFull.tue":"\u661F\u671F\u4E8C","datepicker.weeksFull.wed":"\u661F\u671F\u4E09","datepicker.weeksFull.thu":"\u661F\u671F\u56DB","datepicker.weeksFull.fri":"\u661F\u671F\u4E94","datepicker.weeksFull.sat":"\u661F\u671F\u516D","datepicker.months.jan":"\u4E00\u6708","datepicker.months.feb":"\u4E8C\u6708","datepicker.months.mar":"\u4E09\u6708","datepicker.months.apr":"\u56DB\u6708","datepicker.months.may":"\u4E94\u6708","datepicker.months.jun":"\u516D\u6708","datepicker.months.jul":"\u4E03\u6708","datepicker.months.aug":"\u516B\u6708","datepicker.months.sep":"\u4E5D\u6708","datepicker.months.oct":"\u5341\u6708","datepicker.months.nov":"\u5341\u4E00\u6708","datepicker.months.dec":"\u5341\u4E8C\u6708","inputNumber.decrease":"\u6E1B\u5C11\u6578\u503C","inputNumber.increase":"\u589E\u52A0\u6578\u503C","select.loading":"\u8F09\u5165\u4E2D","select.noMatch":"\u7121\u76F8\u7B26\u8CC7\u6599","select.noData":"\u7121\u8CC7\u6599","select.placeholder":"\u8ACB\u9078\u64C7","dropdown.toggleDropdown":"\u5207\u63DB\u4E0B\u62C9\u9078\u55AE","cascader.noMatch":"\u7121\u76F8\u7B26\u8CC7\u6599","cascader.loading":"\u8F09\u5165\u4E2D","cascader.placeholder":"\u8ACB\u9078\u64C7","cascader.noData":"\u7121\u8CC7\u6599","pagination.goto":"\u524D\u5F80","pagination.pagesize":"\u9805/\u9801","pagination.total":"\u5171 {total} \u9805","pagination.pageClassifier":"\u9801","pagination.page":"\u9801","pagination.prev":"\u4E0A\u4E00\u9801","pagination.next":"\u4E0B\u4E00\u9801","pagination.currentPage":"\u7B2C {pager} \u9801","pagination.prevPages":"\u5411\u524D {pager} \u9801","pagination.nextPages":"\u5411\u540E {pager} \u9801","pagination.deprecationWarning":"\u5075\u6E2C\u5230\u5DF2\u904E\u6642\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u8ACB\u53C3\u95B1 el-pagination \u8AAA\u660E\u6587\u4EF6\u4EE5\u4E86\u89E3\u66F4\u591A\u8CC7\u8A0A","dialog.close":"\u95DC\u9589\u6B64\u5C0D\u8A71\u6846","drawer.close":"\u95DC\u9589\u6B64\u5C0D\u8A71\u6846","messagebox.title":"\u63D0\u793A","messagebox.confirm":"\u78BA\u5B9A","messagebox.cancel":"\u53D6\u6D88","messagebox.error":"\u8F38\u5165\u7684\u8CC7\u6599\u4E0D\u7B26\u898F\u5B9A!","messagebox.close":"\u95DC\u9589\u6B64\u5C0D\u8A71\u6846","upload.deleteTip":"\u6309\u4E00\u4E0B Delete \u9375\u4EE5\u522A\u9664","upload.delete":"\u522A\u9664","upload.preview":"\u67E5\u770B\u5716\u7247","upload.continue":"\u7E7C\u7E8C\u4E0A\u50B3","slider.defaultLabel":"\u6ED1\u687F\u4ECB\u65BC {min} \u81F3 {max}","slider.defaultRangeStartLabel":"\u9078\u64C7\u8D77\u59CB\u503C","slider.defaultRangeEndLabel":"\u9078\u64C7\u7D50\u675F\u503C","table.emptyText":"\u66AB\u7121\u8CC7\u6599","table.confirmFilter":"\u7BE9\u9078","table.resetFilter":"\u91CD\u7F6E","table.clearFilter":"\u5168\u90E8","table.sumText":"\u5408\u8A08","tour.next":"\u4E0B\u4E00\u6B65","tour.previous":"\u4E0A\u4E00\u6B65","tour.finish":"\u7D50\u675F\u5C0E\u89BD","tree.emptyText":"\u66AB\u7121\u8CC7\u6599","transfer.noMatch":"\u7121\u76F8\u7B26\u8CC7\u6599","transfer.noData":"\u7121\u8CC7\u6599","transfer.titles":["\u5217\u8868 1","\u5217\u8868 2"],"transfer.filterPlaceholder":"\u8ACB\u8F38\u5165\u641C\u5C0B\u5167\u5BB9","transfer.noCheckedFormat":"\u5171 {total} \u9805","transfer.hasCheckedFormat":"\u5DF2\u9078 {checked}/{total} \u9805","image.error":"\u8F09\u5165\u5931\u6557","pageHeader.title":"\u8FD4\u56DE","popconfirm.confirmButtonText":"\u78BA\u8A8D","popconfirm.cancelButtonText":"\u53D6\u6D88","carousel.leftArrow":"\u4E0A\u4E00\u5F35\u6295\u5F71\u7247","carousel.rightArrow":"\u4E0B\u4E00\u5F35\u6295\u5F71\u7247","carousel.indicator":"\u6295\u5F71\u7247\u5207\u63DB\u81F3\u7D22\u5F15 {index}"},ur={"breadcrumb.label":"Breadcrumb","colorpicker.confirm":"OK","colorpicker.clear":"\u30AF\u30EA\u30A2","datepicker.now":"\u73FE\u5728","datepicker.today":"\u4ECA\u65E5","datepicker.cancel":"\u30AD\u30E3\u30F3\u30BB\u30EB","datepicker.clear":"\u30AF\u30EA\u30A2","datepicker.confirm":"OK","datepicker.selectDate":"\u65E5\u4ED8\u3092\u9078\u629E","datepicker.selectTime":"\u6642\u9593\u3092\u9078\u629E","datepicker.startDate":"\u958B\u59CB\u65E5","datepicker.startTime":"\u958B\u59CB\u6642\u9593","datepicker.endDate":"\u7D42\u4E86\u65E5","datepicker.endTime":"\u7D42\u4E86\u6642\u9593","datepicker.prevYear":"\u524D\u5E74","datepicker.nextYear":"\u7FCC\u5E74","datepicker.prevMonth":"\u524D\u6708","datepicker.nextMonth":"\u7FCC\u6708","datepicker.year":"\u5E74","datepicker.month1":"1\u6708","datepicker.month2":"2\u6708","datepicker.month3":"3\u6708","datepicker.month4":"4\u6708","datepicker.month5":"5\u6708","datepicker.month6":"6\u6708","datepicker.month7":"7\u6708","datepicker.month8":"8\u6708","datepicker.month9":"9\u6708","datepicker.month10":"10\u6708","datepicker.month11":"11\u6708","datepicker.month12":"12\u6708","datepicker.weeks.sun":"\u65E5","datepicker.weeks.mon":"\u6708","datepicker.weeks.tue":"\u706B","datepicker.weeks.wed":"\u6C34","datepicker.weeks.thu":"\u6728","datepicker.weeks.fri":"\u91D1","datepicker.weeks.sat":"\u571F","datepicker.months.jan":"1\u6708","datepicker.months.feb":"2\u6708","datepicker.months.mar":"3\u6708","datepicker.months.apr":"4\u6708","datepicker.months.may":"5\u6708","datepicker.months.jun":"6\u6708","datepicker.months.jul":"7\u6708","datepicker.months.aug":"8\u6708","datepicker.months.sep":"9\u6708","datepicker.months.oct":"10\u6708","datepicker.months.nov":"11\u6708","datepicker.months.dec":"12\u6708","select.loading":"\u30ED\u30FC\u30C9\u4E2D","select.noMatch":"\u30C7\u30FC\u30BF\u306A\u3057","select.noData":"\u30C7\u30FC\u30BF\u306A\u3057","select.placeholder":"\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044","mention.loading":"\u30ED\u30FC\u30C9\u4E2D","cascader.noMatch":"\u30C7\u30FC\u30BF\u306A\u3057","cascader.loading":"\u30ED\u30FC\u30C9\u4E2D","cascader.placeholder":"\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044","cascader.noData":"\u30C7\u30FC\u30BF\u306A\u3057","pagination.goto":"","pagination.pagesize":"\u4EF6/\u30DA\u30FC\u30B8","pagination.total":"\u7DCF\u8A08 {total} \u4EF6","pagination.pageClassifier":"\u30DA\u30FC\u30B8\u76EE\u3078","pagination.page":"Page","pagination.prev":"Go to previous page","pagination.next":"Go to next page","pagination.currentPage":"page {pager}","pagination.prevPages":"Previous {pager} pages","pagination.nextPages":"Next {pager} pages","messagebox.title":"\u30E1\u30C3\u30BB\u30FC\u30B8","messagebox.confirm":"OK","messagebox.cancel":"\u30AD\u30E3\u30F3\u30BB\u30EB","messagebox.error":"\u6B63\u3057\u304F\u306A\u3044\u5165\u529B","upload.deleteTip":"Del\u30AD\u30FC\u3092\u62BC\u3057\u3066\u524A\u9664\u3059\u308B","upload.delete":"\u524A\u9664\u3059\u308B","upload.preview":"\u30D7\u30EC\u30D3\u30E5\u30FC","upload.continue":"\u7D9A\u884C\u3059\u308B","table.emptyText":"\u30C7\u30FC\u30BF\u306A\u3057","table.confirmFilter":"\u78BA\u8A8D","table.resetFilter":"\u521D\u671F\u5316","table.clearFilter":"\u3059\u3079\u3066","table.sumText":"\u5408\u8A08","tour.next":"\u6B21\u3078","tour.previous":"\u524D\u3078","tour.finish":"\u30C4\u30A2\u30FC\u7D42\u4E86","tree.emptyText":"\u30C7\u30FC\u30BF\u306A\u3057","transfer.noMatch":"\u30C7\u30FC\u30BF\u306A\u3057","transfer.noData":"\u30C7\u30FC\u30BF\u306A\u3057","transfer.titles":["\u30EA\u30B9\u30C8 1","\u30EA\u30B9\u30C8 2"],"transfer.filterPlaceholder":"\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5165\u529B","transfer.noCheckedFormat":"\u7DCF\u8A08 {total} \u4EF6","transfer.hasCheckedFormat":"{checked}/{total} \u3092\u9078\u629E\u3057\u305F","image.error":"\u5931\u6557","pageHeader.title":"\u623B\u308B","popconfirm.confirmButtonText":"\u306F\u3044","popconfirm.cancelButtonText":"\u3044\u3044\u3048","carousel.leftArrow":"Carousel arrow left","carousel.rightArrow":"Carousel arrow right","carousel.indicator":"Carousel switch to index {index}"};var Ra=e(92336),$a=e(72282),Vt=e(55644),cr=e(13642),Na=e(57168);function Gt(r){return{locale:r.locale,timeZone:r.timeZone,fallbackOnEmptyString:r.fallbackOnEmptyString,formats:r.formats,textComponent:r.textComponent,messages:r.messages,defaultLocale:r.defaultLocale,defaultFormats:r.defaultFormats,onError:r.onError,onWarn:r.onWarn,wrapRichTextChunksInFragment:r.wrapRichTextChunksInFragment,defaultRichTextElements:r.defaultRichTextElements}}var Da=function(r){(0,Ra.ZT)(n,r);function n(){var l=r!==null&&r.apply(this,arguments)||this;return l.cache=(0,$a.Sn)(),l.state={cache:l.cache,intl:(0,cr.d)(Gt(l.props),l.cache),prevConfig:Gt(l.props)},l}return n.getDerivedStateFromProps=function(l,u){var p=u.prevConfig,x=u.cache,g=Gt(l);return(0,Vt.wU)(p,g)?null:{intl:(0,cr.d)(g,x),prevConfig:g}},n.prototype.render=function(){return(0,Vt.lq)(this.state.intl),m.createElement(Na.zt,{value:this.state.intl},this.props.children)},n.displayName="IntlProvider",n.defaultProps=Vt.Z0,n}(m.PureComponent),ja=Da;const dr=(0,m.createContext)(null),La=r=>{var n;return(n=Ht[r])!=null?n:r},Aa=()=>(()=>{var n;const r=(0,m.useContext)(dr);return(n=r==null?void 0:r._InConfigProvider)!=null?n:!1})()?ga():La,za=r=>{const{locale:n="en",extendsI18nMsg:l={},children:u}=r,p=(0,m.useMemo)(()=>["en","zh-CN","zh-TW","ja"].includes(n)?n:"en",[n]),x=(0,m.useMemo)(()=>ia({},{en:Ht,"zh-CN":ir,"zh-TW":sr,ja:ur}[p],l),[p,l]);return P.jsx(dr.Provider,{value:{locale:p,_InConfigProvider:!0},children:P.jsx(ja,{locale:p,messages:x,children:u})})},ot={"px-popconfirm":"_px-popconfirm_4fjvp_1","px-popconfirm__main":"_px-popconfirm__main_4fjvp_1","px-popconfirm__action":"_px-popconfirm__action_4fjvp_10"},pr=r=>{const{title:n,placement:l,confirmButtonText:u,cancelButtonText:p,confirmButtonType:x="primary",cancelButtonType:g,icon:b="question-solid",iconColor:w="#f90",hideIcon:M,hideTimeout:k=200,width:F=200,actions:$,visible:W,onVisibleChange:H,onConfirm:Q,onCancel:A,children:j}=r,[v,N]=(0,m.useState)(!1),S=Aa(),E=(0,m.useMemo)(()=>({width:Sa(r.width)}),[F]),J=(0,m.useCallback)(ie=>{W===void 0&&(N(ie),H==null||H(ie))},[W]),R=(0,m.useCallback)(ie=>{A==null||A(ie),J(!1)},[]),X=(0,m.useCallback)(ie=>{Q==null||Q(ie),J(!1)},[]),Z=(0,m.useCallback)(ie=>{H==null||H(ie)},[H]),ee=["px-popconfirm",ot["px-popconfirm"]].filter(Boolean).join(" "),ae=(0,m.useMemo)(()=>P.jsxs("div",{className:ee,style:E,"data-testid":"px-popconfirm",children:[P.jsxs("div",{className:ot["px-popconfirm__main"],children:[!M&&b?P.jsx(De,{icon:b,color:w,size:20}):null,n]}),P.jsx("div",{className:ot["px-popconfirm__action"],children:$||P.jsxs(P.Fragment,{children:[P.jsx(_t,{id:"px-popconfirm__cancel",className:ot["px-popconfirm__cancel"],size:"small",type:g,onClick:R,children:p||S("popconfirm.cancelButtonText")}),P.jsx(_t,{id:"px-popconfirm__confirm",className:ot["px-popconfirm__confirm"],size:"small",type:x,onClick:X,children:u||S("popconfirm.confirmButtonText")})]})})]}),[S,E,b,w,M,n,$,g,p,x,u,R,X]),q=(0,m.useCallback)(()=>{W===void 0&&J(!v)},[W,v]);return(0,m.useEffect)(()=>{W!==void 0&&N(!!W)},[W]),P.jsx(lr,{visible:v,trigger:"click",placement:l,hideTimeout:k,content:ae,onVisibleChange:Z,children:P.jsx("div",{onClick:q,children:j})})};pr.displayName="PxPopconfirm";const Fa=(0,m.memo)(pr);function mr(){return vr(this,null,function*(){if(typeof CSS!="undefined"&&"paintWorklet"in CSS)try{const[r,n,l,u,p,x,g,b,w,M]=yield Promise.all([e.e(971).then(e.bind(e,92971)).then(k=>k.p).then(k=>k.default),e.e(971).then(e.bind(e,92971)).then(k=>k.a).then(k=>k.default),e.e(971).then(e.bind(e,92971)).then(k=>k.b).then(k=>k.default),e.e(971).then(e.bind(e,92971)).then(k=>k.c).then(k=>k.default),e.e(971).then(e.bind(e,92971)).then(k=>k.d).then(k=>k.default),e.e(971).then(e.bind(e,92971)).then(k=>k.e).then(k=>k.default),e.e(971).then(e.bind(e,92971)).then(k=>k.f).then(k=>k.default),e.e(971).then(e.bind(e,92971)).then(k=>k.g).then(k=>k.default),e.e(971).then(e.bind(e,92971)).then(k=>k.h).then(k=>k.default),e.e(971).then(e.bind(e,92971)).then(k=>k.i).then(k=>k.default)]);CSS.paintWorklet.addModule(r),CSS.paintWorklet.addModule(n),CSS.paintWorklet.addModule(l),CSS.paintWorklet.addModule(u),CSS.paintWorklet.addModule(p),CSS.paintWorklet.addModule(x),CSS.paintWorklet.addModule(g),CSS.paintWorklet.addModule(b),CSS.paintWorklet.addModule(w),CSS.paintWorklet.addModule(M)}catch(r){console.warn("[Pixel UI] Error loading paintWorklet: ",r)}else console.warn("[Pixel UI] CSS Houdini Paint Worklet API is not supported in this browser.")})}(function(){console.info(`%c
____________________________________________________________________________________

  \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557\u2588\u2588\u2557  \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557         \u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557
  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2588\u2588\u2554\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551         \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551
  \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2554\u255D \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551         \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551
  \u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2551 \u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2551         \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551
  \u2588\u2588\u2551     \u2588\u2588\u2551\u2588\u2588\u2554\u255D \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557    \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551
  \u255A\u2550\u255D     \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D     \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u255D
____________________________________________________________________________________
                              
                author:heiheihoho1213 \u{1F431}
`,`
      background: linear-gradient(135deg, orange 60%, cyan);
      background-clip: text;
      color: transparent;
      font-size: 16px; 
      line-height: 1;
      font-family: "Courier New", ui-monospace, monospace;
      font-weight: 600;
    `)})(),mr()}}]);
}());