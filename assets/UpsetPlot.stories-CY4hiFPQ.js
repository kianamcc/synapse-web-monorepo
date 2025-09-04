import{U as L}from"./UpsetPlot-De5EDJlm.js";import{f as u}from"./index-DAVtURXu.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CGTKq09Z.js";import"./DefaultPropsProvider-DDIfh48T.js";import"./createTheme-UDEHErQ_.js";import"./index-CYBhMOzl.js";import"./iframe-CuDDZx9Z.js";import"./Button-DrSgAP7H.js";import"./createSimplePaletteValueFilter-D_WBzOiq.js";import"./useTimeout-BVUmv_-j.js";import"./ButtonBase-B6fNSxmE.js";import"./useForkRef-C35-TTLb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BYOlEuL1.js";import"./useFiles-DOVBop4s.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-C5A8J8gn.js";import"./OrientationBanner-LURESH-j.js";import"./index-D-PX2Hpd.js";import"./spreadSx-CwcO6WA9.js";import"./react-CZzQ_yVr.js";import"./FullWidthAlert-BbNm5x9Z.js";import"./Alert-KRswuaf9.js";import"./useSlot-BL4Blot2.js";import"./createSvgIcon-BkFFA0uY.js";import"./Close-C1BwiOLd.js";import"./IconButton-D17trTNl.js";import"./Paper-CnKf9E1P.js";import"./useTheme-Dal23Fh_.js";import"./useTheme-W3ylXsbv.js";import"./Stack-RN1WeRUL.js";import"./extendSxProp-YGhkNB1w.js";import"./getThemeProps-8BAWzFC0.js";import"./Box-DnHtG_j1.js";import"./AlertTitle-BqJO1dBB.js";import"./Typography-CNeR-cPE.js";import"./index-22XR2kUJ.js";import"./ClickAwayListener-5mjrolze.js";import"./getReactElementRef-60BZXwdQ.js";import"./index-CoaIb9Ej.js";import"./index-OByBR4g1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CCBW4MLj.js";import"./Tooltip-DN0tYEHn.js";import"./index-C0rrpg4I.js";import"./useControlled-C2ML203S.js";import"./Popper-Dt-j-fXA.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-ByJfln0Z.js";import"./QueryClientProvider-D4nt8BTL.js";import"./Link-qzIb3qG_.js";import"./Collapse-Bx3bHstz.js";import"./_baseUniq-BBovCwJQ.js";import"./_Uint8Array-mjR_JKoo.js";import"./isArray-BGyiIjyu.js";import"./_getTag-D7U8VkiW.js";import"./isEqual-CcI7tI-V.js";import"./merge-B2Hf3UCX.js";import"./_initCloneObject-BacQv0Vo.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C8mW4-6F.js";import"./inputBaseClasses-BQmUwsdM.js";import"./calculateFriendlyFileSize-DOnx2oHL.js";import"./CheckCircleTwoTone-sMI1OzSo.js";import"./InfoTwoTone-Cxpwfqd2.js";import"./useMutation-0kGzfmP1.js";import"./dayjs.min-CG53A_f7.js";import"./chunk-AYJ5UCUI-DEcXrblD.js";import"./cloneDeep-DvXu7W8a.js";import"./Skeleton-CZU0fRin.js";import"./SqlFunctions-BjspnTaW.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cxn52aM2.js";import"./Backdrop-CGngSoGY.js";import"./LinearProgress-C07wRBjW.js";import"./index-B-wdG39a.js";import"./index-jQjhPu0S.js";import"./index-DozpqkyT.js";import"./const-BP60AzNb.js";import"./index-HhsWHINY.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
