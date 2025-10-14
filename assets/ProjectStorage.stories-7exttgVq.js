import{g as i}from"./entityHandlers-CcO37j4W.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-IUvKxpE9.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-P2sY9ByF.js";import{g as m}from"./userProfileHandlers-j3lneIfR.js";import{P as L}from"./ProjectDataAvailability-lzKcPrvp.js";import"./index-Cw3j_00O.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-D0VjO7F4.js";import"./mockTeam-C8GHerR8.js";import"./SynapseConstants-CFs9-P54.js";import"./OrientationBanner-CGogClZ-.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D0quDhpf.js";import"./index-DTxXT8xi.js";import"./iframe-KWEd0gMy.js";import"./spreadSx-CwcO6WA9.js";import"./react-B4sXsje5.js";import"./FullWidthAlert-B4anUMp_.js";import"./Alert-CTSNw1fZ.js";import"./createTheme-C47Y87A4.js";import"./DefaultPropsProvider-B-eVrFvd.js";import"./useSlot-QF2CdK0N.js";import"./useForkRef-BS7QeJ96.js";import"./createSimplePaletteValueFilter-JxKCDb-M.js";import"./createSvgIcon-CVjfqiPX.js";import"./Close-qFP2Q57D.js";import"./IconButton-B5Ug_kUg.js";import"./useTimeout-BA5Bhh4c.js";import"./ButtonBase-BB75u1cV.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-tAN3gOWA.js";import"./Paper-Cr9fcRFU.js";import"./useTheme-DuBoDREd.js";import"./useTheme-D_Zdm0Cd.js";import"./Stack-B29pnm8B.js";import"./useThemeProps-CQdUp3Os.js";import"./getThemeProps-BchmXIDX.js";import"./extendSxProp-BXep7pNP.js";import"./Box-CNorT3jp.js";import"./AlertTitle-CvgMJ4Nj.js";import"./Typography-DTA26pXS.js";import"./index-DTH4m4Ei.js";import"./ClickAwayListener-BR_bUt97.js";import"./getReactElementRef-Dkhg43bH.js";import"./index-DkfTgz7N.js";import"./index-CdpVy2gR.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DB1geCA4.js";import"./Tooltip-4nKavIt1.js";import"./index-CcncV9V-.js";import"./useControlled-oxRzRN46.js";import"./Popper-CbfEzcwU.js";import"./Button-oPXeTB6o.js";import"./uniqueId-BE5ZwBpx.js";import"./toString-BuLs5hRr.js";import"./isArray-DTE_t_uz.js";import"./isSymbol-BK4wvV9q.js";import"./times-Cmxclh_t.js";import"./_Uint8Array-4Rllf2Qd.js";import"./identity-DKeuBCMA.js";import"./toInteger-CbOn7LLx.js";import"./mockTableEntity-CUZKihCF.js";import"./mockFileEntityACLVariants-CUhrSP3N.js";import"./fakerUtils-DHXSH16R.js";import"./mockFileEntity-BgiVLrlJ.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-FTObijzn.js";import"./mockSchema-CaqlI6Rr.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-Bl_cGmi2.js";import"./QueryClientProvider-Cf6MCbvB.js";import"./Link-cokHj4fD.js";import"./Collapse-Dw-KvTKQ.js";import"./_baseUniq-BCVfyyLL.js";import"./_getTag-CVbV9I50.js";import"./isEqual-DRGf7CXE.js";import"./noop-DX6rZLP_.js";import"./merge-BbaJJpoi.js";import"./_initCloneObject-BeYdggqJ.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dq2lY4po.js";import"./inputBaseClasses-Cw2dFTbj.js";import"./calculateFriendlyFileSize-DICq4dzm.js";import"./CheckCircleTwoTone-Dg-3xUXQ.js";import"./InfoTwoTone-uhtZ8xGb.js";import"./useMutation-BBlMnXEp.js";import"./dayjs.min-BCaxwC-h.js";import"./chunk-AYJ5UCUI-nMwbF-XD.js";import"./cloneDeep-CX99sadt.js";import"./Skeleton-BVM_VZtv.js";import"./HelpPopover-DaxN5T23.js";import"./MarkdownPopover-Bvh41y-0.js";import"./LightTooltip-K1k4_O_k.js";import"./MarkdownSynapse-maMVQjNp.js";import"./SkeletonButton-DRCsDiWL.js";import"./SkeletonInlineBlock-DaCAzwFH.js";import"./SkeletonTable-B2DwCAq2.js";import"./SkeletonParagraph-DtvatZIE.js";import"./HelpOutlineTwoTone-CzH_JcaD.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
