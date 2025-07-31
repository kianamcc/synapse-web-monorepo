import{U as L}from"./UpsetPlot-DwmiPNGh.js";import{f as u}from"./index-C3BqksDJ.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CuhG64dV.js";import"./DefaultPropsProvider-NIGwb3IF.js";import"./createTheme-CZm5u8xp.js";import"./index-DQYT1R_u.js";import"./iframe-D5QRuwZV.js";import"./Button-Cx6foEwR.js";import"./createSimplePaletteValueFilter-BlpkqTG5.js";import"./useTimeout-BJOZpIkm.js";import"./ButtonBase-DlAYYNgC.js";import"./useForkRef-llm1BJNg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CeUza2AP.js";import"./useFiles-B1Al6y8l.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BKZsmd7G.js";import"./OrientationBanner-DlMp4fW5.js";import"./index-DRZM4w6_.js";import"./spreadSx-CwcO6WA9.js";import"./react-yozk1pbL.js";import"./FullWidthAlert-VferjZhM.js";import"./Alert-6OyH5QQC.js";import"./useSlot-C-AUXRQs.js";import"./createSvgIcon-uU6lhPjr.js";import"./Close-DZOvySMn.js";import"./IconButton-Dd2Xnt85.js";import"./Paper-ynfz7H6Q.js";import"./useTheme-B2h4mzzb.js";import"./useTheme-kKpXVon9.js";import"./Stack-BF8N0a8m.js";import"./extendSxProp-Du_VvGn2.js";import"./getThemeProps-dNuwZxMX.js";import"./Box-CFkmOq-l.js";import"./AlertTitle-pnl3d8mD.js";import"./Typography-MleCrHUm.js";import"./index-B4AHTW3Q.js";import"./ClickAwayListener-CqSYEBqu.js";import"./getReactElementRef-YmEKJ6fZ.js";import"./index-CGnrXZTC.js";import"./index-7HI6AhuL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B4OcB6o8.js";import"./Tooltip-okKEWowT.js";import"./index-CAQemz-f.js";import"./useControlled-CykWwMQP.js";import"./Popper-6CHeDotq.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-WRFY3HlG.js";import"./QueryClientProvider-DRYwtiwp.js";import"./Link-DcHpNyh6.js";import"./Collapse-DwkCyade.js";import"./_baseUniq-Cezgv792.js";import"./_Uint8Array-D_CFOAET.js";import"./isArray-BH7qAhf0.js";import"./_getTag-DvY-j0AQ.js";import"./isEqual-DgrYqCvn.js";import"./merge-AWTlQDqG.js";import"./_initCloneObject-BUeyNxsB.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D9FKoKgS.js";import"./inputBaseClasses-BOR_FqWz.js";import"./calculateFriendlyFileSize-DoduwL8E.js";import"./CheckCircleTwoTone-WBDDGY6B.js";import"./InfoTwoTone-4TfPN_vb.js";import"./useMutation-DIb7e56m.js";import"./dayjs.min-JP37EtNM.js";import"./chunk-AYJ5UCUI-C4a9m5tK.js";import"./cloneDeep-B9q3B7rM.js";import"./Skeleton-JMTGmtrq.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BM2cMm6s.js";import"./Backdrop-CghBti2p.js";import"./LinearProgress-hmvE2hV-.js";import"./index-CW_nidJm.js";import"./index-CQ88SgQU.js";import"./index-izVy7pMc.js";import"./const-BP60AzNb.js";import"./index-BniGMeVD.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
