import{R as s,r as v}from"./chunks/index.85c4d586.js";import{p as n,t as g,j as u}from"./chunks/jsx-runtime.a1216065.js";import{D as P}from"./chunks/index.ec66ce8e.js";import{I as j}from"./chunks/index.45300785.js";import{B as x,I as B}from"./chunks/config.75056095.js";import"./chunks/index.265eb62a.js";import"./chunks/index.5e2b537a.js";import"./chunks/index.9205f15d.js";import"./chunks/index.934a0f1f.js";var T=function(){};const D=T;function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?y(Object(r),!0).forEach(function(o){E(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function E(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var _={assistiveText:n.exports.shape({label:n.exports.string}),id:n.exports.string,overflowDropdownMenu:n.exports.node,styleContainer:n.exports.object,trail:n.exports.array.isRequired},w={assistiveText:{label:"Breadcrumbs"}},S=function(e,r){var o=i(i({},e.props),{},{id:"".concat(r.id,"-dropdown"),iconCategory:"utility",iconName:"threedots",iconVariant:"bare",threedots:!0});return s.createElement("li",{className:"slds-breadcrumb__item"},s.createElement(P,o))},c=function(e){D();var r=e.overflowDropdownMenu,o=e.trail,a=typeof e.assistiveText=="string"?e.assistiveText:i(i({},w.assistiveText),e.assistiveText).label;return s.createElement("nav",{role:"navigation","aria-label":a,style:e.styleContainer},s.createElement("ol",{className:"slds-breadcrumb slds-list_horizontal"},r&&S(r,e),o.map(function(l,p){return s.createElement("li",{key:p,className:"slds-breadcrumb__item"},l)})))};c.displayName=g;c.propTypes=_;c.defaultProps=w;const $=c,C=t=>t.charAt(0).toLocaleUpperCase()+t.slice(1),q=t=>{const{location:e}=t,r=v.exports.useId(),o=v.exports.useMemo(()=>{const{protocol:a,host:l,pathname:p}=e,m=p.replace(RegExp(`/${x}`),"").split("/").slice(3).filter(Boolean),d=m.map((f,b)=>{const O=`${b===0?"":"/"}`+m.slice(0,b).join("/")+`/${f}`,h=`${a}//${l}${x}/en${O}`;return u.exports.jsx("a",{href:h,title:h,children:C(f)})});return d.length<=1?[]:d},[]);return u.exports.jsx(j,{iconPath:B,children:u.exports.jsx($,{id:r,trail:o})})};export{q as default};
