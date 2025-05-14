import{j as e}from"./jsx-runtime-D39jwkIv.js";import{S as b}from"./Stack-DpwqU_wj.js";import{F as o}from"./FormControlLabel-Bkm-mjj2.js";import{C as r}from"./Checkbox-BXUL6l75.js";import{R as k}from"./RadioGroup-BXrZ3usT.js";import{R as a}from"./Radio-D9_m9DrE.js";import"./index-BVDw5WRY.js";import"./iframe-CLB8zn3r.js";import"./DefaultPropsProvider-D-nVBZLz.js";import"./createTheme-DMsj8ftm.js";import"./getThemeProps-PSvmS7hA.js";import"./useTheme-Bec-LrS3.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BPXlULSH.js";import"./Typography-DSGH8yyG.js";import"./SwitchBase-eyxvaP5I.js";import"./useControlled-BN-u63ln.js";import"./ButtonBase-DJAMH7Md.js";import"./useTimeout-BUaaVD43.js";import"./TransitionGroupContext-DVa8RRVS.js";import"./useForkRef-DzNT1O1i.js";import"./useIsFocusVisible-Brdx5a5c.js";import"./useEventCallback-DlaNXhB0.js";import"./createSvgIcon-B3AKd2cd.js";import"./useId-me0PSUGK.js";import"./FormGroup-C-_J5HIM.js";import"./createChainedFunction-BO_9K8Jh.js";const K={title:"UI/Checkbox & Radio",parameters:{design:[{name:"checkbox",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=70-1253"},{name:"radio",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=132-3283&t=dVoIbwiaKO0XaSkd-4"}]}},l={name:"Checkbox",render:()=>e.jsxs(b,{children:[e.jsx(o,{control:e.jsx(r,{}),label:"uncontrolled"}),e.jsx(o,{control:e.jsx(r,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(r,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!1}),label:"disabled unchecked"}),e.jsx(o,{control:e.jsx(r,{indeterminate:!0}),label:"indeterminate"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,indeterminate:!0}),label:"disabled indeterminate"})]})},t={name:"Radio",render:()=>e.jsxs(k,{children:[e.jsx(o,{control:e.jsx(a,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(a,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(a,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(a,{disabled:!0,checked:!1}),label:"disabled unchecked"})]})};var c,d,n;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Checkbox',
  render: () => {
    return <Stack>
        <FormControlLabel control={<Checkbox />} label={'uncontrolled'} />
        <FormControlLabel control={<Checkbox checked />} label={'checked'} />
        <FormControlLabel control={<Checkbox disabled={true} checked />} label={'checked + disabled'} />
        <FormControlLabel control={<Checkbox checked={false} />} label={'unchecked'} />
        <FormControlLabel control={<Checkbox disabled={true} checked={false} />} label={'disabled unchecked'} />
        <FormControlLabel control={<Checkbox indeterminate />} label={'indeterminate'} />
        <FormControlLabel control={<Checkbox disabled={true} indeterminate />} label={'disabled indeterminate'} />
      </Stack>;
  }
}`,...(n=(d=l.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var i,s,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Radio',
  render: () => {
    return <RadioGroup>
        <FormControlLabel control={<Radio checked />} label={'checked'} />
        <FormControlLabel control={<Radio disabled={true} checked />} label={'checked + disabled'} />
        <FormControlLabel control={<Radio checked={false} />} label={'unchecked'} />
        <FormControlLabel control={<Radio disabled={true} checked={false} />} label={'disabled unchecked'} />
      </RadioGroup>;
  }
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const X=["CheckboxDemo","RadioDemo"];export{l as CheckboxDemo,t as RadioDemo,X as __namedExportsOrder,K as default};
