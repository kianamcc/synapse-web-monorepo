import{U as L}from"./UpsetPlot-DKxbh7sP.js";import{f as u}from"./index-81BT2eIb.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-WUi9hlmS.js";import"./DefaultPropsProvider-CiYbQb_9.js";import"./createTheme-Du8MDNhB.js";import"./index-CoVtI-xb.js";import"./iframe-DUu9OdnM.js";import"./Button-B1FnGMz7.js";import"./createSimplePaletteValueFilter-DgIIyTIB.js";import"./useTimeout-CRHwCDIR.js";import"./ButtonBase-3nofq4HX.js";import"./useForkRef-DOuz__9t.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DtmVjeV6.js";import"./useFiles-10WvwUiI.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-BAmbitfp.js";import"./OrientationBanner-CqW8PdNz.js";import"./index-HvcXhtfG.js";import"./spreadSx-CwcO6WA9.js";import"./react-DyejcOoi.js";import"./FullWidthAlert-C3kOOW_L.js";import"./Alert-BtW2b58q.js";import"./useSlot-B6m91aYh.js";import"./createSvgIcon-BAsNb6OD.js";import"./Close-DLm_wjPS.js";import"./IconButton-zDsqyHsc.js";import"./Paper-P_sDZS-X.js";import"./useTheme-CYKJrkuq.js";import"./useTheme-DmlP-k9i.js";import"./Stack-CLUKjvtf.js";import"./extendSxProp-ClDjEU18.js";import"./getThemeProps-DgDMAZWx.js";import"./Box-Ch_v2S4J.js";import"./AlertTitle-YCxZ5MOw.js";import"./Typography-5p45kTdy.js";import"./index-CUP6LRFl.js";import"./ClickAwayListener-DRx6M7iy.js";import"./getReactElementRef-FAB4jlM9.js";import"./index-BKWRA2xg.js";import"./index-DChCQJJU.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BCnK7aqr.js";import"./Tooltip-BAoTBYM7.js";import"./index-BNIQ4RPO.js";import"./useControlled-BZR2UL1P.js";import"./Popper-DY91ZY1N.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CtBK6zNW.js";import"./QueryClientProvider-C066c5PM.js";import"./Link-BLFTQrs5.js";import"./Collapse-CoVJ_DuI.js";import"./_baseUniq-DD24tBQY.js";import"./_Uint8Array-DgfOMh6Z.js";import"./isArray-sc4l1n3T.js";import"./_getTag-DTtUFnCa.js";import"./isEqual-r9h2YXXh.js";import"./merge-cknK0M2-.js";import"./_initCloneObject-sxyD15a5.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cs9N-W8S.js";import"./inputBaseClasses-B-8TyBvE.js";import"./calculateFriendlyFileSize-BcEBEI0z.js";import"./CheckCircleTwoTone-C14QcJOh.js";import"./InfoTwoTone-tsXohu8b.js";import"./useMutation-yg0lKRFU.js";import"./dayjs.min-DAf82Hb0.js";import"./chunk-AYJ5UCUI-DE47_ibu.js";import"./cloneDeep-CttCoTwL.js";import"./Skeleton-C79Pztuw.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CTkoYvcX.js";import"./Backdrop-CbWDIlHy.js";import"./LinearProgress-BAzEoI-L.js";import"./index-CaR4x_f9.js";import"./index-CC1quxdM.js";import"./index-BKys6fU6.js";import"./const-BP60AzNb.js";import"./index-CtRRqFci.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
