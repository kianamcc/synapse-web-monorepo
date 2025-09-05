import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-Dp8ksI7c.js";import{d as s}from"./ToastMessage-Cc0JoHjf.js";import{R as n,a as t}from"./RequirementItem-B6uMFDIq.js";import{P as O}from"./Paper-CBfZTx7u.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-DdHsz3Ne.js";import"./SynapseConstants-C0V-yF4N.js";import"./OrientationBanner-CWZ4uhwN.js";import"./index-1EupSe8l.js";import"./index-DFbrmaLj.js";import"./iframe-ClOHDTQ8.js";import"./spreadSx-CwcO6WA9.js";import"./react-iHEMVxNs.js";import"./FullWidthAlert-DamwWrK5.js";import"./Alert-h22u6Df8.js";import"./createTheme-Ekw01Cd6.js";import"./DefaultPropsProvider-COP98Tys.js";import"./useSlot-CZOdYNet.js";import"./useForkRef-Di1p2pFl.js";import"./createSimplePaletteValueFilter-b3PFnJ3S.js";import"./createSvgIcon-BJ9wLsbu.js";import"./Close-D-xVDQiM.js";import"./IconButton-CWJ89n76.js";import"./useTimeout-DQLWHDDq.js";import"./ButtonBase-Dv7UPqQY.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BncuO5rQ.js";import"./Stack-B4TEDxbG.js";import"./extendSxProp-BhcPt3ae.js";import"./getThemeProps-CteZ3phJ.js";import"./useTheme-Cyy4koW7.js";import"./Box-Dk6g9q4u.js";import"./AlertTitle-D80L3F0L.js";import"./Typography-DifSQpMI.js";import"./index-ChqGY4w9.js";import"./useTheme-CZyH-rHk.js";import"./ClickAwayListener-6OEA5dkK.js";import"./getReactElementRef-CB2a6i92.js";import"./index-BZyFJE8-.js";import"./index-BxG809-V.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C78Bid7u.js";import"./Tooltip-BXHxDATm.js";import"./index-_d4MODJg.js";import"./useControlled-i8mzpvgl.js";import"./Popper-C3O6RvEu.js";import"./Button-V89ycX9v.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-CwkAPKzS.js";import"./QueryClientProvider-DlwRL2mt.js";import"./Link-_RVTQFab.js";import"./Collapse-Bk1dswbo.js";import"./_baseUniq-DYTm6Rs2.js";import"./_Uint8Array-C9Gs_6C5.js";import"./isArray-CHZlswhx.js";import"./_getTag-Dpjn8z1N.js";import"./isEqual-C5gfjHSy.js";import"./merge-BetqcGtu.js";import"./_initCloneObject-Qs3evXab.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dtm0XdCW.js";import"./inputBaseClasses-D-YCeq8p.js";import"./calculateFriendlyFileSize-BJVx0UpD.js";import"./CheckCircleTwoTone-DJCDdOi1.js";import"./InfoTwoTone-BCf-igzE.js";import"./useMutation-CYss3V98.js";import"./dayjs.min-AWPNLm8a.js";import"./chunk-AYJ5UCUI-C0isJnrA.js";import"./cloneDeep-DFXU4Y17.js";import"./Skeleton-BVJB5DIE.js";import"./SkeletonButton-DrN7gFah.js";import"./SkeletonInlineBlock-BcSgYyMK.js";import"./SkeletonTable-CBeHM_C6.js";import"./times-b4490pJh.js";import"./toInteger-ENQqM5aA.js";import"./isSymbol-Ma6LFywi.js";import"./SkeletonParagraph-YbSjhuCj.js";import"./uniqueId-RQ0j9yaJ.js";import"./toString-DmO8Iv0v.js";import"./CSSTransition-BYUNNvJF.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BcNyMb3w.js";import"./Avatar-CCsZTBI0.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
