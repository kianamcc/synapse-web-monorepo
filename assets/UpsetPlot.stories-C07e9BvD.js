import{U as L}from"./UpsetPlot-CSvfdmh2.js";import{f as u}from"./index-BrAOYLES.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DUZglRvg.js";import"./DefaultPropsProvider-CvOM3crP.js";import"./createTheme-Bqan8iSd.js";import"./index-Fvy6OXvx.js";import"./iframe-B8dXxRrz.js";import"./Button-BHN8_UXu.js";import"./createSimplePaletteValueFilter-BCFu5tCD.js";import"./useTimeout-BI-r7Chh.js";import"./ButtonBase-DHedW4PR.js";import"./useForkRef-BeT6GA-1.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-wOG2gwEP.js";import"./useFiles-wWQ53W6F.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DLUag6lU.js";import"./OrientationBanner-CRkLOFNV.js";import"./index-DmEjL0gl.js";import"./spreadSx-CwcO6WA9.js";import"./react-DidY2G1Y.js";import"./FullWidthAlert-DR77ctOw.js";import"./Alert-DpkG2eKm.js";import"./useSlot-OhfiPf_i.js";import"./createSvgIcon-BgHtG-ZK.js";import"./Close-CJ1hBDqs.js";import"./IconButton-C_XoYKbu.js";import"./Paper-CNcRBNAa.js";import"./useTheme-LIw16y-R.js";import"./useTheme-ITUjA_qS.js";import"./Stack-DU1ForPl.js";import"./extendSxProp-D-vpv-1y.js";import"./getThemeProps-D7jKhtgM.js";import"./Box-CbSz_dhW.js";import"./AlertTitle-DTLD6v1o.js";import"./Typography-6dkO2MTM.js";import"./index-DK62uATf.js";import"./ClickAwayListener-D1GBWBlV.js";import"./getReactElementRef-CVCbp7Cp.js";import"./index-BcRRWnYW.js";import"./index-BDgQoSql.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-wuCwDJHH.js";import"./Tooltip-DX-SU6uL.js";import"./index-Cq9dyCaH.js";import"./useControlled-uX7GhbF6.js";import"./Popper-CXqOJrMB.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DkveStrn.js";import"./QueryClientProvider-DztE-yrs.js";import"./Link-8X1p5eq_.js";import"./Collapse-BMTa6CBd.js";import"./_baseUniq-CyW2Nhvq.js";import"./_Uint8Array-Do_yUrdE.js";import"./isArray-BFuLipFc.js";import"./_getTag-BUH8RGR_.js";import"./isEqual-Bo9V0Syl.js";import"./merge-CmfNHmTH.js";import"./_initCloneObject-CyhAal79.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CUSl01b3.js";import"./inputBaseClasses-CcplBV6_.js";import"./calculateFriendlyFileSize-CUQjNl6R.js";import"./CheckCircleTwoTone-CdZKEvy8.js";import"./InfoTwoTone-qc6Tvhs0.js";import"./useMutation-DONRoSE-.js";import"./dayjs.min-CYR_2A92.js";import"./chunk-AYJ5UCUI-D3aPapOi.js";import"./cloneDeep-BihnUe_D.js";import"./Skeleton-Bc_aNlp6.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BBRvAvNd.js";import"./Backdrop-C9lvFiKP.js";import"./LinearProgress-DTYU7N8N.js";import"./index-BYUH4yHB.js";import"./index-WAEClnBI.js";import"./index-n8Dm0lcY.js";import"./const-BP60AzNb.js";import"./index-DUmrUKbR.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
