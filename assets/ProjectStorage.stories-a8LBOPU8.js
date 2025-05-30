import{g as s}from"./entityHandlers-DUVA1EV_.js";import{x as C,g as L,b5 as d,B as k,M as r}from"./useFiles-DqScRbt4.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-DN6u4g4A.js";import{l as O}from"./index-PXDpxRR5.js";import{g as a}from"./userProfileHandlers-kEQs3ZHS.js";import{P as N}from"./ProjectDataAvailability-AxvgNtEk.js";import"./index-D5LpucY0.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-DW6GiXhX.js";import"./mockTeam-BYgwEU7z.js";import"./SynapseConstants-D08trsQl.js";import"./OrientationBanner-CPs8NG4k.js";import"./jsx-runtime-mncHC85H.js";import"./index-CsTX3kP9.js";import"./iframe-DLSVzvXo.js";import"./index-BWDtDZnU.js";import"./spreadSx-CwcO6WA9.js";import"./react-C7TYIDWj.js";import"./FullWidthAlert-DYV97sSa.js";import"./Alert-B2_TAMcq.js";import"./createTheme-8oXdyOSc.js";import"./resolveComponentProps-BDiE_oRR.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-MEzgZgYk.js";import"./createSvgIcon-CeFLfWhD.js";import"./DefaultPropsProvider-ieyM3ydX.js";import"./Close-kFL90S5e.js";import"./IconButton-BM4Jn5am.js";import"./ButtonBase-ByiL9H0e.js";import"./useTimeout-BtJRCvqS.js";import"./TransitionGroupContext-C1ALFrRo.js";import"./useIsFocusVisible-9CtOeZhj.js";import"./useEventCallback-CdglzKk7.js";import"./Paper-C5HeejQc.js";import"./Stack-D6CPYZyT.js";import"./getThemeProps-BJDZbo09.js";import"./useTheme-B2D66EuQ.js";import"./Box-Bl_FCMA-.js";import"./AlertTitle-CgJ0X8Ke.js";import"./Typography-CEXejR91.js";import"./useTheme-ppVJRK4K.js";import"./Grow-CnvDqgCY.js";import"./index-BEdEs92y.js";import"./utils-rI1xhfgE.js";import"./ClickAwayListener-PLDICXE-.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BmrzSuCJ.js";import"./index-DBN6CKfD.js";import"./useControlled-LQMryYpP.js";import"./useId-DB4ytVRQ.js";import"./Popper-DP4Hazya.js";import"./Button-e17qQd72.js";import"./uniqueId-m4Te-jrO.js";import"./toString-DTYmW4HR.js";import"./isObjectLike-CEcF5soC.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BIDbKf_X.js";import"./times-Dc0h0Ng9.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DrRjFvYa.js";import"./mockTableEntity-Ls7g1Mt0.js";import"./mockFileEntityACLVariants-CN9i98Fz.js";import"./fakerUtils-CTzWO-Hp.js";import"./mockFileEntity-Di8UfuWh.js";import"./mock_file_handle-CFTRkxcS.js";import"./mockEntity-Bmero52O.js";import"./mockSchema-kmzkY71_.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-BSxb1W-L.js";import"./utils-DGnta-Dt.js";import"./Link-nyIHYmpZ.js";import"./Collapse-Dh060KKb.js";import"./isNil-DJjzYbv0.js";import"./_Uint8Array-CQNSJw1K.js";import"./_baseIsEqual-DzelOY-I.js";import"./_getTag-Cu4vVg67.js";import"./tinycolor-Begke6kS.js";import"./Fade-0dVaFb0e.js";import"./Skeleton-DQA5MqtH.js";import"./inputBaseClasses-DhdwnRrM.js";import"./calculateFriendlyFileSize-O7lp0Tvc.js";import"./CheckCircleTwoTone-czsrdd7S.js";import"./InfoTwoTone-TgkinIc6.js";import"./mutation-gLD3au5E.js";import"./dayjs.min-Xq55AiAZ.js";import"./chunk-AYJ5UCUI-DSl5zc7X.js";import"./cloneDeep-DZIutRQE.js";import"./_initCloneObject-5GhKEBQ1.js";import"./isEqual-CkUvDbsf.js";import"./merge-CWQX_ITa.js";import"./util-DldtG0EP.js";import"./HelpPopover-fRuiPl3X.js";import"./MarkdownPopover-BSv9Ts6j.js";import"./LightTooltip-0BbNsUnU.js";import"./MarkdownSynapse-zRiVY5Cq.js";import"./useMutation-Bs4MQWD8.js";import"./SkeletonButton-CeFjb05B.js";import"./SkeletonInlineBlock-Bvtz7ozV.js";import"./SkeletonTable-CwfIIIRx.js";import"./SkeletonParagraph-mdtGW4O1.js";import"./HelpOutlineTwoTone-B2cr1QVf.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const kt=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{e as ProjectDataOverLimit,i as ProjectDataStorageNotSet,o as ProjectDataUnderLimit,kt as __namedExportsOrder,Lt as default};
