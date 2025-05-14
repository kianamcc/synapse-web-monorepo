import{U as L}from"./UpsetPlot-7Fgfcg72.js";import{f as u}from"./index--4iBOo5z.js";import"./jsx-runtime-D39jwkIv.js";import"./index-BVDw5WRY.js";import"./iframe-CLB8zn3r.js";import"./LargeButton-CA3Y-gPO.js";import"./DefaultPropsProvider-D-nVBZLz.js";import"./createTheme-DMsj8ftm.js";import"./Button-7yTQbH-Q.js";import"./ButtonBase-DJAMH7Md.js";import"./useTimeout-BUaaVD43.js";import"./TransitionGroupContext-DVa8RRVS.js";import"./useForkRef-DzNT1O1i.js";import"./useIsFocusVisible-Brdx5a5c.js";import"./useEventCallback-DlaNXhB0.js";import"./useFiles-B4K0HM1Q.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-Cy6AFt5n.js";import"./OrientationBanner-CL-ftGHP.js";import"./index-Bh97n3M_.js";import"./spreadSx-CwcO6WA9.js";import"./react-IwA7Zo0w.js";import"./FullWidthAlert-DX8boHuP.js";import"./Alert-x-J5_beW.js";import"./resolveComponentProps-ByJQNuwe.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-B3AKd2cd.js";import"./Close-DFowflBo.js";import"./IconButton-C0tYfXRh.js";import"./Paper-Bxx_Whxx.js";import"./Stack-DpwqU_wj.js";import"./getThemeProps-PSvmS7hA.js";import"./useTheme-Bec-LrS3.js";import"./Box-DMWa71Ws.js";import"./AlertTitle-CAlQiVdT.js";import"./Typography-DSGH8yyG.js";import"./useTheme-X4n7DT2y.js";import"./Grow-D_e84Gg4.js";import"./index-De4_hU5_.js";import"./utils-B5tg3FTA.js";import"./ClickAwayListener-D0xy-Edw.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DkhFPqXc.js";import"./index-rLgDW05n.js";import"./useControlled-BN-u63ln.js";import"./useId-me0PSUGK.js";import"./Popper-73XFw0vX.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-_9xZu4Of.js";import"./utils-CWEzw51o.js";import"./Link-DD0QZad6.js";import"./Collapse-DsAPfyZ4.js";import"./isNil-Cg0XEkkB.js";import"./_Uint8Array-DF57BDa6.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DY5ARhM3.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-C4lIKSWB.js";import"./_getTag-DqP87pun.js";import"./tinycolor-Begke6kS.js";import"./Fade-CjfO6n7T.js";import"./Skeleton-BrPdZBdA.js";import"./inputBaseClasses-CyKUb8GN.js";import"./calculateFriendlyFileSize-BmwiOem5.js";import"./CheckCircleTwoTone-CMCBIRlc.js";import"./InfoTwoTone-D0C9zRKP.js";import"./mutation-BEBlT8KE.js";import"./dayjs.min-BQMLYqDn.js";import"./chunk-AYJ5UCUI-DMZK6AaU.js";import"./cloneDeep-DRve-2g3.js";import"./_initCloneObject-BZ5RhWFx.js";import"./isEqual-vdG8nD8x.js";import"./merge-Dm6LhwjU.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-DShxu7av.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DwI2g95C.js";import"./Backdrop-CqVUn39e.js";import"./LinearProgress-BXcODHv7.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _t=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,_t as __namedExportsOrder,Yt as default};
