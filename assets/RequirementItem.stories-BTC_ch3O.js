import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-mf6gUgjT.js";import{d as s}from"./ToastMessage-DrJzPgF_.js";import{R as n,a as t}from"./RequirementItem-B3aFuKjz.js";import{P as O}from"./Paper-Bv7lETL1.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DHh7ohVA.js";import"./SynapseConstants-h_7EWzLA.js";import"./OrientationBanner-Dx-xLkkA.js";import"./index-COEABuGo.js";import"./index-CqkHQv7x.js";import"./iframe-BgwGFO8A.js";import"./spreadSx-CwcO6WA9.js";import"./react-DxvTb9cq.js";import"./FullWidthAlert-PvUSTn7z.js";import"./Alert-BaA8or5r.js";import"./createTheme-DvYKiu1i.js";import"./DefaultPropsProvider-7vp5Xg1U.js";import"./useSlot-DEhbeWXQ.js";import"./useForkRef-DcEMbDda.js";import"./createSimplePaletteValueFilter-DaZ5Yv0h.js";import"./createSvgIcon-xRD0VMrj.js";import"./Close-D2Pcfetn.js";import"./IconButton-C4TIHZyt.js";import"./useTimeout-uliFliSc.js";import"./ButtonBase-e0UzDey_.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B8_AL_Fq.js";import"./Stack-BqfwOgfF.js";import"./useThemeProps-Cf4wgzpW.js";import"./getThemeProps-sRjEXcdv.js";import"./useTheme-zcMKTfSN.js";import"./extendSxProp-DtYjKP0k.js";import"./Box-CzGTAvbF.js";import"./AlertTitle-DAlWK_02.js";import"./Typography-fLt1zesl.js";import"./index-xaCPz-JY.js";import"./useTheme-DcxGxVMb.js";import"./ClickAwayListener-DnQUb8HH.js";import"./getReactElementRef-C8AieGDO.js";import"./index-BfHw4MxA.js";import"./index-CdBb3X1w.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ZrcNPb6n.js";import"./Tooltip-DFYygHVR.js";import"./index-DbzZg3-5.js";import"./useControlled-CFGJwztc.js";import"./Popper-yYY1hnWk.js";import"./Button-DazhXTx4.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DlzHH4w5.js";import"./QueryClientProvider-EftEu6F7.js";import"./Link-Bx8Jvr9M.js";import"./Collapse-BZlk0Ykt.js";import"./_baseUniq-DSJGB-01.js";import"./_Uint8Array-V8Hqk8-a.js";import"./isArray-B_6GUJS7.js";import"./_getTag-BDrzMSis.js";import"./isEqual-ChV2ouiR.js";import"./noop-DX6rZLP_.js";import"./merge-C3l7-ucn.js";import"./_initCloneObject-Cqqx2oxm.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-bYr3BlVk.js";import"./inputBaseClasses-DfP0rQ3S.js";import"./calculateFriendlyFileSize-Cm4JOWCO.js";import"./CheckCircleTwoTone-DY5SAgNm.js";import"./InfoTwoTone-EeJ79Gmj.js";import"./useMutation-BtbqWamg.js";import"./dayjs.min-qBh4lvqk.js";import"./chunk-AYJ5UCUI-UY3Jsjzw.js";import"./cloneDeep-D4nP9Fhn.js";import"./Skeleton-Byv5D2DM.js";import"./SkeletonButton-DmVfh2mY.js";import"./SkeletonInlineBlock-Cd8tQ4Lt.js";import"./SkeletonTable-clDBaOot.js";import"./times-CfuNxlyO.js";import"./toInteger-y2gjWSYT.js";import"./isSymbol-BZj08at1.js";import"./SkeletonParagraph-JPAW0e52.js";import"./uniqueId-kuP1692N.js";import"./toString-5BS_zcgi.js";import"./CSSTransition-Bm8uTb_c.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CYuS0xjn.js";import"./Avatar-CEieuqil.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
