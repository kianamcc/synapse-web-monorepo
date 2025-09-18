import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-kBQmD0l_.js";import{d as s}from"./ToastMessage-CMI1IFHF.js";import{R as n,a as t}from"./RequirementItem-L-YLLDkY.js";import{P as O}from"./Paper-lhCzxmF6.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-Bzh7cwSR.js";import"./SynapseConstants-Cfptkbxn.js";import"./OrientationBanner-BRaa9FhH.js";import"./index-5nsOKCAP.js";import"./index-e0gfIe59.js";import"./iframe-BykbFxtt.js";import"./spreadSx-CwcO6WA9.js";import"./react-Tbf_FGby.js";import"./FullWidthAlert-lqqowgmg.js";import"./Alert-DJWPc08H.js";import"./createTheme-DZ5nL_rD.js";import"./DefaultPropsProvider-BXO4TWC4.js";import"./useSlot-Tl_LvtWA.js";import"./useForkRef-Da1jJIxy.js";import"./createSimplePaletteValueFilter-CF7npJyo.js";import"./createSvgIcon-DHoJCVf_.js";import"./Close-Dn-7A1g-.js";import"./IconButton-jukvnqEw.js";import"./useTimeout-CPA5u6a1.js";import"./ButtonBase-BnHn_Q7I.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-8WX2PHjm.js";import"./Stack-DRojLg_k.js";import"./extendSxProp-B3-VAj6h.js";import"./getThemeProps-CK3Siddv.js";import"./useTheme-BofUFEde.js";import"./Box-D2JVrGlt.js";import"./AlertTitle-9gNSrwOn.js";import"./Typography-CBY8PIjO.js";import"./index-ZPl0cf62.js";import"./useTheme-DvD79klM.js";import"./ClickAwayListener-DNzX9DT0.js";import"./getReactElementRef-BYc5C6-D.js";import"./index-DmqEK8gc.js";import"./index-CG2KDzrf.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-djj4PY0Q.js";import"./Tooltip-DBn857d-.js";import"./index-VFqd6hI8.js";import"./useControlled-B6WrK4gM.js";import"./Popper-CF8GC9gQ.js";import"./Button-BfMqvXfX.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-UseW8DYW.js";import"./QueryClientProvider-BFHjxVWG.js";import"./Link-Ci0L2TZX.js";import"./Collapse-DRGIUl1p.js";import"./_baseUniq-BWniF09F.js";import"./_Uint8Array-DRwdx9zQ.js";import"./isArray-BWZ6pEjw.js";import"./_getTag-Ba0gOkA8.js";import"./isEqual-DY4B9NNb.js";import"./merge-CTHP0e9H.js";import"./_initCloneObject-DcJdSeqq.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DeZ64Lam.js";import"./inputBaseClasses-nogW3mFW.js";import"./calculateFriendlyFileSize-EaC3OCDx.js";import"./CheckCircleTwoTone-CMZ5_-d0.js";import"./InfoTwoTone-C9bnm_ar.js";import"./useMutation-CC6bXeSn.js";import"./dayjs.min-CQRDHmGP.js";import"./chunk-AYJ5UCUI-BdnfJrS7.js";import"./cloneDeep-DUWVacao.js";import"./Skeleton-BKSNtuOK.js";import"./SkeletonButton-D_0jUgRB.js";import"./SkeletonInlineBlock-DclyN6bf.js";import"./SkeletonTable-LHUvyu-g.js";import"./times-azXudsOe.js";import"./toInteger-D9rqAmgT.js";import"./isSymbol-D-1NPp5r.js";import"./SkeletonParagraph-DNfcAtBK.js";import"./uniqueId-CE9PZnRI.js";import"./toString-DyRFYDkN.js";import"./CSSTransition-BHq4j1tp.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-GB3umoIb.js";import"./Avatar-ZNgqdu9M.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
