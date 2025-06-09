import{g as s}from"./entityHandlers-1y_XB5em.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-BK3Gh0_l.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-CWNPHEiF.js";import{g as a}from"./userProfileHandlers-EUTzLKzs.js";import{P as N}from"./ProjectDataAvailability-6FQAa1BR.js";import"./index-s1IOd7eQ.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-B2unru0z.js";import"./mockTeam-D0UpEG4M.js";import"./SynapseConstants-2Xj6Yp9b.js";import"./OrientationBanner-TpvFF3Ts.js";import"./jsx-runtime-CfniUVqD.js";import"./index-w8r01unF.js";import"./iframe-CUCSdczr.js";import"./index-BSHGj6el.js";import"./spreadSx-CwcO6WA9.js";import"./react-DlNSOGk7.js";import"./FullWidthAlert-BBqcXFew.js";import"./Alert-Cv2aYRot.js";import"./createTheme-Dy24wF_1.js";import"./resolveComponentProps-ma8JMEbU.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D7k89ytA.js";import"./createSvgIcon-l6KdUt_U.js";import"./DefaultPropsProvider-CbfxmOUo.js";import"./Close-BFG1LR7b.js";import"./IconButton-URRSVn69.js";import"./ButtonBase-CXLjw9mJ.js";import"./useTimeout-Bu1cnb2B.js";import"./TransitionGroupContext-DqohVvaO.js";import"./useIsFocusVisible-hjtORhQC.js";import"./useEventCallback-CFNiwpIz.js";import"./Paper-D0_uR9Sy.js";import"./Stack-B5FK2opb.js";import"./getThemeProps-CUgjtIi1.js";import"./useTheme-D-9dB31D.js";import"./Box-BkoKjff6.js";import"./AlertTitle-BL4ZbCob.js";import"./Typography-Db2qQfaM.js";import"./useTheme-D5QJEr0B.js";import"./Grow-BRrJzSUm.js";import"./index-Dtn10zyK.js";import"./utils-D80l6d7_.js";import"./ClickAwayListener-CvxkHeNi.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DxsSs5eW.js";import"./index-CYfQTFsZ.js";import"./useControlled-0G6SdZ8L.js";import"./useId-DskmTTOE.js";import"./Popper-VDjvMyAP.js";import"./Button-DcA6Wnl8.js";import"./uniqueId-CEuX8h5x.js";import"./toString-DlXGyx2c.js";import"./isObjectLike-DD2yD6S-.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-C_ONlG-P.js";import"./times-D7LY3lwe.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-dNgW8dgx.js";import"./mockTableEntity-D0mJdYlN.js";import"./mockFileEntityACLVariants-B-Mv2kGR.js";import"./fakerUtils-BSd2OuFA.js";import"./mockFileEntity-BZcM2-ge.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-BlAFxWIY.js";import"./mockSchema-BUUBeqcv.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-CT-b_ugC.js";import"./utils-Dycl1YZq.js";import"./Link-Cjca69dE.js";import"./Collapse-C36U9yxB.js";import"./isNil-CgpPL_Iw.js";import"./_Uint8Array-BuM38brZ.js";import"./_baseIsEqual-E8uLXCBr.js";import"./_getTag-WOUCB7X1.js";import"./tinycolor-Begke6kS.js";import"./Fade-DH2_TrMQ.js";import"./Skeleton-CvR3Skml.js";import"./inputBaseClasses-DljKtXei.js";import"./calculateFriendlyFileSize-CMfGmUEf.js";import"./CheckCircleTwoTone-BQWHkcPQ.js";import"./InfoTwoTone-CKODhZkq.js";import"./useMutation-BPptyNQx.js";import"./isEqual-C71nV6ON.js";import"./dayjs.min-CMsY32ZI.js";import"./chunk-AYJ5UCUI-DQQgLh9r.js";import"./cloneDeep-Q3oOVsTG.js";import"./_initCloneObject-CzY22ryU.js";import"./merge-Cj45Y_uR.js";import"./util-DE1IQY3C.js";import"./HelpPopover-rmK5itNb.js";import"./MarkdownPopover-ClLCZe_F.js";import"./LightTooltip-D84bCIaB.js";import"./MarkdownSynapse-W90RTD4a.js";import"./SkeletonButton-CC-kO4fp.js";import"./SkeletonInlineBlock-DTX6z7T8.js";import"./SkeletonTable-BJ76Wpba.js";import"./SkeletonParagraph-DPCIY1Yd.js";import"./HelpOutlineTwoTone-ggXt6j4f.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
