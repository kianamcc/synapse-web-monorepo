import{U as L}from"./UpsetPlot-zzgBsDjY.js";import{f as u}from"./index-DLIoOl49.js";import"./jsx-runtime-l2JOfHlU.js";import"./index-DhsIdlB6.js";import"./iframe-CLh-v2EG.js";import"./LargeButton-CJOV49Q_.js";import"./DefaultPropsProvider-Bq1HBsor.js";import"./createTheme--Vxq6Yu5.js";import"./Button-DlRALsF5.js";import"./createSimplePaletteValueFilter-B9d18wK8.js";import"./useTimeout-Qi8fPrDU.js";import"./ButtonBase-D0mIbvCb.js";import"./useForkRef-C9baLs8u.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BwR0mYGb.js";import"./useFiles-DFnQpT1q.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-4R9q584S.js";import"./OrientationBanner-qYFIW9wJ.js";import"./index-gnT9hqzc.js";import"./spreadSx-CwcO6WA9.js";import"./react-BIZ7SaDH.js";import"./FullWidthAlert-jwNVwZpe.js";import"./Alert-DSySOE5p.js";import"./useSlot-rxoZph7w.js";import"./createSvgIcon-BQZtTy5l.js";import"./Close-C6BH8hlH.js";import"./IconButton-DgFPdk3S.js";import"./Paper-BuJm1n8g.js";import"./useTheme-DZn9zuh6.js";import"./useTheme-Jy3glTIZ.js";import"./Stack-CafeU9YC.js";import"./extendSxProp-CimpErXC.js";import"./getThemeProps-Dg3p2Zs5.js";import"./Box-BXrzqanv.js";import"./AlertTitle-CahypFz0.js";import"./Typography-DTRBBvQY.js";import"./index-CDwEJlle.js";import"./ClickAwayListener-C9mcQmon.js";import"./getReactElementRef-D07nHqbQ.js";import"./index-DwHlnEf2.js";import"./index-B1hrXRSl.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DAU1H3gG.js";import"./Tooltip-X5ttJ9Im.js";import"./index-BOumIDmZ.js";import"./useControlled-Dc62HDZy.js";import"./Popper-dGtXYx0v.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ChvZ1ijm.js";import"./useQuery-Dqe4jpFg.js";import"./utils-D4piN_5i.js";import"./Link-ygoEIrSh.js";import"./Collapse-D0BvxTCg.js";import"./_baseUniq-DmSDb__U.js";import"./_Uint8Array-DExNEIbM.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Dg6x6w1J.js";import"./isArray-Dxzbedgu.js";import"./_getTag-D3zFbHW_.js";import"./isEqual-CpgaxgOf.js";import"./merge-BOEdkMoc.js";import"./_initCloneObject-Dz-ofz33.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BUu47Rql.js";import"./inputBaseClasses-Bj4buKwO.js";import"./calculateFriendlyFileSize-UKybAAlU.js";import"./CheckCircleTwoTone-Ck-Ybsjm.js";import"./InfoTwoTone-DBPoDFM7.js";import"./useMutation-DXPF_ukZ.js";import"./dayjs.min-DX1PUKZB.js";import"./chunk-AYJ5UCUI-DKouVPyg.js";import"./cloneDeep-C_y9zhUG.js";import"./Skeleton-DC5uKxFK.js";import"./SqlFunctions-fxqtrCrh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CgWugDzS.js";import"./Backdrop-D8gzglQC.js";import"./LinearProgress-axBAS61x.js";import"./index-OEsPKc7h.js";import"./index-CzXTJWM3.js";import"./index-BjWMkA0h.js";import"./const-Doag8klc.js";import"./index-De-lnM6v.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
