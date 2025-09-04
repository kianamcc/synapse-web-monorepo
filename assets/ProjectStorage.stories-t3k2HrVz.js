import{g as i}from"./entityHandlers-DHJprULg.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-BJvbesf1.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-CR7HgSOn.js";import{g as m}from"./userProfileHandlers-BZLbT8Nl.js";import{P as L}from"./ProjectDataAvailability-CaeSco7D.js";import"./index-CRyo1pGC.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Bxhuj71G.js";import"./mockTeam-B6NeQqnw.js";import"./SynapseConstants-Dv_-Xyed.js";import"./OrientationBanner-wAeNb1aD.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-rmcGGOl4.js";import"./index-Cjx5jpdZ.js";import"./iframe-D59JS_7P.js";import"./spreadSx-CwcO6WA9.js";import"./react-DM4ITJBQ.js";import"./FullWidthAlert-B55Bb1bQ.js";import"./Alert-DVNnnZsV.js";import"./createTheme-D4bqoPPK.js";import"./DefaultPropsProvider-aVSlypVy.js";import"./useSlot-Coj5idWU.js";import"./useForkRef-DBR9Xul8.js";import"./createSimplePaletteValueFilter-CJkSs2f5.js";import"./createSvgIcon-CV8IsRK9.js";import"./Close-iZy0aAu4.js";import"./IconButton-CdG5yAm0.js";import"./useTimeout-CmQT8jOf.js";import"./ButtonBase-BCgZOrek.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-0PfVmIwk.js";import"./Paper-DkiXaEV8.js";import"./useTheme-0nJW7yzI.js";import"./useTheme-BhFvXkdX.js";import"./Stack-CRgLdNHn.js";import"./extendSxProp-BxNOKc6_.js";import"./getThemeProps-D6CxAa_J.js";import"./Box-BC59XK2Z.js";import"./AlertTitle-C3ba4AQ1.js";import"./Typography-BwlHsdrT.js";import"./index-BQQ4Ajye.js";import"./ClickAwayListener-CXLCi24x.js";import"./getReactElementRef-BcplR5Ke.js";import"./index-CmwlBUd-.js";import"./index-CgJCgvXo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DnOz08Mg.js";import"./Tooltip-L8gDN-4A.js";import"./index-D1j6hMb9.js";import"./useControlled-DTCenv9i.js";import"./Popper-DBY3xxNj.js";import"./Button-5NOW73ps.js";import"./uniqueId-Y_6tfQiI.js";import"./toString-6FVZEEXU.js";import"./isArray-8GJeRF5W.js";import"./isSymbol-B0M8nthc.js";import"./times-CsSa2-4g.js";import"./_Uint8Array-BhlvdjW1.js";import"./identity-DKeuBCMA.js";import"./toInteger-BDEhXBHz.js";import"./mockTableEntity-D9g5OgO5.js";import"./mockFileEntityACLVariants-DExWZ6_A.js";import"./fakerUtils-CbTTxg6q.js";import"./mockFileEntity-BRJcqtZu.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-C5lzWDGS.js";import"./mockSchema-COJ6kAvX.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-EbX8t3ff.js";import"./QueryClientProvider-CK7oTGte.js";import"./Link-CyrKKCnm.js";import"./Collapse-DaymGoP6.js";import"./_baseUniq-CkDAFG6Y.js";import"./_getTag-C3VAzrR4.js";import"./isEqual-C86qMBAY.js";import"./merge-DSB_ZUSu.js";import"./_initCloneObject-E_XScjy2.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cdlc91Pa.js";import"./inputBaseClasses-D8eEbZWg.js";import"./calculateFriendlyFileSize-1bLd95MU.js";import"./CheckCircleTwoTone-C9bSShuA.js";import"./InfoTwoTone-DuQmgc4g.js";import"./useMutation-D_FYjk2N.js";import"./dayjs.min-CHYFLaqv.js";import"./chunk-AYJ5UCUI-DlxAltom.js";import"./cloneDeep-DItxZHSL.js";import"./Skeleton-610tAbPL.js";import"./HelpPopover-CxvIxWcf.js";import"./MarkdownPopover-CIjqsUIj.js";import"./LightTooltip-DvTDIBii.js";import"./MarkdownSynapse-gsPoR4f6.js";import"./SkeletonButton-BkWx2JDf.js";import"./SkeletonInlineBlock-CyGkyr32.js";import"./SkeletonTable-DCiF7cbd.js";import"./SkeletonParagraph-w8Rtv51Z.js";import"./HelpOutlineTwoTone-CDHlp6Ij.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    projectId: UNDER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(I=(g=r.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var _,P,R;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    projectId: OVER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var E,u,j;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(j=(u=e.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const ur=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{o as ProjectDataOverLimit,e as ProjectDataStorageNotSet,r as ProjectDataUnderLimit,ur as __namedExportsOrder,Er as default};
