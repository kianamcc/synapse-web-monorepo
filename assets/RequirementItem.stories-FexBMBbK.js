import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-DNhl0cBY.js";import{d as s}from"./ToastMessage-DQKZ_7T8.js";import{R as n,a as t}from"./RequirementItem-BIf_LQlL.js";import{P as O}from"./Paper-l2vU89bV.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DsV7Uqwg.js";import"./SynapseConstants-DL5YhH4S.js";import"./OrientationBanner-mORNTher.js";import"./index-CP2flBOM.js";import"./index-iHqCGgSD.js";import"./iframe-B7lNEjCA.js";import"./spreadSx-CwcO6WA9.js";import"./react-C8gp6qo_.js";import"./FullWidthAlert-hDDl8tGl.js";import"./Alert-Blqd_fNk.js";import"./createTheme-DVjZoLcM.js";import"./DefaultPropsProvider-Cyw12EVv.js";import"./useSlot-Co92EhaQ.js";import"./useForkRef-QOk-agIc.js";import"./createSimplePaletteValueFilter-BiBnMtNg.js";import"./createSvgIcon-zcikS4QR.js";import"./Close-DTFq5PlQ.js";import"./IconButton-MRX9Tl10.js";import"./useTimeout-BDErO9dO.js";import"./ButtonBase-CpibtBKw.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CSoU-aEZ.js";import"./Stack-D4AYLr5g.js";import"./useThemeProps-BtqvP0WI.js";import"./getThemeProps-D1SG0DsT.js";import"./useTheme-BpTHkjke.js";import"./extendSxProp-C7d5w1mF.js";import"./Box-CDAuR3Sa.js";import"./AlertTitle-DxXMQd8X.js";import"./Typography-DBnwRkQ7.js";import"./index--3ZaasC4.js";import"./useTheme-DdAf-Ccq.js";import"./ClickAwayListener-DrGahT-8.js";import"./getReactElementRef-Deaobhwy.js";import"./index-CuVSgrUP.js";import"./index-BqdGDFpd.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D_bI5i2G.js";import"./Tooltip-lUCmHMJ3.js";import"./index-Do8mbRFX.js";import"./useControlled-CTTwHfL4.js";import"./Popper-DbiyN3lk.js";import"./Button-D1Zc7cY5.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DQoxcdop.js";import"./QueryClientProvider-DZo2I7_f.js";import"./Link-8oHfVMM1.js";import"./Collapse-PeaT3Cz9.js";import"./_baseUniq-BioGUUFG.js";import"./_Uint8Array-4Fua8vo1.js";import"./isArray-BVc5tk0h.js";import"./_getTag-DMNH3Rat.js";import"./isEqual-DVzAcMpg.js";import"./noop-DX6rZLP_.js";import"./merge-DN43w6rZ.js";import"./_initCloneObject-D074hTky.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BrjpvEaI.js";import"./inputBaseClasses-CZKuk046.js";import"./calculateFriendlyFileSize-ChX25_t7.js";import"./CheckCircleTwoTone-Ck5csnvz.js";import"./InfoTwoTone-C4STztOF.js";import"./useMutation-BNmK4RdG.js";import"./dayjs.min-4LP4YV8J.js";import"./chunk-AYJ5UCUI-C7xelVKS.js";import"./cloneDeep-C13AQJD-.js";import"./Skeleton-BOqcwHCi.js";import"./SkeletonButton-BF5SBREW.js";import"./SkeletonInlineBlock-JMyIX4aF.js";import"./SkeletonTable-qfkj7msZ.js";import"./times-C2V6Ker1.js";import"./toInteger-T3Rot4a2.js";import"./isSymbol-DxIswJ5e.js";import"./SkeletonParagraph-DiUeZz7j.js";import"./uniqueId-CJSnTSFd.js";import"./toString-B7qVd2uL.js";import"./CSSTransition-BI8GX5I9.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CLqin5bN.js";import"./Avatar-Dzk-q9nt.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const ur=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,ur as __namedExportsOrder,dr as default};
