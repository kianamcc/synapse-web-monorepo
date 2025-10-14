import{g as i}from"./entityHandlers-C-vuayOR.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BS7yqeVu.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-DvAq-iq2.js";import{g as m}from"./userProfileHandlers-DZQekGC7.js";import{P as L}from"./ProjectDataAvailability-D3CKX1Fq.js";import"./index-Civg0LgH.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BBs6Dvsx.js";import"./mockTeam-Dp0SG-0i.js";import"./SynapseConstants-DCD24UIR.js";import"./OrientationBanner-CGhK73qt.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-VZePWZJ8.js";import"./index-CxNQf4-_.js";import"./iframe-Dg4AUp8p.js";import"./spreadSx-CwcO6WA9.js";import"./react-BE2NnvmD.js";import"./FullWidthAlert-9fheV2TI.js";import"./Alert-DD6LY4o6.js";import"./createTheme-BNZ2-g8i.js";import"./DefaultPropsProvider-CSmwSXtp.js";import"./useSlot-ZEQjcV4h.js";import"./useForkRef-DVZbic4O.js";import"./createSimplePaletteValueFilter-BTCFvpVs.js";import"./createSvgIcon-px9Ll1Sh.js";import"./Close-8Omd6HQo.js";import"./IconButton-DdwXXYxc.js";import"./useTimeout-CmN0NgJY.js";import"./ButtonBase-CYIBe76-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CpqZJiGb.js";import"./Paper-Bi_y7tq5.js";import"./useTheme-Ct9xyNCZ.js";import"./useTheme-Cwe9o9si.js";import"./Stack-BkBDhbY7.js";import"./useThemeProps-DYPM01el.js";import"./getThemeProps-z9TSZhd3.js";import"./extendSxProp-doqBFT6I.js";import"./Box-29dRnPqp.js";import"./AlertTitle-YP7vES6y.js";import"./Typography-CM0Hx7IB.js";import"./index-CylRv6A2.js";import"./ClickAwayListener-Bk5rN7ro.js";import"./getReactElementRef-CbfHskog.js";import"./index-DdouHa0C.js";import"./index-BHXNWvPG.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DfWYfHBy.js";import"./Tooltip-BWVeFaIO.js";import"./index-BuW0orvV.js";import"./useControlled-CMSkeTs6.js";import"./Popper-DK9BpulM.js";import"./Button-Joy47VZj.js";import"./uniqueId-CmVmy48j.js";import"./toString-APlpq5bG.js";import"./isArray-KmhwUPCT.js";import"./isSymbol-pOBVduix.js";import"./times-9qm3v6wO.js";import"./_Uint8Array-DcB2X5w5.js";import"./identity-DKeuBCMA.js";import"./toInteger-BX512c4M.js";import"./mockTableEntity-CHRrfCAv.js";import"./mockFileEntityACLVariants-D6oqenHh.js";import"./fakerUtils-B28KKIG2.js";import"./mockFileEntity-CmGVhN31.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity--0rWKovh.js";import"./mockSchema-DFm2Wnxt.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BmYDawry.js";import"./QueryClientProvider-BzV6DB3V.js";import"./Link-4Y6YnrJW.js";import"./Collapse-BssXeki7.js";import"./_baseUniq-Cqxswx2d.js";import"./_getTag-BUgEEbP5.js";import"./isEqual-BdiiYa5f.js";import"./noop-DX6rZLP_.js";import"./merge-CCPnLMoR.js";import"./_initCloneObject-DaAH_7Pj.js";import"./tinycolor-Begke6kS.js";import"./Fade-CYQ77buy.js";import"./inputBaseClasses-BSYFsfzv.js";import"./calculateFriendlyFileSize-C5Z4DbWG.js";import"./CheckCircleTwoTone-BjTNRj81.js";import"./InfoTwoTone-Dm6rZBIc.js";import"./useMutation-BLBDAaI6.js";import"./dayjs.min-pJYmqCac.js";import"./chunk-AYJ5UCUI-py0OTTT6.js";import"./cloneDeep-aIiF9cuR.js";import"./Skeleton-CXBbRm57.js";import"./HelpPopover-DpX9HGdA.js";import"./MarkdownPopover-C7ILXxyP.js";import"./LightTooltip-BaKFVNFq.js";import"./MarkdownSynapse-Dz_zjB6g.js";import"./SkeletonButton-5PuaKsOE.js";import"./SkeletonInlineBlock-3dbCcAAv.js";import"./SkeletonTable-DCktIaq7.js";import"./SkeletonParagraph-DfSQ1gty.js";import"./HelpOutlineTwoTone-BszBGNcc.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
