import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-BFijmDOD.js";import{d as s}from"./ToastMessage-D3IbHJqt.js";import{R as n,a as t}from"./RequirementItem-BE28grgS.js";import{P as O}from"./Paper-OFH_KjEE.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-CtjU0UZ7.js";import"./SynapseConstants-HbkKhgzl.js";import"./OrientationBanner-CshYfrww.js";import"./index-01OgG1qB.js";import"./index-DTK8yXiD.js";import"./iframe-CvYaoHVj.js";import"./spreadSx-CwcO6WA9.js";import"./react-DH66hlil.js";import"./FullWidthAlert-ZQjOoxm3.js";import"./Alert-BYp2EJZI.js";import"./createTheme-aM5VLUiz.js";import"./DefaultPropsProvider-CmhSSicv.js";import"./useSlot-C8BVnOP5.js";import"./useForkRef-B8MjIxnS.js";import"./createSimplePaletteValueFilter-Com0BGVT.js";import"./createSvgIcon-DkqjO5wZ.js";import"./Close-CELpiYcp.js";import"./IconButton-CC_uewQy.js";import"./useTimeout-BkRL3IIv.js";import"./ButtonBase-UL8vgMVX.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BVH9aY3T.js";import"./Stack-Cci7O7ML.js";import"./extendSxProp-lZk6lgIG.js";import"./getThemeProps-BgL4ceoy.js";import"./useTheme-U-RwML_u.js";import"./Box-DcMM8zLt.js";import"./AlertTitle-BY19Ps-v.js";import"./Typography-D1NZrSF7.js";import"./index-8SIWIhuK.js";import"./useTheme-Dqm1pUhK.js";import"./ClickAwayListener-D1X95kKj.js";import"./getReactElementRef-DTlu16VU.js";import"./index-4R7E1JGW.js";import"./index-Bx6bc031.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CbpX2AED.js";import"./Tooltip-Dj8QUNkD.js";import"./index-B76dTo4r.js";import"./useControlled-B5ZzhVG3.js";import"./Popper-CAW1LZuT.js";import"./Button-CB4uDwHM.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-ZU2je9FH.js";import"./QueryClientProvider-DMzdf9tA.js";import"./Link-BwFUk3Oj.js";import"./Collapse-CkCee2Jw.js";import"./_baseUniq-0u_Y41qn.js";import"./_Uint8Array-CuoJTB6Q.js";import"./isArray-DY9Ezigh.js";import"./_getTag-CBA9pD0g.js";import"./isEqual-DdqtLaCO.js";import"./merge-DxffwPAM.js";import"./_initCloneObject-BFyHq_Yd.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-eve2HPw4.js";import"./inputBaseClasses-BFPy7elr.js";import"./calculateFriendlyFileSize-DuMKA-3z.js";import"./CheckCircleTwoTone-BJe0-l4L.js";import"./InfoTwoTone-o1Sk_S6o.js";import"./useMutation-DmalvCqZ.js";import"./dayjs.min-DZEyTAO2.js";import"./chunk-AYJ5UCUI-B3tBNz5t.js";import"./cloneDeep-DeYm0Lvx.js";import"./Skeleton-BUCObm11.js";import"./SkeletonButton-YavyCMvP.js";import"./SkeletonInlineBlock-CyFZwYx0.js";import"./SkeletonTable-DmAxbCWC.js";import"./times-C7T2VGyP.js";import"./toInteger-DTa-VsHm.js";import"./isSymbol-eZOMjrah.js";import"./SkeletonParagraph-Ck43b8yt.js";import"./uniqueId-BZ5RZphg.js";import"./toString-NK8fdXkc.js";import"./CSSTransition-KnxJY5Kg.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CCHaOMM6.js";import"./Avatar-DL9fiwix.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
