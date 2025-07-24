import{U as L}from"./UpsetPlot-DMf7-Ug2.js";import{f as u}from"./index-BnA4VYq9.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Bhciw2MA.js";import"./DefaultPropsProvider-CLHCDatu.js";import"./createTheme-CHnERlHu.js";import"./index-CZ_Xbo9d.js";import"./iframe-CboxRUYY.js";import"./Button-fVBf25xZ.js";import"./createSimplePaletteValueFilter-DcXdmF7a.js";import"./useTimeout-IWqnlP_c.js";import"./ButtonBase-C3Ub9arw.js";import"./useForkRef-DlNQmSoI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B85vBXt_.js";import"./useFiles-BHsZDc6w.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-DZP8Q-Ok.js";import"./OrientationBanner-1ivb8fJK.js";import"./index-C6G8fBMj.js";import"./spreadSx-CwcO6WA9.js";import"./react-exrv6PR3.js";import"./FullWidthAlert-DRTcoFsU.js";import"./Alert-DtrbFnhk.js";import"./useSlot-BxOF9eug.js";import"./createSvgIcon-5IvX-7Gl.js";import"./Close-Csqf9CGW.js";import"./IconButton-bzPPjluh.js";import"./Paper-DZF35SV3.js";import"./useTheme-BExNHEet.js";import"./useTheme-BesulHm4.js";import"./Stack-DP88hTUX.js";import"./extendSxProp-BGoZpgRj.js";import"./getThemeProps-oZ99LySU.js";import"./Box-CczoC0JY.js";import"./AlertTitle-DnOqIXzY.js";import"./Typography-C4GYv4Qe.js";import"./index-Cq4nKCYL.js";import"./ClickAwayListener-2RurDTCP.js";import"./getReactElementRef-DHAwdYX_.js";import"./index-BOgWLZwP.js";import"./index-B5KBvkTS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-6OtmzlvI.js";import"./Tooltip-PeTAy79u.js";import"./index-zIcecOCu.js";import"./useControlled-B1oSeoHd.js";import"./Popper-Y5LcPV0H.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-lDHZB5F5.js";import"./QueryClientProvider-BxtBD_IW.js";import"./Link-DX8Kn-Mc.js";import"./Collapse-BQXq5EgG.js";import"./_baseUniq-a_wEf1dg.js";import"./_Uint8Array-C2XsuwmT.js";import"./isArray-D_w5bihx.js";import"./_getTag-BKrfMauQ.js";import"./isEqual-MxjzF7i1.js";import"./merge-CG7mNSoO.js";import"./_initCloneObject-BEyq37Wr.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DY45Z52z.js";import"./inputBaseClasses-DLLj_uoF.js";import"./calculateFriendlyFileSize-DQuFDsgM.js";import"./CheckCircleTwoTone-gau2IxYU.js";import"./InfoTwoTone-Dsym26wY.js";import"./useMutation-CEx8g1At.js";import"./dayjs.min-gZfCache.js";import"./chunk-AYJ5UCUI-CB-CPdOO.js";import"./cloneDeep-BC3jaoK6.js";import"./Skeleton-CrSZ9kVD.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BpJEpe5l.js";import"./Backdrop-BYOg732m.js";import"./LinearProgress-CwMA6Nb5.js";import"./index-BthJ6wMv.js";import"./index-CWLiH0TN.js";import"./index-CADxBvrC.js";import"./const-BP60AzNb.js";import"./index-DPhtq8dt.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const jt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,jt as __namedExportsOrder,$t as default};
