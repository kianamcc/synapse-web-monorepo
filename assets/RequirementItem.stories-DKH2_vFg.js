import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-nEOC7Yh1.js";import{d as s}from"./ToastMessage-Bmohf_7Y.js";import{R as n,a as t}from"./RequirementItem-MIxQRjQR.js";import{P as O}from"./Paper-CzsHM74K.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-BOFiuD6U.js";import"./SynapseConstants-BPIN8KFM.js";import"./OrientationBanner-CIZcXSCl.js";import"./index-DNdz4XPZ.js";import"./index-BjoZTSdd.js";import"./iframe-fa6FWvKT.js";import"./spreadSx-CwcO6WA9.js";import"./react-pq0ScVQj.js";import"./FullWidthAlert-aIfZQ6oh.js";import"./Alert-Dm1192DW.js";import"./createTheme-GV_Olv53.js";import"./DefaultPropsProvider-iTx7GsE7.js";import"./useSlot-CmxOjz68.js";import"./useForkRef-BNGjBTqL.js";import"./createSimplePaletteValueFilter-Dj8MKYr2.js";import"./createSvgIcon-B3jUNEYw.js";import"./Close-BI_C3xNe.js";import"./IconButton-BzTLIkaJ.js";import"./useTimeout-DQ1BoxMI.js";import"./ButtonBase-MKtFsRwN.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-IHqt-grH.js";import"./Stack-DH9s3_SR.js";import"./extendSxProp-CI1neDzi.js";import"./getThemeProps-CDMuVggh.js";import"./useTheme-oCmt2abW.js";import"./Box-ByUR785-.js";import"./AlertTitle-DArRKOzs.js";import"./Typography-C-T5QtED.js";import"./index-BEhV25tM.js";import"./useTheme-DKW6Bsu2.js";import"./ClickAwayListener-hA5lV_qM.js";import"./getReactElementRef-CjGLUc90.js";import"./index-BhL4UTwM.js";import"./index-C3xQgm2l.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ByegF4dQ.js";import"./Tooltip-Cf58vIqd.js";import"./index-DhCvtgTu.js";import"./useControlled-tM_DVWVA.js";import"./Popper-Bs-9aJVk.js";import"./Button-CTnp1SQV.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-BvEpsVL_.js";import"./QueryClientProvider-DpeaCQbp.js";import"./Link-DjAOvEMB.js";import"./Collapse-B5yw2eij.js";import"./_baseUniq-COFJJUF-.js";import"./_Uint8Array-SdGWbpCK.js";import"./isArray-CIh8XoSS.js";import"./_getTag-DHtWjrKh.js";import"./isEqual-DG1yhYL7.js";import"./merge-CJlKDPxb.js";import"./_initCloneObject-DFhiNOBS.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cqq1RCUS.js";import"./inputBaseClasses-Dzfkb3qc.js";import"./calculateFriendlyFileSize-BwbqkNA7.js";import"./CheckCircleTwoTone-BkCpgbi5.js";import"./InfoTwoTone-CBw2GqJ2.js";import"./useMutation-BPsh3iOc.js";import"./dayjs.min-F33PS1kw.js";import"./chunk-AYJ5UCUI-Do6XLrY3.js";import"./cloneDeep-DNcKu_I5.js";import"./Skeleton-BgH1ZXCy.js";import"./SkeletonButton-CY0hBs4U.js";import"./SkeletonInlineBlock-CRctiw6K.js";import"./SkeletonTable-C0c8YzCH.js";import"./times-D_soSx5x.js";import"./toInteger-9XRSs1kK.js";import"./toNumber-C6AtuIBQ.js";import"./isSymbol-CFw8bbQx.js";import"./SkeletonParagraph-D89GD6Cm.js";import"./uniqueId-JetwxGhV.js";import"./toString-DGvLqmKR.js";import"./CSSTransition-DUdlO214.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-_PlEZdNJ.js";import"./Avatar-C1bPObKD.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
