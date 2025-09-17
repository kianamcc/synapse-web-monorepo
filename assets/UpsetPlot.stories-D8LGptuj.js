import{U as L}from"./UpsetPlot-YG-87Gth.js";import{f as u}from"./index-eE28gEmE.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CbFaQzLK.js";import"./DefaultPropsProvider-BZTOi2Nb.js";import"./createTheme-B-WGvCZV.js";import"./index-Bc8RXlNF.js";import"./iframe-DqtJT-CI.js";import"./Button-D1_V94c4.js";import"./createSimplePaletteValueFilter-B6DTm-vX.js";import"./useTimeout-DkJzioRi.js";import"./ButtonBase-D6Nhhqqr.js";import"./useForkRef-2fHpQHUh.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BAgXRlg8.js";import"./useFiles-Bw0m6uSf.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-oxmSAhRt.js";import"./OrientationBanner-69jt1FeK.js";import"./index-oGsaT5a9.js";import"./spreadSx-CwcO6WA9.js";import"./react-CP1D827C.js";import"./FullWidthAlert-DA78l4ei.js";import"./Alert-CPCjYOjN.js";import"./useSlot-BE5lb3ME.js";import"./createSvgIcon-C9Qu0LqJ.js";import"./Close-Bivu03FM.js";import"./IconButton-W3ZhFBsx.js";import"./Paper-BtBe2Ap-.js";import"./useTheme-CnLnUCUF.js";import"./useTheme-C9VVxehU.js";import"./Stack-1p_QX1Ok.js";import"./extendSxProp-eP26Hwbg.js";import"./getThemeProps-xXfwRdzB.js";import"./Box-nLN5geWp.js";import"./AlertTitle-BasMmQ31.js";import"./Typography-D9diGUsI.js";import"./index-BIlcAsR4.js";import"./ClickAwayListener-DtQh59tZ.js";import"./getReactElementRef-DBTURC4m.js";import"./index-CcY_nMfh.js";import"./index-DgNGjvVA.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C-w8O3Bv.js";import"./Tooltip-D5aOZOwW.js";import"./index-DgC7vvPA.js";import"./useControlled-kiYK4enm.js";import"./Popper-Ccwyg-S0.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-GKDTA9Sk.js";import"./QueryClientProvider-DmkRpa3F.js";import"./Link-Bxi0rxja.js";import"./Collapse-CMSd_lTh.js";import"./_baseUniq-6J9_uk5v.js";import"./_Uint8Array-C2g0Y_T2.js";import"./isArray-wgyLd2Dj.js";import"./_getTag-kNCA-Zxv.js";import"./isEqual-C1mFG84L.js";import"./merge-DJGXnCrn.js";import"./_initCloneObject-BMdnylxl.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Iv3fPh82.js";import"./inputBaseClasses-rlpaGauL.js";import"./calculateFriendlyFileSize-H7_KPqe_.js";import"./CheckCircleTwoTone-D-sclXL9.js";import"./InfoTwoTone-C3IyF0V8.js";import"./useMutation-DlA1__c_.js";import"./dayjs.min-SKfPruAU.js";import"./chunk-AYJ5UCUI-Ds_dHHHb.js";import"./cloneDeep-DATH6_8s.js";import"./Skeleton-xuFa_deo.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-EOKGbwe5.js";import"./Backdrop-DhfOSFs9.js";import"./LinearProgress-D_rMTNyK.js";import"./index-DmpqKj4Q.js";import"./index-ghDSfosf.js";import"./index-BRr2WDXb.js";import"./const-BP60AzNb.js";import"./index-DZ2ckUbP.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
