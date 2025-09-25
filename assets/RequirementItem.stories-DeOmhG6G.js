import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-B0izfJJh.js";import{d as s}from"./ToastMessage-CHp16RI2.js";import{R as n,a as t}from"./RequirementItem-DN3Qm3gl.js";import{P as O}from"./Paper-DWozaVgO.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-CDtWRh66.js";import"./SynapseConstants-DKFdJ73Q.js";import"./OrientationBanner-Bw2hhm9s.js";import"./index-CnMpwM0U.js";import"./index-B1Y1SQar.js";import"./iframe-D6gq1sv4.js";import"./spreadSx-CwcO6WA9.js";import"./react-CLWcOTjn.js";import"./FullWidthAlert-DNTEiS4Z.js";import"./Alert-BSORcLd9.js";import"./createTheme-B4hKxUS9.js";import"./DefaultPropsProvider-DZdPioNL.js";import"./useSlot-6G-U546i.js";import"./useForkRef-Cym8eqpZ.js";import"./createSimplePaletteValueFilter-CkzHcWbd.js";import"./createSvgIcon-Bk0gUnDt.js";import"./Close-D4D01hQD.js";import"./IconButton-BlF3WGn2.js";import"./useTimeout-AyHDji-w.js";import"./ButtonBase-BM_vlHn6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BwsSwLYa.js";import"./Stack-CkH8TlAI.js";import"./extendSxProp-CJZLwvsA.js";import"./getThemeProps-uTljI9bI.js";import"./useTheme-DTxpHhlU.js";import"./Box-BE-t5V3S.js";import"./AlertTitle-aSLQcBba.js";import"./Typography-huEi4QvC.js";import"./index-DtMmAOuf.js";import"./useTheme-Cp5Ie4ZG.js";import"./ClickAwayListener-CHA6O-3v.js";import"./getReactElementRef-BfWTqiuC.js";import"./index-vSos4i3w.js";import"./index-Pxasz3mk.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C1PLrN8K.js";import"./Tooltip-X5cfteO5.js";import"./index-B3zxRHeA.js";import"./useControlled-CRvO6k9i.js";import"./Popper-CoeHOVbM.js";import"./Button-Di83tVtK.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CCO2MbdD.js";import"./QueryClientProvider-Brp8Mfog.js";import"./Link-CHOmSP7V.js";import"./Collapse-C9AGlskI.js";import"./_baseUniq-D3TytIMY.js";import"./_Uint8Array-BwaDsHhd.js";import"./isArray-BpcGZOxD.js";import"./_getTag-Ju5oQera.js";import"./isEqual-BE7Qr70P.js";import"./merge-B-lc-Z_e.js";import"./_initCloneObject-CdP1d7vZ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CFP0AL3B.js";import"./inputBaseClasses-Dt3oByve.js";import"./calculateFriendlyFileSize-CbotoQRx.js";import"./CheckCircleTwoTone-C6_eyISX.js";import"./InfoTwoTone-B5z7bA4n.js";import"./useMutation-DMgMt8Oj.js";import"./dayjs.min-CtR5IyO8.js";import"./chunk-AYJ5UCUI-QtbymUEO.js";import"./cloneDeep-AhHUX9Vf.js";import"./Skeleton-BsUzCN1c.js";import"./SkeletonButton-B3c6pH5r.js";import"./SkeletonInlineBlock-CfJEFKxs.js";import"./SkeletonTable-C9Sr2dnx.js";import"./times-Dk0xHobN.js";import"./toInteger-BTW3Ow4U.js";import"./isSymbol-Dvs3tof7.js";import"./SkeletonParagraph-BV8AKnrA.js";import"./uniqueId-CI7R9zf0.js";import"./toString-mv_dZMUn.js";import"./CSSTransition-DYQ99MAY.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Dzr3lbwR.js";import"./Avatar-BLGQzRf6.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.PENDING,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var L,k,C;e.parameters={...e.parameters,docs:{...(L=e.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOADING,
    actions: []
  }
}`,...(C=(k=e.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var M,E,R;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: []
  }
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var S,I,q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOCKED,
    actions: [{
      variant: 'outlined',
      children: 'Accept terms',
      onClick: () => {
        displayToast('Accept terms clicked');
      }
    }]
  }
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const cr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,cr as __namedExportsOrder,pr as default};
