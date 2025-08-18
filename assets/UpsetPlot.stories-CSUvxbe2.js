import{U as L}from"./UpsetPlot-Beld-kQs.js";import{f as u}from"./index-C_oo0XCF.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-g255t2or.js";import"./DefaultPropsProvider-B-ju6ntw.js";import"./createTheme-DYL4oeW_.js";import"./index-SaFcugpV.js";import"./iframe-4EOUQ8bB.js";import"./Button-BDnTecKg.js";import"./createSimplePaletteValueFilter-B21g1Z1B.js";import"./useTimeout-BiFxTi6S.js";import"./ButtonBase-D_LrL_Kb.js";import"./useForkRef-C9M3BeIK.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CV8o1ixC.js";import"./useFiles-C-gUuO3T.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-ChMZpXcx.js";import"./OrientationBanner-i7chEOBL.js";import"./index-hnyfaBb0.js";import"./spreadSx-CwcO6WA9.js";import"./react-D_LySHhS.js";import"./FullWidthAlert-ZH23_QpB.js";import"./Alert-BlpIy749.js";import"./useSlot-C1phbtFm.js";import"./createSvgIcon-DSjlpoje.js";import"./Close-DmgYbxUn.js";import"./IconButton-CW20bhlv.js";import"./Paper-D6tPDLnC.js";import"./useTheme-DmzMLzwD.js";import"./useTheme-sytMkMvf.js";import"./Stack-gteExr8A.js";import"./extendSxProp-DVJ6JJm9.js";import"./getThemeProps-qt9kRWHM.js";import"./Box-p2VywDDi.js";import"./AlertTitle-JRr5L8Gp.js";import"./Typography-DhQg4lom.js";import"./index-BzwUyqc8.js";import"./ClickAwayListener-CInpjJL6.js";import"./getReactElementRef-BgCOkbgy.js";import"./index-Cdh5LwB9.js";import"./index-CS1dtubf.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bn6JvDiL.js";import"./Tooltip-B3KxBNLC.js";import"./index-DRyXQikG.js";import"./useControlled-Yz390BHB.js";import"./Popper-DU4sW236.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-fxe3UGUA.js";import"./QueryClientProvider-D07X7NUM.js";import"./Link-iBTo23RV.js";import"./Collapse-DjVGkdhL.js";import"./_baseUniq-CKI6pzfM.js";import"./_Uint8Array-DebFGSR1.js";import"./isArray-DajeolBc.js";import"./_getTag-D1qiZZnQ.js";import"./isEqual-DFE9TpB7.js";import"./merge-0EmchC2B.js";import"./_initCloneObject-BVuFClPl.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ilGL8eUA.js";import"./inputBaseClasses-DBj7FKf_.js";import"./calculateFriendlyFileSize-BW8hWbGV.js";import"./CheckCircleTwoTone-CBbCrXBM.js";import"./InfoTwoTone-hVb4MJdh.js";import"./useMutation-CYjgJjg9.js";import"./dayjs.min-D4Cpfg5N.js";import"./chunk-AYJ5UCUI-CAzluCTV.js";import"./cloneDeep-Cr1TNO7O.js";import"./Skeleton-mFHBhIq8.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BaFvgOsD.js";import"./Backdrop-BqhKet6R.js";import"./LinearProgress-Bc-S8Dcd.js";import"./index-DbUx6Ek7.js";import"./index-WaV_lUio.js";import"./index-Dz2KGyQU.js";import"./const-BP60AzNb.js";import"./index-Xz1EsuVO.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
