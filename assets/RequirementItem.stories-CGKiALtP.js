import{j as a}from"./jsx-runtime-bs3iHWgH.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-PrMdKZVD.js";import{d as s}from"./ToastMessage-CU0vE_US.js";import{R as n,a as t}from"./RequirementItem-CK50N-VV.js";import{P as O}from"./Paper-TiPNohsC.js";import"./index-1G0jIe_K.js";import"./iframe-CAE0AedR.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-iDTemoVt.js";import"./SynapseConstants-CSIOBzFr.js";import"./OrientationBanner-CUnrnvUZ.js";import"./index--ipSGzBW.js";import"./spreadSx-CwcO6WA9.js";import"./react-B-aZ1Ebj.js";import"./FullWidthAlert-TL6cM4c_.js";import"./Alert-DU1l7Yil.js";import"./createTheme-DDXry1D5.js";import"./DefaultPropsProvider-BrwCbwq3.js";import"./useSlot-D5PFbywt.js";import"./useForkRef-BnsVc4W5.js";import"./createSimplePaletteValueFilter-CvTarr9j.js";import"./createSvgIcon-7ZLvw587.js";import"./Close-Blf_Jegy.js";import"./IconButton-Cc16ts0x.js";import"./useTimeout-D-YFSzxf.js";import"./ButtonBase-BLNh9xJi.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C1j2DwHt.js";import"./Stack-DTKKGZ3C.js";import"./extendSxProp-DpAf3ZlK.js";import"./getThemeProps-BEgO2NgN.js";import"./useTheme-N3QqDEBY.js";import"./Box-CwOOQtt7.js";import"./AlertTitle-DAxqZGgD.js";import"./Typography-BTyGK9kh.js";import"./index-B1JGVqhl.js";import"./useTheme-HySVWCes.js";import"./ClickAwayListener-C1dZSwOc.js";import"./getReactElementRef-lg4qkuS3.js";import"./index-Cp0bzr_k.js";import"./index-Dj_HbVa7.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BehZzC11.js";import"./Tooltip-CWPBJei9.js";import"./index-DOxN_OSL.js";import"./useControlled-CKYe0QIs.js";import"./Popper-DCwTo5EU.js";import"./Button-5ZLAf8y7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-DGJ-fST1.js";import"./utils-BjohuSeA.js";import"./Link-Ds3faFyI.js";import"./Collapse-CBNAD82I.js";import"./isNil-Cg0AdkbW.js";import"./_Uint8Array-cnPMiqdI.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DLXaXrlM.js";import"./isArray-Dxzbedgu.js";import"./isEqual-BtTJidyh.js";import"./_getTag-DJ9WiHgM.js";import"./tinycolor-Begke6kS.js";import"./Fade-DACgj7ig.js";import"./inputBaseClasses-DvVQV8MT.js";import"./calculateFriendlyFileSize-CWlhKSjd.js";import"./CheckCircleTwoTone-C9sAhxWz.js";import"./InfoTwoTone-DEn_cQvh.js";import"./useMutation-Cb_0TIoA.js";import"./dayjs.min-DpGoKzDn.js";import"./chunk-AYJ5UCUI-BjJPg-VE.js";import"./cloneDeep-Dxyj2Go1.js";import"./_initCloneObject-CACn9_P1.js";import"./Skeleton-CVyUAms5.js";import"./merge-BMnLpwug.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-0-eNc1vM.js";import"./SkeletonInlineBlock-BveLybZB.js";import"./SkeletonTable-BXByH7Aj.js";import"./times-DOCRbSXT.js";import"./toInteger-Cdyyjop5.js";import"./isSymbol-vzo95hUS.js";import"./SkeletonParagraph-D0dyF1ai.js";import"./uniqueId-CK2SPnTL.js";import"./toString-BWe8zV0D.js";import"./CSSTransition-C7MUwxKF.js";import"./ConditionalWrapper-MxnYXcO0.js";import"./LockTwoTone-D8SQMSnf.js";import"./Avatar-wDZDYPeo.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
