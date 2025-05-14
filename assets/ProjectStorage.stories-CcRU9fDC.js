import{g as s}from"./entityHandlers-D6nhU4aW.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-B4K0HM1Q.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-DD916Rjb.js";import{g as a}from"./userProfileHandlers-B5O08Rs2.js";import{P as N}from"./ProjectDataAvailability-CFnx5JJS.js";import"./index-Dihvb0ZK.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-C1kkU6Cf.js";import"./mockTeam-BQtXqKBj.js";import"./SynapseConstants-Cy6AFt5n.js";import"./OrientationBanner-CL-ftGHP.js";import"./jsx-runtime-D39jwkIv.js";import"./index-BVDw5WRY.js";import"./iframe-CLB8zn3r.js";import"./index-Bh97n3M_.js";import"./spreadSx-CwcO6WA9.js";import"./react-IwA7Zo0w.js";import"./FullWidthAlert-DX8boHuP.js";import"./Alert-x-J5_beW.js";import"./createTheme-DMsj8ftm.js";import"./resolveComponentProps-ByJQNuwe.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DzNT1O1i.js";import"./createSvgIcon-B3AKd2cd.js";import"./DefaultPropsProvider-D-nVBZLz.js";import"./Close-DFowflBo.js";import"./IconButton-C0tYfXRh.js";import"./ButtonBase-DJAMH7Md.js";import"./useTimeout-BUaaVD43.js";import"./TransitionGroupContext-DVa8RRVS.js";import"./useIsFocusVisible-Brdx5a5c.js";import"./useEventCallback-DlaNXhB0.js";import"./Paper-Bxx_Whxx.js";import"./Stack-DpwqU_wj.js";import"./getThemeProps-PSvmS7hA.js";import"./useTheme-Bec-LrS3.js";import"./Box-DMWa71Ws.js";import"./AlertTitle-CAlQiVdT.js";import"./Typography-DSGH8yyG.js";import"./useTheme-X4n7DT2y.js";import"./Grow-D_e84Gg4.js";import"./index-De4_hU5_.js";import"./utils-B5tg3FTA.js";import"./ClickAwayListener-D0xy-Edw.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DkhFPqXc.js";import"./index-rLgDW05n.js";import"./useControlled-BN-u63ln.js";import"./useId-me0PSUGK.js";import"./Popper-73XFw0vX.js";import"./Button-7yTQbH-Q.js";import"./uniqueId-CCCNLdRY.js";import"./toString-Cnma8B0E.js";import"./isObjectLike-DY5ARhM3.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-KIvlyPfn.js";import"./times-3-y929mQ.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-Bk5ShhwE.js";import"./mockTableEntity-BxhCRytR.js";import"./mockFileEntityACLVariants-O6nTSVwy.js";import"./fakerUtils-CWg7Fj8B.js";import"./mockFileEntity-uvS13SbX.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-DJ_bXtML.js";import"./mockSchema-RduhCEe4.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-_9xZu4Of.js";import"./utils-CWEzw51o.js";import"./Link-DD0QZad6.js";import"./Collapse-DsAPfyZ4.js";import"./isNil-Cg0XEkkB.js";import"./_Uint8Array-DF57BDa6.js";import"./_baseIsEqual-C4lIKSWB.js";import"./_getTag-DqP87pun.js";import"./tinycolor-Begke6kS.js";import"./Fade-CjfO6n7T.js";import"./Skeleton-BrPdZBdA.js";import"./inputBaseClasses-CyKUb8GN.js";import"./calculateFriendlyFileSize-BmwiOem5.js";import"./CheckCircleTwoTone-CMCBIRlc.js";import"./InfoTwoTone-D0C9zRKP.js";import"./mutation-BEBlT8KE.js";import"./dayjs.min-BQMLYqDn.js";import"./chunk-AYJ5UCUI-DMZK6AaU.js";import"./cloneDeep-DRve-2g3.js";import"./_initCloneObject-BZ5RhWFx.js";import"./isEqual-vdG8nD8x.js";import"./merge-Dm6LhwjU.js";import"./util-BHpzBWcp.js";import"./HelpPopover-BqAOh9jV.js";import"./MarkdownPopover-D_MhOGLx.js";import"./LightTooltip-B8DyrHf4.js";import"./MarkdownSynapse-BkdPcUDO.js";import"./SkeletonButton-D0Bf3B75.js";import"./SkeletonInlineBlock-CLtSEpTn.js";import"./SkeletonTable-1Y7mwPv1.js";import"./SkeletonParagraph-Dbp_Kudu.js";import"./HelpOutlineTwoTone-ByIV-Bc4.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(_=(I=o.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var P,E,R;e.parameters={...e.parameters,docs:{...(P=e.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(E=e.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var u,j,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const Lt=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{e as ProjectDataOverLimit,i as ProjectDataStorageNotSet,o as ProjectDataUnderLimit,Lt as __namedExportsOrder,St as default};
