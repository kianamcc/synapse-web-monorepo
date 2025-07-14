import{U as L}from"./UpsetPlot-BdulND1r.js";import{f as u}from"./index-q6RpN53O.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DAN9Y5z7.js";import"./DefaultPropsProvider-BRXhGtBW.js";import"./createTheme-CrkgGHcI.js";import"./index-sk6gXDvC.js";import"./iframe-_K4D7cYy.js";import"./Button-CCbz6eS3.js";import"./createSimplePaletteValueFilter-TyKM-CfR.js";import"./useTimeout-CIVHDma7.js";import"./ButtonBase-CyKfT1Wa.js";import"./useForkRef-D0BMzfT8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-VIv6_Kop.js";import"./useFiles-BbJ5o2Ed.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-Ygip4hFC.js";import"./OrientationBanner-BPtaqrpe.js";import"./index-CergElHO.js";import"./spreadSx-CwcO6WA9.js";import"./react-CKJV6Ks4.js";import"./FullWidthAlert-B0SFUulU.js";import"./Alert-BdbA0TB7.js";import"./useSlot-BG5G-iVz.js";import"./createSvgIcon-CtdiqD4i.js";import"./Close-Bu7-9AnV.js";import"./IconButton-DNmOnto9.js";import"./Paper-B33spbNN.js";import"./useTheme-CeqTy89F.js";import"./useTheme-CKLgr9Xs.js";import"./Stack-DxppTaJ1.js";import"./extendSxProp-B5fFeT4X.js";import"./getThemeProps-CIDrLfBX.js";import"./Box-D_kLBftC.js";import"./AlertTitle-BY8ZzEDY.js";import"./Typography-Dqy4yjFQ.js";import"./index-Ci4Vbdfq.js";import"./ClickAwayListener-B49HXzSs.js";import"./getReactElementRef-D_i8xeIM.js";import"./index-sQxW26gI.js";import"./index-C0sWEppT.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Ccy6EnHD.js";import"./Tooltip-QkmoIlKT.js";import"./index-Dmv2LpPJ.js";import"./useControlled-R0AQnnLf.js";import"./Popper-CtUJ7Q7C.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-aKKXjVSr.js";import"./QueryClientProvider-BK-Mh5RA.js";import"./Link-C1F0j2id.js";import"./Collapse-B2qMB9TZ.js";import"./_baseUniq-DiN75sTS.js";import"./_Uint8Array-Cp--bUx5.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DgxErohx.js";import"./isArray-Dxzbedgu.js";import"./_getTag-UdgsmegY.js";import"./isEqual-R3OPMgEk.js";import"./merge-Dc0N-UH6.js";import"./_initCloneObject-DKyLWHR1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-nJPjkcgY.js";import"./inputBaseClasses-HU3PdiHJ.js";import"./calculateFriendlyFileSize-CnohUo3x.js";import"./CheckCircleTwoTone-B6wjqc_X.js";import"./InfoTwoTone-ZvyGG8U-.js";import"./useMutation-DAbwO7YE.js";import"./dayjs.min-kJlIbqmb.js";import"./chunk-AYJ5UCUI-tBxPaLzm.js";import"./cloneDeep-wsABOJ5h.js";import"./Skeleton-Bl3E-zaC.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-HydKWxE9.js";import"./Backdrop-DL1c8HWq.js";import"./LinearProgress-Bm4JRtub.js";import"./index-E5JuAfVI.js";import"./index-CJCCbQgL.js";import"./index-BZ85WGwk.js";import"./const-BP60AzNb.js";import"./index-Csxwy-af.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
