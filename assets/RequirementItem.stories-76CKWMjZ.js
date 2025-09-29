import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BCMxM1kf.js";import{d as s}from"./ToastMessage-OO5SIr8H.js";import{R as n,a as t}from"./RequirementItem-CCoRpLji.js";import{P as O}from"./Paper-CaF42frr.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-B2N2HPUY.js";import"./SynapseConstants-Dgxzyngc.js";import"./OrientationBanner-CM4mQahX.js";import"./index-Ckx9wA1o.js";import"./index-DTNlVjJ7.js";import"./iframe-HyGsmOq6.js";import"./spreadSx-CwcO6WA9.js";import"./react-C-ZrivrO.js";import"./FullWidthAlert-rFqRmBje.js";import"./Alert-8d9H3zz9.js";import"./createTheme-D1BQx7_9.js";import"./DefaultPropsProvider-C_zNEI2X.js";import"./useSlot-D3K8A8w7.js";import"./useForkRef-U0ZDp63e.js";import"./createSimplePaletteValueFilter-cVSg-Kao.js";import"./createSvgIcon-RS-D48a7.js";import"./Close-CvE2AhfC.js";import"./IconButton-pZgQcOFK.js";import"./useTimeout-DtwR2-Vy.js";import"./ButtonBase-36aZ1yix.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-oD9nUD2d.js";import"./Stack-DqCCF0aZ.js";import"./extendSxProp-iklfMelH.js";import"./getThemeProps-vMGdrB_u.js";import"./useTheme-BfaqaQGF.js";import"./Box-BgNFQW5j.js";import"./AlertTitle-DbhJsyCT.js";import"./Typography-CdQn_xVC.js";import"./index-ChnvbaPR.js";import"./useTheme-f5o2sVxe.js";import"./ClickAwayListener-DoRduBrz.js";import"./getReactElementRef-DwpSRZ2i.js";import"./index-C38Velpb.js";import"./index-DROQPanT.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-h00VdCaE.js";import"./Tooltip-CF7TWlNa.js";import"./index-DFvo03aM.js";import"./useControlled-C_0taDzB.js";import"./Popper-CTII9iKp.js";import"./Button-N-1HkUGf.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BeZx-JBU.js";import"./QueryClientProvider-CqRxmNge.js";import"./Link-B84UpXKP.js";import"./Collapse-D024h2Tt.js";import"./_baseUniq-DEewYuYN.js";import"./_Uint8Array-DPNJR1BB.js";import"./isArray-BNDnJ0cX.js";import"./_getTag-DxTQRKYo.js";import"./isEqual-Dv-V6DIZ.js";import"./merge-NB7svOIH.js";import"./_initCloneObject-DHMeHRbH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ByYPi2--.js";import"./inputBaseClasses-V0GV_T2d.js";import"./calculateFriendlyFileSize-C_Xem63m.js";import"./CheckCircleTwoTone-Dp5ZcmDN.js";import"./InfoTwoTone-BTeFVGl3.js";import"./useMutation-B0RPERva.js";import"./dayjs.min-2wFo7hOi.js";import"./chunk-AYJ5UCUI-CW1esgOs.js";import"./cloneDeep-i-w8KGzX.js";import"./Skeleton-BEqAEI4M.js";import"./SkeletonButton-Du7Cwqqe.js";import"./SkeletonInlineBlock-C4wn7iqx.js";import"./SkeletonTable-Bfy4useK.js";import"./times-CvPrAAzW.js";import"./toInteger-DlQw8do_.js";import"./isSymbol-aUcSGGGb.js";import"./SkeletonParagraph-DpFaUc_o.js";import"./uniqueId-BLhD58vE.js";import"./toString-Cr7dBLXl.js";import"./CSSTransition-BqbGRZi1.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Bd3bDIkR.js";import"./Avatar-CvejttB0.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
