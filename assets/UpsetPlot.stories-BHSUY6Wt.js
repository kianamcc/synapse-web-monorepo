import{U as L}from"./UpsetPlot-BSkWpxNV.js";import{f as u}from"./index-DGDHTL-L.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-daGbXfuX.js";import"./DefaultPropsProvider-Cyw12EVv.js";import"./createTheme-DVjZoLcM.js";import"./index-iHqCGgSD.js";import"./iframe-B7lNEjCA.js";import"./Button-D1Zc7cY5.js";import"./createSimplePaletteValueFilter-BiBnMtNg.js";import"./useTimeout-BDErO9dO.js";import"./ButtonBase-CpibtBKw.js";import"./useForkRef-QOk-agIc.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CSoU-aEZ.js";import"./useFiles-DsV7Uqwg.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DL5YhH4S.js";import"./OrientationBanner-mORNTher.js";import"./index-CP2flBOM.js";import"./spreadSx-CwcO6WA9.js";import"./react-C8gp6qo_.js";import"./FullWidthAlert-hDDl8tGl.js";import"./Alert-Blqd_fNk.js";import"./useSlot-Co92EhaQ.js";import"./createSvgIcon-zcikS4QR.js";import"./Close-DTFq5PlQ.js";import"./IconButton-MRX9Tl10.js";import"./Paper-l2vU89bV.js";import"./useTheme-DdAf-Ccq.js";import"./useTheme-BpTHkjke.js";import"./Stack-D4AYLr5g.js";import"./useThemeProps-BtqvP0WI.js";import"./getThemeProps-D1SG0DsT.js";import"./extendSxProp-C7d5w1mF.js";import"./Box-CDAuR3Sa.js";import"./AlertTitle-DxXMQd8X.js";import"./Typography-DBnwRkQ7.js";import"./index--3ZaasC4.js";import"./ClickAwayListener-DrGahT-8.js";import"./getReactElementRef-Deaobhwy.js";import"./index-CuVSgrUP.js";import"./index-BqdGDFpd.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D_bI5i2G.js";import"./Tooltip-lUCmHMJ3.js";import"./index-Do8mbRFX.js";import"./useControlled-CTTwHfL4.js";import"./Popper-DbiyN3lk.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DQoxcdop.js";import"./QueryClientProvider-DZo2I7_f.js";import"./Link-8oHfVMM1.js";import"./Collapse-PeaT3Cz9.js";import"./_baseUniq-BioGUUFG.js";import"./_Uint8Array-4Fua8vo1.js";import"./isArray-BVc5tk0h.js";import"./_getTag-DMNH3Rat.js";import"./isEqual-DVzAcMpg.js";import"./noop-DX6rZLP_.js";import"./merge-DN43w6rZ.js";import"./_initCloneObject-D074hTky.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BrjpvEaI.js";import"./inputBaseClasses-CZKuk046.js";import"./calculateFriendlyFileSize-ChX25_t7.js";import"./CheckCircleTwoTone-Ck5csnvz.js";import"./InfoTwoTone-C4STztOF.js";import"./useMutation-BNmK4RdG.js";import"./dayjs.min-4LP4YV8J.js";import"./chunk-AYJ5UCUI-C7xelVKS.js";import"./cloneDeep-C13AQJD-.js";import"./Skeleton-BOqcwHCi.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DFCQZmux.js";import"./Backdrop-Citfx5Ol.js";import"./LinearProgress-DoN5Jcz6.js";import"./index-BU6AEv2I.js";import"./index-BmU6XSoa.js";import"./index-B4OaMr7Q.js";import"./const-BP60AzNb.js";import"./index-Bix6A5Qh.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
