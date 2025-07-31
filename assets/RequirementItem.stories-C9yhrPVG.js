import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-B3n3qEbb.js";import{d as s}from"./ToastMessage-BMdr9hEj.js";import{R as n,a as t}from"./RequirementItem-Bv60RjhM.js";import{P as O}from"./Paper-DHIyyYeU.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-Bxoq74W1.js";import"./SynapseConstants-bPA3jx3g.js";import"./OrientationBanner-DjBSegk4.js";import"./index-BqxOcilS.js";import"./index-DekDrv5U.js";import"./iframe-xOtD_P08.js";import"./spreadSx-CwcO6WA9.js";import"./react-DQOsi25R.js";import"./FullWidthAlert-XhN78nMn.js";import"./Alert-DgpsuEDM.js";import"./createTheme-DGgAS1a0.js";import"./DefaultPropsProvider-yxrvof5g.js";import"./useSlot-U_5V9nQt.js";import"./useForkRef-DdlWqvUN.js";import"./createSimplePaletteValueFilter-CE8ANL5W.js";import"./createSvgIcon-BVtQtlbr.js";import"./Close-ByO53hPG.js";import"./IconButton-BPt8RjMd.js";import"./useTimeout-DCLeLvrm.js";import"./ButtonBase-6Ipi50Sa.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CBK_4Jzb.js";import"./Stack-DD06Xyor.js";import"./extendSxProp-Dat37SoK.js";import"./getThemeProps--Opgi1nt.js";import"./useTheme-CSaxHqJ0.js";import"./Box-4fm9HeDO.js";import"./AlertTitle-DJOygBJo.js";import"./Typography-DpBU7RE3.js";import"./index-BaH9B4UY.js";import"./useTheme-SkvSa3Kb.js";import"./ClickAwayListener-D3hU6Bma.js";import"./getReactElementRef-48OajlW4.js";import"./index-CPxWKARk.js";import"./index-CSAUMugE.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DfR_kMvq.js";import"./Tooltip-Ccn8-lSb.js";import"./index-COrw31tV.js";import"./useControlled-jNTvzdXz.js";import"./Popper-C6uM_dFE.js";import"./Button-D40Zhcb7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-B19SlrCI.js";import"./QueryClientProvider-focFpRxi.js";import"./Link-wjZTF39g.js";import"./Collapse-DdDCTjzD.js";import"./_baseUniq-Dt2R7aMK.js";import"./_Uint8Array-DNek21vR.js";import"./isArray-6HCTP6v0.js";import"./_getTag-CNfqqmnI.js";import"./isEqual-DWZ9NqeB.js";import"./merge-DlHIOFqX.js";import"./_initCloneObject-LXo2HX0d.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DaN_oF-_.js";import"./inputBaseClasses-DHOenmRP.js";import"./calculateFriendlyFileSize-C83f4eNI.js";import"./CheckCircleTwoTone-FuMeDJ5x.js";import"./InfoTwoTone-Dmo2a4FZ.js";import"./useMutation-xW35TMs8.js";import"./dayjs.min-D7aFDZ52.js";import"./chunk-AYJ5UCUI-CrcqNdyv.js";import"./cloneDeep-rOrdiiRY.js";import"./Skeleton-J3yONnu9.js";import"./SkeletonButton-C23apZfM.js";import"./SkeletonInlineBlock-Bov3S-2T.js";import"./SkeletonTable-BtPfkvK2.js";import"./times-D7fVT198.js";import"./toInteger-DbVj2Dz7.js";import"./toNumber-BFWatG4C.js";import"./isSymbol-_wIKqvSC.js";import"./SkeletonParagraph-DZxECOCx.js";import"./uniqueId-BdYP3ugo.js";import"./toString-CJ9vA594.js";import"./CSSTransition-Cm-2agSj.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DVVXnj9f.js";import"./Avatar-DKw7gC-p.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
