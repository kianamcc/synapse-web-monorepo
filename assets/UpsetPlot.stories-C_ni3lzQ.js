import{U as L}from"./UpsetPlot-CngGWFoV.js";import{f as u}from"./index-CrwKOL1B.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CaRbczZc.js";import"./DefaultPropsProvider-Bp935OVr.js";import"./createTheme-C9QfBZB0.js";import"./index-A1tc7t_S.js";import"./iframe-BEGfRuJB.js";import"./Button-BvTAjK4M.js";import"./createSimplePaletteValueFilter-nAgvpgra.js";import"./useTimeout-CHX4ymYs.js";import"./ButtonBase-CiPk1y-x.js";import"./useForkRef-DKMFgSSO.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ClMIew1C.js";import"./useFiles-DdchzG1b.js";import"./VerificationSubmission-CeTJ0zsJ.js";import"./SynapseConstants-DMVoXWgm.js";import"./OrientationBanner-DhQWO8TI.js";import"./index-C04hlJ56.js";import"./spreadSx-CwcO6WA9.js";import"./react-ijaK4xjo.js";import"./FullWidthAlert-CKqzWWWM.js";import"./Alert-DOmaI0ep.js";import"./useSlot-CdLEriE5.js";import"./createSvgIcon-CyNw1tPa.js";import"./Close-CLEWuh7_.js";import"./IconButton-D2HqYlCj.js";import"./Paper-CGHoN7LX.js";import"./useTheme-D9u2oh3Q.js";import"./useTheme-BgGj2ygo.js";import"./Stack-D-sjrR2u.js";import"./extendSxProp-BoReKpGK.js";import"./getThemeProps-CbvsNq-J.js";import"./Box-Bhf3FGw6.js";import"./AlertTitle-D5sQ0oSL.js";import"./Typography-Ck1NaRDY.js";import"./index-AmHoeYPv.js";import"./ClickAwayListener-C1YqEdP3.js";import"./getReactElementRef-CCLzASj8.js";import"./index-Ck4Elmxo.js";import"./index-BH77Eq3n.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BfuUnZ7i.js";import"./Tooltip-S4uZ93WX.js";import"./index-CvgZCu6o.js";import"./useControlled-K6Jx4gPQ.js";import"./Popper-ecVHViea.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Cb5gkxAY.js";import"./useQuery-BJj1G9eV.js";import"./QueryClientProvider-Bbpn0-hF.js";import"./Link-DM0BSm-m.js";import"./Collapse-DoZt5e3K.js";import"./_baseUniq-L5OIGEEM.js";import"./_Uint8Array-Df4m7FrZ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BbVyB0IY.js";import"./isArray-Dxzbedgu.js";import"./_getTag-D5Jjac57.js";import"./isEqual-BT6yduPW.js";import"./merge-DlL_cr-S.js";import"./_initCloneObject-BFap5Wc1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DOA4wU7Q.js";import"./inputBaseClasses-8zPkzvyT.js";import"./calculateFriendlyFileSize-CRHiAo3U.js";import"./CheckCircleTwoTone-BV_-JSye.js";import"./InfoTwoTone-BXCkprAO.js";import"./useMutation-CAq19jMS.js";import"./dayjs.min-DbJ-dTTl.js";import"./chunk-AYJ5UCUI-RSbZRrlj.js";import"./cloneDeep-BN2G2zqn.js";import"./Skeleton-C1DHCfUB.js";import"./SqlFunctions-CBeb21zR.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CsG1n38-.js";import"./Backdrop-Dj2PRhVo.js";import"./LinearProgress-Dr4Mk69t.js";import"./index-6zz6ZN9V.js";import"./index-DiKcYF1X.js";import"./index-DxAWJ1qm.js";import"./const-BP60AzNb.js";import"./index-nKr6QfuC.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
