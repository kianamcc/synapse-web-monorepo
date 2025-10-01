import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BQYeZRhx.js";import{d as s}from"./ToastMessage-BvIriwVK.js";import{R as n,a as t}from"./RequirementItem-UwLajo9M.js";import{P as O}from"./Paper-Bxri_9-b.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BohibOw-.js";import"./SynapseConstants-a2f1ATGs.js";import"./OrientationBanner-dBolsJnn.js";import"./index-DVi4Wje5.js";import"./index-CkFnR4ru.js";import"./iframe-CKvnnJhq.js";import"./spreadSx-CwcO6WA9.js";import"./react-A7vIHcfb.js";import"./FullWidthAlert-BEFsW73f.js";import"./Alert-DDc39lQe.js";import"./createTheme-DcsDOw1A.js";import"./DefaultPropsProvider-CGqxt6ob.js";import"./useSlot-Bju1dyXB.js";import"./useForkRef-BJQkitpf.js";import"./createSimplePaletteValueFilter-B9aGn8G9.js";import"./createSvgIcon-364Lzn_b.js";import"./Close-LykhWtmH.js";import"./IconButton-CsuOJx-T.js";import"./useTimeout-BqUVErKz.js";import"./ButtonBase-CGWLsOy4.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DK0_NXfb.js";import"./Stack-Br4KC0Ob.js";import"./extendSxProp-B2jDyka1.js";import"./getThemeProps-CmXJJfNS.js";import"./useTheme-VJ2j0frp.js";import"./Box-CDBIpvwF.js";import"./AlertTitle-5zvJDzzp.js";import"./Typography-DUXOvTJX.js";import"./index-BDhwziWJ.js";import"./useTheme-bpf5HOw7.js";import"./ClickAwayListener-BpdWOejG.js";import"./getReactElementRef-JptPm9gh.js";import"./index-BqxOl3YS.js";import"./index-BPjGFZ8d.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DqmkwxJ5.js";import"./Tooltip-DC2q4Wz4.js";import"./index-CHLvizmL.js";import"./useControlled-BvqV3f_O.js";import"./Popper-cjOWIAbd.js";import"./Button-BdFuUL1S.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BfSgOaRc.js";import"./QueryClientProvider-zm0Ye9sy.js";import"./Link-vbf7MeOq.js";import"./Collapse-BQIg35cI.js";import"./_baseUniq-DU7r3f6n.js";import"./_Uint8Array-B8U-SItt.js";import"./isArray-C533p3iE.js";import"./_getTag-DiNzJEZe.js";import"./isEqual-B0Qaz4yZ.js";import"./merge-fz5rfo0a.js";import"./_initCloneObject-hL9_bpDH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DvSChFD7.js";import"./inputBaseClasses-DP9QiBNX.js";import"./calculateFriendlyFileSize-Bf2PELXV.js";import"./CheckCircleTwoTone-DasE1-rH.js";import"./InfoTwoTone-BlO9HkXx.js";import"./useMutation-S7okSP_K.js";import"./dayjs.min-DWt_l-v8.js";import"./chunk-AYJ5UCUI-C6uHKJSQ.js";import"./cloneDeep-CrgHvOoP.js";import"./Skeleton-21P9iDr7.js";import"./SkeletonButton-eZRutsFo.js";import"./SkeletonInlineBlock-B0LGpiC4.js";import"./SkeletonTable-BBQWjS0A.js";import"./times-Bj5oruIi.js";import"./toInteger-OMhOm0aB.js";import"./isSymbol-BA2WHEYX.js";import"./SkeletonParagraph-Dc5gR7bE.js";import"./uniqueId-BMwRhlYS.js";import"./toString-DNkdMUwa.js";import"./CSSTransition-Dn5nWB0a.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DxgPLIdx.js";import"./Avatar-0MOKc6zh.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
