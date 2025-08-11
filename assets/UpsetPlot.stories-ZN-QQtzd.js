import{U as L}from"./UpsetPlot-irB-Tk0Q.js";import{f as u}from"./index-DMNnOsmL.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BrSeyJh6.js";import"./DefaultPropsProvider-Dk_kZRJu.js";import"./createTheme-BKSRxlFY.js";import"./index-iWrNDPyn.js";import"./iframe-BriZTfYJ.js";import"./Button-BnbeuRI8.js";import"./createSimplePaletteValueFilter-BlKw8DgR.js";import"./useTimeout-Brm08kXR.js";import"./ButtonBase-CUjN_ROa.js";import"./useForkRef-BYwnSTRU.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BbQEZxBg.js";import"./useFiles-Cgp-9vJT.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-iStHbYVx.js";import"./OrientationBanner-CjetZaFe.js";import"./index-CEuAijM_.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ch0aYUiy.js";import"./FullWidthAlert-gxrW5_IB.js";import"./Alert-Cc_MVH1f.js";import"./useSlot-wM5YqEUc.js";import"./createSvgIcon-2weW28Tb.js";import"./Close-CqHCSW4a.js";import"./IconButton-BRNCMgf9.js";import"./Paper-BMBeNgEo.js";import"./useTheme-CeiPl9f9.js";import"./useTheme-DrVid__q.js";import"./Stack-JYuoYEED.js";import"./extendSxProp-Bi5llsJC.js";import"./getThemeProps-BTWYATJj.js";import"./Box-Be4ueMoe.js";import"./AlertTitle-D3DDGn2Q.js";import"./Typography-DBnBHKj4.js";import"./index-CTlyCBQq.js";import"./ClickAwayListener-BZqRSxmE.js";import"./getReactElementRef-BQegNSOc.js";import"./index-5Pe9y6Wq.js";import"./index-D7oizWyO.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bl2jRLCy.js";import"./Tooltip-BBkEZVsV.js";import"./index-DwfN2JNN.js";import"./useControlled-NJoxe6_U.js";import"./Popper-D5FqFR9Q.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-C7gPHaUl.js";import"./QueryClientProvider-ulH8w0Tp.js";import"./Link-BWBPKo95.js";import"./Collapse-ydtRZmuD.js";import"./_baseUniq-CG-c4221.js";import"./_Uint8Array-F9930IXl.js";import"./isArray-sQ7lbhzi.js";import"./_getTag-C3j1nOEH.js";import"./isEqual-C2DFGwhq.js";import"./merge-BdcGCnAe.js";import"./_initCloneObject-COqpcO5q.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CRjWlsVL.js";import"./inputBaseClasses-DK_fEtfb.js";import"./calculateFriendlyFileSize-CRB7GFqV.js";import"./CheckCircleTwoTone-CwvS_rbb.js";import"./InfoTwoTone-u7ir9BvH.js";import"./useMutation-DFLUD9UY.js";import"./dayjs.min-D2Hua4Ul.js";import"./chunk-AYJ5UCUI-VJ1lZAeG.js";import"./cloneDeep-FTLF1-Us.js";import"./Skeleton-lSFpoPHn.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-ORvzbXoZ.js";import"./Backdrop-DZkf4LjT.js";import"./LinearProgress-DFZa2L4Q.js";import"./index-C-Hd8i35.js";import"./index-xHZ5k9hG.js";import"./index-CIWoiUH8.js";import"./const-BP60AzNb.js";import"./index-DyFMc1fZ.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
