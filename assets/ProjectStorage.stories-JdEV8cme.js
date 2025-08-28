import{g as i}from"./entityHandlers-CqMFQSSJ.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-CME91ToD.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-CsrYFBZo.js";import{h as d,H as l}from"./index-BFgMkAaz.js";import{g as m}from"./userProfileHandlers-B85cOW2D.js";import{P as L}from"./ProjectDataAvailability-B2Ua8U8M.js";import"./index-F8VUasK0.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-D2G6A1x7.js";import"./mockTeam-Bh5_sIFU.js";import"./SynapseConstants-CVbzDXsD.js";import"./OrientationBanner-XtSc0VzO.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Dh9lJkbv.js";import"./index-DaSlfKLF.js";import"./iframe-Dm8vgKnX.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAXrNgB9.js";import"./FullWidthAlert-w0gAjoe7.js";import"./Alert-D-FV5RBj.js";import"./createTheme-CkRYGQfv.js";import"./DefaultPropsProvider-mPFVMdGB.js";import"./useSlot-Ae7YRVHy.js";import"./useForkRef-BhBDeep6.js";import"./createSimplePaletteValueFilter-wbN65Nig.js";import"./createSvgIcon-Ch71LAIP.js";import"./Close-IrfRyJP-.js";import"./IconButton-Bf2A1uXg.js";import"./useTimeout-QXUecAin.js";import"./ButtonBase-mZPr37pC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BImVxgDT.js";import"./Paper-CqEiiRuS.js";import"./useTheme-BA-blKiO.js";import"./useTheme-B-aviv3-.js";import"./Stack-C4YvO7qs.js";import"./extendSxProp-CP7cc_Y-.js";import"./getThemeProps-DGBayQ_1.js";import"./Box-CurSA-NL.js";import"./AlertTitle-U8xGE2H7.js";import"./Typography-_YK6XuJ0.js";import"./index-DY-zIKMm.js";import"./ClickAwayListener-BW575h7f.js";import"./getReactElementRef-BBh2do7G.js";import"./index-Dg0dhTBH.js";import"./index-CHamsNV1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D940Xbuf.js";import"./Tooltip-Gix1FQC7.js";import"./index-rxRUtMJh.js";import"./useControlled-BSkLZwL5.js";import"./Popper-D4lQmrad.js";import"./Button-xJzgoxEY.js";import"./uniqueId-CRM929iy.js";import"./toString-D00Dp1Bu.js";import"./isArray-BsWxdpED.js";import"./isSymbol-BT2yQ3zQ.js";import"./times-Lvs0WgpO.js";import"./_Uint8Array-C2PDKUpn.js";import"./identity-DKeuBCMA.js";import"./toInteger-BJBXsgVN.js";import"./mockTableEntity-B5-Ob5eB.js";import"./mockFileEntityACLVariants-Bki2P1y5.js";import"./fakerUtils-CVTAY4GC.js";import"./mockFileEntity-XviZHbtK.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-DP4woiJX.js";import"./mockSchema-BcpHnTvo.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-C8WcoIkJ.js";import"./QueryClientProvider-CglEAz9z.js";import"./Link-BibH5K7W.js";import"./Collapse-DrHkSXPK.js";import"./_baseUniq-cl2EXb8u.js";import"./_getTag-BlpsDHUb.js";import"./isEqual-Bb3pCitX.js";import"./merge-Cj_xTLin.js";import"./_initCloneObject-DrqXo0fx.js";import"./tinycolor-Begke6kS.js";import"./Fade-9s1ooV9G.js";import"./inputBaseClasses-I3CUYI4n.js";import"./calculateFriendlyFileSize-VdcSZY2R.js";import"./CheckCircleTwoTone-DuKDEC1n.js";import"./InfoTwoTone-D4CDQoZZ.js";import"./useMutation-BreGQyqG.js";import"./dayjs.min-Dl_96zRx.js";import"./chunk-AYJ5UCUI-CvPnyUnx.js";import"./cloneDeep-NQIqYrAv.js";import"./Skeleton-CLh09zTi.js";import"./HelpPopover-C-ASvLqm.js";import"./MarkdownPopover-q8pGviNz.js";import"./LightTooltip-u8Kig2PX.js";import"./MarkdownSynapse-C-HEaS-i.js";import"./SkeletonButton-Brf8cgpW.js";import"./SkeletonInlineBlock-Dc6esGDZ.js";import"./SkeletonTable-CogyxUq4.js";import"./SkeletonParagraph-DYGkikNE.js";import"./HelpOutlineTwoTone-B_UBPWkO.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
