import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DsgP0sd9.js";import{M as x}from"./MarkdownSynapse-BVSFNiyQ.js";import{d as s}from"./ToastMessage-BDz2ayJI.js";import{R as n,a as t}from"./RequirementItem-Dys37zth.js";import{P as O}from"./Paper-CrkBLqBb.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-CfZD9Mvn.js";import"./VerificationSubmission-CTjJb3hu.js";import"./useFiles-C0LoOmO0.js";import"./SynapseConstants-CfoFd-n8.js";import"./OrientationBanner-CyUybcJl.js";import"./index-DM6lW6It.js";import"./index-BT3Te7jy.js";import"./iframe-Cv41k_0C.js";import"./spreadSx-CwcO6WA9.js";import"./react-DZIMwRel.js";import"./FullWidthAlert-C46Blc7T.js";import"./Alert-C-gALuMm.js";import"./createTheme-DqJWNRNb.js";import"./DefaultPropsProvider-CE0cDWzn.js";import"./useSlot-hahH59Q5.js";import"./useForkRef-DzZZey8_.js";import"./createSimplePaletteValueFilter-BlHwJuBu.js";import"./createSvgIcon-C7LBBUzT.js";import"./Close-BPE0SqZE.js";import"./IconButton-IMsN6X3k.js";import"./useTimeout-DfbxA_aO.js";import"./ButtonBase-D5lUL21Y.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CTJF-mZ9.js";import"./Stack-Bnq-4hY0.js";import"./extendSxProp-trW_zPov.js";import"./getThemeProps-BSuDKzCX.js";import"./useTheme-C9qqfxHl.js";import"./Box-BvMgL0bP.js";import"./AlertTitle-D-osniwO.js";import"./Typography-BVM6JYB6.js";import"./index-B-OF_bVG.js";import"./useTheme-C9dU6GyR.js";import"./ClickAwayListener-kfkLezti.js";import"./getReactElementRef-DJFrIvcT.js";import"./index-BVCraRaj.js";import"./index-Vw6BdwX_.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BDgVFHrL.js";import"./Tooltip-BSSHHp0A.js";import"./index-CvPTgnkP.js";import"./useControlled-CS6d8DWA.js";import"./Popper-0hI24Moq.js";import"./Button-DWVOomDw.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B8-nnzJN.js";import"./useQuery-BCtm-9bF.js";import"./QueryClientProvider-DDlfMz7v.js";import"./Link-Cx68C2Qe.js";import"./Collapse-C5sDbyg3.js";import"./_baseUniq-C30p3t0W.js";import"./_Uint8Array-m1itDDcl.js";import"./isArray-DR6YGX7L.js";import"./_getTag-Pn6cSHfz.js";import"./isEqual-BR1_83yT.js";import"./merge-BTBQOSs6.js";import"./_initCloneObject-BpTYYScw.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CmY1bZLi.js";import"./inputBaseClasses-Bvbevx10.js";import"./calculateFriendlyFileSize-ZofpzaZO.js";import"./CheckCircleTwoTone-BT4jI4la.js";import"./InfoTwoTone-CThHqBR0.js";import"./useMutation-7VgsCiaa.js";import"./dayjs.min-2ntpv4ZX.js";import"./chunk-AYJ5UCUI-BrDJsr6s.js";import"./cloneDeep-BYsV4Yvt.js";import"./Skeleton-B4NemE63.js";import"./SkeletonButton-C2xYOOai.js";import"./SkeletonInlineBlock-Cj4Np9kH.js";import"./SkeletonTable-48HgdWyp.js";import"./times-cDhTatTd.js";import"./toInteger-DB0br_ER.js";import"./isSymbol-BrnSu6PC.js";import"./SkeletonParagraph-C6G1dLYl.js";import"./uniqueId-CgFdmfzC.js";import"./toString-BVqGcibl.js";import"./CSSTransition-B6hcKenB.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CtJtIGIM.js";import"./Avatar-DuZcshjj.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
