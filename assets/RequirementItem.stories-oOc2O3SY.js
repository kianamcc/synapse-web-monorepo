import{j as a}from"./jsx-runtime-DCJQF7Yu.js";import{m as P}from"./mockWiki-DHj13qiO.js";import{M as x}from"./MarkdownSynapse-DLv4EUkJ.js";import{d as s}from"./ToastMessage-UkoZN6vv.js";import{R as n,a as t}from"./RequirementItem-DtL1Dx39.js";import{P as O}from"./Paper-DxoJKm8a.js";import"./index-D7QECZ8_.js";import"./iframe-CuhiliFp.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-DS_yjaGE.js";import"./VerificationSubmission-DsgC4t7y.js";import"./useFiles-BOqix5tm.js";import"./SynapseConstants-CdFknnGS.js";import"./OrientationBanner-CC-lZdxv.js";import"./index-D2Bvq6Nc.js";import"./spreadSx-CwcO6WA9.js";import"./react-BJjff2Hm.js";import"./FullWidthAlert-Bj3lD5jg.js";import"./Alert-BsdT6A5s.js";import"./createTheme-CuV6lKby.js";import"./resolveComponentProps-DWeRc3dZ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DvumXbvd.js";import"./createSvgIcon-B4UMNYvL.js";import"./DefaultPropsProvider-45DiC2R-.js";import"./Close-BXsOQpdh.js";import"./IconButton-Ctyxkzex.js";import"./ButtonBase-BWYPhWny.js";import"./useTimeout-JjV9Y7kR.js";import"./TransitionGroupContext-B5JkxjR-.js";import"./useIsFocusVisible-DI4OcUBX.js";import"./useEventCallback-hxJDok40.js";import"./Stack-B0cdQae2.js";import"./getThemeProps-BSmwECat.js";import"./useTheme-Dt6xohqk.js";import"./Box-CUPEk2R8.js";import"./AlertTitle-Du67j12O.js";import"./Typography-CgQwt_4v.js";import"./useTheme-yUrwrjvB.js";import"./Grow-BeOr-5JA.js";import"./index-DSi42yUw.js";import"./utils-DeDVuNU5.js";import"./ClickAwayListener-BC8tckZ8.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DVh9M4NB.js";import"./index-vTdvcokP.js";import"./useControlled-Ct4_TlDh.js";import"./useId-vdcc40Zz.js";import"./Popper-kEzLQScP.js";import"./Button-C36btVIf.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-nV6OcPaD.js";import"./utils-Cttwrnae.js";import"./Link-ZjbhCfZ0.js";import"./Collapse-BLIS97ot.js";import"./isNil-Dnq5PGVr.js";import"./_Uint8Array-DOpCseV4.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CFFu1MVA.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-B2Du7X7-.js";import"./_getTag-DRr85OGv.js";import"./tinycolor-Begke6kS.js";import"./Fade-CnF8Do1c.js";import"./Skeleton-B5ZmudJe.js";import"./inputBaseClasses-CGTgXlAI.js";import"./calculateFriendlyFileSize-DHuViXKC.js";import"./CheckCircleTwoTone-Cc67pUZK.js";import"./InfoTwoTone-CzFGxlsS.js";import"./mutation-Dx45ojvb.js";import"./dayjs.min-DxbNjoSh.js";import"./chunk-AYJ5UCUI-Npvsl4CZ.js";import"./cloneDeep-B0BmWEKv.js";import"./_initCloneObject-C8LZoPvu.js";import"./isEqual-BkipORyh.js";import"./merge-vnkNN72-.js";import"./identity-DKeuBCMA.js";import"./useMutation-BKYrpj2n.js";import"./SkeletonButton-Bthyy-8R.js";import"./SkeletonInlineBlock-BZ5XcDfP.js";import"./SkeletonTable-DRVuL5cH.js";import"./times-DV7shsLU.js";import"./toInteger-Bj7fSiiS.js";import"./isSymbol-BVVirvqx.js";import"./SkeletonParagraph-DkpfGm0A.js";import"./uniqueId-jcrIHZtG.js";import"./toString-CC6ZqTfl.js";import"./CSSTransition-BauqyMWP.js";import"./ConditionalWrapper-E8BUJSW8.js";import"./LockTwoTone-CN22-fRz.js";import"./Avatar-DTXmUXyG.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
