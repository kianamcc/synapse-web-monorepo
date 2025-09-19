import{U as L}from"./UpsetPlot-C07gnCXP.js";import{f as u}from"./index-DRmzwDmB.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-hRbHGJAi.js";import"./DefaultPropsProvider-BaJQA2z9.js";import"./createTheme-CYqCSXBz.js";import"./index-jL26_Tdg.js";import"./iframe-C7ZZ0tJ9.js";import"./Button-Bfd3_aE-.js";import"./createSimplePaletteValueFilter-B4WcSHb2.js";import"./useTimeout-Q5NueQY6.js";import"./ButtonBase-Cpa2hZQw.js";import"./useForkRef-COfB-m0m.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-rSba4AH8.js";import"./useFiles-B6vegzDl.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BtPK8Xf5.js";import"./OrientationBanner-DkmEu8ww.js";import"./index-BiABM7zM.js";import"./spreadSx-CwcO6WA9.js";import"./react-Q48zzpqQ.js";import"./FullWidthAlert-KH7-cPlx.js";import"./Alert-BYyjJPXO.js";import"./useSlot-DtyCmT7o.js";import"./createSvgIcon-3ocGpMNh.js";import"./Close-D02RjwJU.js";import"./IconButton-Ccbi1Krc.js";import"./Paper-BBhN9Li4.js";import"./useTheme-DLyZrVj1.js";import"./useTheme-CCBKYA_N.js";import"./Stack-Bnhis5DF.js";import"./extendSxProp-CyXZT-CH.js";import"./getThemeProps-qLDLSUkn.js";import"./Box-CElDN2lR.js";import"./AlertTitle-Bg93ACEw.js";import"./Typography-sIVWjIv7.js";import"./index-DzEjapEh.js";import"./ClickAwayListener-DBCnr4i9.js";import"./getReactElementRef-BpSyMuG3.js";import"./index-PB3v-e0n.js";import"./index-CXUQQ7NY.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CyxMG2Lo.js";import"./Tooltip-B8Ca4h6r.js";import"./index-Beyie8vy.js";import"./useControlled-IUjrSiMK.js";import"./Popper-BsmYiSO_.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DT4b9CON.js";import"./QueryClientProvider-DvweCRTp.js";import"./Link-DulGgx7_.js";import"./Collapse-kXTM2RiY.js";import"./_baseUniq-CbUydBEl.js";import"./_Uint8Array-B0WjZf3K.js";import"./isArray-YIKNzQ6l.js";import"./_getTag-ohfK-TjG.js";import"./isEqual-dhI3ZA9D.js";import"./merge-DqYA71tY.js";import"./_initCloneObject-Cz9cO3Kh.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-s5_xMiSm.js";import"./inputBaseClasses-kkvSt9vt.js";import"./calculateFriendlyFileSize-DX_Sn0UC.js";import"./CheckCircleTwoTone-BQ0LZxD5.js";import"./InfoTwoTone-CNBCB-S5.js";import"./useMutation-B1e0RvlB.js";import"./dayjs.min-Bvvs6Fr9.js";import"./chunk-AYJ5UCUI-D-jAjeB5.js";import"./cloneDeep-G_YIi0g_.js";import"./Skeleton-CIkEHEVl.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DDbi5pSz.js";import"./Backdrop-BnSAxtKA.js";import"./LinearProgress-BcdLDYly.js";import"./index-D8WZOknK.js";import"./index-BvHejxOG.js";import"./index-CGszU-j1.js";import"./const-BP60AzNb.js";import"./index-ltSbOMKS.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
