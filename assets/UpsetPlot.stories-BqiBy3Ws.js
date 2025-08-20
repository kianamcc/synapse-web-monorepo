import{U as L}from"./UpsetPlot-BGy8lcxx.js";import{f as u}from"./index-BiAHOIdr.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CWcgXsf9.js";import"./DefaultPropsProvider-CYP_2Idx.js";import"./createTheme-BlTwNsQ1.js";import"./index-BQ0h1q-c.js";import"./iframe-DY59xS4l.js";import"./Button-bLnqHRUE.js";import"./createSimplePaletteValueFilter-DWGwy2Im.js";import"./useTimeout-BUMPYjbI.js";import"./ButtonBase-BJNoKMlW.js";import"./useForkRef-CkhoaXlV.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BxPHqgfj.js";import"./useFiles-8ATydn8A.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BoFDoI5V.js";import"./OrientationBanner-Bfw4GBS8.js";import"./index-Dxb0ugoE.js";import"./spreadSx-CwcO6WA9.js";import"./react-DjEuRMZ5.js";import"./FullWidthAlert-Dt7wKjhd.js";import"./Alert-ny1Y1xel.js";import"./useSlot-kVASu-JJ.js";import"./createSvgIcon-Bgf4v-Fl.js";import"./Close-CgY7_8Mf.js";import"./IconButton-DTeuPv0j.js";import"./Paper-DDyf3v9v.js";import"./useTheme-Df8fnDRi.js";import"./useTheme-fVMz0yaA.js";import"./Stack-DZ5v80pT.js";import"./extendSxProp-DoJ1PD9F.js";import"./getThemeProps-BBGYBewf.js";import"./Box-BrZ4r0b2.js";import"./AlertTitle-DGX0T4Jr.js";import"./Typography-CTis9lUB.js";import"./index-CBwPP-8I.js";import"./ClickAwayListener-zrX_7RVQ.js";import"./getReactElementRef-DXMeOMMR.js";import"./index-IwBO8kaU.js";import"./index-BzyuMQfT.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DGZAZIri.js";import"./Tooltip-jtcVHvVK.js";import"./index-CkYitUbw.js";import"./useControlled-CyVPDa_k.js";import"./Popper-Cnmlk4SK.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-Bmim-_eg.js";import"./QueryClientProvider-F9634mTY.js";import"./Link-CWjqwdMI.js";import"./Collapse-DzVgfvxm.js";import"./_baseUniq-GXz1Dpxd.js";import"./_Uint8Array-Dc7_fKH3.js";import"./isArray-DsBeDomq.js";import"./_getTag-D0e_6tbm.js";import"./isEqual-DKB0rujn.js";import"./merge-5gUM5Tdf.js";import"./_initCloneObject-CSLOxTWP.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DoJrpD9h.js";import"./inputBaseClasses-TDVyq3ls.js";import"./calculateFriendlyFileSize-H1i4XWH4.js";import"./CheckCircleTwoTone-Cbum7mvg.js";import"./InfoTwoTone-ZmJWrGVC.js";import"./useMutation-D9nSv9vL.js";import"./dayjs.min-D8karIbq.js";import"./chunk-AYJ5UCUI-lme-Pn3H.js";import"./cloneDeep-HL-fX3rq.js";import"./Skeleton-DumsuiTC.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C_KyVjMh.js";import"./Backdrop-Bc4lrmm2.js";import"./LinearProgress-C9RyIhCj.js";import"./index-VIAHfBTS.js";import"./index-CJfEqmpH.js";import"./index-_FQ6-hHc.js";import"./const-BP60AzNb.js";import"./index-Dr31udPj.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
