import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-DpPmi4oW.js";import{d as s}from"./ToastMessage-K5EVvwPb.js";import{R as n,a as t}from"./RequirementItem-DIJCoW7p.js";import{P as O}from"./Paper-Bxd9F66n.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-hvAr2LOt.js";import"./SynapseConstants-CYilwlit.js";import"./OrientationBanner-dIGybLBQ.js";import"./index-D330RqyA.js";import"./index-C1xK3Euu.js";import"./iframe-DL0EwkQ1.js";import"./spreadSx-CwcO6WA9.js";import"./react-uMsBkU6K.js";import"./FullWidthAlert-DZZeg3jH.js";import"./Alert-CypmXk5J.js";import"./createTheme-FRqdIwz9.js";import"./DefaultPropsProvider-DVYZMDEA.js";import"./useSlot-wqicX0ov.js";import"./useForkRef-a0g6YK7W.js";import"./createSimplePaletteValueFilter-D6VDKkyu.js";import"./createSvgIcon-XKLmeUTY.js";import"./Close-BveIoAL9.js";import"./IconButton-UiwBeOuw.js";import"./useTimeout-B5DIu7CK.js";import"./ButtonBase-Df45XlXj.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DZlLEPnP.js";import"./Stack-D6ePO08n.js";import"./extendSxProp-DnLvH_me.js";import"./getThemeProps-QE7-qNoq.js";import"./useTheme-Cnn-yRIb.js";import"./Box-DYs4l160.js";import"./AlertTitle-DPUw7MgK.js";import"./Typography-CpKzOD3M.js";import"./index-DQ9ZIrXt.js";import"./useTheme-DRhFvF4x.js";import"./ClickAwayListener-CY8gZ8fE.js";import"./getReactElementRef-CuGn8u9f.js";import"./index-CC9seteH.js";import"./index-DZjbEjJe.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BCDJQX83.js";import"./Tooltip-DXqB5irm.js";import"./index-FAKOp_R-.js";import"./useControlled-BUr5utlK.js";import"./Popper-DYkHVVjm.js";import"./Button-CnhjPXMP.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BltarsXU.js";import"./QueryClientProvider-DNE5Qfdd.js";import"./Link-BBFohKff.js";import"./Collapse-B-Q2bsPT.js";import"./_baseUniq-07OwiNNX.js";import"./_Uint8Array-w36zObl6.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CspRPC39.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BjOQEs4O.js";import"./isEqual-Dz11q7t9.js";import"./merge-sywN9o6B.js";import"./_initCloneObject-4H_ausQy.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DKQK7dr1.js";import"./inputBaseClasses-BV2fKT-i.js";import"./calculateFriendlyFileSize-RiHALPBy.js";import"./CheckCircleTwoTone-D8tP370-.js";import"./InfoTwoTone-CNyDuQOg.js";import"./useMutation-C8DKiECt.js";import"./dayjs.min-B1o7L6Xg.js";import"./chunk-AYJ5UCUI-B6fPF2g2.js";import"./cloneDeep-_ABAuLCT.js";import"./Skeleton-D0PfIOD4.js";import"./SkeletonButton-CmNfZyfv.js";import"./SkeletonInlineBlock-Ch9nuYrk.js";import"./SkeletonTable-BL1THn8W.js";import"./times-BW1eHsxj.js";import"./toInteger-DQfphmFs.js";import"./isSymbol-C4N1p2Tr.js";import"./SkeletonParagraph-mUAEnSuQ.js";import"./uniqueId-B7S_LDDF.js";import"./toString-B1gEwXNZ.js";import"./CSSTransition-Bd5Vc3-a.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BL-PTFX1.js";import"./Avatar-D_InfE-X.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
