import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-CxHkRYV1.js";import{d as s}from"./ToastMessage-BrUC3qZm.js";import{R as n,a as t}from"./RequirementItem-D82PQYbM.js";import{P as O}from"./Paper-DqB8xjxS.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-B37VPWk-.js";import"./SynapseConstants-Dg09IzDT.js";import"./OrientationBanner-B4SJkYZr.js";import"./index-C-H-fJuo.js";import"./index-gCH3F-r1.js";import"./iframe-BCBbcvZQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-UBZzhmRr.js";import"./FullWidthAlert-CHHjIkJD.js";import"./Alert-V5_UEojM.js";import"./createTheme-D1p9A2f2.js";import"./DefaultPropsProvider-CmlrfWg5.js";import"./useSlot-6pvzLYhW.js";import"./useForkRef-COj3XvZQ.js";import"./createSimplePaletteValueFilter-DTOtfgj3.js";import"./createSvgIcon-CkBZMxAq.js";import"./Close-CrlzALxw.js";import"./IconButton-DHSBqacV.js";import"./useTimeout-CivZ_id6.js";import"./ButtonBase-M4Jzxcu3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bs51YMBW.js";import"./Stack-C1IIaSPK.js";import"./extendSxProp-DQgbXvbc.js";import"./getThemeProps-CLdidU38.js";import"./useTheme-B7m7fhXv.js";import"./Box-BuCUgXTH.js";import"./AlertTitle-2SRxYJwQ.js";import"./Typography-CkFk3qQH.js";import"./index-6OG8n7F8.js";import"./useTheme-clsDaoW6.js";import"./ClickAwayListener-2NJi44vQ.js";import"./getReactElementRef-DD0b2rBo.js";import"./index-CnzvKS9o.js";import"./index-CGgQNUb3.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-dmAf587E.js";import"./Tooltip-Bw5Mqcui.js";import"./index-DJUuUKdb.js";import"./useControlled-Cbe230fr.js";import"./Popper-CezA94Ov.js";import"./Button-Bq7-oNZP.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-peoRulMu.js";import"./QueryClientProvider-CEduwUw-.js";import"./Link-DTAwkCMx.js";import"./Collapse-DqM45Hd3.js";import"./_baseUniq-D0P6MV-g.js";import"./_Uint8Array-B9_5IaWw.js";import"./isArray-BNo8uFCA.js";import"./_getTag-XwRPoZO-.js";import"./isEqual-Bqh1nAyw.js";import"./merge-CkbrndtI.js";import"./_initCloneObject-KI0b2em9.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-VXYSh2ya.js";import"./inputBaseClasses-CAubCajD.js";import"./calculateFriendlyFileSize-CQLA_QRj.js";import"./CheckCircleTwoTone-hy9tFN29.js";import"./InfoTwoTone-DIuNf5oo.js";import"./useMutation-DXPIwxqN.js";import"./dayjs.min-BsZF07Jg.js";import"./chunk-AYJ5UCUI-DKhRYle7.js";import"./cloneDeep-BDSqEaua.js";import"./Skeleton-B0T6iVLg.js";import"./SkeletonButton-SGKfMzyH.js";import"./SkeletonInlineBlock-DCwQLMTz.js";import"./SkeletonTable-BvEj_r33.js";import"./times-BznIWsZO.js";import"./toInteger-DDh2TO3_.js";import"./toNumber-BnyR5Mgz.js";import"./isSymbol-D4lvthYI.js";import"./SkeletonParagraph-Di23pFhg.js";import"./uniqueId-DmDWC_w2.js";import"./toString-Za6AWiqE.js";import"./CSSTransition-7sOUvBiD.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-D9TQCLgu.js";import"./Avatar-DbcnJozY.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
