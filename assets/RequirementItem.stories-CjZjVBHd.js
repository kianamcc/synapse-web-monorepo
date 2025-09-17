import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-OPELaiAh.js";import{d as s}from"./ToastMessage-DhQvQaIM.js";import{R as n,a as t}from"./RequirementItem-DvGHHb6M.js";import{P as O}from"./Paper-BtBe2Ap-.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-Bw0m6uSf.js";import"./SynapseConstants-oxmSAhRt.js";import"./OrientationBanner-69jt1FeK.js";import"./index-oGsaT5a9.js";import"./index-Bc8RXlNF.js";import"./iframe-DqtJT-CI.js";import"./spreadSx-CwcO6WA9.js";import"./react-CP1D827C.js";import"./FullWidthAlert-DA78l4ei.js";import"./Alert-CPCjYOjN.js";import"./createTheme-B-WGvCZV.js";import"./DefaultPropsProvider-BZTOi2Nb.js";import"./useSlot-BE5lb3ME.js";import"./useForkRef-2fHpQHUh.js";import"./createSimplePaletteValueFilter-B6DTm-vX.js";import"./createSvgIcon-C9Qu0LqJ.js";import"./Close-Bivu03FM.js";import"./IconButton-W3ZhFBsx.js";import"./useTimeout-DkJzioRi.js";import"./ButtonBase-D6Nhhqqr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BAgXRlg8.js";import"./Stack-1p_QX1Ok.js";import"./extendSxProp-eP26Hwbg.js";import"./getThemeProps-xXfwRdzB.js";import"./useTheme-C9VVxehU.js";import"./Box-nLN5geWp.js";import"./AlertTitle-BasMmQ31.js";import"./Typography-D9diGUsI.js";import"./index-BIlcAsR4.js";import"./useTheme-CnLnUCUF.js";import"./ClickAwayListener-DtQh59tZ.js";import"./getReactElementRef-DBTURC4m.js";import"./index-CcY_nMfh.js";import"./index-DgNGjvVA.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C-w8O3Bv.js";import"./Tooltip-D5aOZOwW.js";import"./index-DgC7vvPA.js";import"./useControlled-kiYK4enm.js";import"./Popper-Ccwyg-S0.js";import"./Button-D1_V94c4.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-GKDTA9Sk.js";import"./QueryClientProvider-DmkRpa3F.js";import"./Link-Bxi0rxja.js";import"./Collapse-CMSd_lTh.js";import"./_baseUniq-6J9_uk5v.js";import"./_Uint8Array-C2g0Y_T2.js";import"./isArray-wgyLd2Dj.js";import"./_getTag-kNCA-Zxv.js";import"./isEqual-C1mFG84L.js";import"./merge-DJGXnCrn.js";import"./_initCloneObject-BMdnylxl.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Iv3fPh82.js";import"./inputBaseClasses-rlpaGauL.js";import"./calculateFriendlyFileSize-H7_KPqe_.js";import"./CheckCircleTwoTone-D-sclXL9.js";import"./InfoTwoTone-C3IyF0V8.js";import"./useMutation-DlA1__c_.js";import"./dayjs.min-SKfPruAU.js";import"./chunk-AYJ5UCUI-Ds_dHHHb.js";import"./cloneDeep-DATH6_8s.js";import"./Skeleton-xuFa_deo.js";import"./SkeletonButton-DeljvfTk.js";import"./SkeletonInlineBlock-CmTeqA9J.js";import"./SkeletonTable-BgDKh0q7.js";import"./times-BUzBHwrf.js";import"./toInteger-DDu9OOBP.js";import"./isSymbol-Bz_nq2Xo.js";import"./SkeletonParagraph-CIvCOmc3.js";import"./uniqueId-COcc66q-.js";import"./toString-CPLPrYC1.js";import"./CSSTransition-CWaQpedD.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-jqG45S2n.js";import"./Avatar-DmqgYIs1.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
