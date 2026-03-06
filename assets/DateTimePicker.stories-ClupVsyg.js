import{dt as a,j as e,an as p,j4 as c}from"./iframe-CaNoDgkX.js";import{D as d}from"./DateTimePicker-DsmJCVh9.js";import"./index-Chi_LkuB.js";import"./useMobilePicker-BANdqCcx.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BSE4KOHc.js";import"./index-Ck3YdKMk.js";import"./ListItem-B9Igq2_n.js";import"./listItemButtonClasses-BApiEFYD.js";import"./Chip-QjhKE9v8.js";import"./Tabs-DkMAyM6M.js";import"./KeyboardArrowRight-DZ54COQw.js";import"./MenuItem-ClqCH5V3.js";const D={title:"UI/DateTimePicker",component:d,tags:["autodocs"]};function s(r){const{children:i,utcTimeOverride:n}=r,m=p();return e.jsx(c,{synapseContext:{...m,utcTime:n},children:i})}const o={decorators:[r=>e.jsx(s,{utcTimeOverride:!1,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}},t={decorators:[r=>e.jsx(s,{utcTimeOverride:!0,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <TimezoneConfigOverrideWrapper utcTimeOverride={false}>
        <Story />
      </TimezoneConfigOverrideWrapper>],
  args: {
    value: dayjs('2023-01-01T00:00:00')
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <TimezoneConfigOverrideWrapper utcTimeOverride={true}>
        <Story />
      </TimezoneConfigOverrideWrapper>],
  args: {
    value: dayjs('2023-01-01T00:00:00')
  }
}`,...t.parameters?.docs?.source}}};const P=["Local","UTC"];export{o as Local,t as UTC,P as __namedExportsOrder,D as default};
