import{U as L}from"./UpsetPlot-0iU0HtzK.js";import{f as u}from"./index-DJHF663D.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-vVQu2UDu.js";import"./DefaultPropsProvider-DVYZMDEA.js";import"./createTheme-FRqdIwz9.js";import"./index-C1xK3Euu.js";import"./iframe-DL0EwkQ1.js";import"./Button-CnhjPXMP.js";import"./createSimplePaletteValueFilter-D6VDKkyu.js";import"./useTimeout-B5DIu7CK.js";import"./ButtonBase-Df45XlXj.js";import"./useForkRef-a0g6YK7W.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DZlLEPnP.js";import"./useFiles-hvAr2LOt.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-CYilwlit.js";import"./OrientationBanner-dIGybLBQ.js";import"./index-D330RqyA.js";import"./spreadSx-CwcO6WA9.js";import"./react-uMsBkU6K.js";import"./FullWidthAlert-DZZeg3jH.js";import"./Alert-CypmXk5J.js";import"./useSlot-wqicX0ov.js";import"./createSvgIcon-XKLmeUTY.js";import"./Close-BveIoAL9.js";import"./IconButton-UiwBeOuw.js";import"./Paper-Bxd9F66n.js";import"./useTheme-DRhFvF4x.js";import"./useTheme-Cnn-yRIb.js";import"./Stack-D6ePO08n.js";import"./extendSxProp-DnLvH_me.js";import"./getThemeProps-QE7-qNoq.js";import"./Box-DYs4l160.js";import"./AlertTitle-DPUw7MgK.js";import"./Typography-CpKzOD3M.js";import"./index-DQ9ZIrXt.js";import"./ClickAwayListener-CY8gZ8fE.js";import"./getReactElementRef-CuGn8u9f.js";import"./index-CC9seteH.js";import"./index-DZjbEjJe.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BCDJQX83.js";import"./Tooltip-DXqB5irm.js";import"./index-FAKOp_R-.js";import"./useControlled-BUr5utlK.js";import"./Popper-DYkHVVjm.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BltarsXU.js";import"./QueryClientProvider-DNE5Qfdd.js";import"./Link-BBFohKff.js";import"./Collapse-B-Q2bsPT.js";import"./_baseUniq-07OwiNNX.js";import"./_Uint8Array-w36zObl6.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CspRPC39.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BjOQEs4O.js";import"./isEqual-Dz11q7t9.js";import"./merge-sywN9o6B.js";import"./_initCloneObject-4H_ausQy.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DKQK7dr1.js";import"./inputBaseClasses-BV2fKT-i.js";import"./calculateFriendlyFileSize-RiHALPBy.js";import"./CheckCircleTwoTone-D8tP370-.js";import"./InfoTwoTone-CNyDuQOg.js";import"./useMutation-C8DKiECt.js";import"./dayjs.min-B1o7L6Xg.js";import"./chunk-AYJ5UCUI-B6fPF2g2.js";import"./cloneDeep-_ABAuLCT.js";import"./Skeleton-D0PfIOD4.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-pMZzF6Le.js";import"./Backdrop-DIOnW0hK.js";import"./LinearProgress-C6bKmj-o.js";import"./index-D_a01l1O.js";import"./index-DPvEXH9E.js";import"./index-yqTE-CDS.js";import"./const-BP60AzNb.js";import"./index-B5JC55mF.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
