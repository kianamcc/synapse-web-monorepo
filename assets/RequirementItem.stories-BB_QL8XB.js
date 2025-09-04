import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-CLoPwc-g.js";import{d as s}from"./ToastMessage-Bj_3CZ69.js";import{R as n,a as t}from"./RequirementItem-P4EyJnll.js";import{P as O}from"./Paper-CnKf9E1P.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-DOVBop4s.js";import"./SynapseConstants-C5A8J8gn.js";import"./OrientationBanner-LURESH-j.js";import"./index-D-PX2Hpd.js";import"./index-CYBhMOzl.js";import"./iframe-CuDDZx9Z.js";import"./spreadSx-CwcO6WA9.js";import"./react-CZzQ_yVr.js";import"./FullWidthAlert-BbNm5x9Z.js";import"./Alert-KRswuaf9.js";import"./createTheme-UDEHErQ_.js";import"./DefaultPropsProvider-DDIfh48T.js";import"./useSlot-BL4Blot2.js";import"./useForkRef-C35-TTLb.js";import"./createSimplePaletteValueFilter-D_WBzOiq.js";import"./createSvgIcon-BkFFA0uY.js";import"./Close-C1BwiOLd.js";import"./IconButton-D17trTNl.js";import"./useTimeout-BVUmv_-j.js";import"./ButtonBase-B6fNSxmE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BYOlEuL1.js";import"./Stack-RN1WeRUL.js";import"./extendSxProp-YGhkNB1w.js";import"./getThemeProps-8BAWzFC0.js";import"./useTheme-W3ylXsbv.js";import"./Box-DnHtG_j1.js";import"./AlertTitle-BqJO1dBB.js";import"./Typography-CNeR-cPE.js";import"./index-22XR2kUJ.js";import"./useTheme-Dal23Fh_.js";import"./ClickAwayListener-5mjrolze.js";import"./getReactElementRef-60BZXwdQ.js";import"./index-CoaIb9Ej.js";import"./index-OByBR4g1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CCBW4MLj.js";import"./Tooltip-DN0tYEHn.js";import"./index-C0rrpg4I.js";import"./useControlled-C2ML203S.js";import"./Popper-Dt-j-fXA.js";import"./Button-DrSgAP7H.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-ByJfln0Z.js";import"./QueryClientProvider-D4nt8BTL.js";import"./Link-qzIb3qG_.js";import"./Collapse-Bx3bHstz.js";import"./_baseUniq-BBovCwJQ.js";import"./_Uint8Array-mjR_JKoo.js";import"./isArray-BGyiIjyu.js";import"./_getTag-D7U8VkiW.js";import"./isEqual-CcI7tI-V.js";import"./merge-B2Hf3UCX.js";import"./_initCloneObject-BacQv0Vo.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C8mW4-6F.js";import"./inputBaseClasses-BQmUwsdM.js";import"./calculateFriendlyFileSize-DOnx2oHL.js";import"./CheckCircleTwoTone-sMI1OzSo.js";import"./InfoTwoTone-Cxpwfqd2.js";import"./useMutation-0kGzfmP1.js";import"./dayjs.min-CG53A_f7.js";import"./chunk-AYJ5UCUI-DEcXrblD.js";import"./cloneDeep-DvXu7W8a.js";import"./Skeleton-CZU0fRin.js";import"./SkeletonButton-BGFAlAKD.js";import"./SkeletonInlineBlock-C8fRZXPa.js";import"./SkeletonTable-DwV5ROuX.js";import"./times-D9bMgF0B.js";import"./toInteger-BDBhZXps.js";import"./isSymbol-B9BIqgsG.js";import"./SkeletonParagraph-BZmtgtlA.js";import"./uniqueId-CNy89bM-.js";import"./toString-Cf2_mtih.js";import"./CSSTransition-CcktxPv2.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-B9xQ5nAs.js";import"./Avatar-CgN_Mxle.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
