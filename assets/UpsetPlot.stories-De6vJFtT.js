import{U as L}from"./UpsetPlot-BFpMCs90.js";import{f as u}from"./index-C6uO7nb_.js";import"./jsx-runtime-CS37V5lN.js";import"./index-DdzRxeSk.js";import"./iframe-BOZSKX5l.js";import"./LargeButton-BZ6hMeQ7.js";import"./DefaultPropsProvider-ChG9Xmy4.js";import"./createTheme-CR9THI1O.js";import"./Button-DTd4ve-o.js";import"./ButtonBase-DcwIhz1L.js";import"./useTimeout-cXhUpJPS.js";import"./TransitionGroupContext-BI1G8zvG.js";import"./useForkRef-CtSJcFnl.js";import"./useIsFocusVisible-CEj16bKV.js";import"./useEventCallback-DbhNrUuN.js";import"./useFiles-nCEVGU3J.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-DbAN7IPq.js";import"./OrientationBanner-BGIXc6-x.js";import"./index-BlpDHKi_.js";import"./spreadSx-CwcO6WA9.js";import"./react-3-f0XNzf.js";import"./FullWidthAlert-B3fYGMzC.js";import"./Alert-BuinrxqA.js";import"./resolveComponentProps-fseXx763.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-Cy3M0oRn.js";import"./Close-B9pOG7I_.js";import"./IconButton-Ba5y5_K0.js";import"./Paper-BfwhD1b8.js";import"./Stack-D4qOJMCx.js";import"./getThemeProps-DroptayW.js";import"./useTheme-DkNM2JnN.js";import"./Box-BYDiuRWq.js";import"./AlertTitle-9xKonIV6.js";import"./Typography-B0ESBYIA.js";import"./useTheme-B6Rf6ZZj.js";import"./Grow-BJ--7Xr6.js";import"./index-Cy4mvxM5.js";import"./index-Cygla1YP.js";import"./utils-BPYN7cSU.js";import"./ClickAwayListener-B7k27fd4.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CEz73Juq.js";import"./index-B0u4QlSt.js";import"./useControlled-f1W5YVsK.js";import"./useId-RCcAWbNZ.js";import"./Popper-DyWIoeAe.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-NR50Arvx.js";import"./utils-CR7CrQFQ.js";import"./Link-B7xkTvBp.js";import"./Collapse-BT_qVaSh.js";import"./isNil-BHGvz6YE.js";import"./_Uint8Array-DzUf22Yk.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-SlbhEa29.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DDp_qU6j.js";import"./_getTag-_uZbXcVO.js";import"./tinycolor-Begke6kS.js";import"./Fade-BXSnEVoc.js";import"./Skeleton-BOisPi-e.js";import"./inputBaseClasses-BORHXMtI.js";import"./calculateFriendlyFileSize-BpxDealy.js";import"./CheckCircleTwoTone-ERl8wijJ.js";import"./InfoTwoTone-DdRKTxQh.js";import"./useMutation-BHf6hDSW.js";import"./isEqual-Lg1cd88a.js";import"./dayjs.min-CZjcVCTg.js";import"./chunk-AYJ5UCUI-DwIU-kyH.js";import"./cloneDeep-DF3ifZuQ.js";import"./_initCloneObject-BgugVHgc.js";import"./merge-Dxt2MiEc.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DMQpCQSh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D67F4thl.js";import"./Backdrop-Ct6KQWNR.js";import"./LinearProgress-BQwYEpJS.js";import"./index-B4rhgL4h.js";import"./index-C17s3U73.js";import"./index-CRePHjZQ.js";import"./const-Doag8klc.js";import"./index-B2ezTTLZ.js";const Xt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Zt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Zt as __namedExportsOrder,Xt as default};
