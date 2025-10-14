import{U as L}from"./UpsetPlot-CIKRVLx8.js";import{f as u}from"./index-vQk84CCS.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-M-Q4lkKj.js";import"./DefaultPropsProvider-7vp5Xg1U.js";import"./createTheme-DvYKiu1i.js";import"./index-CqkHQv7x.js";import"./iframe-BgwGFO8A.js";import"./Button-DazhXTx4.js";import"./createSimplePaletteValueFilter-DaZ5Yv0h.js";import"./useTimeout-uliFliSc.js";import"./ButtonBase-e0UzDey_.js";import"./useForkRef-DcEMbDda.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B8_AL_Fq.js";import"./useFiles-DHh7ohVA.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-h_7EWzLA.js";import"./OrientationBanner-Dx-xLkkA.js";import"./index-COEABuGo.js";import"./spreadSx-CwcO6WA9.js";import"./react-DxvTb9cq.js";import"./FullWidthAlert-PvUSTn7z.js";import"./Alert-BaA8or5r.js";import"./useSlot-DEhbeWXQ.js";import"./createSvgIcon-xRD0VMrj.js";import"./Close-D2Pcfetn.js";import"./IconButton-C4TIHZyt.js";import"./Paper-Bv7lETL1.js";import"./useTheme-DcxGxVMb.js";import"./useTheme-zcMKTfSN.js";import"./Stack-BqfwOgfF.js";import"./useThemeProps-Cf4wgzpW.js";import"./getThemeProps-sRjEXcdv.js";import"./extendSxProp-DtYjKP0k.js";import"./Box-CzGTAvbF.js";import"./AlertTitle-DAlWK_02.js";import"./Typography-fLt1zesl.js";import"./index-xaCPz-JY.js";import"./ClickAwayListener-DnQUb8HH.js";import"./getReactElementRef-C8AieGDO.js";import"./index-BfHw4MxA.js";import"./index-CdBb3X1w.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ZrcNPb6n.js";import"./Tooltip-DFYygHVR.js";import"./index-DbzZg3-5.js";import"./useControlled-CFGJwztc.js";import"./Popper-yYY1hnWk.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DlzHH4w5.js";import"./QueryClientProvider-EftEu6F7.js";import"./Link-Bx8Jvr9M.js";import"./Collapse-BZlk0Ykt.js";import"./_baseUniq-DSJGB-01.js";import"./_Uint8Array-V8Hqk8-a.js";import"./isArray-B_6GUJS7.js";import"./_getTag-BDrzMSis.js";import"./isEqual-ChV2ouiR.js";import"./noop-DX6rZLP_.js";import"./merge-C3l7-ucn.js";import"./_initCloneObject-Cqqx2oxm.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-bYr3BlVk.js";import"./inputBaseClasses-DfP0rQ3S.js";import"./calculateFriendlyFileSize-Cm4JOWCO.js";import"./CheckCircleTwoTone-DY5SAgNm.js";import"./InfoTwoTone-EeJ79Gmj.js";import"./useMutation-BtbqWamg.js";import"./dayjs.min-qBh4lvqk.js";import"./chunk-AYJ5UCUI-UY3Jsjzw.js";import"./cloneDeep-D4nP9Fhn.js";import"./Skeleton-Byv5D2DM.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-9GdNVsg6.js";import"./Backdrop-Clmc0NfY.js";import"./LinearProgress-CIl1aJBV.js";import"./index-OWhTYnqX.js";import"./index-6P8pJV2k.js";import"./index-D3whyj22.js";import"./const-BP60AzNb.js";import"./index-FoHMFtp0.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Individuals (#) per Assay',
    combinationName: 'Individuals (#)',
    summaryLink: '#',
    summaryLinkText: 'Explore All Of Something',
    onClick: selection => {
      const sets = (selection as any).sets;
      const query: Query = {
        sql: 'select * from syn12345',
        // stub files sql
        selectedFacets: [{
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'Assays',
          facetValues: [...sets.values()].map((v: any) => v.name) as string[]
        }]
      };
      const url = \`/Explore/Data%20by%20Files?QueryWrapper0=\${JSON.stringify(query)}\`;
      console.log(url);
    }
  }
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: fn()
  }
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    variant: 'ampals',
    onClick: fn()
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
