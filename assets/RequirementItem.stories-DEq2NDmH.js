import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CDy5lKeK.js";import{d as s}from"./ToastMessage-DyJL1S1F.js";import{R as n,a as t}from"./RequirementItem-BaLYpWda.js";import{P as O}from"./Paper-BxqOSPyk.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BbxVu2DR.js";import"./SynapseConstants-DB1U6fCi.js";import"./OrientationBanner-CfcCHA7b.js";import"./index-D-JvkkFQ.js";import"./index-h6wMStlP.js";import"./iframe-BIXzCf__.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dvfkm1q8.js";import"./FullWidthAlert-C3__BrN1.js";import"./Alert-KbHye0zK.js";import"./createTheme-CfvkUd1Z.js";import"./DefaultPropsProvider-D7V8rD5v.js";import"./useSlot-sOD4zP-r.js";import"./useForkRef-Bgjy7c5C.js";import"./createSimplePaletteValueFilter-7MYa4cYr.js";import"./createSvgIcon-BBewBNub.js";import"./Close-vJBs_HBy.js";import"./IconButton-BIC_-n2r.js";import"./useTimeout-qJcADyon.js";import"./ButtonBase-0zocx7gF.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DMvTAHSq.js";import"./Stack-BlHkd8TU.js";import"./useThemeProps-B2dREZbs.js";import"./getThemeProps-C0RGq6ua.js";import"./useTheme-PSCU5VTp.js";import"./extendSxProp-CkLeZJqn.js";import"./Box-Dx6_J6VB.js";import"./AlertTitle-fHQYxNHL.js";import"./Typography-TJTmaHAu.js";import"./index-DYWBYB4S.js";import"./useTheme-Cw4Zp1rn.js";import"./ClickAwayListener-BfovIoNr.js";import"./getReactElementRef-Bwbpg52p.js";import"./index-U4jxIuWl.js";import"./index-t59vC1km.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-wP9co_-j.js";import"./Tooltip-n52PzXnL.js";import"./index-ByPvK6j8.js";import"./useControlled-OG_H38db.js";import"./Popper-BhKXntQR.js";import"./Button-DmjkSNHc.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-CmubrUzL.js";import"./QueryClientProvider-DEQ_VpcF.js";import"./Link-Kv9iFQ5W.js";import"./Collapse-Q1KoyyE_.js";import"./_baseUniq-aE6oP3PL.js";import"./_Uint8Array-BGr3SjUR.js";import"./isArray-Cn9BbLfk.js";import"./_getTag-1ZzLjjIk.js";import"./isEqual-DeX1HjXm.js";import"./noop-DX6rZLP_.js";import"./merge-JRhW7aR_.js";import"./_initCloneObject-BuVlxAmo.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DHQD_AfM.js";import"./inputBaseClasses-DhSIyHr7.js";import"./calculateFriendlyFileSize-D9gQBnSg.js";import"./CheckCircleTwoTone-Cmw_kNue.js";import"./InfoTwoTone-14otHSKQ.js";import"./useMutation-AlPt0G_3.js";import"./dayjs.min-Bh9Qzvrd.js";import"./chunk-AYJ5UCUI-C8HEU9Sm.js";import"./cloneDeep-B0NF6IcV.js";import"./Skeleton-CNu0JRel.js";import"./SkeletonButton-BkCKWMPJ.js";import"./SkeletonInlineBlock-9nPmB_Fq.js";import"./SkeletonTable-PNSrNJs8.js";import"./times-yJyRyJoN.js";import"./toInteger--OxGyFRz.js";import"./isSymbol-DAmKeQYL.js";import"./SkeletonParagraph-BFXwX_IX.js";import"./uniqueId-DntEQDws.js";import"./toString-JgrOq2ja.js";import"./CSSTransition-oWJf9mgb.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CQqJfZm-.js";import"./Avatar-Cx4uj3Fr.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
