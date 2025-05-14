import{j as a}from"./jsx-runtime-D39jwkIv.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-BkdPcUDO.js";import{d as s}from"./ToastMessage-bGxUNgmy.js";import{R as n,a as t}from"./RequirementItem-C1nlLhuK.js";import{P as O}from"./Paper-Bxx_Whxx.js";import"./index-BVDw5WRY.js";import"./iframe-CLB8zn3r.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-B4K0HM1Q.js";import"./SynapseConstants-Cy6AFt5n.js";import"./OrientationBanner-CL-ftGHP.js";import"./index-Bh97n3M_.js";import"./spreadSx-CwcO6WA9.js";import"./react-IwA7Zo0w.js";import"./FullWidthAlert-DX8boHuP.js";import"./Alert-x-J5_beW.js";import"./createTheme-DMsj8ftm.js";import"./resolveComponentProps-ByJQNuwe.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DzNT1O1i.js";import"./createSvgIcon-B3AKd2cd.js";import"./DefaultPropsProvider-D-nVBZLz.js";import"./Close-DFowflBo.js";import"./IconButton-C0tYfXRh.js";import"./ButtonBase-DJAMH7Md.js";import"./useTimeout-BUaaVD43.js";import"./TransitionGroupContext-DVa8RRVS.js";import"./useIsFocusVisible-Brdx5a5c.js";import"./useEventCallback-DlaNXhB0.js";import"./Stack-DpwqU_wj.js";import"./getThemeProps-PSvmS7hA.js";import"./useTheme-Bec-LrS3.js";import"./Box-DMWa71Ws.js";import"./AlertTitle-CAlQiVdT.js";import"./Typography-DSGH8yyG.js";import"./useTheme-X4n7DT2y.js";import"./Grow-D_e84Gg4.js";import"./index-De4_hU5_.js";import"./utils-B5tg3FTA.js";import"./ClickAwayListener-D0xy-Edw.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DkhFPqXc.js";import"./index-rLgDW05n.js";import"./useControlled-BN-u63ln.js";import"./useId-me0PSUGK.js";import"./Popper-73XFw0vX.js";import"./Button-7yTQbH-Q.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-_9xZu4Of.js";import"./utils-CWEzw51o.js";import"./Link-DD0QZad6.js";import"./Collapse-DsAPfyZ4.js";import"./isNil-Cg0XEkkB.js";import"./_Uint8Array-DF57BDa6.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DY5ARhM3.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-C4lIKSWB.js";import"./_getTag-DqP87pun.js";import"./tinycolor-Begke6kS.js";import"./Fade-CjfO6n7T.js";import"./Skeleton-BrPdZBdA.js";import"./inputBaseClasses-CyKUb8GN.js";import"./calculateFriendlyFileSize-BmwiOem5.js";import"./CheckCircleTwoTone-CMCBIRlc.js";import"./InfoTwoTone-D0C9zRKP.js";import"./mutation-BEBlT8KE.js";import"./dayjs.min-BQMLYqDn.js";import"./chunk-AYJ5UCUI-DMZK6AaU.js";import"./cloneDeep-DRve-2g3.js";import"./_initCloneObject-BZ5RhWFx.js";import"./isEqual-vdG8nD8x.js";import"./merge-Dm6LhwjU.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-D0Bf3B75.js";import"./SkeletonInlineBlock-CLtSEpTn.js";import"./SkeletonTable-1Y7mwPv1.js";import"./times-3-y929mQ.js";import"./toInteger-Bk5ShhwE.js";import"./isSymbol-KIvlyPfn.js";import"./SkeletonParagraph-Dbp_Kudu.js";import"./uniqueId-CCCNLdRY.js";import"./toString-Cnma8B0E.js";import"./CSSTransition-Cj_dy1O6.js";import"./ConditionalWrapper-DnsWajxw.js";import"./LockTwoTone-B0akIEqg.js";import"./Avatar-BN23rl6w.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
