import{N as o}from"./useFiles-DHh7ohVA.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{P as L}from"./ProjectStorageLimitAlert-DjAp5JFr.js";import"./SynapseConstants-h_7EWzLA.js";import"./OrientationBanner-Dx-xLkkA.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-COEABuGo.js";import"./index-CqkHQv7x.js";import"./iframe-BgwGFO8A.js";import"./spreadSx-CwcO6WA9.js";import"./react-DxvTb9cq.js";import"./FullWidthAlert-PvUSTn7z.js";import"./Alert-BaA8or5r.js";import"./createTheme-DvYKiu1i.js";import"./DefaultPropsProvider-7vp5Xg1U.js";import"./useSlot-DEhbeWXQ.js";import"./useForkRef-DcEMbDda.js";import"./createSimplePaletteValueFilter-DaZ5Yv0h.js";import"./createSvgIcon-xRD0VMrj.js";import"./Close-D2Pcfetn.js";import"./IconButton-C4TIHZyt.js";import"./useTimeout-uliFliSc.js";import"./ButtonBase-e0UzDey_.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B8_AL_Fq.js";import"./Paper-Bv7lETL1.js";import"./useTheme-DcxGxVMb.js";import"./useTheme-zcMKTfSN.js";import"./Stack-BqfwOgfF.js";import"./useThemeProps-Cf4wgzpW.js";import"./getThemeProps-sRjEXcdv.js";import"./extendSxProp-DtYjKP0k.js";import"./Box-CzGTAvbF.js";import"./AlertTitle-DAlWK_02.js";import"./Typography-fLt1zesl.js";import"./index-xaCPz-JY.js";import"./ClickAwayListener-DnQUb8HH.js";import"./getReactElementRef-C8AieGDO.js";import"./index-BfHw4MxA.js";import"./index-CdBb3X1w.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ZrcNPb6n.js";import"./Tooltip-DFYygHVR.js";import"./index-DbzZg3-5.js";import"./useControlled-CFGJwztc.js";import"./Popper-yYY1hnWk.js";import"./Button-DazhXTx4.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DlzHH4w5.js";import"./QueryClientProvider-EftEu6F7.js";import"./Link-Bx8Jvr9M.js";import"./Collapse-BZlk0Ykt.js";import"./_baseUniq-DSJGB-01.js";import"./_Uint8Array-V8Hqk8-a.js";import"./isArray-B_6GUJS7.js";import"./_getTag-BDrzMSis.js";import"./isEqual-ChV2ouiR.js";import"./noop-DX6rZLP_.js";import"./merge-C3l7-ucn.js";import"./_initCloneObject-Cqqx2oxm.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-bYr3BlVk.js";import"./inputBaseClasses-DfP0rQ3S.js";import"./calculateFriendlyFileSize-Cm4JOWCO.js";import"./CheckCircleTwoTone-DY5SAgNm.js";import"./InfoTwoTone-EeJ79Gmj.js";import"./useMutation-BtbqWamg.js";import"./dayjs.min-qBh4lvqk.js";import"./chunk-AYJ5UCUI-UY3Jsjzw.js";import"./cloneDeep-D4nP9Fhn.js";import"./Skeleton-Byv5D2DM.js";const Ct={title:"Synapse/Upload/ProjectStorageLimitAlert",component:L,tags:["autodocs"]},t={args:{didUploadsExceedLimit:!1,usage:{storageLocationId:o,maxAllowedFileBytes:1024*1024*100,sumFileBytes:1024*1024*90,isOverLimit:!1}}},i={args:{didUploadsExceedLimit:!0,usage:{storageLocationId:o,maxAllowedFileBytes:1024*1024*100,sumFileBytes:1024*1024*90,isOverLimit:!1}}},r={args:{didUploadsExceedLimit:!1,usage:{storageLocationId:o,maxAllowedFileBytes:1024*1024*100,sumFileBytes:1024*1024*110,isOverLimit:!0}}};var e,m,p;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    didUploadsExceedLimit: false,
    usage: {
      storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      maxAllowedFileBytes: 1024 * 1024 * 100,
      sumFileBytes: 1024 * 1024 * 90,
      isOverLimit: false
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var s,a,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    didUploadsExceedLimit: true,
    usage: {
      storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      maxAllowedFileBytes: 1024 * 1024 * 100,
      sumFileBytes: 1024 * 1024 * 90,
      isOverLimit: false
    }
  }
}`,...(d=(a=i.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var n,l,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    didUploadsExceedLimit: false,
    usage: {
      storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      maxAllowedFileBytes: 1024 * 1024 * 100,
      sumFileBytes: 1024 * 1024 * 110,
      isOverLimit: true
    }
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Dt=["Warning","UploadsExceededLimit","OverLimit"];export{r as OverLimit,i as UploadsExceededLimit,t as Warning,Dt as __namedExportsOrder,Ct as default};
