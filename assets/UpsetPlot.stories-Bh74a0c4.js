import{U as L}from"./UpsetPlot-DquAuEm_.js";import{f as u}from"./index-DWDs3xfj.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DcMXUWXO.js";import"./DefaultPropsProvider-TIkVZDCj.js";import"./createTheme-DdCDgYei.js";import"./index-BK6cjXBZ.js";import"./iframe-BnNg7yJB.js";import"./Button-CGtpPk7o.js";import"./createSimplePaletteValueFilter-gOntg_V8.js";import"./useTimeout-D6cH1pf-.js";import"./ButtonBase-BwM1D_G8.js";import"./useForkRef-CYVt1D8Q.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B-WmS9d9.js";import"./useFiles-BOdJ4aAD.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-JfPkMcg0.js";import"./OrientationBanner-CouH68_J.js";import"./index-BcZOnU6T.js";import"./spreadSx-CwcO6WA9.js";import"./react-B6KPdu5T.js";import"./FullWidthAlert-CP1QTJXS.js";import"./Alert-B7JKdAU4.js";import"./useSlot-BDueLrxA.js";import"./createSvgIcon-BdtPq1Tw.js";import"./Close-CbTjf3zS.js";import"./IconButton-BHcrqX1G.js";import"./Paper-BOOJzAP_.js";import"./useTheme-DqFLheya.js";import"./useTheme-UGDwZqNk.js";import"./Stack-CfEr4J4E.js";import"./extendSxProp-C1uB2K5e.js";import"./getThemeProps-Br_57JSj.js";import"./Box-ChHhuOMP.js";import"./AlertTitle-CLr5v-qU.js";import"./Typography-FRQIFPS_.js";import"./index-75JHCm82.js";import"./ClickAwayListener-B3OwTDLO.js";import"./getReactElementRef-T0dppYio.js";import"./index-BtJ10Ccv.js";import"./index-BCqjZQ9Q.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Baht38yj.js";import"./Tooltip-KZeFSyMF.js";import"./index-DoAu-rxh.js";import"./useControlled-BgFNFYLB.js";import"./Popper-BCpq0bpJ.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CE3P3pkB.js";import"./QueryClientProvider-tLXh-4q3.js";import"./Link-CBjYA8yP.js";import"./Collapse-DsMcEJji.js";import"./_baseUniq-BVagotzB.js";import"./_Uint8Array-DdnP8-f5.js";import"./isArray-DK_LmvOp.js";import"./_getTag-B7gw1DJ9.js";import"./isEqual-DknNpZAe.js";import"./merge-DRt0v3QZ.js";import"./_initCloneObject-B1aKMoJ4.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DxY0BkxR.js";import"./inputBaseClasses-BH_Uaz0L.js";import"./calculateFriendlyFileSize-BVV4z-OV.js";import"./CheckCircleTwoTone-B_JgC-4w.js";import"./InfoTwoTone-B41A2Lg3.js";import"./useMutation-CRT9uZDv.js";import"./dayjs.min-BsaYAIeB.js";import"./chunk-AYJ5UCUI-CSb7mSbs.js";import"./cloneDeep-C5a2C-Tz.js";import"./Skeleton-Dp3uQSvj.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BFc2EPyh.js";import"./Backdrop-CQsvqnej.js";import"./LinearProgress-JMm9K6Zr.js";import"./index-BxKbaVLX.js";import"./index-Btb4TFtI.js";import"./index-BOFQx2dD.js";import"./const-BP60AzNb.js";import"./index-wfWz_7eK.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
