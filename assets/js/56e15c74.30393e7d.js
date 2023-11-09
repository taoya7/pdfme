"use strict";(self.webpackChunk_pdfme_website=self.webpackChunk_pdfme_website||[]).push([[515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(m,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(h,s(s({ref:t},l),{},{components:n})):a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},s="Custom Schemas(Plugins)",o={unversionedId:"custom-schemas",id:"custom-schemas",title:"Custom Schemas(Plugins)",description:"By default, pdfme allows you to use a text schema. However, some users may want to utilize schemas for images or QR codes.",source:"@site/docs/custom-schemas.md",sourceDirName:".",slug:"/custom-schemas",permalink:"/docs/custom-schemas",draft:!1,editUrl:"https://github.com/pdfme/pdfme/tree/main/website/docs/custom-schemas.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Fonts",permalink:"/docs/custom-fonts"},next:{title:"Tables with Dynamic Data",permalink:"/docs/tables"}},m={},p=[{value:"Using Schemas from @pdfme/schemas",id:"using-schemas-from-pdfmeschemas",level:2},{value:"Creating Your Own Schemas",id:"creating-your-own-schemas",level:2},{value:"Overview of Custom Schemas / Plugins",id:"overview-of-custom-schemas--plugins",level:3},{value:"Learning How to Create from @pdfme/schemas&#39; Code",id:"learning-how-to-create-from-pdfmeschemas-code",level:3},{value:"Sample Scenario for Creating a Signature Plugin",id:"sample-scenario-for-creating-a-signature-plugin",level:3},{value:"Caveats for writing Custom Schemas",id:"caveats-for-writing-custom-schemas",level:3},{value:"Renderer schema caching",id:"renderer-schema-caching",level:4}],l={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-schemasplugins"},"Custom Schemas(Plugins)"),(0,r.kt)("p",null,"By default, pdfme allows you to use a text schema. However, some users may want to utilize schemas for images or QR codes.\nThese can be loaded as plugins from the ",(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/schemas")," package."),(0,r.kt)("p",null,"You can also create your own schemas and load them similarly as plugins.\nThis page explains how to use schemas from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/schemas")," and how to create your own."),(0,r.kt)("h2",{id:"using-schemas-from-pdfmeschemas"},"Using Schemas from @pdfme/schemas"),(0,r.kt)("p",null,"Here, we explain how to import image and QR code schemas from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/schemas"),"."),(0,r.kt)("p",null,"First, install ",(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/schemas"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pdfme/schemas\n")),(0,r.kt)("p",null,"Next, import the required schemas from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/schemas")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/generator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/ui"),"."),(0,r.kt)("p",null,"The following code shows an example of importing QR code and image schemas from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/generator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/ui"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Template } from '@pdfme/common';\nimport { text, image, barcodes } from '@pdfme/schemas';\nimport { generate } from '@pdfme/generator';\n\nconst template: Template = {\n  // skip... you can use text, image, qrcode schema type in template.\n};\nconst inputs = [\n  // skip...\n];\n\nconst pdf = await generate({\n  template,\n  inputs,\n  // \u2193 You can use plugins in Generator like this.\n  plugins: {\n    text,\n    image,\n    qrcode: barcodes.qrcode,\n  },\n});\n")),(0,r.kt)("p",null,"In this ",(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/ui")," example, we're using the Designer, but you can load plugins in the Form and Viewer in the same way."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Template } from '@pdfme/common';\nimport { text, image, barcodes } from '@pdfme/schemas';\nimport { Designer } from '@pdfme/ui';\n\nconst domContainer = document.getElementById('container');\nconst template: Template = {\n  // skip... you can use text, image, qrcode schema type in template.\n};\n\nconst designer = new Designer({\n  domContainer,\n  template,\n  // \u2193 You can use plugins in Designer like this.\n  plugins: {\n    text,\n    image,\n    qrcode: barcodes.qrcode,\n  },\n});\n")),(0,r.kt)("p",null,"By loading image and qrcode as plugins, you can render schemas of type image and qrcode found in your template's schemas."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(11815).Z,width:"2118",height:"1466"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Using plugins from Designer, you can override the default schema to remove text, replace it with custom schema, or rename label, rearrange the order."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  plugins: {\n    QR: barcodes.qrcode,\n    Image: image,\n  },\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{src:n(12145).Z,width:"1138",height:"462"}))),(0,r.kt)("h2",{id:"creating-your-own-schemas"},"Creating Your Own Schemas"),(0,r.kt)("p",null,"Next, we will introduce the method for those who want to create their own schemas.",(0,r.kt)("br",{parentName:"p"}),"\n","If you have created a schema or have an idea for one, please share it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pdfme/pdfme/discussions/288"},"GitHub Discussions"),".",(0,r.kt)("br",{parentName:"p"}),"\n","We believe that since pdfme is developed as open-source, everyone should be able to share and develop schemas together."),(0,r.kt)("h3",{id:"overview-of-custom-schemas--plugins"},"Overview of Custom Schemas / Plugins"),(0,r.kt)("p",null,"Custom schemas consist of three elements, which are collectively referred to as plugins.",(0,r.kt)("br",{parentName:"p"}),"\n","The type definitions for plugins are defined within the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pdfme/pdfme/blob/main/packages/common/src/types.ts"},"packages/common/src/types.ts")," file."),(0,r.kt)("p",null,"We will explain how the ",(0,r.kt)("strong",{parentName:"p"},"Plugin")," is structured and how it operates."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pdf"),": Used in ",(0,r.kt)("inlineCode",{parentName:"li"},"@pdfme/generator"),", it includes code for rendering schemas into PDFs. The PDF rendering process is handled by ",(0,r.kt)("a",{parentName:"li",href:"https://pdf-lib.js.org/"},"pdf-lib"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ui"),": Used in ",(0,r.kt)("inlineCode",{parentName:"li"},"@pdfme/ui"),", it includes code for rendering schemas into the DOM. The ui has the following modes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"viewer"),": Utilized in ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started#viewer"},"Viewer"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started#designer"},"Designer")," (when no field is selected). Functions as a preview by matching the rendering and appearance of the PDF."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"form"),": Utilized in ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started#form"},"Form"),". Functions as a form that users can input into."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"designer"),": Utilized in ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started#designer"},"Designer")," (when a field is double-clicked). Basically the same as the form but serves as a WYSIWYG editor where users can input. For textarea and input elements, focusing is required."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"propPanel"),": Used in ",(0,r.kt)("inlineCode",{parentName:"li"},"@pdfme/ui"),"'s ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started#designer"},"Designer"),", it allows you to add custom property editing forms to the sidebar when a field is selected. You can fill it out using ",(0,r.kt)("a",{parentName:"li",href:"https://xrender.fun/form-render"},"form-render"),"'s JSON format (widget extensions are also possible).")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"pdfme relies on ",(0,r.kt)("a",{parentName:"p",href:"https://pdf-lib.js.org/"},"pdf-lib")," and ",(0,r.kt)("a",{parentName:"p",href:"https://xrender.fun/form-render"},"form-render"),".",(0,r.kt)("br",{parentName:"p"}),"\n","These libraries are manipulated through plugins to achieve their functionalities within pdfme.",(0,r.kt)("br",{parentName:"p"}),"\n","Please refer to the documentation of the above libraries as needed.")),(0,r.kt)("p",null,"The images below highlight where the pdf, ui, and propPanel of the plugin are used."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pdf"),(0,r.kt)("img",{src:n(20528).Z,width:"2170",height:"1600"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ui(mode: viewer), ui(mode: form)"),(0,r.kt)("img",{src:n(65919).Z,width:"2132",height:"1140"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ui(mode: designer), ui(mode: viewer), propPanel"),(0,r.kt)("img",{src:n(22012).Z,width:"2136",height:"1466"}))),(0,r.kt)("h3",{id:"learning-how-to-create-from-pdfmeschemas-code"},"Learning How to Create from @pdfme/schemas' Code"),(0,r.kt)("p",null,"If you're looking to create your own schema, it is recommended to refer to the existing code within ",(0,r.kt)("inlineCode",{parentName:"p"},"@pdfme/schemas")," while doing so.",(0,r.kt)("br",{parentName:"p"}),"\n","The code for existing schemas can be found in the files below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pdfme/pdfme/tree/main/packages/schemas/src/text/index.ts"},"packages/schemas/src/text/index.ts"),": The most complex schema in terms of PDF rendering. The propPanel is also customized using ",(0,r.kt)("a",{parentName:"li",href:"https://xrender.fun/form-render/advanced-widget"},"form-render's Widget"),", demonstrating that the plugin can meet complex needs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pdfme/pdfme/tree/main/packages/schemas/src/image/index.ts"},"packages/schemas/src/image/index.ts"),': Simple implementation for PDF rendering, but uses an input type="file" element for image input during ui(mode: form) and ui(mode: designer) rendering. Overall, it\u2019s a simple implementation and may serve as a good starting point.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pdfme/pdfme/tree/main/packages/schemas/src/barcodes/index.ts"},"packages/schemas/src/barcodes/index.ts"),": Cool for generating barcodes in real-time for ui preview, and shares that module with pdf. Also, supports more than 10 types of barcodes and changes the form in the propPanel according to the type of barcode. Demonstrates that the plugin can be both flexible and efficient.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"PropPanel.defaultSchema.rotate")," is not set or is undefined, the rotate handle will disappear from the Designer."),(0,r.kt)("li",{parentName:"ul"},"If rotation is not required, it's efficient to skip its implementation in PDF rendering."))),(0,r.kt)("h3",{id:"sample-scenario-for-creating-a-signature-plugin"},"Sample Scenario for Creating a Signature Plugin"),(0,r.kt)("p",null,"As a sample scenario, let's try creating a plugin that allows you to input signatures in the form.",(0,r.kt)("br",{parentName:"p"}),"\n","Specifically, it should be possible to input the signature using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/szimek/signature_pad"},"signature_pad"),", and to render that signature as an image in both the DOM and PDF."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://playground.pdfme.com/"},(0,r.kt)("img",{src:n(1904).Z,width:"960",height:"525"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Demo: ",(0,r.kt)("a",{parentName:"li",href:"https://playground.pdfme.com/"},"https://playground.pdfme.com/")),(0,r.kt)("li",{parentName:"ul"},"Code: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pdfme/pdfme-playground/blob/main/src/plugins/signature.ts"},"pdfme-playground/src/plugins/signature.ts"))),(0,r.kt)("h3",{id:"caveats-for-writing-custom-schemas"},"Caveats for writing Custom Schemas"),(0,r.kt)("h4",{id:"renderer-schema-caching"},"Renderer schema caching"),(0,r.kt)("p",null,"pdfme supports caching of memory or cpu-intensive content so that it can be re-used within the same rendering process."),(0,r.kt)("p",null,"The most common use-case for this is when you're rendering a large number of PDFs with the same template. Often these\ninputs might be the same and your schema could benefit from caching them. This is optional, but if you're intending for your custom schema to be used by others then you should consider it."),(0,r.kt)("p",null,"Examples of caching are available in both ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pdfme/pdfme/blob/main/packages/schemas/src/image/pdfRender.ts"},"image")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pdfme/pdfme/blob/main/packages/schemas/src/barcodes/pdfRender.ts"},"barcode")," schema render functions. You will need to choosing a caching key that captures the uniqueness of your generated PDF artifact (excluding attributes such as size and position, which are usually handled by pdf-lib on rendering). You will notice in the barcode schema that it requires more attributes to describe it's uniqueness compare to images which use the default ",(0,r.kt)("inlineCode",{parentName:"p"},"getCacheKey")," function."))}d.isMDXComponent=!0},12145:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/custom-schemas-tips-cbbf4d13ea9970a540ea1fd0b4a96882.png"},11815:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/custom-schemas-b6d2410b17f9f4bf3189f8d4c2d44d68.png"},22012:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/plugin-designer-f0f0d927fa489057a269a9768e47349f.png"},20528:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/plugin-pdf-92f7a0850b6a8f71d0f721dbcaf596b1.png"},65919:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/plugin-preview-a78eb9f034a305ee4d78c054edb3cc43.png"},1904:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/signature-schema-c026f7e2a8a15a7d3839d9289e4967ba.gif"}}]);