import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-BkWfQKhJ.js";import{d as s}from"./ToastMessage-w27O71yf.js";import{R as n,a as t}from"./RequirementItem-ConXNCgF.js";import{P as O}from"./Paper-D1xKUhjY.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-DD13OD5h.js";import"./SynapseConstants-D8E2pXRt.js";import"./OrientationBanner-Cbk172sP.js";import"./index-0RxGj8d9.js";import"./index-BWbini1a.js";import"./iframe-CQhX3-4V.js";import"./spreadSx-CwcO6WA9.js";import"./react-D-1wWzLE.js";import"./FullWidthAlert-oVHdySwG.js";import"./Alert-DGzNw2pi.js";import"./createTheme-BGpoE-_g.js";import"./DefaultPropsProvider-_SF4IA0K.js";import"./useSlot-D5_d3Kng.js";import"./useForkRef-DdLo760x.js";import"./createSimplePaletteValueFilter-Dj0pjndW.js";import"./createSvgIcon-cikvyjs8.js";import"./Close-CYrxm3Hi.js";import"./IconButton-BschCF9p.js";import"./useTimeout-D9tehEhW.js";import"./ButtonBase-BD9-LZtm.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DOFVJbzM.js";import"./Stack-C0_QUH12.js";import"./extendSxProp-BGMKWZqN.js";import"./getThemeProps-Hq3d3dpb.js";import"./useTheme-CuRmzO1P.js";import"./Box-DhtWBUtC.js";import"./AlertTitle-CTaQO2XW.js";import"./Typography-C-j8t5lS.js";import"./index-BJ3f3YFD.js";import"./useTheme-VQVCGPuG.js";import"./ClickAwayListener-DWdaDQMT.js";import"./getReactElementRef-DPBoVoB5.js";import"./index-Tk2fZLdw.js";import"./index-BohNvSE0.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-COSiOQO7.js";import"./Tooltip-C3ejRJHT.js";import"./index-amPq0fRs.js";import"./useControlled-Ci67JjzL.js";import"./Popper-BijX7XUI.js";import"./Button-CNlFQ1cm.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-D3nrYCdi.js";import"./QueryClientProvider-ijoNdgTf.js";import"./Link-BuZX_Nti.js";import"./Collapse-CuCPx9er.js";import"./_baseUniq-BrihWGMs.js";import"./_Uint8Array-CpUN2OqJ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D7DswbeZ.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CItyCHjk.js";import"./isEqual-B8ZwwDCw.js";import"./merge-CfgCk-tN.js";import"./_initCloneObject-NTkMCTZ-.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BTTyizlp.js";import"./inputBaseClasses-Ba-VNdbH.js";import"./calculateFriendlyFileSize-Dc4GLmoz.js";import"./CheckCircleTwoTone-CvxMkv6u.js";import"./InfoTwoTone-CwcyYTLC.js";import"./useMutation-DM62-zhy.js";import"./dayjs.min-CeZ2v38X.js";import"./chunk-AYJ5UCUI-C7weNC_d.js";import"./cloneDeep-C3sBntfv.js";import"./Skeleton-BbL9468k.js";import"./SkeletonButton-Dk5lMbhE.js";import"./SkeletonInlineBlock-Bw3sSYsG.js";import"./SkeletonTable-C2MSDa8Y.js";import"./times-DjxOos93.js";import"./toInteger-Z46sEdxi.js";import"./isSymbol-CiqfPVir.js";import"./SkeletonParagraph-CqbB8rvc.js";import"./uniqueId-QfV61C58.js";import"./toString-4NoPZsJM.js";import"./CSSTransition-C7Sk6mrW.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Q7HnaEyE.js";import"./Avatar-D7PUYpJk.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const ur=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,ur as __namedExportsOrder,dr as default};
