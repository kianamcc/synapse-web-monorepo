import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as b}from"./Stack-DqCCF0aZ.js";import{F as o}from"./FormControlLabel-DeM5fj1z.js";import{C as r}from"./Checkbox-CJewFxGy.js";import{R as k}from"./RadioGroup-A6tNGq_a.js";import{R as t}from"./Radio-D8788-Np.js";import"./DefaultPropsProvider-C_zNEI2X.js";import"./createTheme-D1BQx7_9.js";import"./index-DTNlVjJ7.js";import"./iframe-HyGsmOq6.js";import"./extendSxProp-iklfMelH.js";import"./getThemeProps-vMGdrB_u.js";import"./useTheme-BfaqaQGF.js";import"./formControlState-Dq1zat_P.js";import"./useSlot-D3K8A8w7.js";import"./useForkRef-U0ZDp63e.js";import"./useFormControl-BtI6dpXm.js";import"./Typography-CdQn_xVC.js";import"./index-ChnvbaPR.js";import"./createSimplePaletteValueFilter-cVSg-Kao.js";import"./SwitchBase-BWIGv0B8.js";import"./useControlled-C_0taDzB.js";import"./ButtonBase-36aZ1yix.js";import"./useTimeout-DtwR2-Vy.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-RS-D48a7.js";import"./mergeSlotProps-Bztx4xlz.js";import"./FormGroup-CJk5k24Q.js";import"./createChainedFunction-BO_9K8Jh.js";const q={title:"UI/Checkbox & Radio",parameters:{design:[{name:"checkbox",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=70-1253"},{name:"radio",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=132-3283&t=dVoIbwiaKO0XaSkd-4"}]}},a={name:"Checkbox",render:()=>e.jsxs(b,{children:[e.jsx(o,{control:e.jsx(r,{}),label:"uncontrolled"}),e.jsx(o,{control:e.jsx(r,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(r,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!1}),label:"disabled unchecked"}),e.jsx(o,{control:e.jsx(r,{indeterminate:!0}),label:"indeterminate"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,indeterminate:!0}),label:"disabled indeterminate"})]})},l={name:"Radio",render:()=>e.jsxs(k,{children:[e.jsx(o,{control:e.jsx(t,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(t,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(t,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(t,{disabled:!0,checked:!1}),label:"disabled unchecked"})]})};var c,d,n;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var i,s,m;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Radio',
  render: () => {
    return <RadioGroup>
        <FormControlLabel control={<Radio checked />} label={'checked'} />
        <FormControlLabel control={<Radio disabled={true} checked />} label={'checked + disabled'} />
        <FormControlLabel control={<Radio checked={false} />} label={'unchecked'} />
        <FormControlLabel control={<Radio disabled={true} checked={false} />} label={'disabled unchecked'} />
      </RadioGroup>;
  }
}`,...(m=(s=l.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const z=["CheckboxDemo","RadioDemo"];export{a as CheckboxDemo,l as RadioDemo,z as __namedExportsOrder,q as default};
