import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-DsqhOKcH.js";import{d as s}from"./ToastMessage-CeHEK3rf.js";import{R as n,a as t}from"./RequirementItem-Cm7em2S3.js";import{P as O}from"./Paper-DZF35SV3.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-BHsZDc6w.js";import"./SynapseConstants-DZP8Q-Ok.js";import"./OrientationBanner-1ivb8fJK.js";import"./index-C6G8fBMj.js";import"./index-CZ_Xbo9d.js";import"./iframe-CboxRUYY.js";import"./spreadSx-CwcO6WA9.js";import"./react-exrv6PR3.js";import"./FullWidthAlert-DRTcoFsU.js";import"./Alert-DtrbFnhk.js";import"./createTheme-CHnERlHu.js";import"./DefaultPropsProvider-CLHCDatu.js";import"./useSlot-BxOF9eug.js";import"./useForkRef-DlNQmSoI.js";import"./createSimplePaletteValueFilter-DcXdmF7a.js";import"./createSvgIcon-5IvX-7Gl.js";import"./Close-Csqf9CGW.js";import"./IconButton-bzPPjluh.js";import"./useTimeout-IWqnlP_c.js";import"./ButtonBase-C3Ub9arw.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B85vBXt_.js";import"./Stack-DP88hTUX.js";import"./extendSxProp-BGoZpgRj.js";import"./getThemeProps-oZ99LySU.js";import"./useTheme-BesulHm4.js";import"./Box-CczoC0JY.js";import"./AlertTitle-DnOqIXzY.js";import"./Typography-C4GYv4Qe.js";import"./index-Cq4nKCYL.js";import"./useTheme-BExNHEet.js";import"./ClickAwayListener-2RurDTCP.js";import"./getReactElementRef-DHAwdYX_.js";import"./index-BOgWLZwP.js";import"./index-B5KBvkTS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-6OtmzlvI.js";import"./Tooltip-PeTAy79u.js";import"./index-zIcecOCu.js";import"./useControlled-B1oSeoHd.js";import"./Popper-Y5LcPV0H.js";import"./Button-fVBf25xZ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-lDHZB5F5.js";import"./QueryClientProvider-BxtBD_IW.js";import"./Link-DX8Kn-Mc.js";import"./Collapse-BQXq5EgG.js";import"./_baseUniq-a_wEf1dg.js";import"./_Uint8Array-C2XsuwmT.js";import"./isArray-D_w5bihx.js";import"./_getTag-BKrfMauQ.js";import"./isEqual-MxjzF7i1.js";import"./merge-CG7mNSoO.js";import"./_initCloneObject-BEyq37Wr.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DY45Z52z.js";import"./inputBaseClasses-DLLj_uoF.js";import"./calculateFriendlyFileSize-DQuFDsgM.js";import"./CheckCircleTwoTone-gau2IxYU.js";import"./InfoTwoTone-Dsym26wY.js";import"./useMutation-CEx8g1At.js";import"./dayjs.min-gZfCache.js";import"./chunk-AYJ5UCUI-CB-CPdOO.js";import"./cloneDeep-BC3jaoK6.js";import"./Skeleton-CrSZ9kVD.js";import"./SkeletonButton-BhoxaNuG.js";import"./SkeletonInlineBlock-QjNk8313.js";import"./SkeletonTable-Bvc8SIM1.js";import"./times-Ds8n-eXw.js";import"./toInteger-C6a0ozPk.js";import"./toNumber-31jx3BLP.js";import"./isSymbol-RKGes3FT.js";import"./SkeletonParagraph-ClvwPvre.js";import"./uniqueId-C-2ZWaW0.js";import"./toString-BvnSIEP7.js";import"./CSSTransition-UNqnU7cI.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-B3-hMXXi.js";import"./Avatar-KwDNsnkB.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
