import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-An2c1n22.js";import{d as s}from"./ToastMessage-DygEvVcD.js";import{R as n,a as t}from"./RequirementItem-Dx3IHEeJ.js";import{P as O}from"./Paper-BBhN9Li4.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-B6vegzDl.js";import"./SynapseConstants-BtPK8Xf5.js";import"./OrientationBanner-DkmEu8ww.js";import"./index-BiABM7zM.js";import"./index-jL26_Tdg.js";import"./iframe-C7ZZ0tJ9.js";import"./spreadSx-CwcO6WA9.js";import"./react-Q48zzpqQ.js";import"./FullWidthAlert-KH7-cPlx.js";import"./Alert-BYyjJPXO.js";import"./createTheme-CYqCSXBz.js";import"./DefaultPropsProvider-BaJQA2z9.js";import"./useSlot-DtyCmT7o.js";import"./useForkRef-COfB-m0m.js";import"./createSimplePaletteValueFilter-B4WcSHb2.js";import"./createSvgIcon-3ocGpMNh.js";import"./Close-D02RjwJU.js";import"./IconButton-Ccbi1Krc.js";import"./useTimeout-Q5NueQY6.js";import"./ButtonBase-Cpa2hZQw.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-rSba4AH8.js";import"./Stack-Bnhis5DF.js";import"./extendSxProp-CyXZT-CH.js";import"./getThemeProps-qLDLSUkn.js";import"./useTheme-CCBKYA_N.js";import"./Box-CElDN2lR.js";import"./AlertTitle-Bg93ACEw.js";import"./Typography-sIVWjIv7.js";import"./index-DzEjapEh.js";import"./useTheme-DLyZrVj1.js";import"./ClickAwayListener-DBCnr4i9.js";import"./getReactElementRef-BpSyMuG3.js";import"./index-PB3v-e0n.js";import"./index-CXUQQ7NY.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CyxMG2Lo.js";import"./Tooltip-B8Ca4h6r.js";import"./index-Beyie8vy.js";import"./useControlled-IUjrSiMK.js";import"./Popper-BsmYiSO_.js";import"./Button-Bfd3_aE-.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DT4b9CON.js";import"./QueryClientProvider-DvweCRTp.js";import"./Link-DulGgx7_.js";import"./Collapse-kXTM2RiY.js";import"./_baseUniq-CbUydBEl.js";import"./_Uint8Array-B0WjZf3K.js";import"./isArray-YIKNzQ6l.js";import"./_getTag-ohfK-TjG.js";import"./isEqual-dhI3ZA9D.js";import"./merge-DqYA71tY.js";import"./_initCloneObject-Cz9cO3Kh.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-s5_xMiSm.js";import"./inputBaseClasses-kkvSt9vt.js";import"./calculateFriendlyFileSize-DX_Sn0UC.js";import"./CheckCircleTwoTone-BQ0LZxD5.js";import"./InfoTwoTone-CNBCB-S5.js";import"./useMutation-B1e0RvlB.js";import"./dayjs.min-Bvvs6Fr9.js";import"./chunk-AYJ5UCUI-D-jAjeB5.js";import"./cloneDeep-G_YIi0g_.js";import"./Skeleton-CIkEHEVl.js";import"./SkeletonButton-CgoNMEcM.js";import"./SkeletonInlineBlock-D6Bz1bda.js";import"./SkeletonTable-FSXrOnyY.js";import"./times-BfyVqzQb.js";import"./toInteger-Bs0lvEuP.js";import"./isSymbol-BzOFySpl.js";import"./SkeletonParagraph-CPcrTDx3.js";import"./uniqueId-BsjarHhf.js";import"./toString-CfbYm880.js";import"./CSSTransition-ghXF_Mig.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BY1X1lhp.js";import"./Avatar-kzxGwesf.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
