import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUU_PTHo.js";import{M as x}from"./MarkdownSynapse-CdCpkgEh.js";import{d as s}from"./ToastMessage-CPdhp9va.js";import{R as n,a as t}from"./RequirementItem-SDCd5kH3.js";import{P as O}from"./Paper-DQg47uXD.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-Dl3vPZhE.js";import"./VerificationSubmission-CNoSrCdk.js";import"./useFiles-CKtnfdDb.js";import"./SynapseConstants-fNl-i50f.js";import"./OrientationBanner-gqy1HDsn.js";import"./index-CGVjBlVQ.js";import"./index-BEywTRXl.js";import"./iframe-BBf9fga1.js";import"./spreadSx-CwcO6WA9.js";import"./react-Caq8yfsY.js";import"./FullWidthAlert-Bi0gZVKF.js";import"./Alert-DjjEhYM-.js";import"./createTheme-DnAg7-pt.js";import"./DefaultPropsProvider-Cfr5VO6N.js";import"./useSlot-BllXXWSn.js";import"./useForkRef-Bw1cKGeI.js";import"./createSimplePaletteValueFilter-CAkAaFOz.js";import"./createSvgIcon-CNp-xswd.js";import"./Close-hnsAHL5n.js";import"./IconButton-BBdlrjSw.js";import"./useTimeout-CE0_wtx6.js";import"./ButtonBase-9G7Po7WW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BpTw4cNV.js";import"./Stack-Ne3s2k1L.js";import"./extendSxProp-Bz-U6EUc.js";import"./getThemeProps-CA8XxeOI.js";import"./useTheme-DvQxV26P.js";import"./Box-CSTbBPIE.js";import"./AlertTitle-SbtAKUth.js";import"./Typography-e_bn1j-d.js";import"./index-BjsiQW48.js";import"./useTheme-tPwOBdLV.js";import"./ClickAwayListener-CSw4j7vn.js";import"./getReactElementRef-s4ti0GiA.js";import"./index-CUrvls_8.js";import"./index-D5YMrZI7.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B59OOFam.js";import"./Tooltip-CxMHW-Bb.js";import"./index-Bmnvv36_.js";import"./useControlled-1lsXcUhy.js";import"./Popper-uzFVxROp.js";import"./Button-D48JG1ln.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CwQ1lgbR.js";import"./useQuery-CssB-2z9.js";import"./QueryClientProvider-CxifRez6.js";import"./Link-CwZFRW9t.js";import"./Collapse-DH7Csss-.js";import"./_baseUniq-B2577OWA.js";import"./_Uint8Array-DyiAPkOc.js";import"./isArray-NH-lQ6sv.js";import"./_getTag-B8fRTFQ5.js";import"./isEqual-qIzdiEsY.js";import"./merge-aLS7RL-o.js";import"./_initCloneObject-DOyku_IR.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CZEMhowB.js";import"./inputBaseClasses-DBgXe6lK.js";import"./calculateFriendlyFileSize-CsWbGjuW.js";import"./CheckCircleTwoTone-C2jgLeFW.js";import"./InfoTwoTone-BCYPmC9w.js";import"./useMutation-BWjpfHXT.js";import"./dayjs.min-BcH9R9G5.js";import"./chunk-AYJ5UCUI-hHORuoAF.js";import"./cloneDeep-FsMgdlCN.js";import"./Skeleton-C08EYpYz.js";import"./SkeletonButton-BZ6m6RxF.js";import"./SkeletonInlineBlock-CKLDPNro.js";import"./SkeletonTable-DDBsjsHg.js";import"./times-D0VVIBEd.js";import"./toInteger-12pzV6__.js";import"./isSymbol-BEacMpiA.js";import"./SkeletonParagraph-DgsvgiuF.js";import"./uniqueId-t2pv8KKE.js";import"./toString-DzbhduKw.js";import"./CSSTransition-CaCr1DYb.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DNT32LqE.js";import"./Avatar-BMjR9OSZ.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
