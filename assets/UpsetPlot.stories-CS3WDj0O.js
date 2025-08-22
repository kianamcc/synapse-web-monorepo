import{U as L}from"./UpsetPlot-DpXAiX31.js";import{f as u}from"./index-DuHsimqy.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-1u9oOu-u.js";import"./DefaultPropsProvider-cqqlf3DM.js";import"./createTheme-CloygEZI.js";import"./index-BWg8gmP9.js";import"./iframe-DxMgOC42.js";import"./Button-U--Q96r5.js";import"./createSimplePaletteValueFilter-Czpf93oR.js";import"./useTimeout-DzhOkixu.js";import"./ButtonBase-DkwHGrOc.js";import"./useForkRef-CuZsgNn8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-F1HsRVw0.js";import"./useFiles-Cgksw9GV.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-DrEaJj_3.js";import"./OrientationBanner-w6CGgbYt.js";import"./index-DuAwIN7G.js";import"./spreadSx-CwcO6WA9.js";import"./react-DJ4XftcX.js";import"./FullWidthAlert-VXj3VNMq.js";import"./Alert-B9JdgmLn.js";import"./useSlot-DU4Wne47.js";import"./createSvgIcon-Dy41uhPC.js";import"./Close-BWkLyPEE.js";import"./IconButton-CDhHBjru.js";import"./Paper-DAmi0aXy.js";import"./useTheme-B9J3VmFE.js";import"./useTheme-De2PrO1i.js";import"./Stack-_CRd7W9c.js";import"./extendSxProp-B-QpAch6.js";import"./getThemeProps-8ael_php.js";import"./Box-BmJ8Nv4Q.js";import"./AlertTitle-CflXlpyw.js";import"./Typography-BLdAJe5v.js";import"./index-Carkrmqq.js";import"./ClickAwayListener-BUboLwwV.js";import"./getReactElementRef-D5laRzAV.js";import"./index-VF1kjDI9.js";import"./index-BALo3nNz.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-3SXN3MNY.js";import"./Tooltip-WXobDaFj.js";import"./index-Cs-59t9j.js";import"./useControlled-CHFqetIf.js";import"./Popper-Bj0Z85qz.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DC0yPoOC.js";import"./QueryClientProvider-Dv3ud_cs.js";import"./Link-BcPfG-VZ.js";import"./Collapse-CWDJbsS2.js";import"./_baseUniq-CIfoarHK.js";import"./_Uint8Array-BmO9vIzF.js";import"./isArray-DLkopDsw.js";import"./_getTag-BcVhETby.js";import"./isEqual-YOpW3a2z.js";import"./merge-Ci0u7Z_j.js";import"./_initCloneObject-B21APcHN.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DxNVQUJQ.js";import"./inputBaseClasses-CG1WD0jj.js";import"./calculateFriendlyFileSize-D9TEFVUS.js";import"./CheckCircleTwoTone-3NdcQIhw.js";import"./InfoTwoTone-EwVotAye.js";import"./useMutation-9Biue8zq.js";import"./dayjs.min-WjH_UZhr.js";import"./chunk-AYJ5UCUI-CTNvUNcY.js";import"./cloneDeep-BRyqSLXf.js";import"./Skeleton-DRmMTT-E.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BAWdmbrf.js";import"./Backdrop-UkCNi7T6.js";import"./LinearProgress-BY--mn5d.js";import"./index-CIn5IWH5.js";import"./index-2S_daU3E.js";import"./index-B4lRBObk.js";import"./const-BP60AzNb.js";import"./index-BbUEMGQF.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
