import{j as a}from"./jsx-runtime-CS37V5lN.js";import{m as P}from"./mockWiki-BApATWET.js";import{M as x}from"./MarkdownSynapse-B7rircD-.js";import{d as s}from"./ToastMessage-FhGDeg__.js";import{R as n,a as t}from"./RequirementItem-Dbk49m96.js";import{P as O}from"./Paper-BfwhD1b8.js";import"./index-DdzRxeSk.js";import"./iframe-BOZSKX5l.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CnMBfpEV.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./useFiles-nCEVGU3J.js";import"./SynapseConstants-DbAN7IPq.js";import"./OrientationBanner-BGIXc6-x.js";import"./index-BlpDHKi_.js";import"./spreadSx-CwcO6WA9.js";import"./react-3-f0XNzf.js";import"./FullWidthAlert-B3fYGMzC.js";import"./Alert-BuinrxqA.js";import"./createTheme-CR9THI1O.js";import"./resolveComponentProps-fseXx763.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CtSJcFnl.js";import"./createSvgIcon-Cy3M0oRn.js";import"./DefaultPropsProvider-ChG9Xmy4.js";import"./Close-B9pOG7I_.js";import"./IconButton-Ba5y5_K0.js";import"./ButtonBase-DcwIhz1L.js";import"./useTimeout-cXhUpJPS.js";import"./TransitionGroupContext-BI1G8zvG.js";import"./useIsFocusVisible-CEj16bKV.js";import"./useEventCallback-DbhNrUuN.js";import"./Stack-D4qOJMCx.js";import"./getThemeProps-DroptayW.js";import"./useTheme-DkNM2JnN.js";import"./Box-BYDiuRWq.js";import"./AlertTitle-9xKonIV6.js";import"./Typography-B0ESBYIA.js";import"./useTheme-B6Rf6ZZj.js";import"./Grow-BJ--7Xr6.js";import"./index-Cy4mvxM5.js";import"./index-Cygla1YP.js";import"./utils-BPYN7cSU.js";import"./ClickAwayListener-B7k27fd4.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CEz73Juq.js";import"./index-B0u4QlSt.js";import"./useControlled-f1W5YVsK.js";import"./useId-RCcAWbNZ.js";import"./Popper-DyWIoeAe.js";import"./Button-DTd4ve-o.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-NR50Arvx.js";import"./utils-CR7CrQFQ.js";import"./Link-B7xkTvBp.js";import"./Collapse-BT_qVaSh.js";import"./isNil-BHGvz6YE.js";import"./_Uint8Array-DzUf22Yk.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-SlbhEa29.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DDp_qU6j.js";import"./_getTag-_uZbXcVO.js";import"./tinycolor-Begke6kS.js";import"./Fade-BXSnEVoc.js";import"./Skeleton-BOisPi-e.js";import"./inputBaseClasses-BORHXMtI.js";import"./calculateFriendlyFileSize-BpxDealy.js";import"./CheckCircleTwoTone-ERl8wijJ.js";import"./InfoTwoTone-DdRKTxQh.js";import"./useMutation-BHf6hDSW.js";import"./isEqual-Lg1cd88a.js";import"./dayjs.min-CZjcVCTg.js";import"./chunk-AYJ5UCUI-DwIU-kyH.js";import"./cloneDeep-DF3ifZuQ.js";import"./_initCloneObject-BgugVHgc.js";import"./merge-Dxt2MiEc.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-HP7IcodG.js";import"./SkeletonInlineBlock-IsBwGkOR.js";import"./SkeletonTable-IWyHhxa5.js";import"./times-DhAFfmz7.js";import"./toInteger-8RRDg2YC.js";import"./isSymbol-es0jFvoX.js";import"./SkeletonParagraph-BJs_0DDE.js";import"./uniqueId-CPadauD1.js";import"./toString-7m5-eMDa.js";import"./CSSTransition-rwgi3Zys.js";import"./ConditionalWrapper-CXK51Onq.js";import"./LockTwoTone-CgYjmvM1.js";import"./Avatar-Dq4_w-bN.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
