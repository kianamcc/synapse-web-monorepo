import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-vkOnoE_L.js";import{d as s}from"./ToastMessage-D_CYFhEa.js";import{R as n,a as t}from"./RequirementItem-Cx5RQPy2.js";import{P as O}from"./Paper-B33spbNN.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-BbJ5o2Ed.js";import"./SynapseConstants-Ygip4hFC.js";import"./OrientationBanner-BPtaqrpe.js";import"./index-CergElHO.js";import"./index-sk6gXDvC.js";import"./iframe-_K4D7cYy.js";import"./spreadSx-CwcO6WA9.js";import"./react-CKJV6Ks4.js";import"./FullWidthAlert-B0SFUulU.js";import"./Alert-BdbA0TB7.js";import"./createTheme-CrkgGHcI.js";import"./DefaultPropsProvider-BRXhGtBW.js";import"./useSlot-BG5G-iVz.js";import"./useForkRef-D0BMzfT8.js";import"./createSimplePaletteValueFilter-TyKM-CfR.js";import"./createSvgIcon-CtdiqD4i.js";import"./Close-Bu7-9AnV.js";import"./IconButton-DNmOnto9.js";import"./useTimeout-CIVHDma7.js";import"./ButtonBase-CyKfT1Wa.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-VIv6_Kop.js";import"./Stack-DxppTaJ1.js";import"./extendSxProp-B5fFeT4X.js";import"./getThemeProps-CIDrLfBX.js";import"./useTheme-CKLgr9Xs.js";import"./Box-D_kLBftC.js";import"./AlertTitle-BY8ZzEDY.js";import"./Typography-Dqy4yjFQ.js";import"./index-Ci4Vbdfq.js";import"./useTheme-CeqTy89F.js";import"./ClickAwayListener-B49HXzSs.js";import"./getReactElementRef-D_i8xeIM.js";import"./index-sQxW26gI.js";import"./index-C0sWEppT.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Ccy6EnHD.js";import"./Tooltip-QkmoIlKT.js";import"./index-Dmv2LpPJ.js";import"./useControlled-R0AQnnLf.js";import"./Popper-CtUJ7Q7C.js";import"./Button-CCbz6eS3.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-aKKXjVSr.js";import"./QueryClientProvider-BK-Mh5RA.js";import"./Link-C1F0j2id.js";import"./Collapse-B2qMB9TZ.js";import"./_baseUniq-DiN75sTS.js";import"./_Uint8Array-Cp--bUx5.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DgxErohx.js";import"./isArray-Dxzbedgu.js";import"./_getTag-UdgsmegY.js";import"./isEqual-R3OPMgEk.js";import"./merge-Dc0N-UH6.js";import"./_initCloneObject-DKyLWHR1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-nJPjkcgY.js";import"./inputBaseClasses-HU3PdiHJ.js";import"./calculateFriendlyFileSize-CnohUo3x.js";import"./CheckCircleTwoTone-B6wjqc_X.js";import"./InfoTwoTone-ZvyGG8U-.js";import"./useMutation-DAbwO7YE.js";import"./dayjs.min-kJlIbqmb.js";import"./chunk-AYJ5UCUI-tBxPaLzm.js";import"./cloneDeep-wsABOJ5h.js";import"./Skeleton-Bl3E-zaC.js";import"./SkeletonButton-BrkKyiLf.js";import"./SkeletonInlineBlock-BbTolcWe.js";import"./SkeletonTable-CkVaKBZe.js";import"./times-CY_OT2kY.js";import"./toInteger-uqLcpy6F.js";import"./isSymbol-C8UmZvhE.js";import"./SkeletonParagraph-DFi2S3mj.js";import"./uniqueId-CctCpLSY.js";import"./toString-BDl8Sf84.js";import"./CSSTransition-DGfml_MV.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-D2MbWaXx.js";import"./Avatar-Bf-b3xuF.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
