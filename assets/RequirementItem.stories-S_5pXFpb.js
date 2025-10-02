import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CnS1lzrb.js";import{d as s}from"./ToastMessage-SjoyMTrY.js";import{R as n,a as t}from"./RequirementItem-BKLFhoaW.js";import{P as O}from"./Paper-B7Y-Q-HP.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-fwRLhGbr.js";import"./SynapseConstants-B8l2OMPk.js";import"./OrientationBanner-Bby0TFFa.js";import"./index-BxuR_vo1.js";import"./index-Y2_7qyTT.js";import"./iframe-CiPNy815.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dtfv9P2B.js";import"./FullWidthAlert-B-BMAEeS.js";import"./Alert-oytxK5Je.js";import"./createTheme-RUiFmI_W.js";import"./DefaultPropsProvider-FS1r-X2U.js";import"./useSlot-BV5ZvQmJ.js";import"./useForkRef-C-dtH7pD.js";import"./createSimplePaletteValueFilter-DztsWVw_.js";import"./createSvgIcon-v4WwopeH.js";import"./Close-CEyDtX3Y.js";import"./IconButton-AczJCmvj.js";import"./useTimeout-BA5R3DOd.js";import"./ButtonBase-BWviD6tE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DWQtTghH.js";import"./Stack-ZVBUd5J3.js";import"./extendSxProp-gXFVNC4Y.js";import"./getThemeProps-plWpQ3Lq.js";import"./useTheme-0IisDZIx.js";import"./Box-BHsZ7Z3g.js";import"./AlertTitle-3qVJhO4S.js";import"./Typography-KbDqkm-r.js";import"./index-sXDbKBZ3.js";import"./useTheme-BsulMRaf.js";import"./ClickAwayListener-Bz9xyM5k.js";import"./getReactElementRef-xHZTpTG3.js";import"./index-pTUyDkO4.js";import"./index-7gQlUqDb.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-xPbtW7qM.js";import"./Tooltip-C8s8txK1.js";import"./index-PsXj0yzt.js";import"./useControlled-Qtb3VGc2.js";import"./Popper-BmbmkZCj.js";import"./Button-CnNmkRun.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BpAlhGD_.js";import"./QueryClientProvider-C5kb4OB9.js";import"./Link-CT9hiCy-.js";import"./Collapse-DlQYoAVS.js";import"./_baseUniq-BabFNIaN.js";import"./_Uint8Array-C-s0epD8.js";import"./isArray-DEOD9vUq.js";import"./_getTag-Cw3MvDSQ.js";import"./isEqual-CUm5pL-b.js";import"./merge-P1u9Z5mp.js";import"./_initCloneObject-BhXh6Epx.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CwUMTnIH.js";import"./inputBaseClasses-gUC_vYKI.js";import"./calculateFriendlyFileSize-CEXKEGgc.js";import"./CheckCircleTwoTone-Gfdrryy2.js";import"./InfoTwoTone-lxJmBppl.js";import"./useMutation-DU_qR7xN.js";import"./dayjs.min-CLS8WRHo.js";import"./chunk-AYJ5UCUI-BAH5wvuu.js";import"./cloneDeep-C8vY3ckw.js";import"./Skeleton-BWv50vL0.js";import"./SkeletonButton-B5wN6HLM.js";import"./SkeletonInlineBlock-tf8x05Ru.js";import"./SkeletonTable-BEuOTJME.js";import"./times-DYTup6yP.js";import"./toInteger-C15E4fEB.js";import"./isSymbol-D5i-ZS4K.js";import"./SkeletonParagraph-GreXnCdC.js";import"./uniqueId-BH7hVDmm.js";import"./toString-CdTzKmJz.js";import"./CSSTransition-CHEKsDqZ.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BY96Shn-.js";import"./Avatar-Bom_kYQ5.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
