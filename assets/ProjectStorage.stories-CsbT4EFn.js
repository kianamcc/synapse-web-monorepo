import{g as i}from"./entityHandlers-CGgWJIQj.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DHh7ohVA.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-o8SQyrCV.js";import{g as m}from"./userProfileHandlers-HOJSJ980.js";import{P as L}from"./ProjectDataAvailability-DFau1s0Z.js";import"./index-3MYNrBRZ.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-tlcNgWjh.js";import"./mockTeam--IMVxbKp.js";import"./SynapseConstants-h_7EWzLA.js";import"./OrientationBanner-Dx-xLkkA.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-COEABuGo.js";import"./index-CqkHQv7x.js";import"./iframe-BgwGFO8A.js";import"./spreadSx-CwcO6WA9.js";import"./react-DxvTb9cq.js";import"./FullWidthAlert-PvUSTn7z.js";import"./Alert-BaA8or5r.js";import"./createTheme-DvYKiu1i.js";import"./DefaultPropsProvider-7vp5Xg1U.js";import"./useSlot-DEhbeWXQ.js";import"./useForkRef-DcEMbDda.js";import"./createSimplePaletteValueFilter-DaZ5Yv0h.js";import"./createSvgIcon-xRD0VMrj.js";import"./Close-D2Pcfetn.js";import"./IconButton-C4TIHZyt.js";import"./useTimeout-uliFliSc.js";import"./ButtonBase-e0UzDey_.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B8_AL_Fq.js";import"./Paper-Bv7lETL1.js";import"./useTheme-DcxGxVMb.js";import"./useTheme-zcMKTfSN.js";import"./Stack-BqfwOgfF.js";import"./useThemeProps-Cf4wgzpW.js";import"./getThemeProps-sRjEXcdv.js";import"./extendSxProp-DtYjKP0k.js";import"./Box-CzGTAvbF.js";import"./AlertTitle-DAlWK_02.js";import"./Typography-fLt1zesl.js";import"./index-xaCPz-JY.js";import"./ClickAwayListener-DnQUb8HH.js";import"./getReactElementRef-C8AieGDO.js";import"./index-BfHw4MxA.js";import"./index-CdBb3X1w.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ZrcNPb6n.js";import"./Tooltip-DFYygHVR.js";import"./index-DbzZg3-5.js";import"./useControlled-CFGJwztc.js";import"./Popper-yYY1hnWk.js";import"./Button-DazhXTx4.js";import"./uniqueId-kuP1692N.js";import"./toString-5BS_zcgi.js";import"./isArray-B_6GUJS7.js";import"./isSymbol-BZj08at1.js";import"./times-CfuNxlyO.js";import"./_Uint8Array-V8Hqk8-a.js";import"./identity-DKeuBCMA.js";import"./toInteger-y2gjWSYT.js";import"./mockTableEntity-CPnnrpCM.js";import"./mockFileEntityACLVariants-CV0bIsjX.js";import"./fakerUtils-DnpTytJP.js";import"./mockFileEntity-kJ97QGGc.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-B6HiTLHL.js";import"./mockSchema-CxJK8Ok4.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DlzHH4w5.js";import"./QueryClientProvider-EftEu6F7.js";import"./Link-Bx8Jvr9M.js";import"./Collapse-BZlk0Ykt.js";import"./_baseUniq-DSJGB-01.js";import"./_getTag-BDrzMSis.js";import"./isEqual-ChV2ouiR.js";import"./noop-DX6rZLP_.js";import"./merge-C3l7-ucn.js";import"./_initCloneObject-Cqqx2oxm.js";import"./tinycolor-Begke6kS.js";import"./Fade-bYr3BlVk.js";import"./inputBaseClasses-DfP0rQ3S.js";import"./calculateFriendlyFileSize-Cm4JOWCO.js";import"./CheckCircleTwoTone-DY5SAgNm.js";import"./InfoTwoTone-EeJ79Gmj.js";import"./useMutation-BtbqWamg.js";import"./dayjs.min-qBh4lvqk.js";import"./chunk-AYJ5UCUI-UY3Jsjzw.js";import"./cloneDeep-D4nP9Fhn.js";import"./Skeleton-Byv5D2DM.js";import"./HelpPopover-BMtp7lQV.js";import"./MarkdownPopover-BXH3oEPD.js";import"./LightTooltip-Bk9QbHC3.js";import"./MarkdownSynapse-mf6gUgjT.js";import"./SkeletonButton-DmVfh2mY.js";import"./SkeletonInlineBlock-Cd8tQ4Lt.js";import"./SkeletonTable-clDBaOot.js";import"./SkeletonParagraph-JPAW0e52.js";import"./HelpOutlineTwoTone-xfsRudZ1.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
