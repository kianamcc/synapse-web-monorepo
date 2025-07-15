import{U as L}from"./UpsetPlot-gZcq75iu.js";import{f as u}from"./index-ik4BQVv8.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CQtBrNuN.js";import"./DefaultPropsProvider-_SF4IA0K.js";import"./createTheme-BGpoE-_g.js";import"./index-BWbini1a.js";import"./iframe-CQhX3-4V.js";import"./Button-CNlFQ1cm.js";import"./createSimplePaletteValueFilter-Dj0pjndW.js";import"./useTimeout-D9tehEhW.js";import"./ButtonBase-BD9-LZtm.js";import"./useForkRef-DdLo760x.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DOFVJbzM.js";import"./useFiles-DD13OD5h.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-D8E2pXRt.js";import"./OrientationBanner-Cbk172sP.js";import"./index-0RxGj8d9.js";import"./spreadSx-CwcO6WA9.js";import"./react-D-1wWzLE.js";import"./FullWidthAlert-oVHdySwG.js";import"./Alert-DGzNw2pi.js";import"./useSlot-D5_d3Kng.js";import"./createSvgIcon-cikvyjs8.js";import"./Close-CYrxm3Hi.js";import"./IconButton-BschCF9p.js";import"./Paper-D1xKUhjY.js";import"./useTheme-VQVCGPuG.js";import"./useTheme-CuRmzO1P.js";import"./Stack-C0_QUH12.js";import"./extendSxProp-BGMKWZqN.js";import"./getThemeProps-Hq3d3dpb.js";import"./Box-DhtWBUtC.js";import"./AlertTitle-CTaQO2XW.js";import"./Typography-C-j8t5lS.js";import"./index-BJ3f3YFD.js";import"./ClickAwayListener-DWdaDQMT.js";import"./getReactElementRef-DPBoVoB5.js";import"./index-Tk2fZLdw.js";import"./index-BohNvSE0.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-COSiOQO7.js";import"./Tooltip-C3ejRJHT.js";import"./index-amPq0fRs.js";import"./useControlled-Ci67JjzL.js";import"./Popper-BijX7XUI.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-D3nrYCdi.js";import"./QueryClientProvider-ijoNdgTf.js";import"./Link-BuZX_Nti.js";import"./Collapse-CuCPx9er.js";import"./_baseUniq-BrihWGMs.js";import"./_Uint8Array-CpUN2OqJ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D7DswbeZ.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CItyCHjk.js";import"./isEqual-B8ZwwDCw.js";import"./merge-CfgCk-tN.js";import"./_initCloneObject-NTkMCTZ-.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BTTyizlp.js";import"./inputBaseClasses-Ba-VNdbH.js";import"./calculateFriendlyFileSize-Dc4GLmoz.js";import"./CheckCircleTwoTone-CvxMkv6u.js";import"./InfoTwoTone-CwcyYTLC.js";import"./useMutation-DM62-zhy.js";import"./dayjs.min-CeZ2v38X.js";import"./chunk-AYJ5UCUI-C7weNC_d.js";import"./cloneDeep-C3sBntfv.js";import"./Skeleton-BbL9468k.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Bynu8j0U.js";import"./Backdrop-BgHxDJy2.js";import"./LinearProgress-CUirqfZ_.js";import"./index-Vtx0kY_Y.js";import"./index-DwueGGzX.js";import"./index-DV1EyvQi.js";import"./const-BP60AzNb.js";import"./index-1Aghax-3.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
