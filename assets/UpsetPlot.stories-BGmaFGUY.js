import{U as L}from"./UpsetPlot-DQH935tm.js";import{f as u}from"./index-DqZEykci.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-xSdaKx7S.js";import"./DefaultPropsProvider-COP98Tys.js";import"./createTheme-Ekw01Cd6.js";import"./index-DFbrmaLj.js";import"./iframe-ClOHDTQ8.js";import"./Button-V89ycX9v.js";import"./createSimplePaletteValueFilter-b3PFnJ3S.js";import"./useTimeout-DQLWHDDq.js";import"./ButtonBase-Dv7UPqQY.js";import"./useForkRef-Di1p2pFl.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BncuO5rQ.js";import"./useFiles-DdHsz3Ne.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-C0V-yF4N.js";import"./OrientationBanner-CWZ4uhwN.js";import"./index-1EupSe8l.js";import"./spreadSx-CwcO6WA9.js";import"./react-iHEMVxNs.js";import"./FullWidthAlert-DamwWrK5.js";import"./Alert-h22u6Df8.js";import"./useSlot-CZOdYNet.js";import"./createSvgIcon-BJ9wLsbu.js";import"./Close-D-xVDQiM.js";import"./IconButton-CWJ89n76.js";import"./Paper-CBfZTx7u.js";import"./useTheme-CZyH-rHk.js";import"./useTheme-Cyy4koW7.js";import"./Stack-B4TEDxbG.js";import"./extendSxProp-BhcPt3ae.js";import"./getThemeProps-CteZ3phJ.js";import"./Box-Dk6g9q4u.js";import"./AlertTitle-D80L3F0L.js";import"./Typography-DifSQpMI.js";import"./index-ChqGY4w9.js";import"./ClickAwayListener-6OEA5dkK.js";import"./getReactElementRef-CB2a6i92.js";import"./index-BZyFJE8-.js";import"./index-BxG809-V.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C78Bid7u.js";import"./Tooltip-BXHxDATm.js";import"./index-_d4MODJg.js";import"./useControlled-i8mzpvgl.js";import"./Popper-C3O6RvEu.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-CwkAPKzS.js";import"./QueryClientProvider-DlwRL2mt.js";import"./Link-_RVTQFab.js";import"./Collapse-Bk1dswbo.js";import"./_baseUniq-DYTm6Rs2.js";import"./_Uint8Array-C9Gs_6C5.js";import"./isArray-CHZlswhx.js";import"./_getTag-Dpjn8z1N.js";import"./isEqual-C5gfjHSy.js";import"./merge-BetqcGtu.js";import"./_initCloneObject-Qs3evXab.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dtm0XdCW.js";import"./inputBaseClasses-D-YCeq8p.js";import"./calculateFriendlyFileSize-BJVx0UpD.js";import"./CheckCircleTwoTone-DJCDdOi1.js";import"./InfoTwoTone-BCf-igzE.js";import"./useMutation-CYss3V98.js";import"./dayjs.min-AWPNLm8a.js";import"./chunk-AYJ5UCUI-C0isJnrA.js";import"./cloneDeep-DFXU4Y17.js";import"./Skeleton-BVJB5DIE.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CbgeUDl_.js";import"./Backdrop-CAQvFfU_.js";import"./LinearProgress-BsxwPF24.js";import"./index-Bvyecokk.js";import"./index-CQGBrN6c.js";import"./index-BG7SjHHX.js";import"./const-BP60AzNb.js";import"./index-Bxrqv1Qq.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
