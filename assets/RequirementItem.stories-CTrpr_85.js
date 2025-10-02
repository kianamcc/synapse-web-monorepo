import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-Cfvn8zZg.js";import{d as s}from"./ToastMessage-BNgcpklN.js";import{R as n,a as t}from"./RequirementItem-Bc3WcSRK.js";import{P as O}from"./Paper-CNcRBNAa.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-wWQ53W6F.js";import"./SynapseConstants-DLUag6lU.js";import"./OrientationBanner-CRkLOFNV.js";import"./index-DmEjL0gl.js";import"./index-Fvy6OXvx.js";import"./iframe-B8dXxRrz.js";import"./spreadSx-CwcO6WA9.js";import"./react-DidY2G1Y.js";import"./FullWidthAlert-DR77ctOw.js";import"./Alert-DpkG2eKm.js";import"./createTheme-Bqan8iSd.js";import"./DefaultPropsProvider-CvOM3crP.js";import"./useSlot-OhfiPf_i.js";import"./useForkRef-BeT6GA-1.js";import"./createSimplePaletteValueFilter-BCFu5tCD.js";import"./createSvgIcon-BgHtG-ZK.js";import"./Close-CJ1hBDqs.js";import"./IconButton-C_XoYKbu.js";import"./useTimeout-BI-r7Chh.js";import"./ButtonBase-DHedW4PR.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-wOG2gwEP.js";import"./Stack-DU1ForPl.js";import"./extendSxProp-D-vpv-1y.js";import"./getThemeProps-D7jKhtgM.js";import"./useTheme-ITUjA_qS.js";import"./Box-CbSz_dhW.js";import"./AlertTitle-DTLD6v1o.js";import"./Typography-6dkO2MTM.js";import"./index-DK62uATf.js";import"./useTheme-LIw16y-R.js";import"./ClickAwayListener-D1GBWBlV.js";import"./getReactElementRef-CVCbp7Cp.js";import"./index-BcRRWnYW.js";import"./index-BDgQoSql.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-wuCwDJHH.js";import"./Tooltip-DX-SU6uL.js";import"./index-Cq9dyCaH.js";import"./useControlled-uX7GhbF6.js";import"./Popper-CXqOJrMB.js";import"./Button-BHN8_UXu.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DkveStrn.js";import"./QueryClientProvider-DztE-yrs.js";import"./Link-8X1p5eq_.js";import"./Collapse-BMTa6CBd.js";import"./_baseUniq-CyW2Nhvq.js";import"./_Uint8Array-Do_yUrdE.js";import"./isArray-BFuLipFc.js";import"./_getTag-BUH8RGR_.js";import"./isEqual-Bo9V0Syl.js";import"./merge-CmfNHmTH.js";import"./_initCloneObject-CyhAal79.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CUSl01b3.js";import"./inputBaseClasses-CcplBV6_.js";import"./calculateFriendlyFileSize-CUQjNl6R.js";import"./CheckCircleTwoTone-CdZKEvy8.js";import"./InfoTwoTone-qc6Tvhs0.js";import"./useMutation-DONRoSE-.js";import"./dayjs.min-CYR_2A92.js";import"./chunk-AYJ5UCUI-D3aPapOi.js";import"./cloneDeep-BihnUe_D.js";import"./Skeleton-Bc_aNlp6.js";import"./SkeletonButton-BC_eVRko.js";import"./SkeletonInlineBlock-nRuvAxLc.js";import"./SkeletonTable-CddpqJYO.js";import"./times-Bb7GOkht.js";import"./toInteger-BxMRen59.js";import"./isSymbol-BIKvGbkU.js";import"./SkeletonParagraph-CbuD9cfx.js";import"./uniqueId-C63vPQoj.js";import"./toString-PWlAtk46.js";import"./CSSTransition-bM3ACgSM.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Beav7uSM.js";import"./Avatar-DfzPRoCD.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
