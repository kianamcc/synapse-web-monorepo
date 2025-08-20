import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-u1aYgxIM.js";import{d as s}from"./ToastMessage-CIQ4FUzt.js";import{R as n,a as t}from"./RequirementItem-BQaKvh-a.js";import{P as O}from"./Paper-DDyf3v9v.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-8ATydn8A.js";import"./SynapseConstants-BoFDoI5V.js";import"./OrientationBanner-Bfw4GBS8.js";import"./index-Dxb0ugoE.js";import"./index-BQ0h1q-c.js";import"./iframe-DY59xS4l.js";import"./spreadSx-CwcO6WA9.js";import"./react-DjEuRMZ5.js";import"./FullWidthAlert-Dt7wKjhd.js";import"./Alert-ny1Y1xel.js";import"./createTheme-BlTwNsQ1.js";import"./DefaultPropsProvider-CYP_2Idx.js";import"./useSlot-kVASu-JJ.js";import"./useForkRef-CkhoaXlV.js";import"./createSimplePaletteValueFilter-DWGwy2Im.js";import"./createSvgIcon-Bgf4v-Fl.js";import"./Close-CgY7_8Mf.js";import"./IconButton-DTeuPv0j.js";import"./useTimeout-BUMPYjbI.js";import"./ButtonBase-BJNoKMlW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BxPHqgfj.js";import"./Stack-DZ5v80pT.js";import"./extendSxProp-DoJ1PD9F.js";import"./getThemeProps-BBGYBewf.js";import"./useTheme-fVMz0yaA.js";import"./Box-BrZ4r0b2.js";import"./AlertTitle-DGX0T4Jr.js";import"./Typography-CTis9lUB.js";import"./index-CBwPP-8I.js";import"./useTheme-Df8fnDRi.js";import"./ClickAwayListener-zrX_7RVQ.js";import"./getReactElementRef-DXMeOMMR.js";import"./index-IwBO8kaU.js";import"./index-BzyuMQfT.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DGZAZIri.js";import"./Tooltip-jtcVHvVK.js";import"./index-CkYitUbw.js";import"./useControlled-CyVPDa_k.js";import"./Popper-Cnmlk4SK.js";import"./Button-bLnqHRUE.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-Bmim-_eg.js";import"./QueryClientProvider-F9634mTY.js";import"./Link-CWjqwdMI.js";import"./Collapse-DzVgfvxm.js";import"./_baseUniq-GXz1Dpxd.js";import"./_Uint8Array-Dc7_fKH3.js";import"./isArray-DsBeDomq.js";import"./_getTag-D0e_6tbm.js";import"./isEqual-DKB0rujn.js";import"./merge-5gUM5Tdf.js";import"./_initCloneObject-CSLOxTWP.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DoJrpD9h.js";import"./inputBaseClasses-TDVyq3ls.js";import"./calculateFriendlyFileSize-H1i4XWH4.js";import"./CheckCircleTwoTone-Cbum7mvg.js";import"./InfoTwoTone-ZmJWrGVC.js";import"./useMutation-D9nSv9vL.js";import"./dayjs.min-D8karIbq.js";import"./chunk-AYJ5UCUI-lme-Pn3H.js";import"./cloneDeep-HL-fX3rq.js";import"./Skeleton-DumsuiTC.js";import"./SkeletonButton-BrAAaQ-P.js";import"./SkeletonInlineBlock-CDsVjNpa.js";import"./SkeletonTable-BGqaPV0f.js";import"./times-ClYvAdgV.js";import"./toInteger-BJPtxikq.js";import"./isSymbol-D7jtDlbi.js";import"./SkeletonParagraph-Dalus474.js";import"./uniqueId-CiyrcFnn.js";import"./toString-zWPRN8Ui.js";import"./CSSTransition-Cq-C72FH.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Mn9uW7CA.js";import"./Avatar-BvwT7l0u.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
