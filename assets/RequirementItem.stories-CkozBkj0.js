import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-BVPhYUaY.js";import{d as s}from"./ToastMessage-C_rv89Yd.js";import{R as n,a as t}from"./RequirementItem-BNYet2Xb.js";import{P as O}from"./Paper-BMBeNgEo.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-Cgp-9vJT.js";import"./SynapseConstants-iStHbYVx.js";import"./OrientationBanner-CjetZaFe.js";import"./index-CEuAijM_.js";import"./index-iWrNDPyn.js";import"./iframe-BriZTfYJ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ch0aYUiy.js";import"./FullWidthAlert-gxrW5_IB.js";import"./Alert-Cc_MVH1f.js";import"./createTheme-BKSRxlFY.js";import"./DefaultPropsProvider-Dk_kZRJu.js";import"./useSlot-wM5YqEUc.js";import"./useForkRef-BYwnSTRU.js";import"./createSimplePaletteValueFilter-BlKw8DgR.js";import"./createSvgIcon-2weW28Tb.js";import"./Close-CqHCSW4a.js";import"./IconButton-BRNCMgf9.js";import"./useTimeout-Brm08kXR.js";import"./ButtonBase-CUjN_ROa.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BbQEZxBg.js";import"./Stack-JYuoYEED.js";import"./extendSxProp-Bi5llsJC.js";import"./getThemeProps-BTWYATJj.js";import"./useTheme-DrVid__q.js";import"./Box-Be4ueMoe.js";import"./AlertTitle-D3DDGn2Q.js";import"./Typography-DBnBHKj4.js";import"./index-CTlyCBQq.js";import"./useTheme-CeiPl9f9.js";import"./ClickAwayListener-BZqRSxmE.js";import"./getReactElementRef-BQegNSOc.js";import"./index-5Pe9y6Wq.js";import"./index-D7oizWyO.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bl2jRLCy.js";import"./Tooltip-BBkEZVsV.js";import"./index-DwfN2JNN.js";import"./useControlled-NJoxe6_U.js";import"./Popper-D5FqFR9Q.js";import"./Button-BnbeuRI8.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-C7gPHaUl.js";import"./QueryClientProvider-ulH8w0Tp.js";import"./Link-BWBPKo95.js";import"./Collapse-ydtRZmuD.js";import"./_baseUniq-CG-c4221.js";import"./_Uint8Array-F9930IXl.js";import"./isArray-sQ7lbhzi.js";import"./_getTag-C3j1nOEH.js";import"./isEqual-C2DFGwhq.js";import"./merge-BdcGCnAe.js";import"./_initCloneObject-COqpcO5q.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CRjWlsVL.js";import"./inputBaseClasses-DK_fEtfb.js";import"./calculateFriendlyFileSize-CRB7GFqV.js";import"./CheckCircleTwoTone-CwvS_rbb.js";import"./InfoTwoTone-u7ir9BvH.js";import"./useMutation-DFLUD9UY.js";import"./dayjs.min-D2Hua4Ul.js";import"./chunk-AYJ5UCUI-VJ1lZAeG.js";import"./cloneDeep-FTLF1-Us.js";import"./Skeleton-lSFpoPHn.js";import"./SkeletonButton-D1HZmd7c.js";import"./SkeletonInlineBlock-BcVjQlPn.js";import"./SkeletonTable-D5FhMsPz.js";import"./times-Ck53eiZL.js";import"./toInteger-2Wql1utx.js";import"./toNumber-BcJ9cp5r.js";import"./isSymbol-VQgakk1i.js";import"./SkeletonParagraph-DWMMZGa0.js";import"./uniqueId-CFpYnJyg.js";import"./toString-CrM9BLAA.js";import"./CSSTransition-dDaseyVD.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Dk71lQuJ.js";import"./Avatar-DXOYfW3u.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
