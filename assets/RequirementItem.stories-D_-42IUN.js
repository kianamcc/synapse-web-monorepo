import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DPu6hHZY.js";import{d as s}from"./ToastMessage-YoORn32o.js";import{R as n,a as t}from"./RequirementItem-DZiBz5dW.js";import{P as O}from"./Paper-ynfz7H6Q.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-B1Al6y8l.js";import"./SynapseConstants-BKZsmd7G.js";import"./OrientationBanner-DlMp4fW5.js";import"./index-DRZM4w6_.js";import"./index-DQYT1R_u.js";import"./iframe-D5QRuwZV.js";import"./spreadSx-CwcO6WA9.js";import"./react-yozk1pbL.js";import"./FullWidthAlert-VferjZhM.js";import"./Alert-6OyH5QQC.js";import"./createTheme-CZm5u8xp.js";import"./DefaultPropsProvider-NIGwb3IF.js";import"./useSlot-C-AUXRQs.js";import"./useForkRef-llm1BJNg.js";import"./createSimplePaletteValueFilter-BlpkqTG5.js";import"./createSvgIcon-uU6lhPjr.js";import"./Close-DZOvySMn.js";import"./IconButton-Dd2Xnt85.js";import"./useTimeout-BJOZpIkm.js";import"./ButtonBase-DlAYYNgC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CeUza2AP.js";import"./Stack-BF8N0a8m.js";import"./extendSxProp-Du_VvGn2.js";import"./getThemeProps-dNuwZxMX.js";import"./useTheme-kKpXVon9.js";import"./Box-CFkmOq-l.js";import"./AlertTitle-pnl3d8mD.js";import"./Typography-MleCrHUm.js";import"./index-B4AHTW3Q.js";import"./useTheme-B2h4mzzb.js";import"./ClickAwayListener-CqSYEBqu.js";import"./getReactElementRef-YmEKJ6fZ.js";import"./index-CGnrXZTC.js";import"./index-7HI6AhuL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B4OcB6o8.js";import"./Tooltip-okKEWowT.js";import"./index-CAQemz-f.js";import"./useControlled-CykWwMQP.js";import"./Popper-6CHeDotq.js";import"./Button-Cx6foEwR.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-WRFY3HlG.js";import"./QueryClientProvider-DRYwtiwp.js";import"./Link-DcHpNyh6.js";import"./Collapse-DwkCyade.js";import"./_baseUniq-Cezgv792.js";import"./_Uint8Array-D_CFOAET.js";import"./isArray-BH7qAhf0.js";import"./_getTag-DvY-j0AQ.js";import"./isEqual-DgrYqCvn.js";import"./merge-AWTlQDqG.js";import"./_initCloneObject-BUeyNxsB.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D9FKoKgS.js";import"./inputBaseClasses-BOR_FqWz.js";import"./calculateFriendlyFileSize-DoduwL8E.js";import"./CheckCircleTwoTone-WBDDGY6B.js";import"./InfoTwoTone-4TfPN_vb.js";import"./useMutation-DIb7e56m.js";import"./dayjs.min-JP37EtNM.js";import"./chunk-AYJ5UCUI-C4a9m5tK.js";import"./cloneDeep-B9q3B7rM.js";import"./Skeleton-JMTGmtrq.js";import"./SkeletonButton-jY2UYDY0.js";import"./SkeletonInlineBlock-D7AGij2D.js";import"./SkeletonTable-DI_LqG33.js";import"./times-BiFomnAp.js";import"./toInteger-CcVS2Z4p.js";import"./toNumber-CfmKDFmd.js";import"./isSymbol-DzCjYy7W.js";import"./SkeletonParagraph-CPVyY8sx.js";import"./uniqueId-C8brBHkp.js";import"./toString-C4r1pAEv.js";import"./CSSTransition-BalztoSA.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-rzIs8Vwx.js";import"./Avatar-CIyKieai.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const dr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,dr as __namedExportsOrder,cr as default};
