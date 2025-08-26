import{U as L}from"./UpsetPlot-DITe5mjz.js";import{f as u}from"./index-uJ1e9zrK.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CIgvpRy5.js";import"./DefaultPropsProvider-Cfr5VO6N.js";import"./createTheme-DnAg7-pt.js";import"./index-BEywTRXl.js";import"./iframe-BBf9fga1.js";import"./Button-D48JG1ln.js";import"./createSimplePaletteValueFilter-CAkAaFOz.js";import"./useTimeout-CE0_wtx6.js";import"./ButtonBase-9G7Po7WW.js";import"./useForkRef-Bw1cKGeI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BpTw4cNV.js";import"./useFiles-CKtnfdDb.js";import"./VerificationSubmission-CNoSrCdk.js";import"./SynapseConstants-fNl-i50f.js";import"./OrientationBanner-gqy1HDsn.js";import"./index-CGVjBlVQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Caq8yfsY.js";import"./FullWidthAlert-Bi0gZVKF.js";import"./Alert-DjjEhYM-.js";import"./useSlot-BllXXWSn.js";import"./createSvgIcon-CNp-xswd.js";import"./Close-hnsAHL5n.js";import"./IconButton-BBdlrjSw.js";import"./Paper-DQg47uXD.js";import"./useTheme-tPwOBdLV.js";import"./useTheme-DvQxV26P.js";import"./Stack-Ne3s2k1L.js";import"./extendSxProp-Bz-U6EUc.js";import"./getThemeProps-CA8XxeOI.js";import"./Box-CSTbBPIE.js";import"./AlertTitle-SbtAKUth.js";import"./Typography-e_bn1j-d.js";import"./index-BjsiQW48.js";import"./ClickAwayListener-CSw4j7vn.js";import"./getReactElementRef-s4ti0GiA.js";import"./index-CUrvls_8.js";import"./index-D5YMrZI7.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B59OOFam.js";import"./Tooltip-CxMHW-Bb.js";import"./index-Bmnvv36_.js";import"./useControlled-1lsXcUhy.js";import"./Popper-uzFVxROp.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CwQ1lgbR.js";import"./useQuery-CssB-2z9.js";import"./QueryClientProvider-CxifRez6.js";import"./Link-CwZFRW9t.js";import"./Collapse-DH7Csss-.js";import"./_baseUniq-B2577OWA.js";import"./_Uint8Array-DyiAPkOc.js";import"./isArray-NH-lQ6sv.js";import"./_getTag-B8fRTFQ5.js";import"./isEqual-qIzdiEsY.js";import"./merge-aLS7RL-o.js";import"./_initCloneObject-DOyku_IR.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CZEMhowB.js";import"./inputBaseClasses-DBgXe6lK.js";import"./calculateFriendlyFileSize-CsWbGjuW.js";import"./CheckCircleTwoTone-C2jgLeFW.js";import"./InfoTwoTone-BCYPmC9w.js";import"./useMutation-BWjpfHXT.js";import"./dayjs.min-BcH9R9G5.js";import"./chunk-AYJ5UCUI-hHORuoAF.js";import"./cloneDeep-FsMgdlCN.js";import"./Skeleton-C08EYpYz.js";import"./SqlFunctions-zz0CCrj4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D0R3Zevn.js";import"./Backdrop-Bw3Ay0IN.js";import"./LinearProgress-C6ybkm0W.js";import"./index-CgO_QnMc.js";import"./index-DGe3PbqH.js";import"./index-BibMa2rj.js";import"./const-BP60AzNb.js";import"./index-D3k-2yB6.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
