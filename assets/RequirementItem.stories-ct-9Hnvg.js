import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-MzKZnwYp.js";import{d as s}from"./ToastMessage-CfoAHEHy.js";import{R as n,a as t}from"./RequirementItem-BJbrevS_.js";import{P as O}from"./Paper-4XJoZFT8.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DU0KbIhN.js";import"./SynapseConstants-BvkCgq3q.js";import"./OrientationBanner-BIqxssu4.js";import"./index-D_I69aNJ.js";import"./index-7KdIsKFN.js";import"./iframe-CsYtrl69.js";import"./spreadSx-CwcO6WA9.js";import"./react-CSJLJtgY.js";import"./FullWidthAlert-BcjTofwJ.js";import"./Alert-CXyg9zZW.js";import"./createTheme-D99HVzHw.js";import"./DefaultPropsProvider-BDkT1_Zg.js";import"./useSlot-DDzMf-NS.js";import"./useForkRef-DdlSoLQT.js";import"./createSimplePaletteValueFilter-zzg78wfu.js";import"./createSvgIcon-BJGUPwTr.js";import"./Close-C1MGPhMz.js";import"./IconButton-hCNA1nO_.js";import"./useTimeout-C6eH0LMY.js";import"./ButtonBase-DHXgaqy8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ChNe0x20.js";import"./Stack-BgPIGJBB.js";import"./useThemeProps-C-lZ45sq.js";import"./getThemeProps-UG1giO0s.js";import"./useTheme-BUI8t9EN.js";import"./extendSxProp-D3xzd78a.js";import"./Box-CyMjV0lw.js";import"./AlertTitle-B9hh7xTw.js";import"./Typography-CgELToTR.js";import"./index-DxIYZYxe.js";import"./useTheme-DDJP92fw.js";import"./ClickAwayListener-qcG_xo1w.js";import"./getReactElementRef-CZMZMACG.js";import"./index-Dnc0KVG1.js";import"./index-CYG8ReaC.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-COFvT4Fr.js";import"./Tooltip-TJmbofi_.js";import"./index-CCmkHAOR.js";import"./useControlled-COBnzW9o.js";import"./Popper-nifOx2HX.js";import"./Button-BlDCFaad.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-C9GAOvRL.js";import"./QueryClientProvider-BpgeQpsy.js";import"./Link-K0WQ4RJB.js";import"./Collapse-B9jEaYxB.js";import"./_baseUniq-C3nQM1t_.js";import"./_Uint8Array-DnaM-X-G.js";import"./isArray-BvmHQydZ.js";import"./_getTag-BH98QkbB.js";import"./isEqual-BR072uNX.js";import"./noop-DX6rZLP_.js";import"./merge-BiDvuW0y.js";import"./_initCloneObject-CR3nmsfR.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BVW8WfrF.js";import"./inputBaseClasses-DEk3SEq1.js";import"./calculateFriendlyFileSize-CPpMCUfT.js";import"./CheckCircleTwoTone-B52REKll.js";import"./InfoTwoTone-croQFE36.js";import"./useMutation-wdvmQ00s.js";import"./dayjs.min-C_S2YiE5.js";import"./chunk-AYJ5UCUI-DPYjxEGe.js";import"./cloneDeep-DtQ1Vi2m.js";import"./Skeleton-CMgleuOv.js";import"./SkeletonButton-DysiiZ24.js";import"./SkeletonInlineBlock-Dtnbmd3B.js";import"./SkeletonTable-DMXihQLH.js";import"./times-CxTsb-MR.js";import"./toInteger-Bpva5dYQ.js";import"./isSymbol-DE5mZbO0.js";import"./SkeletonParagraph-CGFX-rEj.js";import"./uniqueId-D7TY6ev_.js";import"./toString-BDClR3lY.js";import"./CSSTransition-oOOeIUiL.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-C2eoqBrT.js";import"./Avatar-DGL2afpJ.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
