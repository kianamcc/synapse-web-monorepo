import{U as L}from"./UpsetPlot-Cw3nvqKG.js";import{f as u}from"./index-BeeltZH0.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-LrCndK5-.js";import"./DefaultPropsProvider-aVSlypVy.js";import"./createTheme-D4bqoPPK.js";import"./index-Cjx5jpdZ.js";import"./iframe-D59JS_7P.js";import"./Button-5NOW73ps.js";import"./createSimplePaletteValueFilter-CJkSs2f5.js";import"./useTimeout-CmQT8jOf.js";import"./ButtonBase-BCgZOrek.js";import"./useForkRef-DBR9Xul8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-0PfVmIwk.js";import"./useFiles-BJvbesf1.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-Dv_-Xyed.js";import"./OrientationBanner-wAeNb1aD.js";import"./index-rmcGGOl4.js";import"./spreadSx-CwcO6WA9.js";import"./react-DM4ITJBQ.js";import"./FullWidthAlert-B55Bb1bQ.js";import"./Alert-DVNnnZsV.js";import"./useSlot-Coj5idWU.js";import"./createSvgIcon-CV8IsRK9.js";import"./Close-iZy0aAu4.js";import"./IconButton-CdG5yAm0.js";import"./Paper-DkiXaEV8.js";import"./useTheme-0nJW7yzI.js";import"./useTheme-BhFvXkdX.js";import"./Stack-CRgLdNHn.js";import"./extendSxProp-BxNOKc6_.js";import"./getThemeProps-D6CxAa_J.js";import"./Box-BC59XK2Z.js";import"./AlertTitle-C3ba4AQ1.js";import"./Typography-BwlHsdrT.js";import"./index-BQQ4Ajye.js";import"./ClickAwayListener-CXLCi24x.js";import"./getReactElementRef-BcplR5Ke.js";import"./index-CmwlBUd-.js";import"./index-CgJCgvXo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DnOz08Mg.js";import"./Tooltip-L8gDN-4A.js";import"./index-D1j6hMb9.js";import"./useControlled-DTCenv9i.js";import"./Popper-DBY3xxNj.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-EbX8t3ff.js";import"./QueryClientProvider-CK7oTGte.js";import"./Link-CyrKKCnm.js";import"./Collapse-DaymGoP6.js";import"./_baseUniq-CkDAFG6Y.js";import"./_Uint8Array-BhlvdjW1.js";import"./isArray-8GJeRF5W.js";import"./_getTag-C3VAzrR4.js";import"./isEqual-C86qMBAY.js";import"./merge-DSB_ZUSu.js";import"./_initCloneObject-E_XScjy2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cdlc91Pa.js";import"./inputBaseClasses-D8eEbZWg.js";import"./calculateFriendlyFileSize-1bLd95MU.js";import"./CheckCircleTwoTone-C9bSShuA.js";import"./InfoTwoTone-DuQmgc4g.js";import"./useMutation-D_FYjk2N.js";import"./dayjs.min-CHYFLaqv.js";import"./chunk-AYJ5UCUI-DlxAltom.js";import"./cloneDeep-DItxZHSL.js";import"./Skeleton-610tAbPL.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CbKh6r7v.js";import"./Backdrop-BcQLZWvY.js";import"./LinearProgress-LpE6krIB.js";import"./index-Dt7b3pit.js";import"./index-esPc9Tkw.js";import"./index-CVrw2Qtb.js";import"./const-BP60AzNb.js";import"./index-B_EANHRr.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
