import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-gsPoR4f6.js";import{d as s}from"./ToastMessage-CsZPfVH2.js";import{R as n,a as t}from"./RequirementItem-8_2FmLx9.js";import{P as O}from"./Paper-DkiXaEV8.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-BJvbesf1.js";import"./SynapseConstants-Dv_-Xyed.js";import"./OrientationBanner-wAeNb1aD.js";import"./index-rmcGGOl4.js";import"./index-Cjx5jpdZ.js";import"./iframe-D59JS_7P.js";import"./spreadSx-CwcO6WA9.js";import"./react-DM4ITJBQ.js";import"./FullWidthAlert-B55Bb1bQ.js";import"./Alert-DVNnnZsV.js";import"./createTheme-D4bqoPPK.js";import"./DefaultPropsProvider-aVSlypVy.js";import"./useSlot-Coj5idWU.js";import"./useForkRef-DBR9Xul8.js";import"./createSimplePaletteValueFilter-CJkSs2f5.js";import"./createSvgIcon-CV8IsRK9.js";import"./Close-iZy0aAu4.js";import"./IconButton-CdG5yAm0.js";import"./useTimeout-CmQT8jOf.js";import"./ButtonBase-BCgZOrek.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-0PfVmIwk.js";import"./Stack-CRgLdNHn.js";import"./extendSxProp-BxNOKc6_.js";import"./getThemeProps-D6CxAa_J.js";import"./useTheme-BhFvXkdX.js";import"./Box-BC59XK2Z.js";import"./AlertTitle-C3ba4AQ1.js";import"./Typography-BwlHsdrT.js";import"./index-BQQ4Ajye.js";import"./useTheme-0nJW7yzI.js";import"./ClickAwayListener-CXLCi24x.js";import"./getReactElementRef-BcplR5Ke.js";import"./index-CmwlBUd-.js";import"./index-CgJCgvXo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DnOz08Mg.js";import"./Tooltip-L8gDN-4A.js";import"./index-D1j6hMb9.js";import"./useControlled-DTCenv9i.js";import"./Popper-DBY3xxNj.js";import"./Button-5NOW73ps.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-EbX8t3ff.js";import"./QueryClientProvider-CK7oTGte.js";import"./Link-CyrKKCnm.js";import"./Collapse-DaymGoP6.js";import"./_baseUniq-CkDAFG6Y.js";import"./_Uint8Array-BhlvdjW1.js";import"./isArray-8GJeRF5W.js";import"./_getTag-C3VAzrR4.js";import"./isEqual-C86qMBAY.js";import"./merge-DSB_ZUSu.js";import"./_initCloneObject-E_XScjy2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cdlc91Pa.js";import"./inputBaseClasses-D8eEbZWg.js";import"./calculateFriendlyFileSize-1bLd95MU.js";import"./CheckCircleTwoTone-C9bSShuA.js";import"./InfoTwoTone-DuQmgc4g.js";import"./useMutation-D_FYjk2N.js";import"./dayjs.min-CHYFLaqv.js";import"./chunk-AYJ5UCUI-DlxAltom.js";import"./cloneDeep-DItxZHSL.js";import"./Skeleton-610tAbPL.js";import"./SkeletonButton-BkWx2JDf.js";import"./SkeletonInlineBlock-CyGkyr32.js";import"./SkeletonTable-DCiF7cbd.js";import"./times-CsSa2-4g.js";import"./toInteger-BDEhXBHz.js";import"./isSymbol-B0M8nthc.js";import"./SkeletonParagraph-w8Rtv51Z.js";import"./uniqueId-Y_6tfQiI.js";import"./toString-6FVZEEXU.js";import"./CSSTransition-W90DCZj0.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BJjYpG79.js";import"./Avatar-B5j4HK6w.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
