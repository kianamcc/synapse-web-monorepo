import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BCRx685q.js";import{d as s}from"./ToastMessage-Pt9ElIaC.js";import{R as n,a as t}from"./RequirementItem-zmPkRrm9.js";import{P as O}from"./Paper-D8dnleYW.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-6UDrmTYG.js";import"./SynapseConstants-hypBLRKL.js";import"./OrientationBanner-D-Ad_KzJ.js";import"./index-DO9i5fSP.js";import"./index-0Exjkr72.js";import"./iframe-DaXup4WN.js";import"./spreadSx-CwcO6WA9.js";import"./react-CP4ZqcKH.js";import"./FullWidthAlert-tLGyCqCx.js";import"./Alert-CoPbwJdQ.js";import"./createTheme-0xQbh0hV.js";import"./DefaultPropsProvider-Bvki0pxK.js";import"./useSlot-Dq0xnqmg.js";import"./useForkRef-vAoaxSvE.js";import"./createSimplePaletteValueFilter-Dn2ZSDDm.js";import"./createSvgIcon-D_tiKqbD.js";import"./Close-Cpm6LQZy.js";import"./IconButton-DjNjSMkw.js";import"./useTimeout-DxKu314J.js";import"./ButtonBase-CxDf0Iya.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BrXv9hhK.js";import"./Stack-DRTbJTt6.js";import"./useThemeProps-C1t7O8fM.js";import"./getThemeProps-CRJRiPRc.js";import"./useTheme-CtlMRJLD.js";import"./extendSxProp-DKGbTOnE.js";import"./Box-CFRP72jt.js";import"./AlertTitle-Cez2UsjB.js";import"./Typography-CCOQQgSX.js";import"./index-CbCbsN5e.js";import"./useTheme-D8-A-0a-.js";import"./ClickAwayListener-DWpjaqTE.js";import"./getReactElementRef-CCy5tafl.js";import"./index-CQx7vtrI.js";import"./index-Bo63NWas.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-a2S7IfBI.js";import"./Tooltip-BNN4uyZR.js";import"./index-DGgpv3HQ.js";import"./useControlled-DViJgbiZ.js";import"./Popper-EPaPs2kP.js";import"./Button-iINO5mWw.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-lQ2tabsY.js";import"./QueryClientProvider-BqxA2MMk.js";import"./Link-BZBSuM24.js";import"./Collapse-BuJTwuq3.js";import"./_baseUniq-D2qgl31R.js";import"./_Uint8Array-Bup5ZD9h.js";import"./isArray-PqDzEjBo.js";import"./_getTag-DAcmkE1f.js";import"./isEqual-DTMJ7tsS.js";import"./noop-DX6rZLP_.js";import"./merge-eG4gq0oP.js";import"./_initCloneObject-w3_8_Tro.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BoYFynpn.js";import"./inputBaseClasses-Cp73c6Jl.js";import"./calculateFriendlyFileSize-dtY2LNqn.js";import"./CheckCircleTwoTone-CBnB5HgO.js";import"./InfoTwoTone-C0kEYjXG.js";import"./useMutation-DhZrwB6t.js";import"./dayjs.min-AYuUP0Eh.js";import"./chunk-AYJ5UCUI-CCUScnZb.js";import"./cloneDeep-C09cW0zA.js";import"./Skeleton-mTacaXMJ.js";import"./SkeletonButton-DwX0p5i7.js";import"./SkeletonInlineBlock-BES5B5FB.js";import"./SkeletonTable-CT3hQViZ.js";import"./times-CyQws5oo.js";import"./toInteger-DUAzEtRR.js";import"./isSymbol-Dk6RgkrU.js";import"./SkeletonParagraph-fFi7wt0S.js";import"./uniqueId-Cz-Rang1.js";import"./toString-BmMu2Lx8.js";import"./CSSTransition-TR96cEkQ.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DCpZjMlJ.js";import"./Avatar-CrDmnjdb.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
