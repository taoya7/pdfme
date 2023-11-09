"use strict";(self.webpackChunk_pdfme_website=self.webpackChunk_pdfme_website||[]).push([[194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=o.createContext({}),l=function(e){var t=o.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(f.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,f=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(f,".").concat(d)]||u[d]||c[d]||r;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var f in t)hasOwnProperty.call(t,f)&&(i[f]=t[f]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={},s="Custom Fonts",i={unversionedId:"custom-fonts",id:"custom-fonts",title:"Custom Fonts",description:"pdfme uses the Roboto Regular 400 font by default, but you can use any font you like.",source:"@site/docs/custom-fonts.md",sourceDirName:".",slug:"/custom-fonts",permalink:"/docs/custom-fonts",draft:!1,editUrl:"https://github.com/pdfme/pdfme/tree/main/website/docs/custom-fonts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Custom Schemas(Plugins)",permalink:"/docs/custom-schemas"}},f={},l=[{value:"About Font type",id:"about-font-type",level:2},{value:"How to set font",id:"how-to-set-font",level:2},{value:"Generator",id:"generator",level:3},{value:"UI",id:"ui",level:3},{value:"Setting font at instance initialization",id:"setting-font-at-instance-initialization",level:4},{value:"Update fonts with <code>updateOptions</code>.",id:"update-fonts-with-updateoptions",level:4}],p={toc:l},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-fonts"},"Custom Fonts"),(0,a.kt)("p",null,"pdfme uses the ",(0,a.kt)("a",{parentName:"p",href:"https://fonts.google.com/specimen/Roboto"},"Roboto Regular 400")," font by default, but you can use any font you like."),(0,a.kt)("p",null,"To prioritize design, you can use your favorite fonts, and if you're using characters not included in the default Roboto font, such as Japanese or Chinese characters, they will be rendered as ",(0,a.kt)("a",{parentName:"p",href:"https://fonts.google.com/knowledge/glossary/tofu"},"Tofu")," in the PDF."),(0,a.kt)("p",null,"You can use this feature to solve those issues."),(0,a.kt)("h2",{id:"about-font-type"},"About Font type"),(0,a.kt)("p",null,"You can import from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pdfme/common")," as below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Font } from '@pdfme/common';\n")),(0,a.kt)("p",null,"The type of font is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type Font = {\n  [fontName: string]: {\n    data: Uint8Array | ArrayBuffer;\n    fallback?: boolean;\n    subset?: boolean;\n  };\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"*",(0,a.kt)("inlineCode",{parentName:"li"},"fallback"),": Setting it to true makes it the font to use if not set to a ",(0,a.kt)("inlineCode",{parentName:"li"},"fontName"),". ",(0,a.kt)("strong",{parentName:"li"},"Only one of the font objects must be set to true.")),(0,a.kt)("li",{parentName:"ul"},"*",(0,a.kt)("inlineCode",{parentName:"li"},"subset"),": The default is true, but it can be set to false to set the font embedding to not subset. (This setting is for a bug in fontkit when embedding certain fonts with subsetting.)")),(0,a.kt)("p",null,"Please read font data by fetch or fs.readFileSync as below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const font: Font = {\n  serif: {\n    data: await fetch('fonts/serif.ttf').then((res) => res.arrayBuffer()),\n    fallback: true,\n  },\n  sans_serif: {\n    data: fs.readFileSync('fonts/sans_serif.ttf'),\n  },\n};\n")),(0,a.kt)("h2",{id:"how-to-set-font"},"How to set font"),(0,a.kt)("p",null,"Let's check out how to set font in the generator and ui packages."),(0,a.kt)("h3",{id:"generator"},"Generator"),(0,a.kt)("p",null,"Set font as option in ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started#generator"},"generate")," function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Template, BLANK_PDF, Font } from '@pdfme/common';\nimport { generate } from '@pdfme/generator';\n\nconst font = {\n  serif: {\n    data: await fetch('fonts/serif.ttf').then((res) => res.arrayBuffer()),\n    fallback: true,\n  },\n  sans_serif: {\n    data: fs.readFileSync('fonts/sans_serif.ttf'),\n  },\n};\nconst template: Template = {\n  basePdf: BLANK_PDF,\n  schemas: [\n    {\n      a: {\n        type: 'text',\n        fontName: 'serif',\n        position: { x: 0, y: 0 },\n        width: 10,\n        height: 10,\n      },\n      b: {\n        type: 'text',\n        fontName: 'sans_serif',\n        position: { x: 10, y: 10 },\n        width: 10,\n        height: 10,\n      },\n      c: {\n        // <- use fallback font. (serif)\n        type: 'text',\n        position: { x: 20, y: 20 },\n        width: 10,\n        height: 10,\n      },\n    },\n  ],\n};\nconst inputs = [{ a: 'a1', b: 'b1', c: 'c1' }];\n\ngenerate({ template, inputs, options: { font } }).then((pdf) => {\n  console.log(pdf);\n\n  // Browser\n  // const blob = new Blob([pdf.buffer], { type: 'application/pdf' });\n  // window.open(URL.createObjectURL(blob));\n\n  // Node.js\n  // fs.writeFileSync(path.join(__dirname, `test.pdf`), pdf);\n});\n")),(0,a.kt)("h3",{id:"ui"},"UI"),(0,a.kt)("p",null,"There are two ways to set fonts in the UI. instance initialization and through method.",(0,a.kt)("br",{parentName:"p"}),"\n","The sample code is for ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started#designer"},"Designer"),", but the same way can be used for ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started#form"},"Form")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started#viewer"},"Viewer"),"."),(0,a.kt)("h4",{id:"setting-font-at-instance-initialization"},"Setting font at instance initialization"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Designer } from '@pdfme/ui';\n\nconst domContainer = document.getElementById('container');\nconst template = {\n  // skip...\n};\nconst font = {\n  serif: {\n    data: await fetch('fonts/serif.ttf').then((res) => res.arrayBuffer()),\n    fallback: true,\n  },\n  sans_serif: {\n    data: await fetch('fonts/sans_serif.ttf').then((res) => res.arrayBuffer()),\n  },\n};\n\nconst designer = new Designer({ domContainer, template, options: { font } });\n")),(0,a.kt)("h4",{id:"update-fonts-with-updateoptions"},"Update fonts with ",(0,a.kt)("inlineCode",{parentName:"h4"},"updateOptions"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const font = {\n  serif: {\n    data: await fetch('fonts/serif.ttf').then((res) => res.arrayBuffer()),\n  },\n  sans_serif: {\n    data: await fetch('fonts/sans_serif.ttf').then((res) => res.arrayBuffer()),\n    fallback: true,\n  },\n};\ndesigner.updateOptions({ font });\n")))}c.isMDXComponent=!0}}]);