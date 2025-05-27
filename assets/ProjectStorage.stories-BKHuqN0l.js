import{g as s}from"./entityHandlers-nD_5pYkk.js";import{x as C,g as L,b6 as d,B as k,M as r}from"./useFiles-BOqix5tm.js";import"./VerificationSubmission-DsgC4t7y.js";import"./StringUtils-tNCAfVhp.js";import{l as O}from"./index-DbFzewXo.js";import{g as a}from"./userProfileHandlers-C8-AL8fm.js";import{P as N}from"./ProjectDataAvailability-B76tomm2.js";import"./index-BzT1cPhP.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject--yDY_I1z.js";import"./mockTeam-Czoke69K.js";import"./SynapseConstants-CdFknnGS.js";import"./OrientationBanner-CC-lZdxv.js";import"./jsx-runtime-DCJQF7Yu.js";import"./index-D7QECZ8_.js";import"./iframe-CuhiliFp.js";import"./index-D2Bvq6Nc.js";import"./spreadSx-CwcO6WA9.js";import"./react-BJjff2Hm.js";import"./FullWidthAlert-Bj3lD5jg.js";import"./Alert-BsdT6A5s.js";import"./createTheme-CuV6lKby.js";import"./resolveComponentProps-DWeRc3dZ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DvumXbvd.js";import"./createSvgIcon-B4UMNYvL.js";import"./DefaultPropsProvider-45DiC2R-.js";import"./Close-BXsOQpdh.js";import"./IconButton-Ctyxkzex.js";import"./ButtonBase-BWYPhWny.js";import"./useTimeout-JjV9Y7kR.js";import"./TransitionGroupContext-B5JkxjR-.js";import"./useIsFocusVisible-DI4OcUBX.js";import"./useEventCallback-hxJDok40.js";import"./Paper-DxoJKm8a.js";import"./Stack-B0cdQae2.js";import"./getThemeProps-BSmwECat.js";import"./useTheme-Dt6xohqk.js";import"./Box-CUPEk2R8.js";import"./AlertTitle-Du67j12O.js";import"./Typography-CgQwt_4v.js";import"./useTheme-yUrwrjvB.js";import"./Grow-BeOr-5JA.js";import"./index-DSi42yUw.js";import"./utils-DeDVuNU5.js";import"./ClickAwayListener-BC8tckZ8.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DVh9M4NB.js";import"./index-vTdvcokP.js";import"./useControlled-Ct4_TlDh.js";import"./useId-vdcc40Zz.js";import"./Popper-kEzLQScP.js";import"./Button-C36btVIf.js";import"./uniqueId-jcrIHZtG.js";import"./toString-CC6ZqTfl.js";import"./isObjectLike-CFFu1MVA.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BVVirvqx.js";import"./times-DV7shsLU.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-Bj7fSiiS.js";import"./mockTableEntity-BnAuxA_F.js";import"./mockFileEntityACLVariants-DOs4-gtZ.js";import"./fakerUtils-BwyPVZ7b.js";import"./mockFileEntity-yJS2hp71.js";import"./mock_file_handle-DS_yjaGE.js";import"./mockEntity-Csv84jz0.js";import"./mockSchema-B1M7j4SL.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-nV6OcPaD.js";import"./utils-Cttwrnae.js";import"./Link-ZjbhCfZ0.js";import"./Collapse-BLIS97ot.js";import"./isNil-Dnq5PGVr.js";import"./_Uint8Array-DOpCseV4.js";import"./_baseIsEqual-B2Du7X7-.js";import"./_getTag-DRr85OGv.js";import"./tinycolor-Begke6kS.js";import"./Fade-CnF8Do1c.js";import"./Skeleton-B5ZmudJe.js";import"./inputBaseClasses-CGTgXlAI.js";import"./calculateFriendlyFileSize-DHuViXKC.js";import"./CheckCircleTwoTone-Cc67pUZK.js";import"./InfoTwoTone-CzFGxlsS.js";import"./mutation-Dx45ojvb.js";import"./dayjs.min-DxbNjoSh.js";import"./chunk-AYJ5UCUI-Npvsl4CZ.js";import"./cloneDeep-B0BmWEKv.js";import"./_initCloneObject-C8LZoPvu.js";import"./isEqual-BkipORyh.js";import"./merge-vnkNN72-.js";import"./util-CYIXZ3sV.js";import"./HelpPopover-CMfn7v-H.js";import"./MarkdownPopover-KPAJg4lK.js";import"./LightTooltip-BYFYaCpR.js";import"./MarkdownSynapse-DLv4EUkJ.js";import"./useMutation-BKYrpj2n.js";import"./SkeletonButton-Bthyy-8R.js";import"./SkeletonInlineBlock-BZ5XcDfP.js";import"./SkeletonTable-DRVuL5cH.js";import"./SkeletonParagraph-DkpfGm0A.js";import"./HelpOutlineTwoTone-CifG9VHw.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
