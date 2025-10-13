import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-Urs2Stsu.js";import{d as s}from"./ToastMessage-CG_QYRxy.js";import{R as n,a as t}from"./RequirementItem-D8QgORvB.js";import{P as O}from"./Paper-CF2lzpio.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BxW2OjF_.js";import"./SynapseConstants-CbS11lwu.js";import"./OrientationBanner-DAAziPr7.js";import"./index-CjpbMb-2.js";import"./index-BlqYlNqH.js";import"./iframe-DCM7iHZO.js";import"./spreadSx-CwcO6WA9.js";import"./react-CEAJSkGg.js";import"./FullWidthAlert-CAFxwpcN.js";import"./Alert-D6R0aZpH.js";import"./createTheme-CX2Fjxji.js";import"./DefaultPropsProvider-BnvpeM39.js";import"./useSlot-BGFFn2Yp.js";import"./useForkRef-CuaJz7-Y.js";import"./createSimplePaletteValueFilter-p4K6Mnoc.js";import"./createSvgIcon-DUQWWt-z.js";import"./Close-n0ge04QY.js";import"./IconButton-BIB-CAZ9.js";import"./useTimeout-DNpXQZXA.js";import"./ButtonBase-Dr_L7g0l.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B_PETcC2.js";import"./Stack-CnakP1Nf.js";import"./useThemeProps-wm4aMtJv.js";import"./getThemeProps-C7E0PQ7U.js";import"./useTheme-B9tfsfzJ.js";import"./extendSxProp-ClQEqrR8.js";import"./Box-BAunhwEm.js";import"./AlertTitle-C78MxdqV.js";import"./Typography-BGL1ewSU.js";import"./index-BBXrvSSK.js";import"./useTheme-BpONhpPf.js";import"./ClickAwayListener-wANS1sm5.js";import"./getReactElementRef-B-FQDB6t.js";import"./index-Dr007Q5D.js";import"./index-qpPU8qdy.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BeiywY4t.js";import"./Tooltip-BLdHd-MN.js";import"./index-WIo8OHGx.js";import"./useControlled-DNjUBqvl.js";import"./Popper-BLn1Ov7-.js";import"./Button-B5V1-M1A.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BNpHjXkF.js";import"./QueryClientProvider-NhrOwhBC.js";import"./Link-DlixphRW.js";import"./Collapse-Dln0G3S5.js";import"./_baseUniq-pMV98HDI.js";import"./_Uint8Array-BbI8ilIQ.js";import"./isArray-Cc9w60IV.js";import"./_getTag-BSojBbQx.js";import"./isEqual-CkmIEn_k.js";import"./noop-DX6rZLP_.js";import"./merge-DlUKwuU8.js";import"./_initCloneObject-DwB7xy4-.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DXKqJCZP.js";import"./inputBaseClasses-DJY9IRAF.js";import"./calculateFriendlyFileSize-BZdSz9n-.js";import"./CheckCircleTwoTone-DJ65aMmV.js";import"./InfoTwoTone-C3Zlortc.js";import"./useMutation-CV3ESuZm.js";import"./dayjs.min-81jMEWHJ.js";import"./chunk-AYJ5UCUI-B4cY1IOw.js";import"./cloneDeep-BYvILRz3.js";import"./Skeleton-B7QyB6bJ.js";import"./SkeletonButton-CfFJX_hS.js";import"./SkeletonInlineBlock-DgFoGvQA.js";import"./SkeletonTable-DGMy4eb_.js";import"./times-UINggwMT.js";import"./toInteger-B8v9JCJd.js";import"./isSymbol-4h04pfmi.js";import"./SkeletonParagraph-D0MI-JIc.js";import"./uniqueId-BbuF_QB9.js";import"./toString-tvYildNh.js";import"./CSSTransition-CZKHFzdq.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-cqYhy8vJ.js";import"./Avatar-DAnfv-aa.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
