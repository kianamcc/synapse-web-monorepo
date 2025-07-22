import{U as L}from"./UpsetPlot-CU3efNO1.js";import{f as u}from"./index-Dx4JoknI.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Dxh-m5tR.js";import"./DefaultPropsProvider-B_3cQ3H3.js";import"./createTheme-kMUgK5rV.js";import"./index-S6JpS9L6.js";import"./iframe-Dpemo47m.js";import"./Button-CtLeedch.js";import"./createSimplePaletteValueFilter-VUTiuKKk.js";import"./useTimeout-CSwOi-FM.js";import"./ButtonBase-CNAjaap7.js";import"./useForkRef-rAm_J8Sg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BQEgQBJb.js";import"./useFiles-7QOjYuHz.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-DlPVwMta.js";import"./OrientationBanner-CbJZWNle.js";import"./index-9VYu8pA-.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cy4t5e3X.js";import"./FullWidthAlert-CTqsHr4s.js";import"./Alert-CYDi7tP1.js";import"./useSlot-Bq7ZiTFS.js";import"./createSvgIcon-Bq1h7iWH.js";import"./Close-DisxFzti.js";import"./IconButton-B2sumVtV.js";import"./Paper-CtW16pnR.js";import"./useTheme-CPuYTQz7.js";import"./useTheme-CsEvq3lC.js";import"./Stack-C-Goak6Z.js";import"./extendSxProp-B70D5Qae.js";import"./getThemeProps-Bm2Tmxpo.js";import"./Box-C0crqIka.js";import"./AlertTitle-lA6diPt0.js";import"./Typography-CTRDWlrM.js";import"./index-D4ah_lCb.js";import"./ClickAwayListener-BKECwq7p.js";import"./getReactElementRef-D6KgKjxL.js";import"./index-BVUn8srT.js";import"./index-Cp0QLfYr.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BaPqyB1t.js";import"./Tooltip-1fUS7Bwt.js";import"./index-CDcQdrbH.js";import"./useControlled-DlDksA-M.js";import"./Popper-zdckR06h.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CfFtTyHe.js";import"./QueryClientProvider-DiUIsS9m.js";import"./Link-DvFKUPFA.js";import"./Collapse-BniBrM48.js";import"./_baseUniq-BncWtpK0.js";import"./_Uint8Array-DetXu6Ah.js";import"./isArray-1XlwyKON.js";import"./_getTag-CWpAsd9x.js";import"./isEqual-D_alJvEx.js";import"./merge-B521QHJ6.js";import"./_initCloneObject-9IQwVB84.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ByOrnSh7.js";import"./inputBaseClasses-VdtSh-Ow.js";import"./calculateFriendlyFileSize-CFmbrpaE.js";import"./CheckCircleTwoTone-DLHDeNik.js";import"./InfoTwoTone-DK8KV4VZ.js";import"./useMutation-Du_r23yb.js";import"./dayjs.min-BVk991pC.js";import"./chunk-AYJ5UCUI-BIXYhaRs.js";import"./cloneDeep-BmdwTKPh.js";import"./Skeleton-WKRtG0tU.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CJFtaRH9.js";import"./Backdrop-D-wUYz0z.js";import"./LinearProgress-ia2TBLUh.js";import"./index-wpE8B7yP.js";import"./index-CKarIZp6.js";import"./index-CDEY_cPa.js";import"./const-BP60AzNb.js";import"./index-DRaWE-TO.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
