import{g as i}from"./entityHandlers-CT8x77EL.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-CDtWRh66.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-iUb2P7nV.js";import{g as m}from"./userProfileHandlers-C7Led0iB.js";import{P as L}from"./ProjectDataAvailability-UcPC0B0M.js";import"./index-RRltmgGR.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-B3_8UOQt.js";import"./mockTeam-Dkwy4MxM.js";import"./SynapseConstants-DKFdJ73Q.js";import"./OrientationBanner-Bw2hhm9s.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CnMpwM0U.js";import"./index-B1Y1SQar.js";import"./iframe-D6gq1sv4.js";import"./spreadSx-CwcO6WA9.js";import"./react-CLWcOTjn.js";import"./FullWidthAlert-DNTEiS4Z.js";import"./Alert-BSORcLd9.js";import"./createTheme-B4hKxUS9.js";import"./DefaultPropsProvider-DZdPioNL.js";import"./useSlot-6G-U546i.js";import"./useForkRef-Cym8eqpZ.js";import"./createSimplePaletteValueFilter-CkzHcWbd.js";import"./createSvgIcon-Bk0gUnDt.js";import"./Close-D4D01hQD.js";import"./IconButton-BlF3WGn2.js";import"./useTimeout-AyHDji-w.js";import"./ButtonBase-BM_vlHn6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BwsSwLYa.js";import"./Paper-DWozaVgO.js";import"./useTheme-Cp5Ie4ZG.js";import"./useTheme-DTxpHhlU.js";import"./Stack-CkH8TlAI.js";import"./extendSxProp-CJZLwvsA.js";import"./getThemeProps-uTljI9bI.js";import"./Box-BE-t5V3S.js";import"./AlertTitle-aSLQcBba.js";import"./Typography-huEi4QvC.js";import"./index-DtMmAOuf.js";import"./ClickAwayListener-CHA6O-3v.js";import"./getReactElementRef-BfWTqiuC.js";import"./index-vSos4i3w.js";import"./index-Pxasz3mk.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C1PLrN8K.js";import"./Tooltip-X5cfteO5.js";import"./index-B3zxRHeA.js";import"./useControlled-CRvO6k9i.js";import"./Popper-CoeHOVbM.js";import"./Button-Di83tVtK.js";import"./uniqueId-CI7R9zf0.js";import"./toString-mv_dZMUn.js";import"./isArray-BpcGZOxD.js";import"./isSymbol-Dvs3tof7.js";import"./times-Dk0xHobN.js";import"./_Uint8Array-BwaDsHhd.js";import"./identity-DKeuBCMA.js";import"./toInteger-BTW3Ow4U.js";import"./mockTableEntity-tuZnWyJx.js";import"./mockFileEntityACLVariants-Cjzj3Mnw.js";import"./fakerUtils-DRN16CjD.js";import"./mockFileEntity-BwO6UJEK.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-DwDLBous.js";import"./mockSchema-G6deweFd.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-CCO2MbdD.js";import"./QueryClientProvider-Brp8Mfog.js";import"./Link-CHOmSP7V.js";import"./Collapse-C9AGlskI.js";import"./_baseUniq-D3TytIMY.js";import"./_getTag-Ju5oQera.js";import"./isEqual-BE7Qr70P.js";import"./merge-B-lc-Z_e.js";import"./_initCloneObject-CdP1d7vZ.js";import"./tinycolor-Begke6kS.js";import"./Fade-CFP0AL3B.js";import"./inputBaseClasses-Dt3oByve.js";import"./calculateFriendlyFileSize-CbotoQRx.js";import"./CheckCircleTwoTone-C6_eyISX.js";import"./InfoTwoTone-B5z7bA4n.js";import"./useMutation-DMgMt8Oj.js";import"./dayjs.min-CtR5IyO8.js";import"./chunk-AYJ5UCUI-QtbymUEO.js";import"./cloneDeep-AhHUX9Vf.js";import"./Skeleton-BsUzCN1c.js";import"./HelpPopover-BQZ1kWBl.js";import"./MarkdownPopover-CYtreIKl.js";import"./LightTooltip-BHE7EoBs.js";import"./MarkdownSynapse-B0izfJJh.js";import"./SkeletonButton-B3c6pH5r.js";import"./SkeletonInlineBlock-CfJEFKxs.js";import"./SkeletonTable-C9Sr2dnx.js";import"./SkeletonParagraph-BV8AKnrA.js";import"./HelpOutlineTwoTone-DEdLs5Us.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
