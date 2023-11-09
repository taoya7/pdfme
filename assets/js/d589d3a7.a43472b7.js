"use strict";(self.webpackChunk_pdfme_website=self.webpackChunk_pdfme_website||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},o="Getting Started",l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Introduction",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/pdfme/pdfme/tree/main/website/docs/getting-started.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Custom Fonts",permalink:"/docs/custom-fonts"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Template",id:"template",level:2},{value:"Minimal Template",id:"minimal-template",level:3},{value:"Generator",id:"generator",level:2},{value:"UI",id:"ui",level:2},{value:"Designer",id:"designer",level:3},{value:"Form",id:"form",level:3},{value:"Viewer",id:"viewer",level:3},{value:"Special Thanks",id:"special-thanks",level:2}],m={toc:s},d="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"pdfme was created to simplify the design and generation process of a PDF. It is especially useful for the following use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Need to create a designed PDF with short code."),(0,r.kt)("li",{parentName:"ul"},"Need to integrate PDF editor features into an application."),(0,r.kt)("li",{parentName:"ul"},"Need to create a large number of PDFs without compromising performance")),(0,r.kt)("p",null,"As an example, the author's service ",(0,r.kt)("a",{parentName:"p",href:"https://labelmake.jp/"},"https://labelmake.jp/")," can create more than 100 varieties of PDFs and generates more than 100,000 PDF files per month. Notably, the monthly server cost, utilizing Cloud Functions For Firebase, remains below $10."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The operating requirements should be the node environment ",(0,r.kt)("inlineCode",{parentName:"p"},">=16"),".",(0,r.kt)("br",{parentName:"p"}),"\n","There are two packages in pdfme, generator and UI."),(0,r.kt)("p",null,"The package for generating PDF can be installed with the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm i @pdfme/generator @pdfme/common\n")),(0,r.kt)("p",null,"The packages for using PDF designer, forms and viewers can be installed with the following commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm i @pdfme/ui @pdfme/common\n")),(0,r.kt)("p",null,"*","You must install ",(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/common")," regardless of which package you use."),(0,r.kt)("p",null,"The following type, function and classes are available in pdfme."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/common")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pdfme.com/docs/getting-started#template"},"Template"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/generator")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pdfme.com/docs/getting-started#generator"},"generate"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/ui")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pdfme.com/docs/getting-started#designer"},"Designer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pdfme.com/docs/getting-started#form"},"Form")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pdfme.com/docs/getting-started#viewer"},"Viewer"))),(0,r.kt)("p",null,"If your environment uses webpack, import the necessary items as shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Template } from '@pdfme/common';\nimport { generate } from '@pdfme/generator';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Template } from '@pdfme/common';\nimport { Designer, Form, Viewer } from '@pdfme/ui';\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"All objects use ",(0,r.kt)("inlineCode",{parentName:"strong"},"Template"),", which will be briefly explained in the next section.")),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("p",null,"The core of pdfme library are Templates.",(0,r.kt)("br",{parentName:"p"}),"\n","Template Type can be imported by both ",(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/generator")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/ui"),". Templates are used everywhere."),(0,r.kt)("p",null,"A template can be divided into two parts: a fixed part and a variable part.",(0,r.kt)("br",{parentName:"p"}),"\n","We call them basePdf and schema.\nThe following image is a good illustration of a template."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(89299).Z,width:"1088",height:"589"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"basePdf"),": PDF data for the fixed part of the PDF to be generated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"schemas"),": Definition data for the variable part of the PDF to be generated.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"basePdf")," can be given a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"(base64), ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint8Array"),".",(0,r.kt)("br",{parentName:"p"}),"\n","A blank A4 PDF can be imported with ",(0,r.kt)("inlineCode",{parentName:"p"},"BLANK_PDF"),". You can use it to check how it works."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"schemas")," can only utilize text by default, but you can load images and various barcodes like QR codes as plugins from the ",(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/schemas")," package.",(0,r.kt)("br",{parentName:"p"}),"\n","Additionally, you can create your own schemas, allowing you to render types other than the ones mentioned above.",(0,r.kt)("br",{parentName:"p"}),"\n","Check detail about ",(0,r.kt)("a",{parentName:"p",href:"/docs/custom-schemas"},"Custom Schemas")," from here"),(0,r.kt)("p",null,"Let's take a look at some specific data.",(0,r.kt)("br",{parentName:"p"}),"\n","(If you are using TypeScript, you can import the Template type.)"),(0,r.kt)("h3",{id:"minimal-template"},"Minimal Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Template, BLANK_PDF } from '@pdfme/common';\n\nconst template: Template = {\n  basePdf: BLANK_PDF,\n  schemas: [\n    {\n      a: {\n        type: 'text',\n        position: { x: 0, y: 0 },\n        width: 10,\n        height: 10,\n      },\n      b: {\n        type: 'text',\n        position: { x: 10, y: 10 },\n        width: 10,\n        height: 10,\n      },\n      c: {\n        type: 'text',\n        position: { x: 20, y: 20 },\n        width: 10,\n        height: 10,\n      },\n    },\n  ],\n};\n")),(0,r.kt)("p",null,"You can create a template from ",(0,r.kt)("a",{parentName:"p",href:"/template-design"},"Template Design page"),". Or, if you want to integrate the template creation feature into your application, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started#designer"},"Designer section"),"."),(0,r.kt)("h2",{id:"generator"},"Generator"),(0,r.kt)("p",null,"The PDF generator function, ",(0,r.kt)("inlineCode",{parentName:"p"},"generate"),", takes 2 arguments of ",(0,r.kt)("inlineCode",{parentName:"p"},"template")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," for generate a PDF. It works both in Node.js and in the browser."),(0,r.kt)("p",null,"The code to generate a PDF file using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started#sample-template"},"template created above")," is shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Template } from '@pdfme/common';\nimport { generate } from '@pdfme/generator';\n\nconst template: Template = {\n  // skip...\u3000Check the Template section.\n};\nconst inputs = [{ a: 'a1', b: 'b1', c: 'c1' }];\n\ngenerate({ template, inputs }).then((pdf) => {\n  console.log(pdf);\n\n  // Browser\n  // const blob = new Blob([pdf.buffer], { type: 'application/pdf' });\n  // window.open(URL.createObjectURL(blob));\n\n  // Node.js\n  // fs.writeFileSync(path.join(__dirname, `test.pdf`), pdf);\n});\n")),(0,r.kt)("p",null,"You can create a PDF file like the below."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(89425).Z,width:"3014",height:"1774"})),(0,r.kt)("p",null,"Also, each element in the inputs array corresponds to a page in the PDF, you can create a multi-page PDF file by providing multiple elements of inputs."),(0,r.kt)("h2",{id:"ui"},"UI"),(0,r.kt)("p",null,"The UI is composed of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started#designer"},"Designer"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started#form"},"Form"),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started#viewer"},"Viewer")," classes."),(0,r.kt)("h3",{id:"designer"},"Designer"),(0,r.kt)("p",null,"The Designer allows you to edit the Template schemas, making it easy for anyone to create Template json objects."),(0,r.kt)("p",null,"You can design your own template from ",(0,r.kt)("a",{parentName:"p",href:"/template-design"},"Template Design page"),", or you can integrate the designer into your application."),(0,r.kt)("p",null,"Let's integrate the designer using the template created above as the default template."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Template } from '@pdfme/common';\nimport { Designer } from '@pdfme/ui';\n\nconst domContainer = document.getElementById('container');\nconst template: Template = {\n  // skip...\u3000Check the Template section.\n};\n\nconst designer = new Designer({ domContainer, template });\n")),(0,r.kt)("p",null,"The Designer class is instantiated as shown above, and the template designer is displayed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"domContainer"),".",(0,r.kt)("br",{parentName:"p"}),"\n","You can edit the template as shown below. The operation is like Google Slides, etc., so you can use common keyboard shortcuts."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(26215).Z,width:"800",height:"767"})),(0,r.kt)("p",null,"The designer instance can be manipulated with the following methods."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"saveTemplate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updateTemplate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getTemplate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onChangeTemplate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onSaveTemplate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"destroy"))),(0,r.kt)("h3",{id:"form"},"Form"),(0,r.kt)("p",null,"You can use templates to create forms and PDF viewers."),(0,r.kt)("p",null,"The Form creates a UI for the user to enter schemas based on the template."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Template } from '@pdfme/common';\nimport { Form } from '@pdfme/ui';\n\nconst domContainer = document.getElementById('container');\nconst template: Template = {\n  // skip...\n};\n// This is initial data.\nconst inputs = [{ a: 'a1', b: 'b1', c: 'c1' }];\n\nconst form = new Form({ domContainer, template, inputs });\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(66390).Z,width:"670",height:"642"})),(0,r.kt)("p",null,"The form instance has a method ",(0,r.kt)("inlineCode",{parentName:"p"},"getInputs")," to get the user's input."),(0,r.kt)("p",null,"You can generate a PDF file based on the user's input by passing the data you get from ",(0,r.kt)("inlineCode",{parentName:"p"},"getInputs")," as inputs to generate, as shown in the code below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"generate({ template, inputs: form.getInputs() }).then((pdf) => {\n  const blob = new Blob([pdf.buffer], { type: 'application/pdf' });\n  window.open(URL.createObjectURL(blob));\n});\n")),(0,r.kt)("h3",{id:"viewer"},"Viewer"),(0,r.kt)("p",null,"Viewing a PDF file in a mobile browser is a pain, because it doesn't display well in an iframe."),(0,r.kt)("p",null,"The Viewer is a byproduct of the Form development process, but it allows you to show your users a preview of the PDF file you will create."),(0,r.kt)("p",null,"Using the Viewer is basically the same as using the Form, except that user cannot edit it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Template } from '@pdfme/common';\nimport { Viewer } from '@pdfme/ui';\n\nconst domContainer = document.getElementById('container');\nconst template: Template = {\n  // skip...\n};\nconst inputs = [{ a: 'a1', b: 'b1', c: 'c1' }];\n\nconst viewer = new Viewer({ domContainer, template, inputs });\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(60191).Z,width:"1600",height:"1600"})),(0,r.kt)("h2",{id:"special-thanks"},"Special Thanks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pdf-lib.js.org/"},"pdf-lib"),": Used in PDF generation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/foliojs/fontkit"},"fontkit"),": Used in font rendering."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mozilla.github.io/pdf.js/"},"PDF.js"),": Used in PDF viewing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React"),": Used in building the UI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://xrender.fun/form-render"},"form-render"),": Used in building the UI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ant.design/"},"antd"),": Used in building the UI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://daybrush.com/moveable/"},"react-moveable"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/daybrush/selecto"},"react-selecto"),", ",(0,r.kt)("a",{parentName:"li",href:"https://daybrush.com/guides/"},"@scena/react-guides"),": Used in Designer UI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/clauderic/dnd-kit"},"dnd-kit"),": Used in Designer UI.")),(0,r.kt)("p",null,"I definitely could not have created pdfme without these libraries. I am grateful to the developers of these libraries."),(0,r.kt)("p",null,"If you want to contribute to pdfme, please check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/development-guide"},"Development Guide")," page.",(0,r.kt)("br",{parentName:"p"}),"\n","We look forward to your contribution!"))}c.isMDXComponent=!0},26215:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/designer-c8f32607bc8d0fe7b1c2c897381b7a45.gif"},66390:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/form-83ffd9adef857c2a39f13769f31ade51.gif"},89425:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/simple-pdf-3b355202d5c9327b7d7b6ce8eb0239d3.png"},89299:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/template-fa0871eae7f2cb91c2f2182612639c8a.png"},60191:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/viewer-f301a4aab4c27b4bb80582179054e4fa.png"}}]);