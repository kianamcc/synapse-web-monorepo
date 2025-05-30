import{j as a}from"./jsx-runtime-mncHC85H.js";import{m as P}from"./mockWiki-CgjxDh2Q.js";import{M as x}from"./MarkdownSynapse-zRiVY5Cq.js";import{d as s}from"./ToastMessage-BKhSmJkq.js";import{R as n,a as t}from"./RequirementItem-LGaEU3bz.js";import{P as O}from"./Paper-C5HeejQc.js";import"./index-CsTX3kP9.js";import"./iframe-DLSVzvXo.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-CFTRkxcS.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-DqScRbt4.js";import"./SynapseConstants-D08trsQl.js";import"./OrientationBanner-CPs8NG4k.js";import"./index-BWDtDZnU.js";import"./spreadSx-CwcO6WA9.js";import"./react-C7TYIDWj.js";import"./FullWidthAlert-DYV97sSa.js";import"./Alert-B2_TAMcq.js";import"./createTheme-8oXdyOSc.js";import"./resolveComponentProps-BDiE_oRR.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-MEzgZgYk.js";import"./createSvgIcon-CeFLfWhD.js";import"./DefaultPropsProvider-ieyM3ydX.js";import"./Close-kFL90S5e.js";import"./IconButton-BM4Jn5am.js";import"./ButtonBase-ByiL9H0e.js";import"./useTimeout-BtJRCvqS.js";import"./TransitionGroupContext-C1ALFrRo.js";import"./useIsFocusVisible-9CtOeZhj.js";import"./useEventCallback-CdglzKk7.js";import"./Stack-D6CPYZyT.js";import"./getThemeProps-BJDZbo09.js";import"./useTheme-B2D66EuQ.js";import"./Box-Bl_FCMA-.js";import"./AlertTitle-CgJ0X8Ke.js";import"./Typography-CEXejR91.js";import"./useTheme-ppVJRK4K.js";import"./Grow-CnvDqgCY.js";import"./index-BEdEs92y.js";import"./utils-rI1xhfgE.js";import"./ClickAwayListener-PLDICXE-.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BmrzSuCJ.js";import"./index-DBN6CKfD.js";import"./useControlled-LQMryYpP.js";import"./useId-DB4ytVRQ.js";import"./Popper-DP4Hazya.js";import"./Button-e17qQd72.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-BSxb1W-L.js";import"./utils-DGnta-Dt.js";import"./Link-nyIHYmpZ.js";import"./Collapse-Dh060KKb.js";import"./isNil-DJjzYbv0.js";import"./_Uint8Array-CQNSJw1K.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CEcF5soC.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DzelOY-I.js";import"./_getTag-Cu4vVg67.js";import"./tinycolor-Begke6kS.js";import"./Fade-0dVaFb0e.js";import"./Skeleton-DQA5MqtH.js";import"./inputBaseClasses-DhdwnRrM.js";import"./calculateFriendlyFileSize-O7lp0Tvc.js";import"./CheckCircleTwoTone-czsrdd7S.js";import"./InfoTwoTone-TgkinIc6.js";import"./mutation-gLD3au5E.js";import"./dayjs.min-Xq55AiAZ.js";import"./chunk-AYJ5UCUI-DSl5zc7X.js";import"./cloneDeep-DZIutRQE.js";import"./_initCloneObject-5GhKEBQ1.js";import"./isEqual-CkUvDbsf.js";import"./merge-CWQX_ITa.js";import"./identity-DKeuBCMA.js";import"./useMutation-Bs4MQWD8.js";import"./SkeletonButton-CeFjb05B.js";import"./SkeletonInlineBlock-Bvtz7ozV.js";import"./SkeletonTable-CwfIIIRx.js";import"./times-Dc0h0Ng9.js";import"./toInteger-DrRjFvYa.js";import"./isSymbol-BIDbKf_X.js";import"./SkeletonParagraph-mdtGW4O1.js";import"./uniqueId-m4Te-jrO.js";import"./toString-DTYmW4HR.js";import"./CSSTransition-BYuABJ_5.js";import"./ConditionalWrapper-CqX9cVfZ.js";import"./LockTwoTone-BhhfGE6y.js";import"./Avatar-zhAVL-_7.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const lr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,lr as __namedExportsOrder,ur as default};
