import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-B7z4Wjvh.js";import{d as s}from"./ToastMessage-C2-2YMav.js";import{R as n,a as t}from"./RequirementItem-CSLJrNHq.js";import{P as O}from"./Paper-DRUFVFuo.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-C-i-TLaj.js";import"./SynapseConstants-yTPP4ibJ.js";import"./OrientationBanner-NrJ6x3Um.js";import"./index-CDfw4ibi.js";import"./index-DgWzafQX.js";import"./iframe-DYYJI8IR.js";import"./spreadSx-CwcO6WA9.js";import"./react-iznkqUdM.js";import"./FullWidthAlert-BQHSiNTn.js";import"./Alert-HaV25ohz.js";import"./createTheme-BtKsFDJb.js";import"./DefaultPropsProvider-dQjI1z2Q.js";import"./useSlot-DbqTD4GH.js";import"./useForkRef-CGFekAbF.js";import"./createSimplePaletteValueFilter-Ba6BSjt1.js";import"./createSvgIcon-BUeMPEos.js";import"./Close-UaYlRgay.js";import"./IconButton-COMh1wHt.js";import"./useTimeout-KbnpBUav.js";import"./ButtonBase-BV_Svz33.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DPoJlQv3.js";import"./Stack-Bl6utGYW.js";import"./extendSxProp-BXLCqC37.js";import"./getThemeProps-CvDTyZg4.js";import"./useTheme-BsTX5Njf.js";import"./Box-Cdu-p-p4.js";import"./AlertTitle-CdvYF1_e.js";import"./Typography-B14dxalQ.js";import"./index-C3kEk841.js";import"./useTheme-DexxAIst.js";import"./ClickAwayListener-wW66lH_8.js";import"./getReactElementRef-Y7YbnsRM.js";import"./index-WIAOxyN4.js";import"./index-xnuC7E17.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DQ1fqbs3.js";import"./Tooltip-BHNuZilH.js";import"./index-LvNsMawH.js";import"./useControlled-D8oIXpId.js";import"./Popper-D_-SBC88.js";import"./Button-BOnfz6gg.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-ClCjMDWJ.js";import"./QueryClientProvider-CRpEytM8.js";import"./Link-CsVZIIuu.js";import"./Collapse-y9LqLB1R.js";import"./_baseUniq-B0QZMQbs.js";import"./_Uint8Array-DDn9cgNP.js";import"./isArray-BGIATQGG.js";import"./_getTag-CLNtpywB.js";import"./isEqual-C6OErc_G.js";import"./merge-D1h1ZS53.js";import"./_initCloneObject-zYU2LTGg.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-KgKZEq5O.js";import"./inputBaseClasses-BgY73dJx.js";import"./calculateFriendlyFileSize-BkLSPg13.js";import"./CheckCircleTwoTone-C-4wcfQx.js";import"./InfoTwoTone-Dh3NE58z.js";import"./useMutation-CLEhG4KT.js";import"./dayjs.min-Entwoms8.js";import"./chunk-AYJ5UCUI-DhVmQ0rH.js";import"./cloneDeep-D2GQBrr3.js";import"./Skeleton-CxQjpvSA.js";import"./SkeletonButton-BNKSw9Cp.js";import"./SkeletonInlineBlock-2xsFwoUg.js";import"./SkeletonTable-C9QZQI4i.js";import"./times-CpU7idBi.js";import"./toInteger-DqaEzSyQ.js";import"./isSymbol-DLbn4Kpm.js";import"./SkeletonParagraph-BG8L1q7d.js";import"./uniqueId-BglpAIva.js";import"./toString-BvcIQOXp.js";import"./CSSTransition-CpvqjVxY.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CMMEsZvr.js";import"./Avatar-Cdg9jhRx.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
