import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-C-HEaS-i.js";import{d as s}from"./ToastMessage-CtQsgR7n.js";import{R as n,a as t}from"./RequirementItem-NuCMmKd_.js";import{P as O}from"./Paper-CqEiiRuS.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-CME91ToD.js";import"./SynapseConstants-CVbzDXsD.js";import"./OrientationBanner-XtSc0VzO.js";import"./index-Dh9lJkbv.js";import"./index-DaSlfKLF.js";import"./iframe-Dm8vgKnX.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAXrNgB9.js";import"./FullWidthAlert-w0gAjoe7.js";import"./Alert-D-FV5RBj.js";import"./createTheme-CkRYGQfv.js";import"./DefaultPropsProvider-mPFVMdGB.js";import"./useSlot-Ae7YRVHy.js";import"./useForkRef-BhBDeep6.js";import"./createSimplePaletteValueFilter-wbN65Nig.js";import"./createSvgIcon-Ch71LAIP.js";import"./Close-IrfRyJP-.js";import"./IconButton-Bf2A1uXg.js";import"./useTimeout-QXUecAin.js";import"./ButtonBase-mZPr37pC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BImVxgDT.js";import"./Stack-C4YvO7qs.js";import"./extendSxProp-CP7cc_Y-.js";import"./getThemeProps-DGBayQ_1.js";import"./useTheme-B-aviv3-.js";import"./Box-CurSA-NL.js";import"./AlertTitle-U8xGE2H7.js";import"./Typography-_YK6XuJ0.js";import"./index-DY-zIKMm.js";import"./useTheme-BA-blKiO.js";import"./ClickAwayListener-BW575h7f.js";import"./getReactElementRef-BBh2do7G.js";import"./index-Dg0dhTBH.js";import"./index-CHamsNV1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D940Xbuf.js";import"./Tooltip-Gix1FQC7.js";import"./index-rxRUtMJh.js";import"./useControlled-BSkLZwL5.js";import"./Popper-D4lQmrad.js";import"./Button-xJzgoxEY.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-C8WcoIkJ.js";import"./QueryClientProvider-CglEAz9z.js";import"./Link-BibH5K7W.js";import"./Collapse-DrHkSXPK.js";import"./_baseUniq-cl2EXb8u.js";import"./_Uint8Array-C2PDKUpn.js";import"./isArray-BsWxdpED.js";import"./_getTag-BlpsDHUb.js";import"./isEqual-Bb3pCitX.js";import"./merge-Cj_xTLin.js";import"./_initCloneObject-DrqXo0fx.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-9s1ooV9G.js";import"./inputBaseClasses-I3CUYI4n.js";import"./calculateFriendlyFileSize-VdcSZY2R.js";import"./CheckCircleTwoTone-DuKDEC1n.js";import"./InfoTwoTone-D4CDQoZZ.js";import"./useMutation-BreGQyqG.js";import"./dayjs.min-Dl_96zRx.js";import"./chunk-AYJ5UCUI-CvPnyUnx.js";import"./cloneDeep-NQIqYrAv.js";import"./Skeleton-CLh09zTi.js";import"./SkeletonButton-Brf8cgpW.js";import"./SkeletonInlineBlock-Dc6esGDZ.js";import"./SkeletonTable-CogyxUq4.js";import"./times-Lvs0WgpO.js";import"./toInteger-BJBXsgVN.js";import"./isSymbol-BT2yQ3zQ.js";import"./SkeletonParagraph-DYGkikNE.js";import"./uniqueId-CRM929iy.js";import"./toString-D00Dp1Bu.js";import"./CSSTransition-Cu2WjPKx.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-LG_WwV7H.js";import"./Avatar-BbBXiUEX.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
