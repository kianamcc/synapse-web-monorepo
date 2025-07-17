import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-CY1lJbex.js";import{d as s}from"./ToastMessage-CAJUcgFt.js";import{R as n,a as t}from"./RequirementItem-D70ULFo1.js";import{P as O}from"./Paper-P_sDZS-X.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-10WvwUiI.js";import"./SynapseConstants-BAmbitfp.js";import"./OrientationBanner-CqW8PdNz.js";import"./index-HvcXhtfG.js";import"./index-CoVtI-xb.js";import"./iframe-DUu9OdnM.js";import"./spreadSx-CwcO6WA9.js";import"./react-DyejcOoi.js";import"./FullWidthAlert-C3kOOW_L.js";import"./Alert-BtW2b58q.js";import"./createTheme-Du8MDNhB.js";import"./DefaultPropsProvider-CiYbQb_9.js";import"./useSlot-B6m91aYh.js";import"./useForkRef-DOuz__9t.js";import"./createSimplePaletteValueFilter-DgIIyTIB.js";import"./createSvgIcon-BAsNb6OD.js";import"./Close-DLm_wjPS.js";import"./IconButton-zDsqyHsc.js";import"./useTimeout-CRHwCDIR.js";import"./ButtonBase-3nofq4HX.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DtmVjeV6.js";import"./Stack-CLUKjvtf.js";import"./extendSxProp-ClDjEU18.js";import"./getThemeProps-DgDMAZWx.js";import"./useTheme-DmlP-k9i.js";import"./Box-Ch_v2S4J.js";import"./AlertTitle-YCxZ5MOw.js";import"./Typography-5p45kTdy.js";import"./index-CUP6LRFl.js";import"./useTheme-CYKJrkuq.js";import"./ClickAwayListener-DRx6M7iy.js";import"./getReactElementRef-FAB4jlM9.js";import"./index-BKWRA2xg.js";import"./index-DChCQJJU.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BCnK7aqr.js";import"./Tooltip-BAoTBYM7.js";import"./index-BNIQ4RPO.js";import"./useControlled-BZR2UL1P.js";import"./Popper-DY91ZY1N.js";import"./Button-B1FnGMz7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CtBK6zNW.js";import"./QueryClientProvider-C066c5PM.js";import"./Link-BLFTQrs5.js";import"./Collapse-CoVJ_DuI.js";import"./_baseUniq-DD24tBQY.js";import"./_Uint8Array-DgfOMh6Z.js";import"./isArray-sc4l1n3T.js";import"./_getTag-DTtUFnCa.js";import"./isEqual-r9h2YXXh.js";import"./merge-cknK0M2-.js";import"./_initCloneObject-sxyD15a5.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cs9N-W8S.js";import"./inputBaseClasses-B-8TyBvE.js";import"./calculateFriendlyFileSize-BcEBEI0z.js";import"./CheckCircleTwoTone-C14QcJOh.js";import"./InfoTwoTone-tsXohu8b.js";import"./useMutation-yg0lKRFU.js";import"./dayjs.min-DAf82Hb0.js";import"./chunk-AYJ5UCUI-DE47_ibu.js";import"./cloneDeep-CttCoTwL.js";import"./Skeleton-C79Pztuw.js";import"./SkeletonButton-DnKs0jgt.js";import"./SkeletonInlineBlock-AExXtcH1.js";import"./SkeletonTable-BPjRccs0.js";import"./times-kzlTiLy_.js";import"./toInteger-Sac3TYmu.js";import"./toNumber-BFvqO86_.js";import"./isSymbol-Clqen-Xe.js";import"./SkeletonParagraph-B2k8wfuO.js";import"./uniqueId-B-8P5iTJ.js";import"./toString-_bjGttfU.js";import"./CSSTransition-CjNuforW.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BgoyZbFL.js";import"./Avatar-CR0bybGt.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
