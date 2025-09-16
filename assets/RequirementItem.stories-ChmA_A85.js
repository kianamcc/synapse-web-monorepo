import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-bg68uR0c.js";import{d as s}from"./ToastMessage-BiFh4ViF.js";import{R as n,a as t}from"./RequirementItem-DJCRrsb3.js";import{P as O}from"./Paper-BOOJzAP_.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BOdJ4aAD.js";import"./SynapseConstants-JfPkMcg0.js";import"./OrientationBanner-CouH68_J.js";import"./index-BcZOnU6T.js";import"./index-BK6cjXBZ.js";import"./iframe-BnNg7yJB.js";import"./spreadSx-CwcO6WA9.js";import"./react-B6KPdu5T.js";import"./FullWidthAlert-CP1QTJXS.js";import"./Alert-B7JKdAU4.js";import"./createTheme-DdCDgYei.js";import"./DefaultPropsProvider-TIkVZDCj.js";import"./useSlot-BDueLrxA.js";import"./useForkRef-CYVt1D8Q.js";import"./createSimplePaletteValueFilter-gOntg_V8.js";import"./createSvgIcon-BdtPq1Tw.js";import"./Close-CbTjf3zS.js";import"./IconButton-BHcrqX1G.js";import"./useTimeout-D6cH1pf-.js";import"./ButtonBase-BwM1D_G8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B-WmS9d9.js";import"./Stack-CfEr4J4E.js";import"./extendSxProp-C1uB2K5e.js";import"./getThemeProps-Br_57JSj.js";import"./useTheme-UGDwZqNk.js";import"./Box-ChHhuOMP.js";import"./AlertTitle-CLr5v-qU.js";import"./Typography-FRQIFPS_.js";import"./index-75JHCm82.js";import"./useTheme-DqFLheya.js";import"./ClickAwayListener-B3OwTDLO.js";import"./getReactElementRef-T0dppYio.js";import"./index-BtJ10Ccv.js";import"./index-BCqjZQ9Q.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Baht38yj.js";import"./Tooltip-KZeFSyMF.js";import"./index-DoAu-rxh.js";import"./useControlled-BgFNFYLB.js";import"./Popper-BCpq0bpJ.js";import"./Button-CGtpPk7o.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CE3P3pkB.js";import"./QueryClientProvider-tLXh-4q3.js";import"./Link-CBjYA8yP.js";import"./Collapse-DsMcEJji.js";import"./_baseUniq-BVagotzB.js";import"./_Uint8Array-DdnP8-f5.js";import"./isArray-DK_LmvOp.js";import"./_getTag-B7gw1DJ9.js";import"./isEqual-DknNpZAe.js";import"./merge-DRt0v3QZ.js";import"./_initCloneObject-B1aKMoJ4.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DxY0BkxR.js";import"./inputBaseClasses-BH_Uaz0L.js";import"./calculateFriendlyFileSize-BVV4z-OV.js";import"./CheckCircleTwoTone-B_JgC-4w.js";import"./InfoTwoTone-B41A2Lg3.js";import"./useMutation-CRT9uZDv.js";import"./dayjs.min-BsaYAIeB.js";import"./chunk-AYJ5UCUI-CSb7mSbs.js";import"./cloneDeep-C5a2C-Tz.js";import"./Skeleton-Dp3uQSvj.js";import"./SkeletonButton-Bg0usTi6.js";import"./SkeletonInlineBlock-ARtMbZhT.js";import"./SkeletonTable-JtMcYXf2.js";import"./times-BV-dSR2s.js";import"./toInteger-C65bF937.js";import"./isSymbol-BGAVTM_8.js";import"./SkeletonParagraph-DVVDbLgl.js";import"./uniqueId-DVHVce_n.js";import"./toString-pM__c-Jx.js";import"./CSSTransition-Cf4Bwzcd.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-D43zYzGg.js";import"./Avatar-DFjcVEZ2.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
