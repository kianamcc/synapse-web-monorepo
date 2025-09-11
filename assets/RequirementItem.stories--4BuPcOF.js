import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-Ma7Oe5XE.js";import{M as x}from"./MarkdownSynapse-VCTMf1oB.js";import{d as s}from"./ToastMessage-BVpWsPTl.js";import{R as n,a as t}from"./RequirementItem-BKRydwsH.js";import{P as O}from"./Paper-BgoErbyD.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-t2fDWYxy.js";import"./VerificationSubmission-16RBrwfH.js";import"./useFiles-D9IjkbnM.js";import"./SynapseConstants-CimKnm-8.js";import"./OrientationBanner-CzU6KDpL.js";import"./index-CgsjeSPa.js";import"./index-6vxeCzL4.js";import"./iframe-CjifT74g.js";import"./spreadSx-CwcO6WA9.js";import"./react-DClyoqOD.js";import"./FullWidthAlert-TY94FRna.js";import"./Alert-BDTTfspR.js";import"./createTheme-Dy0-m8-A.js";import"./DefaultPropsProvider-DuHQt5tX.js";import"./useSlot-Bh66Acib.js";import"./useForkRef-D3GN_CBh.js";import"./createSimplePaletteValueFilter-BJFb3sY0.js";import"./createSvgIcon-Bp3iCONJ.js";import"./Close-DE9Xj8OJ.js";import"./IconButton-kCilc8aH.js";import"./useTimeout-DAnP99B3.js";import"./ButtonBase-CbRzwM7N.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-oIAkzJX4.js";import"./Stack-CD-9J5q_.js";import"./extendSxProp-DBncvLzO.js";import"./getThemeProps-DQzIp4hW.js";import"./useTheme-DYfQlcXU.js";import"./Box-4s3DQrSt.js";import"./AlertTitle-DjZT1bwn.js";import"./Typography-CHNd49HH.js";import"./index-BEFSRFSM.js";import"./useTheme-DxuATEnu.js";import"./ClickAwayListener-Dxjx-8zF.js";import"./getReactElementRef-BVECeuLd.js";import"./index-Calt9S7p.js";import"./index-CEnxySY1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-AKYW22Tv.js";import"./Tooltip-D4mylLgV.js";import"./index-D050dNpj.js";import"./useControlled-DS0tk13e.js";import"./Popper-Hnc_u6mX.js";import"./Button-BVPpZjkW.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-DxAfwxuj.js";import"./QueryClientProvider-BeU9GayN.js";import"./Link-DPGwCB9W.js";import"./Collapse-Quox-cv-.js";import"./_baseUniq-Bfrtub2j.js";import"./_Uint8Array-CesznVbr.js";import"./isArray-D5p7Gkib.js";import"./_getTag-Dw1mXAbx.js";import"./isEqual-BRYXIgAL.js";import"./merge-DussZOY2.js";import"./_initCloneObject-CwMaFeaY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BieE9Iqq.js";import"./inputBaseClasses-CWBiX7gU.js";import"./calculateFriendlyFileSize-DCRKp9Ar.js";import"./CheckCircleTwoTone-BCUKw-TQ.js";import"./InfoTwoTone-BDufQF4P.js";import"./useMutation-CW7KVecC.js";import"./dayjs.min-Bq9OIHwb.js";import"./chunk-AYJ5UCUI-DuqvUR3-.js";import"./cloneDeep-tK7GVlr1.js";import"./Skeleton-BIk9JEA-.js";import"./SkeletonButton-C8-3HW5_.js";import"./SkeletonInlineBlock-DLu8p9lp.js";import"./SkeletonTable-BHgP5xM2.js";import"./times-BIKSUyh8.js";import"./toInteger-CDPya1oj.js";import"./isSymbol-Bx6tt6xH.js";import"./SkeletonParagraph-BZA5Vk9S.js";import"./uniqueId-a90_NqWn.js";import"./toString-DAJxseuJ.js";import"./CSSTransition-BfZNDZTk.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-C1U-sH6p.js";import"./Avatar-glv4pEaj.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
