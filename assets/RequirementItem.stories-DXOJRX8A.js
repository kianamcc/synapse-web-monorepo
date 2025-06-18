import{j as a}from"./jsx-runtime-5V4FT3Kv.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-n9kVII07.js";import{d as s}from"./ToastMessage-BOAG-hWq.js";import{R as n,a as t}from"./RequirementItem-4laie3YB.js";import{P as O}from"./Paper-D_zxpmzK.js";import"./index-BsDJGuG7.js";import"./iframe-BhfxnZs8.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-Cr7TbnGq.js";import"./SynapseConstants-MkQ_c7mA.js";import"./OrientationBanner-DqBfPRcF.js";import"./index-BhSudjU7.js";import"./spreadSx-CwcO6WA9.js";import"./react-NPMrUV4h.js";import"./FullWidthAlert-Bz7csA4g.js";import"./Alert-Bl_1vjyA.js";import"./createTheme-Bx_6hso5.js";import"./DefaultPropsProvider-DXLQE8lZ.js";import"./useSlot-DMlCntah.js";import"./useForkRef-BXWNwB78.js";import"./createSimplePaletteValueFilter-BCRasMuj.js";import"./createSvgIcon-CPu07qPr.js";import"./Close-BdcIYPzN.js";import"./IconButton-D1whgVvs.js";import"./useTimeout-CKAPd5h7.js";import"./ButtonBase-BMHnZ5Xj.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BWcICyRh.js";import"./Stack-CpjT1kSx.js";import"./extendSxProp-DayZZBSa.js";import"./getThemeProps-BJ2M0tqL.js";import"./useTheme-Chj9yEMG.js";import"./Box-DXz1EWn6.js";import"./AlertTitle-BBXbAgXa.js";import"./Typography-B2qjncXA.js";import"./index-BK5Ern9U.js";import"./useTheme-D_f1sKc-.js";import"./ClickAwayListener-B5sfNDkG.js";import"./getReactElementRef-Quyt_ej6.js";import"./index-vxSVzDii.js";import"./index-D_MZvsil.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bdc_wmCE.js";import"./Tooltip-W2aXJr8G.js";import"./index-CQfBwZoQ.js";import"./useControlled-DHqSgfGl.js";import"./Popper-Ha1u7XjY.js";import"./Button-CAMJXbHu.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-DPOme0OC.js";import"./utils-BzjeDrhH.js";import"./Link-B_dsnc4U.js";import"./Collapse-vG9666Kr.js";import"./isNil-Dwsczsb_.js";import"./_Uint8Array-DMPQXeqV.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-fhzVqEI1.js";import"./isArray-Dxzbedgu.js";import"./isEqual-BGpIrJtQ.js";import"./_getTag-Dqa4k8TS.js";import"./tinycolor-Begke6kS.js";import"./Fade-Q-eCOSTL.js";import"./inputBaseClasses-CiW1ZL1N.js";import"./calculateFriendlyFileSize-CH09N0mc.js";import"./CheckCircleTwoTone-CwWsjzjm.js";import"./InfoTwoTone-KVhSQovP.js";import"./useMutation-CsR2E802.js";import"./dayjs.min-d4WqHm_h.js";import"./chunk-AYJ5UCUI-CD_JlbPy.js";import"./cloneDeep-6SgeCJbP.js";import"./_initCloneObject-efs9WPJ4.js";import"./Skeleton-B-8yqoZc.js";import"./merge-DC1AzhSP.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CIV98S8t.js";import"./SkeletonInlineBlock-6uHhhnb_.js";import"./SkeletonTable-BeH00_-q.js";import"./times-DkO83xVh.js";import"./toInteger-CSdO2f4F.js";import"./isSymbol-DDMzmkbb.js";import"./SkeletonParagraph-Dm--M4jC.js";import"./uniqueId-Dn1F_DHX.js";import"./toString-BP3dPfEJ.js";import"./CSSTransition-vstsgV1e.js";import"./ConditionalWrapper-Wqo9Kc5X.js";import"./LockTwoTone-DehinQW0.js";import"./Avatar-Dg6TMtzS.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
