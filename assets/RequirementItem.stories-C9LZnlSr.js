import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUU_PTHo.js";import{M as x}from"./MarkdownSynapse-CG0XK3VK.js";import{d as s}from"./ToastMessage-BJTFdXsz.js";import{R as n,a as t}from"./RequirementItem-DoLwfBf4.js";import{P as O}from"./Paper-uUXWZxxA.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-Dl3vPZhE.js";import"./VerificationSubmission-CNoSrCdk.js";import"./useFiles-4YAxzx0q.js";import"./SynapseConstants-BurzPALN.js";import"./OrientationBanner-DP3WWY3f.js";import"./index-LjJS82Ec.js";import"./index-DFKD-tlO.js";import"./iframe-DPDZl7CU.js";import"./spreadSx-CwcO6WA9.js";import"./react-D1yoBqs4.js";import"./FullWidthAlert-BUJuSc-c.js";import"./Alert-DQ-m75Fo.js";import"./createTheme-DlnlCWs-.js";import"./DefaultPropsProvider-CPkErIBX.js";import"./useSlot-CuvyTh6A.js";import"./useForkRef-BgCIv5Am.js";import"./createSimplePaletteValueFilter-DIhWIqwL.js";import"./createSvgIcon-B4uCatTZ.js";import"./Close-CmzkMwAl.js";import"./IconButton-CKec_Uyq.js";import"./useTimeout-sYeuExjN.js";import"./ButtonBase-Dmd9LT3R.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DGpCod9i.js";import"./Stack-BtAiw5Y0.js";import"./extendSxProp-Cwsr4q6G.js";import"./getThemeProps-B95fEd_g.js";import"./useTheme-DvZKIZv1.js";import"./Box-_4wb5t0A.js";import"./AlertTitle-CSTn9zmN.js";import"./Typography-BZ2PGk-H.js";import"./index-Cs3zhFJ7.js";import"./useTheme-rB-re95z.js";import"./ClickAwayListener-BZeSBdqd.js";import"./getReactElementRef-Cdg41oby.js";import"./index-Bq1q-nPq.js";import"./index-FtV39xre.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BlrKM9H8.js";import"./Tooltip-BkszJ6A3.js";import"./index-D9wEq1Sm.js";import"./useControlled-ZqyZ1t-t.js";import"./Popper-CbJ95q-5.js";import"./Button-FcYL-glf.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CwQ1lgbR.js";import"./useQuery-COlWpTTb.js";import"./QueryClientProvider-BxmwlV1f.js";import"./Link-C_j_NUNw.js";import"./Collapse-DE9QFK8z.js";import"./_baseUniq-BMjHlurh.js";import"./_Uint8Array-CdGkK4mZ.js";import"./isArray-q8ycs3ZN.js";import"./_getTag-DEVzP-z8.js";import"./isEqual-DetpVs-L.js";import"./merge-CXpHJeH_.js";import"./_initCloneObject-DmfTE17Q.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-6qfKi2r7.js";import"./inputBaseClasses-Bft2YqCg.js";import"./calculateFriendlyFileSize-Cg8Uh6Fg.js";import"./CheckCircleTwoTone-BAxuPcKP.js";import"./InfoTwoTone-CsWT3aqU.js";import"./useMutation-Dqmxrm1j.js";import"./dayjs.min-COljXBzg.js";import"./chunk-AYJ5UCUI-DRRGzA-U.js";import"./cloneDeep-B4VKzWqO.js";import"./Skeleton-C3BbJI2K.js";import"./SkeletonButton-CHgS1zaX.js";import"./SkeletonInlineBlock-DlGfSExb.js";import"./SkeletonTable-Df9aKucP.js";import"./times-CTQf4Byd.js";import"./toInteger-AUvhMREd.js";import"./isSymbol-Dm5OuX-X.js";import"./SkeletonParagraph-dUUtO6N-.js";import"./uniqueId-DWvSTLbv.js";import"./toString-CFD6Keor.js";import"./CSSTransition-TtjyHxng.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-4lKqVxFG.js";import"./Avatar-vhEHPd0J.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
