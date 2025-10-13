import{g as i}from"./entityHandlers-DvibjX2P.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BxW2OjF_.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-Cl7AtXBG.js";import{g as m}from"./userProfileHandlers-DVrS5slM.js";import{P as L}from"./ProjectDataAvailability-KvbUFhe5.js";import"./index-CVE-BFfF.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CmQW7wlE.js";import"./mockTeam-BTeQHdmk.js";import"./SynapseConstants-CbS11lwu.js";import"./OrientationBanner-DAAziPr7.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CjpbMb-2.js";import"./index-BlqYlNqH.js";import"./iframe-DCM7iHZO.js";import"./spreadSx-CwcO6WA9.js";import"./react-CEAJSkGg.js";import"./FullWidthAlert-CAFxwpcN.js";import"./Alert-D6R0aZpH.js";import"./createTheme-CX2Fjxji.js";import"./DefaultPropsProvider-BnvpeM39.js";import"./useSlot-BGFFn2Yp.js";import"./useForkRef-CuaJz7-Y.js";import"./createSimplePaletteValueFilter-p4K6Mnoc.js";import"./createSvgIcon-DUQWWt-z.js";import"./Close-n0ge04QY.js";import"./IconButton-BIB-CAZ9.js";import"./useTimeout-DNpXQZXA.js";import"./ButtonBase-Dr_L7g0l.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B_PETcC2.js";import"./Paper-CF2lzpio.js";import"./useTheme-BpONhpPf.js";import"./useTheme-B9tfsfzJ.js";import"./Stack-CnakP1Nf.js";import"./useThemeProps-wm4aMtJv.js";import"./getThemeProps-C7E0PQ7U.js";import"./extendSxProp-ClQEqrR8.js";import"./Box-BAunhwEm.js";import"./AlertTitle-C78MxdqV.js";import"./Typography-BGL1ewSU.js";import"./index-BBXrvSSK.js";import"./ClickAwayListener-wANS1sm5.js";import"./getReactElementRef-B-FQDB6t.js";import"./index-Dr007Q5D.js";import"./index-qpPU8qdy.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BeiywY4t.js";import"./Tooltip-BLdHd-MN.js";import"./index-WIo8OHGx.js";import"./useControlled-DNjUBqvl.js";import"./Popper-BLn1Ov7-.js";import"./Button-B5V1-M1A.js";import"./uniqueId-BbuF_QB9.js";import"./toString-tvYildNh.js";import"./isArray-Cc9w60IV.js";import"./isSymbol-4h04pfmi.js";import"./times-UINggwMT.js";import"./_Uint8Array-BbI8ilIQ.js";import"./identity-DKeuBCMA.js";import"./toInteger-B8v9JCJd.js";import"./mockTableEntity-CevmmMEF.js";import"./mockFileEntityACLVariants-DlBTiWxZ.js";import"./fakerUtils-CrKJLcHA.js";import"./mockFileEntity-DEPcvpAJ.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BbIlQEfm.js";import"./mockSchema-BaQarOlB.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BNpHjXkF.js";import"./QueryClientProvider-NhrOwhBC.js";import"./Link-DlixphRW.js";import"./Collapse-Dln0G3S5.js";import"./_baseUniq-pMV98HDI.js";import"./_getTag-BSojBbQx.js";import"./isEqual-CkmIEn_k.js";import"./noop-DX6rZLP_.js";import"./merge-DlUKwuU8.js";import"./_initCloneObject-DwB7xy4-.js";import"./tinycolor-Begke6kS.js";import"./Fade-DXKqJCZP.js";import"./inputBaseClasses-DJY9IRAF.js";import"./calculateFriendlyFileSize-BZdSz9n-.js";import"./CheckCircleTwoTone-DJ65aMmV.js";import"./InfoTwoTone-C3Zlortc.js";import"./useMutation-CV3ESuZm.js";import"./dayjs.min-81jMEWHJ.js";import"./chunk-AYJ5UCUI-B4cY1IOw.js";import"./cloneDeep-BYvILRz3.js";import"./Skeleton-B7QyB6bJ.js";import"./HelpPopover-4wcl2C_W.js";import"./MarkdownPopover-BM1sk7rm.js";import"./LightTooltip-BQQCI2uv.js";import"./MarkdownSynapse-Urs2Stsu.js";import"./SkeletonButton-CfFJX_hS.js";import"./SkeletonInlineBlock-DgFoGvQA.js";import"./SkeletonTable-DGMy4eb_.js";import"./SkeletonParagraph-D0MI-JIc.js";import"./HelpOutlineTwoTone-BkQiZrs0.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
