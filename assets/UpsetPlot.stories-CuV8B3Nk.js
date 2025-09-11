import{U as L}from"./UpsetPlot-DldFShym.js";import{f as u}from"./index-KN2_HyvD.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-_1VHnC6A.js";import"./DefaultPropsProvider-DuHQt5tX.js";import"./createTheme-Dy0-m8-A.js";import"./index-6vxeCzL4.js";import"./iframe-CjifT74g.js";import"./Button-BVPpZjkW.js";import"./createSimplePaletteValueFilter-BJFb3sY0.js";import"./useTimeout-DAnP99B3.js";import"./ButtonBase-CbRzwM7N.js";import"./useForkRef-D3GN_CBh.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-oIAkzJX4.js";import"./useFiles-D9IjkbnM.js";import"./VerificationSubmission-16RBrwfH.js";import"./SynapseConstants-CimKnm-8.js";import"./OrientationBanner-CzU6KDpL.js";import"./index-CgsjeSPa.js";import"./spreadSx-CwcO6WA9.js";import"./react-DClyoqOD.js";import"./FullWidthAlert-TY94FRna.js";import"./Alert-BDTTfspR.js";import"./useSlot-Bh66Acib.js";import"./createSvgIcon-Bp3iCONJ.js";import"./Close-DE9Xj8OJ.js";import"./IconButton-kCilc8aH.js";import"./Paper-BgoErbyD.js";import"./useTheme-DxuATEnu.js";import"./useTheme-DYfQlcXU.js";import"./Stack-CD-9J5q_.js";import"./extendSxProp-DBncvLzO.js";import"./getThemeProps-DQzIp4hW.js";import"./Box-4s3DQrSt.js";import"./AlertTitle-DjZT1bwn.js";import"./Typography-CHNd49HH.js";import"./index-BEFSRFSM.js";import"./ClickAwayListener-Dxjx-8zF.js";import"./getReactElementRef-BVECeuLd.js";import"./index-Calt9S7p.js";import"./index-CEnxySY1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-AKYW22Tv.js";import"./Tooltip-D4mylLgV.js";import"./index-D050dNpj.js";import"./useControlled-DS0tk13e.js";import"./Popper-Hnc_u6mX.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-DxAfwxuj.js";import"./QueryClientProvider-BeU9GayN.js";import"./Link-DPGwCB9W.js";import"./Collapse-Quox-cv-.js";import"./_baseUniq-Bfrtub2j.js";import"./_Uint8Array-CesznVbr.js";import"./isArray-D5p7Gkib.js";import"./_getTag-Dw1mXAbx.js";import"./isEqual-BRYXIgAL.js";import"./merge-DussZOY2.js";import"./_initCloneObject-CwMaFeaY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BieE9Iqq.js";import"./inputBaseClasses-CWBiX7gU.js";import"./calculateFriendlyFileSize-DCRKp9Ar.js";import"./CheckCircleTwoTone-BCUKw-TQ.js";import"./InfoTwoTone-BDufQF4P.js";import"./useMutation-CW7KVecC.js";import"./dayjs.min-Bq9OIHwb.js";import"./chunk-AYJ5UCUI-DuqvUR3-.js";import"./cloneDeep-tK7GVlr1.js";import"./Skeleton-BIk9JEA-.js";import"./SqlFunctions-BeciCvGs.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen--AcYclSW.js";import"./Backdrop-vKwNtdyh.js";import"./LinearProgress-D1xhsDt0.js";import"./index-De9KhMqC.js";import"./index-CzJY0ysk.js";import"./index-B_R44UHx.js";import"./const-BP60AzNb.js";import"./index-BM1PQ8MR.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
