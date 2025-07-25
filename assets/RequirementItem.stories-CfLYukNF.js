import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DNkr26HA.js";import{d as s}from"./ToastMessage-CcNT8Q_8.js";import{R as n,a as t}from"./RequirementItem-Az51TJ_D.js";import{P as O}from"./Paper-DXnLpHDO.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-Cdf4OXNb.js";import"./SynapseConstants-DTXCsRte.js";import"./OrientationBanner-hmqvqVcA.js";import"./index-k28OdJd_.js";import"./index-DaerQfh4.js";import"./iframe-DG_0Yb8T.js";import"./spreadSx-CwcO6WA9.js";import"./react-BPyDxb9J.js";import"./FullWidthAlert-B6jmRxZQ.js";import"./Alert-BsCcOhzf.js";import"./createTheme-DWPhXL4x.js";import"./DefaultPropsProvider-C35g19ng.js";import"./useSlot-8fqGYfNr.js";import"./useForkRef-chIAXqkx.js";import"./createSimplePaletteValueFilter-BR2dnVNl.js";import"./createSvgIcon-B1ET5Q7C.js";import"./Close-D2OLTMfD.js";import"./IconButton-CbX8V5dQ.js";import"./useTimeout-BtgfChTQ.js";import"./ButtonBase-D7gcgVwq.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DfPFzaPe.js";import"./Stack-BkbQO6V6.js";import"./extendSxProp-DtCxMq59.js";import"./getThemeProps-Zq_eg-hT.js";import"./useTheme-Bq26F_mY.js";import"./Box-DSkGfUnd.js";import"./AlertTitle-DRG2k-rr.js";import"./Typography-DvSiE9Go.js";import"./index--HKoRW_u.js";import"./useTheme-1eWS1mKW.js";import"./ClickAwayListener-BH5tDWrA.js";import"./getReactElementRef-O4bMEre0.js";import"./index-BkAjmFmp.js";import"./index-BZI1VTjl.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DbLtzD-y.js";import"./Tooltip-XZsCFdUo.js";import"./index-Bsstuy1M.js";import"./useControlled-BuXgd8DV.js";import"./Popper-CHXNkUvh.js";import"./Button-Bpa-g8Di.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-ClYx7PY0.js";import"./QueryClientProvider-DfDvTi6i.js";import"./Link-DeIftJYl.js";import"./Collapse-haI7VO-h.js";import"./_baseUniq-_rjqw195.js";import"./_Uint8Array-CEHNoL2Q.js";import"./isArray-B1bqcE2k.js";import"./_getTag-DaUo7_x6.js";import"./isEqual-B3juUSlg.js";import"./merge-pDiXBsNx.js";import"./_initCloneObject-C6PVUiwE.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Pl-VaJW2.js";import"./inputBaseClasses-DqHUenJQ.js";import"./calculateFriendlyFileSize-B7_ak3iA.js";import"./CheckCircleTwoTone-CpNxRNCX.js";import"./InfoTwoTone-CPdeaf2r.js";import"./useMutation-CE3Gz46T.js";import"./dayjs.min-BcIEVL5P.js";import"./chunk-AYJ5UCUI-C6leyoDe.js";import"./cloneDeep-CXxSt_nH.js";import"./Skeleton-DBKkui2n.js";import"./SkeletonButton-CL1OxkfB.js";import"./SkeletonInlineBlock-B_jIBLZZ.js";import"./SkeletonTable-BnR1yW9G.js";import"./times-BDVA8HUS.js";import"./toInteger-BIuG0OsC.js";import"./toNumber-DN4XVA6h.js";import"./isSymbol-DxAnpc3O.js";import"./SkeletonParagraph-45mhNnJJ.js";import"./uniqueId-CFAEOR7a.js";import"./toString-DQJeOA8Y.js";import"./CSSTransition-B64_mGWi.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DLElXN6O.js";import"./Avatar-C_dTUgyE.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
