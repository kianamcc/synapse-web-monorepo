import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-DCJf78gp.js";import{d as s}from"./ToastMessage-4nsRNnmh.js";import{R as n,a as t}from"./RequirementItem-Be8_zbHM.js";import{P as O}from"./Paper-CNOpQakA.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-BGhw6sr7.js";import"./SynapseConstants-DQOFKbIW.js";import"./OrientationBanner-DfoOiSsv.js";import"./index-BOQSUwlj.js";import"./index-BLkVaqQU.js";import"./iframe-D1OUWgU8.js";import"./spreadSx-CwcO6WA9.js";import"./react-DkLhILX5.js";import"./FullWidthAlert-B1Qrucih.js";import"./Alert-C1CocLRY.js";import"./createTheme-WgZwGEUU.js";import"./DefaultPropsProvider-CH3a_DkB.js";import"./useSlot-Dq2qON5u.js";import"./useForkRef-Ig4Zmx52.js";import"./createSimplePaletteValueFilter-Dndo3dQe.js";import"./createSvgIcon-GnSjhHwe.js";import"./Close-CO74w9jz.js";import"./IconButton-CVSYLB8I.js";import"./useTimeout-ClfH_HF0.js";import"./ButtonBase-CKvKduXZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C3fM0KPH.js";import"./Stack-FYlEw4fq.js";import"./extendSxProp-CcNmwxbI.js";import"./getThemeProps-DmkHaZxY.js";import"./useTheme-DMtfHtJq.js";import"./Box-BWGLgO_L.js";import"./AlertTitle-BRRtgJhi.js";import"./Typography-CnElUjJF.js";import"./index-DDGHBRu9.js";import"./useTheme-DCyIfbaq.js";import"./ClickAwayListener-DeeCbT0O.js";import"./getReactElementRef-CIFt_A8T.js";import"./index-IrKQg-yb.js";import"./index-BLl-bmD9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DhrVRGR6.js";import"./Tooltip-CkaNIw4Q.js";import"./index-BscvuTv2.js";import"./useControlled-yelixl_y.js";import"./Popper-D7cy8wUq.js";import"./Button-CosI4lZc.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-BU8-CzGU.js";import"./QueryClientProvider-MDp9J6mw.js";import"./Link-CmfYylf_.js";import"./Collapse-CuvsxGh1.js";import"./_baseUniq-ICRME_SG.js";import"./_Uint8Array-BoNxe12X.js";import"./isArray-FdqKaHoJ.js";import"./_getTag-BMcHv2ST.js";import"./isEqual-CxX9_Jry.js";import"./merge-CWElKNDQ.js";import"./_initCloneObject-Davy6xDh.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DL6kU-O8.js";import"./inputBaseClasses-D2062J26.js";import"./calculateFriendlyFileSize-Cujvwhz9.js";import"./CheckCircleTwoTone-o604Y7DM.js";import"./InfoTwoTone-D9JUoD_z.js";import"./useMutation-CQn0gxgX.js";import"./dayjs.min-z0YraemM.js";import"./chunk-AYJ5UCUI-IQN6yzis.js";import"./cloneDeep-DfwkV2VA.js";import"./Skeleton-CpZbRh6J.js";import"./SkeletonButton-COmwrDmK.js";import"./SkeletonInlineBlock-BvQ7dWo1.js";import"./SkeletonTable-D5pTnLTk.js";import"./times-DkppwrTQ.js";import"./toInteger-BnqeyTgZ.js";import"./isSymbol-BnbpIT-h.js";import"./SkeletonParagraph-DutvnqNQ.js";import"./uniqueId-Byxi7FUU.js";import"./toString-Co3PphKq.js";import"./CSSTransition-B4pYdyVF.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Cxqb55xK.js";import"./Avatar-DMUxqhx9.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
