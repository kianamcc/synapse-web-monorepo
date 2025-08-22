import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DVGLZX8L.js";import{d as s}from"./ToastMessage-BDJ4vaGh.js";import{R as n,a as t}from"./RequirementItem-B1KkkUWB.js";import{P as O}from"./Paper-DAmi0aXy.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-Cgksw9GV.js";import"./SynapseConstants-DrEaJj_3.js";import"./OrientationBanner-w6CGgbYt.js";import"./index-DuAwIN7G.js";import"./index-BWg8gmP9.js";import"./iframe-DxMgOC42.js";import"./spreadSx-CwcO6WA9.js";import"./react-DJ4XftcX.js";import"./FullWidthAlert-VXj3VNMq.js";import"./Alert-B9JdgmLn.js";import"./createTheme-CloygEZI.js";import"./DefaultPropsProvider-cqqlf3DM.js";import"./useSlot-DU4Wne47.js";import"./useForkRef-CuZsgNn8.js";import"./createSimplePaletteValueFilter-Czpf93oR.js";import"./createSvgIcon-Dy41uhPC.js";import"./Close-BWkLyPEE.js";import"./IconButton-CDhHBjru.js";import"./useTimeout-DzhOkixu.js";import"./ButtonBase-DkwHGrOc.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-F1HsRVw0.js";import"./Stack-_CRd7W9c.js";import"./extendSxProp-B-QpAch6.js";import"./getThemeProps-8ael_php.js";import"./useTheme-De2PrO1i.js";import"./Box-BmJ8Nv4Q.js";import"./AlertTitle-CflXlpyw.js";import"./Typography-BLdAJe5v.js";import"./index-Carkrmqq.js";import"./useTheme-B9J3VmFE.js";import"./ClickAwayListener-BUboLwwV.js";import"./getReactElementRef-D5laRzAV.js";import"./index-VF1kjDI9.js";import"./index-BALo3nNz.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-3SXN3MNY.js";import"./Tooltip-WXobDaFj.js";import"./index-Cs-59t9j.js";import"./useControlled-CHFqetIf.js";import"./Popper-Bj0Z85qz.js";import"./Button-U--Q96r5.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DC0yPoOC.js";import"./QueryClientProvider-Dv3ud_cs.js";import"./Link-BcPfG-VZ.js";import"./Collapse-CWDJbsS2.js";import"./_baseUniq-CIfoarHK.js";import"./_Uint8Array-BmO9vIzF.js";import"./isArray-DLkopDsw.js";import"./_getTag-BcVhETby.js";import"./isEqual-YOpW3a2z.js";import"./merge-Ci0u7Z_j.js";import"./_initCloneObject-B21APcHN.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DxNVQUJQ.js";import"./inputBaseClasses-CG1WD0jj.js";import"./calculateFriendlyFileSize-D9TEFVUS.js";import"./CheckCircleTwoTone-3NdcQIhw.js";import"./InfoTwoTone-EwVotAye.js";import"./useMutation-9Biue8zq.js";import"./dayjs.min-WjH_UZhr.js";import"./chunk-AYJ5UCUI-CTNvUNcY.js";import"./cloneDeep-BRyqSLXf.js";import"./Skeleton-DRmMTT-E.js";import"./SkeletonButton-IPLZ754V.js";import"./SkeletonInlineBlock-Co2o8vkk.js";import"./SkeletonTable-Bl_mg8cd.js";import"./times-VwcTsY5H.js";import"./toInteger-Dro27ezU.js";import"./isSymbol-CxrNOdHT.js";import"./SkeletonParagraph-BIpERWVT.js";import"./uniqueId-CDbHy9kW.js";import"./toString-DPQFizsd.js";import"./CSSTransition-CkMmsEGq.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Cc94DWFQ.js";import"./Avatar-B6fH5vjx.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
