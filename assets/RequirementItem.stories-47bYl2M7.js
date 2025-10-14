import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-Dz_zjB6g.js";import{d as s}from"./ToastMessage-9LLroxMw.js";import{R as n,a as t}from"./RequirementItem-CfCE4rv6.js";import{P as O}from"./Paper-Bi_y7tq5.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BS7yqeVu.js";import"./SynapseConstants-DCD24UIR.js";import"./OrientationBanner-CGhK73qt.js";import"./index-VZePWZJ8.js";import"./index-CxNQf4-_.js";import"./iframe-Dg4AUp8p.js";import"./spreadSx-CwcO6WA9.js";import"./react-BE2NnvmD.js";import"./FullWidthAlert-9fheV2TI.js";import"./Alert-DD6LY4o6.js";import"./createTheme-BNZ2-g8i.js";import"./DefaultPropsProvider-CSmwSXtp.js";import"./useSlot-ZEQjcV4h.js";import"./useForkRef-DVZbic4O.js";import"./createSimplePaletteValueFilter-BTCFvpVs.js";import"./createSvgIcon-px9Ll1Sh.js";import"./Close-8Omd6HQo.js";import"./IconButton-DdwXXYxc.js";import"./useTimeout-CmN0NgJY.js";import"./ButtonBase-CYIBe76-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CpqZJiGb.js";import"./Stack-BkBDhbY7.js";import"./useThemeProps-DYPM01el.js";import"./getThemeProps-z9TSZhd3.js";import"./useTheme-Cwe9o9si.js";import"./extendSxProp-doqBFT6I.js";import"./Box-29dRnPqp.js";import"./AlertTitle-YP7vES6y.js";import"./Typography-CM0Hx7IB.js";import"./index-CylRv6A2.js";import"./useTheme-Ct9xyNCZ.js";import"./ClickAwayListener-Bk5rN7ro.js";import"./getReactElementRef-CbfHskog.js";import"./index-DdouHa0C.js";import"./index-BHXNWvPG.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DfWYfHBy.js";import"./Tooltip-BWVeFaIO.js";import"./index-BuW0orvV.js";import"./useControlled-CMSkeTs6.js";import"./Popper-DK9BpulM.js";import"./Button-Joy47VZj.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BmYDawry.js";import"./QueryClientProvider-BzV6DB3V.js";import"./Link-4Y6YnrJW.js";import"./Collapse-BssXeki7.js";import"./_baseUniq-Cqxswx2d.js";import"./_Uint8Array-DcB2X5w5.js";import"./isArray-KmhwUPCT.js";import"./_getTag-BUgEEbP5.js";import"./isEqual-BdiiYa5f.js";import"./noop-DX6rZLP_.js";import"./merge-CCPnLMoR.js";import"./_initCloneObject-DaAH_7Pj.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CYQ77buy.js";import"./inputBaseClasses-BSYFsfzv.js";import"./calculateFriendlyFileSize-C5Z4DbWG.js";import"./CheckCircleTwoTone-BjTNRj81.js";import"./InfoTwoTone-Dm6rZBIc.js";import"./useMutation-BLBDAaI6.js";import"./dayjs.min-pJYmqCac.js";import"./chunk-AYJ5UCUI-py0OTTT6.js";import"./cloneDeep-aIiF9cuR.js";import"./Skeleton-CXBbRm57.js";import"./SkeletonButton-5PuaKsOE.js";import"./SkeletonInlineBlock-3dbCcAAv.js";import"./SkeletonTable-DCktIaq7.js";import"./times-9qm3v6wO.js";import"./toInteger-BX512c4M.js";import"./isSymbol-pOBVduix.js";import"./SkeletonParagraph-DfSQ1gty.js";import"./uniqueId-CmVmy48j.js";import"./toString-APlpq5bG.js";import"./CSSTransition-DNFUr76N.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-vRX-Iin0.js";import"./Avatar-X4nsSvHt.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
