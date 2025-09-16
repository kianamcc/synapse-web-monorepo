import{g as i}from"./entityHandlers-CbSHhAPd.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BOdJ4aAD.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-CG7CRE7n.js";import{g as m}from"./userProfileHandlers-CjMpN1G6.js";import{P as L}from"./ProjectDataAvailability-wPiziWt8.js";import"./index-CMvdky2v.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-hJPiYhqo.js";import"./mockTeam-BjwnR4XF.js";import"./SynapseConstants-JfPkMcg0.js";import"./OrientationBanner-CouH68_J.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BcZOnU6T.js";import"./index-BK6cjXBZ.js";import"./iframe-BnNg7yJB.js";import"./spreadSx-CwcO6WA9.js";import"./react-B6KPdu5T.js";import"./FullWidthAlert-CP1QTJXS.js";import"./Alert-B7JKdAU4.js";import"./createTheme-DdCDgYei.js";import"./DefaultPropsProvider-TIkVZDCj.js";import"./useSlot-BDueLrxA.js";import"./useForkRef-CYVt1D8Q.js";import"./createSimplePaletteValueFilter-gOntg_V8.js";import"./createSvgIcon-BdtPq1Tw.js";import"./Close-CbTjf3zS.js";import"./IconButton-BHcrqX1G.js";import"./useTimeout-D6cH1pf-.js";import"./ButtonBase-BwM1D_G8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B-WmS9d9.js";import"./Paper-BOOJzAP_.js";import"./useTheme-DqFLheya.js";import"./useTheme-UGDwZqNk.js";import"./Stack-CfEr4J4E.js";import"./extendSxProp-C1uB2K5e.js";import"./getThemeProps-Br_57JSj.js";import"./Box-ChHhuOMP.js";import"./AlertTitle-CLr5v-qU.js";import"./Typography-FRQIFPS_.js";import"./index-75JHCm82.js";import"./ClickAwayListener-B3OwTDLO.js";import"./getReactElementRef-T0dppYio.js";import"./index-BtJ10Ccv.js";import"./index-BCqjZQ9Q.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Baht38yj.js";import"./Tooltip-KZeFSyMF.js";import"./index-DoAu-rxh.js";import"./useControlled-BgFNFYLB.js";import"./Popper-BCpq0bpJ.js";import"./Button-CGtpPk7o.js";import"./uniqueId-DVHVce_n.js";import"./toString-pM__c-Jx.js";import"./isArray-DK_LmvOp.js";import"./isSymbol-BGAVTM_8.js";import"./times-BV-dSR2s.js";import"./_Uint8Array-DdnP8-f5.js";import"./identity-DKeuBCMA.js";import"./toInteger-C65bF937.js";import"./mockTableEntity-Nr0bg_KI.js";import"./mockFileEntityACLVariants-BkbJ_FBV.js";import"./fakerUtils-Btyjp7d5.js";import"./mockFileEntity-CEN6Hcj1.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-C17b1GbS.js";import"./mockSchema-BaGrucJ6.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-CE3P3pkB.js";import"./QueryClientProvider-tLXh-4q3.js";import"./Link-CBjYA8yP.js";import"./Collapse-DsMcEJji.js";import"./_baseUniq-BVagotzB.js";import"./_getTag-B7gw1DJ9.js";import"./isEqual-DknNpZAe.js";import"./merge-DRt0v3QZ.js";import"./_initCloneObject-B1aKMoJ4.js";import"./tinycolor-Begke6kS.js";import"./Fade-DxY0BkxR.js";import"./inputBaseClasses-BH_Uaz0L.js";import"./calculateFriendlyFileSize-BVV4z-OV.js";import"./CheckCircleTwoTone-B_JgC-4w.js";import"./InfoTwoTone-B41A2Lg3.js";import"./useMutation-CRT9uZDv.js";import"./dayjs.min-BsaYAIeB.js";import"./chunk-AYJ5UCUI-CSb7mSbs.js";import"./cloneDeep-C5a2C-Tz.js";import"./Skeleton-Dp3uQSvj.js";import"./HelpPopover-Bdi6HoX0.js";import"./MarkdownPopover-DTkoJ8Bd.js";import"./LightTooltip-CNo-fDUN.js";import"./MarkdownSynapse-bg68uR0c.js";import"./SkeletonButton-Bg0usTi6.js";import"./SkeletonInlineBlock-ARtMbZhT.js";import"./SkeletonTable-JtMcYXf2.js";import"./SkeletonParagraph-DVVDbLgl.js";import"./HelpOutlineTwoTone-B8mrS6E9.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
