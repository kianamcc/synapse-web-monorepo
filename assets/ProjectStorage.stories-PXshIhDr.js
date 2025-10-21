import{g as i}from"./entityHandlers-iG6cCibK.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BbxVu2DR.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-CkBse47X.js";import{g as m}from"./userProfileHandlers-BJj2CwqM.js";import{P as L}from"./ProjectDataAvailability-SesepAvE.js";import"./index-DL6LOaCd.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-D1jYpGyy.js";import"./mockTeam-CacOA8Sk.js";import"./SynapseConstants-DB1U6fCi.js";import"./OrientationBanner-CfcCHA7b.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D-JvkkFQ.js";import"./index-h6wMStlP.js";import"./iframe-BIXzCf__.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dvfkm1q8.js";import"./FullWidthAlert-C3__BrN1.js";import"./Alert-KbHye0zK.js";import"./createTheme-CfvkUd1Z.js";import"./DefaultPropsProvider-D7V8rD5v.js";import"./useSlot-sOD4zP-r.js";import"./useForkRef-Bgjy7c5C.js";import"./createSimplePaletteValueFilter-7MYa4cYr.js";import"./createSvgIcon-BBewBNub.js";import"./Close-vJBs_HBy.js";import"./IconButton-BIC_-n2r.js";import"./useTimeout-qJcADyon.js";import"./ButtonBase-0zocx7gF.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DMvTAHSq.js";import"./Paper-BxqOSPyk.js";import"./useTheme-Cw4Zp1rn.js";import"./useTheme-PSCU5VTp.js";import"./Stack-BlHkd8TU.js";import"./useThemeProps-B2dREZbs.js";import"./getThemeProps-C0RGq6ua.js";import"./extendSxProp-CkLeZJqn.js";import"./Box-Dx6_J6VB.js";import"./AlertTitle-fHQYxNHL.js";import"./Typography-TJTmaHAu.js";import"./index-DYWBYB4S.js";import"./ClickAwayListener-BfovIoNr.js";import"./getReactElementRef-Bwbpg52p.js";import"./index-U4jxIuWl.js";import"./index-t59vC1km.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-wP9co_-j.js";import"./Tooltip-n52PzXnL.js";import"./index-ByPvK6j8.js";import"./useControlled-OG_H38db.js";import"./Popper-BhKXntQR.js";import"./Button-DmjkSNHc.js";import"./uniqueId-DntEQDws.js";import"./toString-JgrOq2ja.js";import"./isArray-Cn9BbLfk.js";import"./isSymbol-DAmKeQYL.js";import"./times-yJyRyJoN.js";import"./_Uint8Array-BGr3SjUR.js";import"./identity-DKeuBCMA.js";import"./toInteger--OxGyFRz.js";import"./mockTableEntity-D0F3a5sD.js";import"./mockFileEntityACLVariants-BTrEHI0S.js";import"./fakerUtils-D41Gif_-.js";import"./mockFileEntity-Ccv1Jc56.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-DG5xqygv.js";import"./mockSchema-Cw4k-aFu.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-CmubrUzL.js";import"./QueryClientProvider-DEQ_VpcF.js";import"./Link-Kv9iFQ5W.js";import"./Collapse-Q1KoyyE_.js";import"./_baseUniq-aE6oP3PL.js";import"./_getTag-1ZzLjjIk.js";import"./isEqual-DeX1HjXm.js";import"./noop-DX6rZLP_.js";import"./merge-JRhW7aR_.js";import"./_initCloneObject-BuVlxAmo.js";import"./tinycolor-Begke6kS.js";import"./Fade-DHQD_AfM.js";import"./inputBaseClasses-DhSIyHr7.js";import"./calculateFriendlyFileSize-D9gQBnSg.js";import"./CheckCircleTwoTone-Cmw_kNue.js";import"./InfoTwoTone-14otHSKQ.js";import"./useMutation-AlPt0G_3.js";import"./dayjs.min-Bh9Qzvrd.js";import"./chunk-AYJ5UCUI-C8HEU9Sm.js";import"./cloneDeep-B0NF6IcV.js";import"./Skeleton-CNu0JRel.js";import"./HelpPopover-BhGRGIfi.js";import"./MarkdownPopover-CE-YQ941.js";import"./LightTooltip-1XNkX-eL.js";import"./MarkdownSynapse-CDy5lKeK.js";import"./SkeletonButton-BkCKWMPJ.js";import"./SkeletonInlineBlock-9nPmB_Fq.js";import"./SkeletonTable-PNSrNJs8.js";import"./SkeletonParagraph-BFXwX_IX.js";import"./HelpOutlineTwoTone-BGGOGQoF.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(u=e.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const yr=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{o as ProjectDataOverLimit,e as ProjectDataStorageNotSet,r as ProjectDataUnderLimit,yr as __namedExportsOrder,jr as default};
