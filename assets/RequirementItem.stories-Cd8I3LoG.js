import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-OHiNTcIY.js";import{d as s}from"./ToastMessage-BKWEAnbw.js";import{R as n,a as t}from"./RequirementItem-BBkYlvjT.js";import{P as O}from"./Paper-CtW16pnR.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-7QOjYuHz.js";import"./SynapseConstants-DlPVwMta.js";import"./OrientationBanner-CbJZWNle.js";import"./index-9VYu8pA-.js";import"./index-S6JpS9L6.js";import"./iframe-Dpemo47m.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cy4t5e3X.js";import"./FullWidthAlert-CTqsHr4s.js";import"./Alert-CYDi7tP1.js";import"./createTheme-kMUgK5rV.js";import"./DefaultPropsProvider-B_3cQ3H3.js";import"./useSlot-Bq7ZiTFS.js";import"./useForkRef-rAm_J8Sg.js";import"./createSimplePaletteValueFilter-VUTiuKKk.js";import"./createSvgIcon-Bq1h7iWH.js";import"./Close-DisxFzti.js";import"./IconButton-B2sumVtV.js";import"./useTimeout-CSwOi-FM.js";import"./ButtonBase-CNAjaap7.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BQEgQBJb.js";import"./Stack-C-Goak6Z.js";import"./extendSxProp-B70D5Qae.js";import"./getThemeProps-Bm2Tmxpo.js";import"./useTheme-CsEvq3lC.js";import"./Box-C0crqIka.js";import"./AlertTitle-lA6diPt0.js";import"./Typography-CTRDWlrM.js";import"./index-D4ah_lCb.js";import"./useTheme-CPuYTQz7.js";import"./ClickAwayListener-BKECwq7p.js";import"./getReactElementRef-D6KgKjxL.js";import"./index-BVUn8srT.js";import"./index-Cp0QLfYr.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BaPqyB1t.js";import"./Tooltip-1fUS7Bwt.js";import"./index-CDcQdrbH.js";import"./useControlled-DlDksA-M.js";import"./Popper-zdckR06h.js";import"./Button-CtLeedch.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CfFtTyHe.js";import"./QueryClientProvider-DiUIsS9m.js";import"./Link-DvFKUPFA.js";import"./Collapse-BniBrM48.js";import"./_baseUniq-BncWtpK0.js";import"./_Uint8Array-DetXu6Ah.js";import"./isArray-1XlwyKON.js";import"./_getTag-CWpAsd9x.js";import"./isEqual-D_alJvEx.js";import"./merge-B521QHJ6.js";import"./_initCloneObject-9IQwVB84.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ByOrnSh7.js";import"./inputBaseClasses-VdtSh-Ow.js";import"./calculateFriendlyFileSize-CFmbrpaE.js";import"./CheckCircleTwoTone-DLHDeNik.js";import"./InfoTwoTone-DK8KV4VZ.js";import"./useMutation-Du_r23yb.js";import"./dayjs.min-BVk991pC.js";import"./chunk-AYJ5UCUI-BIXYhaRs.js";import"./cloneDeep-BmdwTKPh.js";import"./Skeleton-WKRtG0tU.js";import"./SkeletonButton-DKgLY_1x.js";import"./SkeletonInlineBlock-LitBJj6v.js";import"./SkeletonTable-DdMKD7lj.js";import"./times-DP1iF72k.js";import"./toInteger-CA0VakHT.js";import"./toNumber-B97v6680.js";import"./isSymbol-DnSr77qx.js";import"./SkeletonParagraph-22aPNLcs.js";import"./uniqueId-R7CaUSYE.js";import"./toString-DsknA_C4.js";import"./CSSTransition-D4iftbz0.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-exq6lJdY.js";import"./Avatar-B60VcN-I.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
