import{j as a}from"./jsx-runtime-l2JOfHlU.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-C7Jo_p89.js";import{d as s}from"./ToastMessage-i37v5ZWB.js";import{R as n,a as t}from"./RequirementItem-CYAyaXkq.js";import{P as O}from"./Paper-BuJm1n8g.js";import"./index-DhsIdlB6.js";import"./iframe-CLh-v2EG.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-DFnQpT1q.js";import"./SynapseConstants-4R9q584S.js";import"./OrientationBanner-qYFIW9wJ.js";import"./index-gnT9hqzc.js";import"./spreadSx-CwcO6WA9.js";import"./react-BIZ7SaDH.js";import"./FullWidthAlert-jwNVwZpe.js";import"./Alert-DSySOE5p.js";import"./createTheme--Vxq6Yu5.js";import"./DefaultPropsProvider-Bq1HBsor.js";import"./useSlot-rxoZph7w.js";import"./useForkRef-C9baLs8u.js";import"./createSimplePaletteValueFilter-B9d18wK8.js";import"./createSvgIcon-BQZtTy5l.js";import"./Close-C6BH8hlH.js";import"./IconButton-DgFPdk3S.js";import"./useTimeout-Qi8fPrDU.js";import"./ButtonBase-D0mIbvCb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BwR0mYGb.js";import"./Stack-CafeU9YC.js";import"./extendSxProp-CimpErXC.js";import"./getThemeProps-Dg3p2Zs5.js";import"./useTheme-Jy3glTIZ.js";import"./Box-BXrzqanv.js";import"./AlertTitle-CahypFz0.js";import"./Typography-DTRBBvQY.js";import"./index-CDwEJlle.js";import"./useTheme-DZn9zuh6.js";import"./ClickAwayListener-C9mcQmon.js";import"./getReactElementRef-D07nHqbQ.js";import"./index-DwHlnEf2.js";import"./index-B1hrXRSl.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DAU1H3gG.js";import"./Tooltip-X5ttJ9Im.js";import"./index-BOumIDmZ.js";import"./useControlled-Dc62HDZy.js";import"./Popper-dGtXYx0v.js";import"./Button-DlRALsF5.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ChvZ1ijm.js";import"./useQuery-Dqe4jpFg.js";import"./utils-D4piN_5i.js";import"./Link-ygoEIrSh.js";import"./Collapse-D0BvxTCg.js";import"./_baseUniq-DmSDb__U.js";import"./_Uint8Array-DExNEIbM.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Dg6x6w1J.js";import"./isArray-Dxzbedgu.js";import"./_getTag-D3zFbHW_.js";import"./isEqual-CpgaxgOf.js";import"./merge-BOEdkMoc.js";import"./_initCloneObject-Dz-ofz33.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BUu47Rql.js";import"./inputBaseClasses-Bj4buKwO.js";import"./calculateFriendlyFileSize-UKybAAlU.js";import"./CheckCircleTwoTone-Ck-Ybsjm.js";import"./InfoTwoTone-DBPoDFM7.js";import"./useMutation-DXPF_ukZ.js";import"./dayjs.min-DX1PUKZB.js";import"./chunk-AYJ5UCUI-DKouVPyg.js";import"./cloneDeep-C_y9zhUG.js";import"./Skeleton-DC5uKxFK.js";import"./SkeletonButton-U0HbGNMY.js";import"./SkeletonInlineBlock-COm10C5E.js";import"./SkeletonTable-MeQafCy0.js";import"./times-BlX0QB_y.js";import"./toInteger-BNp5lkLs.js";import"./isSymbol-CnGstcgH.js";import"./SkeletonParagraph-BSdrfOZ4.js";import"./uniqueId-CqlVSSoI.js";import"./toString-DJy7xrx0.js";import"./CSSTransition-D8-TAJ5q.js";import"./ConditionalWrapper-6j18R8VG.js";import"./LockTwoTone-BG_Z5nQy.js";import"./Avatar-ByGClzNI.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
