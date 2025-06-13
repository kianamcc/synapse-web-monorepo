import{U as L}from"./UpsetPlot-BmSTBCCl.js";import{f as u}from"./index-DxV6z5i1.js";import"./jsx-runtime-bs3iHWgH.js";import"./index-1G0jIe_K.js";import"./iframe-CAE0AedR.js";import"./LargeButton-4PahfRAk.js";import"./DefaultPropsProvider-BrwCbwq3.js";import"./createTheme-DDXry1D5.js";import"./Button-5ZLAf8y7.js";import"./createSimplePaletteValueFilter-CvTarr9j.js";import"./useTimeout-D-YFSzxf.js";import"./ButtonBase-BLNh9xJi.js";import"./useForkRef-BnsVc4W5.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C1j2DwHt.js";import"./useFiles-iDTemoVt.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-CSIOBzFr.js";import"./OrientationBanner-CUnrnvUZ.js";import"./index--ipSGzBW.js";import"./spreadSx-CwcO6WA9.js";import"./react-B-aZ1Ebj.js";import"./FullWidthAlert-TL6cM4c_.js";import"./Alert-DU1l7Yil.js";import"./useSlot-D5PFbywt.js";import"./createSvgIcon-7ZLvw587.js";import"./Close-Blf_Jegy.js";import"./IconButton-Cc16ts0x.js";import"./Paper-TiPNohsC.js";import"./useTheme-HySVWCes.js";import"./useTheme-N3QqDEBY.js";import"./Stack-DTKKGZ3C.js";import"./extendSxProp-DpAf3ZlK.js";import"./getThemeProps-BEgO2NgN.js";import"./Box-CwOOQtt7.js";import"./AlertTitle-DAxqZGgD.js";import"./Typography-BTyGK9kh.js";import"./index-B1JGVqhl.js";import"./ClickAwayListener-C1dZSwOc.js";import"./getReactElementRef-lg4qkuS3.js";import"./index-Cp0bzr_k.js";import"./index-Dj_HbVa7.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BehZzC11.js";import"./Tooltip-CWPBJei9.js";import"./index-DOxN_OSL.js";import"./useControlled-CKYe0QIs.js";import"./Popper-DCwTo5EU.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-DGJ-fST1.js";import"./utils-BjohuSeA.js";import"./Link-Ds3faFyI.js";import"./Collapse-CBNAD82I.js";import"./isNil-Cg0AdkbW.js";import"./_Uint8Array-cnPMiqdI.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DLXaXrlM.js";import"./isArray-Dxzbedgu.js";import"./isEqual-BtTJidyh.js";import"./_getTag-DJ9WiHgM.js";import"./tinycolor-Begke6kS.js";import"./Fade-DACgj7ig.js";import"./inputBaseClasses-DvVQV8MT.js";import"./calculateFriendlyFileSize-CWlhKSjd.js";import"./CheckCircleTwoTone-C9sAhxWz.js";import"./InfoTwoTone-DEn_cQvh.js";import"./useMutation-Cb_0TIoA.js";import"./dayjs.min-DpGoKzDn.js";import"./chunk-AYJ5UCUI-BjJPg-VE.js";import"./cloneDeep-Dxyj2Go1.js";import"./_initCloneObject-CACn9_P1.js";import"./Skeleton-CVyUAms5.js";import"./merge-BMnLpwug.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BwI7KLtN.js";import"./Backdrop-4TCpI_Fl.js";import"./LinearProgress-CfXxp-xy.js";import"./index-DOhmdKWO.js";import"./index-BJvCDEz5.js";import"./index-DQVMsM3e.js";import"./const-Doag8klc.js";import"./index-DJ4jIjRS.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
