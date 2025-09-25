import{U as L}from"./UpsetPlot-C1rEa2nf.js";import{f as u}from"./index-qjKf-Tcm.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-cJwKxgZN.js";import"./DefaultPropsProvider-DZdPioNL.js";import"./createTheme-B4hKxUS9.js";import"./index-B1Y1SQar.js";import"./iframe-D6gq1sv4.js";import"./Button-Di83tVtK.js";import"./createSimplePaletteValueFilter-CkzHcWbd.js";import"./useTimeout-AyHDji-w.js";import"./ButtonBase-BM_vlHn6.js";import"./useForkRef-Cym8eqpZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BwsSwLYa.js";import"./useFiles-CDtWRh66.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DKFdJ73Q.js";import"./OrientationBanner-Bw2hhm9s.js";import"./index-CnMpwM0U.js";import"./spreadSx-CwcO6WA9.js";import"./react-CLWcOTjn.js";import"./FullWidthAlert-DNTEiS4Z.js";import"./Alert-BSORcLd9.js";import"./useSlot-6G-U546i.js";import"./createSvgIcon-Bk0gUnDt.js";import"./Close-D4D01hQD.js";import"./IconButton-BlF3WGn2.js";import"./Paper-DWozaVgO.js";import"./useTheme-Cp5Ie4ZG.js";import"./useTheme-DTxpHhlU.js";import"./Stack-CkH8TlAI.js";import"./extendSxProp-CJZLwvsA.js";import"./getThemeProps-uTljI9bI.js";import"./Box-BE-t5V3S.js";import"./AlertTitle-aSLQcBba.js";import"./Typography-huEi4QvC.js";import"./index-DtMmAOuf.js";import"./ClickAwayListener-CHA6O-3v.js";import"./getReactElementRef-BfWTqiuC.js";import"./index-vSos4i3w.js";import"./index-Pxasz3mk.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C1PLrN8K.js";import"./Tooltip-X5cfteO5.js";import"./index-B3zxRHeA.js";import"./useControlled-CRvO6k9i.js";import"./Popper-CoeHOVbM.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CCO2MbdD.js";import"./QueryClientProvider-Brp8Mfog.js";import"./Link-CHOmSP7V.js";import"./Collapse-C9AGlskI.js";import"./_baseUniq-D3TytIMY.js";import"./_Uint8Array-BwaDsHhd.js";import"./isArray-BpcGZOxD.js";import"./_getTag-Ju5oQera.js";import"./isEqual-BE7Qr70P.js";import"./merge-B-lc-Z_e.js";import"./_initCloneObject-CdP1d7vZ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CFP0AL3B.js";import"./inputBaseClasses-Dt3oByve.js";import"./calculateFriendlyFileSize-CbotoQRx.js";import"./CheckCircleTwoTone-C6_eyISX.js";import"./InfoTwoTone-B5z7bA4n.js";import"./useMutation-DMgMt8Oj.js";import"./dayjs.min-CtR5IyO8.js";import"./chunk-AYJ5UCUI-QtbymUEO.js";import"./cloneDeep-AhHUX9Vf.js";import"./Skeleton-BsUzCN1c.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-RqzVqi1o.js";import"./Backdrop-DWeJw7oD.js";import"./LinearProgress-BEyfeSPI.js";import"./index-BJ-VhBzA.js";import"./index-DUhrhuOh.js";import"./index-DycN3Sgg.js";import"./const-BP60AzNb.js";import"./index-BcAGyWQs.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
