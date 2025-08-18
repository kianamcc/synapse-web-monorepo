import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-CUcqkyTY.js";import{d as s}from"./ToastMessage-DlbLQJSM.js";import{R as n,a as t}from"./RequirementItem-BAGxTIbr.js";import{P as O}from"./Paper-D6tPDLnC.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-C-gUuO3T.js";import"./SynapseConstants-ChMZpXcx.js";import"./OrientationBanner-i7chEOBL.js";import"./index-hnyfaBb0.js";import"./index-SaFcugpV.js";import"./iframe-4EOUQ8bB.js";import"./spreadSx-CwcO6WA9.js";import"./react-D_LySHhS.js";import"./FullWidthAlert-ZH23_QpB.js";import"./Alert-BlpIy749.js";import"./createTheme-DYL4oeW_.js";import"./DefaultPropsProvider-B-ju6ntw.js";import"./useSlot-C1phbtFm.js";import"./useForkRef-C9M3BeIK.js";import"./createSimplePaletteValueFilter-B21g1Z1B.js";import"./createSvgIcon-DSjlpoje.js";import"./Close-DmgYbxUn.js";import"./IconButton-CW20bhlv.js";import"./useTimeout-BiFxTi6S.js";import"./ButtonBase-D_LrL_Kb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CV8o1ixC.js";import"./Stack-gteExr8A.js";import"./extendSxProp-DVJ6JJm9.js";import"./getThemeProps-qt9kRWHM.js";import"./useTheme-sytMkMvf.js";import"./Box-p2VywDDi.js";import"./AlertTitle-JRr5L8Gp.js";import"./Typography-DhQg4lom.js";import"./index-BzwUyqc8.js";import"./useTheme-DmzMLzwD.js";import"./ClickAwayListener-CInpjJL6.js";import"./getReactElementRef-BgCOkbgy.js";import"./index-Cdh5LwB9.js";import"./index-CS1dtubf.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bn6JvDiL.js";import"./Tooltip-B3KxBNLC.js";import"./index-DRyXQikG.js";import"./useControlled-Yz390BHB.js";import"./Popper-DU4sW236.js";import"./Button-BDnTecKg.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-fxe3UGUA.js";import"./QueryClientProvider-D07X7NUM.js";import"./Link-iBTo23RV.js";import"./Collapse-DjVGkdhL.js";import"./_baseUniq-CKI6pzfM.js";import"./_Uint8Array-DebFGSR1.js";import"./isArray-DajeolBc.js";import"./_getTag-D1qiZZnQ.js";import"./isEqual-DFE9TpB7.js";import"./merge-0EmchC2B.js";import"./_initCloneObject-BVuFClPl.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ilGL8eUA.js";import"./inputBaseClasses-DBj7FKf_.js";import"./calculateFriendlyFileSize-BW8hWbGV.js";import"./CheckCircleTwoTone-CBbCrXBM.js";import"./InfoTwoTone-hVb4MJdh.js";import"./useMutation-CYjgJjg9.js";import"./dayjs.min-D4Cpfg5N.js";import"./chunk-AYJ5UCUI-CAzluCTV.js";import"./cloneDeep-Cr1TNO7O.js";import"./Skeleton-mFHBhIq8.js";import"./SkeletonButton-BOBv4gQu.js";import"./SkeletonInlineBlock-BD6Oq8iN.js";import"./SkeletonTable-C3uCYSAu.js";import"./times-lbP68CIT.js";import"./toInteger-BBhvHv2M.js";import"./isSymbol-IrV533yU.js";import"./SkeletonParagraph-sInqAKvb.js";import"./uniqueId-4vmwnAjW.js";import"./toString-CzRYY4xF.js";import"./CSSTransition-CGFfRdc8.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DpLyEBGI.js";import"./Avatar-NrA0G_YK.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
