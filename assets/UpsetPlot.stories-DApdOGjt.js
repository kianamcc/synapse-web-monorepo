import{U as L}from"./UpsetPlot-MpocTHt2.js";import{f as u}from"./index-Bf61-lyM.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BaetPLw4.js";import"./DefaultPropsProvider-iTx7GsE7.js";import"./createTheme-GV_Olv53.js";import"./index-BjoZTSdd.js";import"./iframe-fa6FWvKT.js";import"./Button-CTnp1SQV.js";import"./createSimplePaletteValueFilter-Dj8MKYr2.js";import"./useTimeout-DQ1BoxMI.js";import"./ButtonBase-MKtFsRwN.js";import"./useForkRef-BNGjBTqL.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-IHqt-grH.js";import"./useFiles-BOFiuD6U.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BPIN8KFM.js";import"./OrientationBanner-CIZcXSCl.js";import"./index-DNdz4XPZ.js";import"./spreadSx-CwcO6WA9.js";import"./react-pq0ScVQj.js";import"./FullWidthAlert-aIfZQ6oh.js";import"./Alert-Dm1192DW.js";import"./useSlot-CmxOjz68.js";import"./createSvgIcon-B3jUNEYw.js";import"./Close-BI_C3xNe.js";import"./IconButton-BzTLIkaJ.js";import"./Paper-CzsHM74K.js";import"./useTheme-DKW6Bsu2.js";import"./useTheme-oCmt2abW.js";import"./Stack-DH9s3_SR.js";import"./extendSxProp-CI1neDzi.js";import"./getThemeProps-CDMuVggh.js";import"./Box-ByUR785-.js";import"./AlertTitle-DArRKOzs.js";import"./Typography-C-T5QtED.js";import"./index-BEhV25tM.js";import"./ClickAwayListener-hA5lV_qM.js";import"./getReactElementRef-CjGLUc90.js";import"./index-BhL4UTwM.js";import"./index-C3xQgm2l.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ByegF4dQ.js";import"./Tooltip-Cf58vIqd.js";import"./index-DhCvtgTu.js";import"./useControlled-tM_DVWVA.js";import"./Popper-Bs-9aJVk.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-BvEpsVL_.js";import"./QueryClientProvider-DpeaCQbp.js";import"./Link-DjAOvEMB.js";import"./Collapse-B5yw2eij.js";import"./_baseUniq-COFJJUF-.js";import"./_Uint8Array-SdGWbpCK.js";import"./isArray-CIh8XoSS.js";import"./_getTag-DHtWjrKh.js";import"./isEqual-DG1yhYL7.js";import"./merge-CJlKDPxb.js";import"./_initCloneObject-DFhiNOBS.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cqq1RCUS.js";import"./inputBaseClasses-Dzfkb3qc.js";import"./calculateFriendlyFileSize-BwbqkNA7.js";import"./CheckCircleTwoTone-BkCpgbi5.js";import"./InfoTwoTone-CBw2GqJ2.js";import"./useMutation-BPsh3iOc.js";import"./dayjs.min-F33PS1kw.js";import"./chunk-AYJ5UCUI-Do6XLrY3.js";import"./cloneDeep-DNcKu_I5.js";import"./Skeleton-BgH1ZXCy.js";import"./SqlFunctions-Dcy2rA-G.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B7XgCI7r.js";import"./Backdrop-CDtKGU2R.js";import"./LinearProgress-CWEUwc0p.js";import"./index-nI5jTSRq.js";import"./index-qYfGDhId.js";import"./index-DUdY6LU2.js";import"./const-BP60AzNb.js";import"./index-BnXk8KzB.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
