import{U as L}from"./UpsetPlot-IPBLlfFR.js";import{f as u}from"./index-BxlffYmq.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DLfYynoJ.js";import"./DefaultPropsProvider-CH3a_DkB.js";import"./createTheme-WgZwGEUU.js";import"./index-BLkVaqQU.js";import"./iframe-D1OUWgU8.js";import"./Button-CosI4lZc.js";import"./createSimplePaletteValueFilter-Dndo3dQe.js";import"./useTimeout-ClfH_HF0.js";import"./ButtonBase-CKvKduXZ.js";import"./useForkRef-Ig4Zmx52.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C3fM0KPH.js";import"./useFiles-BGhw6sr7.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-DQOFKbIW.js";import"./OrientationBanner-DfoOiSsv.js";import"./index-BOQSUwlj.js";import"./spreadSx-CwcO6WA9.js";import"./react-DkLhILX5.js";import"./FullWidthAlert-B1Qrucih.js";import"./Alert-C1CocLRY.js";import"./useSlot-Dq2qON5u.js";import"./createSvgIcon-GnSjhHwe.js";import"./Close-CO74w9jz.js";import"./IconButton-CVSYLB8I.js";import"./Paper-CNOpQakA.js";import"./useTheme-DCyIfbaq.js";import"./useTheme-DMtfHtJq.js";import"./Stack-FYlEw4fq.js";import"./extendSxProp-CcNmwxbI.js";import"./getThemeProps-DmkHaZxY.js";import"./Box-BWGLgO_L.js";import"./AlertTitle-BRRtgJhi.js";import"./Typography-CnElUjJF.js";import"./index-DDGHBRu9.js";import"./ClickAwayListener-DeeCbT0O.js";import"./getReactElementRef-CIFt_A8T.js";import"./index-IrKQg-yb.js";import"./index-BLl-bmD9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DhrVRGR6.js";import"./Tooltip-CkaNIw4Q.js";import"./index-BscvuTv2.js";import"./useControlled-yelixl_y.js";import"./Popper-D7cy8wUq.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-BU8-CzGU.js";import"./QueryClientProvider-MDp9J6mw.js";import"./Link-CmfYylf_.js";import"./Collapse-CuvsxGh1.js";import"./_baseUniq-ICRME_SG.js";import"./_Uint8Array-BoNxe12X.js";import"./isArray-FdqKaHoJ.js";import"./_getTag-BMcHv2ST.js";import"./isEqual-CxX9_Jry.js";import"./merge-CWElKNDQ.js";import"./_initCloneObject-Davy6xDh.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DL6kU-O8.js";import"./inputBaseClasses-D2062J26.js";import"./calculateFriendlyFileSize-Cujvwhz9.js";import"./CheckCircleTwoTone-o604Y7DM.js";import"./InfoTwoTone-D9JUoD_z.js";import"./useMutation-CQn0gxgX.js";import"./dayjs.min-z0YraemM.js";import"./chunk-AYJ5UCUI-IQN6yzis.js";import"./cloneDeep-DfwkV2VA.js";import"./Skeleton-CpZbRh6J.js";import"./SqlFunctions-BjspnTaW.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DizGRxPa.js";import"./Backdrop--1mAbwWd.js";import"./LinearProgress-vEbtvfub.js";import"./index-d31k7_1S.js";import"./index-CqhEnIj3.js";import"./index-CoMNkEXx.js";import"./const-BP60AzNb.js";import"./index-C8fZT1fc.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
