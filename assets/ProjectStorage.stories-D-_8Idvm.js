import{g as i}from"./entityHandlers-C2AvUqiX.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-C-i-TLaj.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-BbR7b1mm.js";import{g as m}from"./userProfileHandlers-DFfWAFQn.js";import{P as L}from"./ProjectDataAvailability-zCIEnjNc.js";import"./index-C8Vn8ad9.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-C2YKbQZ7.js";import"./mockTeam-CjyICy-W.js";import"./SynapseConstants-yTPP4ibJ.js";import"./OrientationBanner-NrJ6x3Um.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CDfw4ibi.js";import"./index-DgWzafQX.js";import"./iframe-DYYJI8IR.js";import"./spreadSx-CwcO6WA9.js";import"./react-iznkqUdM.js";import"./FullWidthAlert-BQHSiNTn.js";import"./Alert-HaV25ohz.js";import"./createTheme-BtKsFDJb.js";import"./DefaultPropsProvider-dQjI1z2Q.js";import"./useSlot-DbqTD4GH.js";import"./useForkRef-CGFekAbF.js";import"./createSimplePaletteValueFilter-Ba6BSjt1.js";import"./createSvgIcon-BUeMPEos.js";import"./Close-UaYlRgay.js";import"./IconButton-COMh1wHt.js";import"./useTimeout-KbnpBUav.js";import"./ButtonBase-BV_Svz33.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DPoJlQv3.js";import"./Paper-DRUFVFuo.js";import"./useTheme-DexxAIst.js";import"./useTheme-BsTX5Njf.js";import"./Stack-Bl6utGYW.js";import"./extendSxProp-BXLCqC37.js";import"./getThemeProps-CvDTyZg4.js";import"./Box-Cdu-p-p4.js";import"./AlertTitle-CdvYF1_e.js";import"./Typography-B14dxalQ.js";import"./index-C3kEk841.js";import"./ClickAwayListener-wW66lH_8.js";import"./getReactElementRef-Y7YbnsRM.js";import"./index-WIAOxyN4.js";import"./index-xnuC7E17.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DQ1fqbs3.js";import"./Tooltip-BHNuZilH.js";import"./index-LvNsMawH.js";import"./useControlled-D8oIXpId.js";import"./Popper-D_-SBC88.js";import"./Button-BOnfz6gg.js";import"./uniqueId-BglpAIva.js";import"./toString-BvcIQOXp.js";import"./isArray-BGIATQGG.js";import"./isSymbol-DLbn4Kpm.js";import"./times-CpU7idBi.js";import"./_Uint8Array-DDn9cgNP.js";import"./identity-DKeuBCMA.js";import"./toInteger-DqaEzSyQ.js";import"./mockTableEntity-CCricxQB.js";import"./mockFileEntityACLVariants-2dmmlEut.js";import"./fakerUtils-Cb5dptET.js";import"./mockFileEntity-D10aYdFH.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-CSSHvh1K.js";import"./mockSchema-xC6xcxH2.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-ClCjMDWJ.js";import"./QueryClientProvider-CRpEytM8.js";import"./Link-CsVZIIuu.js";import"./Collapse-y9LqLB1R.js";import"./_baseUniq-B0QZMQbs.js";import"./_getTag-CLNtpywB.js";import"./isEqual-C6OErc_G.js";import"./merge-D1h1ZS53.js";import"./_initCloneObject-zYU2LTGg.js";import"./tinycolor-Begke6kS.js";import"./Fade-KgKZEq5O.js";import"./inputBaseClasses-BgY73dJx.js";import"./calculateFriendlyFileSize-BkLSPg13.js";import"./CheckCircleTwoTone-C-4wcfQx.js";import"./InfoTwoTone-Dh3NE58z.js";import"./useMutation-CLEhG4KT.js";import"./dayjs.min-Entwoms8.js";import"./chunk-AYJ5UCUI-DhVmQ0rH.js";import"./cloneDeep-D2GQBrr3.js";import"./Skeleton-CxQjpvSA.js";import"./HelpPopover-CBzwFztl.js";import"./MarkdownPopover-BJfO0Onn.js";import"./LightTooltip-mJGbZq5R.js";import"./MarkdownSynapse-B7z4Wjvh.js";import"./SkeletonButton-BNKSw9Cp.js";import"./SkeletonInlineBlock-2xsFwoUg.js";import"./SkeletonTable-C9QZQI4i.js";import"./SkeletonParagraph-BG8L1q7d.js";import"./HelpOutlineTwoTone-BdF4wYqf.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
