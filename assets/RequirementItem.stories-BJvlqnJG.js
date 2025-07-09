import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BKTbSptn.js";import{M as x}from"./MarkdownSynapse-DITWPMvU.js";import{d as s}from"./ToastMessage-wEwNO_3P.js";import{R as n,a as t}from"./RequirementItem-qDMfxCEC.js";import{P as O}from"./Paper-CGHoN7LX.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-Ctimzu5z.js";import"./VerificationSubmission-CeTJ0zsJ.js";import"./useFiles-DdchzG1b.js";import"./SynapseConstants-DMVoXWgm.js";import"./OrientationBanner-DhQWO8TI.js";import"./index-C04hlJ56.js";import"./index-A1tc7t_S.js";import"./iframe-BEGfRuJB.js";import"./spreadSx-CwcO6WA9.js";import"./react-ijaK4xjo.js";import"./FullWidthAlert-CKqzWWWM.js";import"./Alert-DOmaI0ep.js";import"./createTheme-C9QfBZB0.js";import"./DefaultPropsProvider-Bp935OVr.js";import"./useSlot-CdLEriE5.js";import"./useForkRef-DKMFgSSO.js";import"./createSimplePaletteValueFilter-nAgvpgra.js";import"./createSvgIcon-CyNw1tPa.js";import"./Close-CLEWuh7_.js";import"./IconButton-D2HqYlCj.js";import"./useTimeout-CHX4ymYs.js";import"./ButtonBase-CiPk1y-x.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ClMIew1C.js";import"./Stack-D-sjrR2u.js";import"./extendSxProp-BoReKpGK.js";import"./getThemeProps-CbvsNq-J.js";import"./useTheme-BgGj2ygo.js";import"./Box-Bhf3FGw6.js";import"./AlertTitle-D5sQ0oSL.js";import"./Typography-Ck1NaRDY.js";import"./index-AmHoeYPv.js";import"./useTheme-D9u2oh3Q.js";import"./ClickAwayListener-C1YqEdP3.js";import"./getReactElementRef-CCLzASj8.js";import"./index-Ck4Elmxo.js";import"./index-BH77Eq3n.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BfuUnZ7i.js";import"./Tooltip-S4uZ93WX.js";import"./index-CvgZCu6o.js";import"./useControlled-K6Jx4gPQ.js";import"./Popper-ecVHViea.js";import"./Button-BvTAjK4M.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Cb5gkxAY.js";import"./useQuery-BJj1G9eV.js";import"./QueryClientProvider-Bbpn0-hF.js";import"./Link-DM0BSm-m.js";import"./Collapse-DoZt5e3K.js";import"./_baseUniq-L5OIGEEM.js";import"./_Uint8Array-Df4m7FrZ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BbVyB0IY.js";import"./isArray-Dxzbedgu.js";import"./_getTag-D5Jjac57.js";import"./isEqual-BT6yduPW.js";import"./merge-DlL_cr-S.js";import"./_initCloneObject-BFap5Wc1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DOA4wU7Q.js";import"./inputBaseClasses-8zPkzvyT.js";import"./calculateFriendlyFileSize-CRHiAo3U.js";import"./CheckCircleTwoTone-BV_-JSye.js";import"./InfoTwoTone-BXCkprAO.js";import"./useMutation-CAq19jMS.js";import"./dayjs.min-DbJ-dTTl.js";import"./chunk-AYJ5UCUI-RSbZRrlj.js";import"./cloneDeep-BN2G2zqn.js";import"./Skeleton-C1DHCfUB.js";import"./SkeletonButton-DYbMj5oQ.js";import"./SkeletonInlineBlock-COyGYFdT.js";import"./SkeletonTable-CecQpd6e.js";import"./times-CYgpRYkx.js";import"./toInteger-mVD1faMQ.js";import"./isSymbol-DMpT0HON.js";import"./SkeletonParagraph-CUzDG6x_.js";import"./uniqueId-VLwhCRWM.js";import"./toString-CoE-efQr.js";import"./CSSTransition-DZDqahnQ.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DRzWEd1q.js";import"./Avatar-BPm-kLep.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
