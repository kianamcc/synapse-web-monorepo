import{U as L}from"./UpsetPlot-2UzxUDnj.js";import{f as u}from"./index-BHkdyaD6.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-D7voJSR_.js";import"./DefaultPropsProvider-FS1r-X2U.js";import"./createTheme-RUiFmI_W.js";import"./index-Y2_7qyTT.js";import"./iframe-CiPNy815.js";import"./Button-CnNmkRun.js";import"./createSimplePaletteValueFilter-DztsWVw_.js";import"./useTimeout-BA5R3DOd.js";import"./ButtonBase-BWviD6tE.js";import"./useForkRef-C-dtH7pD.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DWQtTghH.js";import"./useFiles-fwRLhGbr.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-B8l2OMPk.js";import"./OrientationBanner-Bby0TFFa.js";import"./index-BxuR_vo1.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dtfv9P2B.js";import"./FullWidthAlert-B-BMAEeS.js";import"./Alert-oytxK5Je.js";import"./useSlot-BV5ZvQmJ.js";import"./createSvgIcon-v4WwopeH.js";import"./Close-CEyDtX3Y.js";import"./IconButton-AczJCmvj.js";import"./Paper-B7Y-Q-HP.js";import"./useTheme-BsulMRaf.js";import"./useTheme-0IisDZIx.js";import"./Stack-ZVBUd5J3.js";import"./extendSxProp-gXFVNC4Y.js";import"./getThemeProps-plWpQ3Lq.js";import"./Box-BHsZ7Z3g.js";import"./AlertTitle-3qVJhO4S.js";import"./Typography-KbDqkm-r.js";import"./index-sXDbKBZ3.js";import"./ClickAwayListener-Bz9xyM5k.js";import"./getReactElementRef-xHZTpTG3.js";import"./index-pTUyDkO4.js";import"./index-7gQlUqDb.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-xPbtW7qM.js";import"./Tooltip-C8s8txK1.js";import"./index-PsXj0yzt.js";import"./useControlled-Qtb3VGc2.js";import"./Popper-BmbmkZCj.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BpAlhGD_.js";import"./QueryClientProvider-C5kb4OB9.js";import"./Link-CT9hiCy-.js";import"./Collapse-DlQYoAVS.js";import"./_baseUniq-BabFNIaN.js";import"./_Uint8Array-C-s0epD8.js";import"./isArray-DEOD9vUq.js";import"./_getTag-Cw3MvDSQ.js";import"./isEqual-CUm5pL-b.js";import"./merge-P1u9Z5mp.js";import"./_initCloneObject-BhXh6Epx.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CwUMTnIH.js";import"./inputBaseClasses-gUC_vYKI.js";import"./calculateFriendlyFileSize-CEXKEGgc.js";import"./CheckCircleTwoTone-Gfdrryy2.js";import"./InfoTwoTone-lxJmBppl.js";import"./useMutation-DU_qR7xN.js";import"./dayjs.min-CLS8WRHo.js";import"./chunk-AYJ5UCUI-BAH5wvuu.js";import"./cloneDeep-C8vY3ckw.js";import"./Skeleton-BWv50vL0.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-kGksxcQx.js";import"./Backdrop-CJ9HAw-l.js";import"./LinearProgress-DZFkwp8p.js";import"./index-C2HETYBq.js";import"./index-DK2m8Yz2.js";import"./index-BFmiydsR.js";import"./const-BP60AzNb.js";import"./index-BDEsoMLd.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
