import{U as L}from"./UpsetPlot-Bip0ihfr.js";import{f as u}from"./index-_q_u8Bqo.js";import"./jsx-runtime-mncHC85H.js";import"./index-CsTX3kP9.js";import"./iframe-DLSVzvXo.js";import"./LargeButton-RgrbaxmA.js";import"./DefaultPropsProvider-ieyM3ydX.js";import"./createTheme-8oXdyOSc.js";import"./Button-e17qQd72.js";import"./ButtonBase-ByiL9H0e.js";import"./useTimeout-BtJRCvqS.js";import"./TransitionGroupContext-C1ALFrRo.js";import"./useForkRef-MEzgZgYk.js";import"./useIsFocusVisible-9CtOeZhj.js";import"./useEventCallback-CdglzKk7.js";import"./useFiles-DqScRbt4.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-D08trsQl.js";import"./OrientationBanner-CPs8NG4k.js";import"./index-BWDtDZnU.js";import"./spreadSx-CwcO6WA9.js";import"./react-C7TYIDWj.js";import"./FullWidthAlert-DYV97sSa.js";import"./Alert-B2_TAMcq.js";import"./resolveComponentProps-BDiE_oRR.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CeFLfWhD.js";import"./Close-kFL90S5e.js";import"./IconButton-BM4Jn5am.js";import"./Paper-C5HeejQc.js";import"./Stack-D6CPYZyT.js";import"./getThemeProps-BJDZbo09.js";import"./useTheme-B2D66EuQ.js";import"./Box-Bl_FCMA-.js";import"./AlertTitle-CgJ0X8Ke.js";import"./Typography-CEXejR91.js";import"./useTheme-ppVJRK4K.js";import"./Grow-CnvDqgCY.js";import"./index-BEdEs92y.js";import"./utils-rI1xhfgE.js";import"./ClickAwayListener-PLDICXE-.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BmrzSuCJ.js";import"./index-DBN6CKfD.js";import"./useControlled-LQMryYpP.js";import"./useId-DB4ytVRQ.js";import"./Popper-DP4Hazya.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-BSxb1W-L.js";import"./utils-DGnta-Dt.js";import"./Link-nyIHYmpZ.js";import"./Collapse-Dh060KKb.js";import"./isNil-DJjzYbv0.js";import"./_Uint8Array-CQNSJw1K.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CEcF5soC.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DzelOY-I.js";import"./_getTag-Cu4vVg67.js";import"./tinycolor-Begke6kS.js";import"./Fade-0dVaFb0e.js";import"./Skeleton-DQA5MqtH.js";import"./inputBaseClasses-DhdwnRrM.js";import"./calculateFriendlyFileSize-O7lp0Tvc.js";import"./CheckCircleTwoTone-czsrdd7S.js";import"./InfoTwoTone-TgkinIc6.js";import"./mutation-gLD3au5E.js";import"./dayjs.min-Xq55AiAZ.js";import"./chunk-AYJ5UCUI-DSl5zc7X.js";import"./cloneDeep-DZIutRQE.js";import"./_initCloneObject-5GhKEBQ1.js";import"./isEqual-CkUvDbsf.js";import"./merge-CWQX_ITa.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./react-sizeme-CSO9wgmN.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cs7pAJly.js";import"./Backdrop-Cn5-itpm.js";import"./LinearProgress-L1G9C4sp.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
